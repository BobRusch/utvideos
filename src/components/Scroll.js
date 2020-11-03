import React, { useEffect, useRef } from 'react';

const Scroll = ({ resetWatch, children }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollTop = 0;
  }, [resetWatch]);

  return (
    <div ref={ref} style={{ overflowY: 'scroll', border: '1px solid black', height: '550px' }}>
      {children}
    </div>
  );
};

export default Scroll;