import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface RouterContextValue {
  pathname: string;
  search: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  pathname: '/',
  search: '',
  navigate: () => {},
});

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const cleaned = path.replace(/\/+$/, '');
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState(() => ({
    pathname: normalizePath(window.location.pathname),
    search: window.location.search,
  }));

  useEffect(() => {
    const handlePopState = () => {
      setLocation({
        pathname: normalizePath(window.location.pathname),
        search: window.location.search,
      });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    const nextPathname = normalizePath(url.pathname);
    const nextSearch = url.search;
    const currentFull = `${location.pathname}${location.search}`;
    const nextFull = `${nextPathname}${nextSearch}`;

    if (currentFull !== nextFull) {
      window.history.pushState({}, '', `${nextPathname}${nextSearch}${url.hash}`);
      setLocation({ pathname: nextPathname, search: nextSearch });
    }

    if (url.hash) {
      const target = document.getElementById(url.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search]);

  return (
    <RouterContext.Provider value={{ pathname: location.pathname, search: location.search, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      rest.target === '_blank'
    ) {
      return;
    }
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
