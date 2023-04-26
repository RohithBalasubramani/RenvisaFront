import React, { useState, useEffect } from "react";

const InfiniteMove = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position) => position + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const style = {
    transform: `translateX(${position % window.innerWidth}px)`,
    overflowx:'hidden'
  };

  return <div style={style}>This element will move infinitely</div>;
};

export default InfiniteMove;
