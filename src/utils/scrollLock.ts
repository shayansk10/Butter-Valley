type SavedStyles = {
  htmlOverflow: string;
  htmlOverflowX: string;
  htmlOverscroll: string;
  htmlScrollBehavior: string;
  bodyOverflow: string;
  bodyOverflowX: string;
  bodyPosition: string;
  bodyTop: string;
  bodyLeft: string;
  bodyRight: string;
  bodyWidth: string;
  bodyTouchAction: string;
  bodyOverscroll: string;
};

let lockCount = 0;
let savedScrollY = 0;
let savedStyles: SavedStyles | null = null;
let onAfterUnlockCallbacks: Array<() => void> = [];

export type ScrollLockReleaseOptions = {
  resetToTop?: boolean;
  onUnlocked?: () => void;
};

export function acquireScrollLock(options?: {
  canScrollTarget?: (target: Node | null) => HTMLElement | null;
}): (releaseOptions?: ScrollLockReleaseOptions) => void {
  const html = document.documentElement;
  const body = document.body;

  if (lockCount === 0) {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    savedStyles = {
      htmlOverflow: html.style.overflow,
      htmlOverflowX: html.style.overflowX,
      htmlOverscroll: html.style.overscrollBehavior,
      htmlScrollBehavior: html.style.scrollBehavior,
      bodyOverflow: body.style.overflow,
      bodyOverflowX: body.style.overflowX,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      bodyTouchAction: body.style.touchAction,
      bodyOverscroll: body.style.overscrollBehavior,
    };

    body.dataset.scrollLocked = 'true';
    html.style.overflow = 'hidden';
    html.style.overflowX = 'hidden';
    html.style.overscrollBehavior = 'none';

    body.style.overflow = 'hidden';
    body.style.overflowX = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${savedScrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.touchAction = 'none';
    body.style.overscrollBehavior = 'none';
  }

  lockCount += 1;

  let touchStartY = 0;

  const onTouchStart = (e: TouchEvent) => {
    touchStartY = e.touches[0]?.clientY ?? 0;
  };

  const onTouchMove = (e: TouchEvent) => {
    const target = e.target as Node | null;
    const container = options?.canScrollTarget?.(target) ?? null;

    if (!container || container.scrollHeight <= container.clientHeight) {
      if (e.cancelable) e.preventDefault();
      return;
    }

    const currentY = e.touches[0]?.clientY ?? touchStartY;
    const deltaY = currentY - touchStartY;
    touchStartY = currentY;

    const atTop = container.scrollTop <= 0 && deltaY > 0;
    const atBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight - 1 && deltaY < 0;

    if (atTop || atBottom) {
      if (e.cancelable) e.preventDefault();
    }
  };

  const onWheel = (e: WheelEvent) => {
    const target = e.target as Node | null;
    const container = options?.canScrollTarget?.(target) ?? null;

    if (!container || container.scrollHeight <= container.clientHeight) {
      if (e.cancelable) e.preventDefault();
      return;
    }

    const atTop = container.scrollTop <= 0 && e.deltaY < 0;
    const atBottom =
      container.scrollTop + container.clientHeight >= container.scrollHeight - 1 && e.deltaY > 0;

    if (atTop || atBottom) {
      if (e.cancelable) e.preventDefault();
    }
  };

  document.addEventListener('touchstart', onTouchStart, { passive: true });
  document.addEventListener('touchmove', onTouchMove, { passive: false });
  document.addEventListener('wheel', onWheel, { passive: false });

  let released = false;

  return (releaseOptions?: { resetToTop?: boolean; onUnlocked?: () => void }) => {
    if (released) return;
    released = true;

    document.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('wheel', onWheel);

    if (releaseOptions?.resetToTop) {
      savedScrollY = 0;
    }
    if (releaseOptions?.onUnlocked) {
      onAfterUnlockCallbacks.push(releaseOptions.onUnlocked);
    }

    lockCount = Math.max(0, lockCount - 1);

    if (lockCount === 0 && savedStyles) {
      const prev = savedStyles;
      savedStyles = null;
      delete body.dataset.scrollLocked;

      html.style.overflow = prev.htmlOverflow;
      html.style.overflowX = prev.htmlOverflowX;
      html.style.overscrollBehavior = prev.htmlOverscroll;

      body.style.overflow = prev.bodyOverflow;
      body.style.overflowX = prev.bodyOverflowX;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.left = prev.bodyLeft;
      body.style.right = prev.bodyRight;
      body.style.width = prev.bodyWidth;
      body.style.touchAction = prev.bodyTouchAction;
      body.style.overscrollBehavior = prev.bodyOverscroll;

      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, savedScrollY);
      html.style.scrollBehavior = prev.htmlScrollBehavior;

      const callbacks = onAfterUnlockCallbacks;
      onAfterUnlockCallbacks = [];
      callbacks.forEach((cb) => cb());
    }
  };
}

export function isScrollLocked(): boolean {
  return lockCount > 0;
}
