export const CartIcon = ({ onClick, fill = "none" }) => {
  return (
    <div className="flex items-center gap-x-2 italic">
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        width={26}
        height={26}
      >
        <circle
          cx="176"
          cy="416"
          r="16"
          fill={fill}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="400"
          cy="416"
          r="16"
          fill={fill}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          fill={fill}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M48 80h64l48 272h256"
        />
        <path
          d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
          fill={fill}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
};
