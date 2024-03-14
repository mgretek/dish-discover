import { AddIcon } from "./icons/AddIcon";

export const AddButton = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <div className="self-center">
        <AddIcon className="text-gray-700 w-4" />
      </div>
    </button>
  );
};
