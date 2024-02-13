import { useState, useEffect, useRef, ReactNode } from "react";

type CollapseProps = {
  isOpened?: boolean;
  children: ReactNode;
};

export function Collapse({ isOpened, children }: CollapseProps) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpened) {
      setHeight(ref.current?.scrollHeight || 0);
    } else {
      setHeight(0);
    }
  }, [isOpened]);

  return (
    <div
      ref={ref}
      style={{ overflow: "hidden", transition: "height 0.3s", height }}
    >
      {children}
    </div>
  );
}