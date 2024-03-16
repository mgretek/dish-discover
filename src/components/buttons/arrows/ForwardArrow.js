export const ForwardArrow = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon cursor-pointer"
      viewBox="0 0 512 512"
      width={24}
      height={24}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M184 112l144 144-144 144"
      />
    </svg>
  );
};
