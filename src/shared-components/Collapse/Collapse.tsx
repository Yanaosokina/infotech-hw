import React, { useState, useEffect, useRef } from "react";

type CollapseProps = {
  isOpened?: boolean;
  children: React.ReactNode;
};

export function Collapse({ isOpened, children }: CollapseProps) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current?.scrollHeight);
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