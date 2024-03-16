export const FilterButton = ({
  globalFilter,
  filterName,
  onClick,
  buttonTitle,
}) => {
  const capitalized =
    buttonTitle.charAt(0).toUpperCase() + buttonTitle.slice(1);

  return (
    <button
      className={`btn ${
        globalFilter === filterName
          ? "border-2 rounded-xl border-violet-400 text-violet-400 font-semibold"
          : "text-gray-500"
      }`}
      onClick={onClick}
    >
      <span className="px-2 py-1">{capitalized}</span>
    </button>
  );
};
