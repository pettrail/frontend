import React from 'react';
import { Link } from 'react-router-dom';

const PrevStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  left: '8%',
  transform: 'translate(-50%, 0%)',
  display: 'flex',
  cursor: 'pointer',
  paddingBottom: '5px',
};

interface PrevBtnProps {
  isApp?: boolean;
}

const PrevBtn: React.FC<PrevBtnProps> = () => {
  return (
    <Link
      to="/"
      style={PrevStyle}
    >
      <svg
        width="35"
        height="35"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default PrevBtn;
