import * as React from 'react';

export const useTooltip = <T extends HTMLElement>(target?: string) => {
  const ref = React.useRef(null);
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    if (ref.current) {
      const element = target ? (ref.current[target] as T) : (ref.current as T);
      setShowTooltip(element.offsetWidth < element.scrollWidth);
    }
  }, [ref, target]);

  return { ref, showTooltip };
};
