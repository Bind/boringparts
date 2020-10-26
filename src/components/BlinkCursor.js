import React, { useState, useEffect } from "react";

export function BlinkCursor() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((v) => {
        return !v;
      });
    }, 500);
    return () => clearInterval(id);
  }, []);

  return <span>{visible ? "▋" : ""} </span>;
}
