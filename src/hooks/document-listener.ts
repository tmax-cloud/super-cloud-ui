import * as React from 'react';

export const KEYBOARD_SHORTCUTS = Object.freeze({
  focusFilterInput: '/',
  blurFilterInput: 'Escape',
});

export enum KeyEventModes {
  HIDE = 'HIDE',
  FOCUS = 'FOCUS',
}

const textInputKeyHandler = {
  [KEYBOARD_SHORTCUTS.blurFilterInput]: KeyEventModes.HIDE,
  [KEYBOARD_SHORTCUTS.focusFilterInput]: KeyEventModes.FOCUS,
};

export const useDocumentListener = <T extends HTMLElement>(keyEventMap: KeyEventMap = textInputKeyHandler) => {
  const ref = React.useRef<T>(null);

  const handleKeyEvents = React.useCallback(
    (e: KeyboardEvent) => {
      const { nodeName } = e.target as T;
      switch (keyEventMap[e.key]) {
        case KeyEventModes.HIDE:
          ref.current?.blur();
          break;
        case KeyEventModes.FOCUS:
          if (
            document.activeElement !== ref.current &&
            // Don't steal focus if the user types the focus shortcut in another text input.
            nodeName !== 'INPUT' &&
            nodeName !== 'TEXTAREA'
          ) {
            ref.current?.focus();
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    },
    [keyEventMap],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyEvents, true);
    return () => {
      document.removeEventListener('keydown', handleKeyEvents, true);
    };
  }, [handleKeyEvents]);

  return { ref };
};

export type KeyEventMap = {
  [key: string]: KeyEventModes;
};
