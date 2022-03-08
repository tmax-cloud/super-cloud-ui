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
  const [visible, setVisible] = React.useState(true);
  const ref = React.useRef<T>(null);

  const handleEvent = (e: MouseEvent) => {
    if (!ref?.current?.contains(e.target as T)) {
      setVisible(false);
    }
  };

  const handleKeyEvents = (e: KeyboardEvent) => {
    const { nodeName } = e.target as T;
    switch (keyEventMap[e.key]) {
      case KeyEventModes.HIDE:
        setVisible(false);
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
  };

  React.useEffect(() => {
    document.addEventListener('click', handleEvent, true);
    document.addEventListener('keydown', handleKeyEvents, true);
    return () => {
      document.removeEventListener('click', handleEvent, true);
      document.removeEventListener('keydown', handleKeyEvents, true);
    };
  });

  return { visible, setVisible, ref };
};

export type KeyEventMap = {
  [key: string]: KeyEventModes;
};
