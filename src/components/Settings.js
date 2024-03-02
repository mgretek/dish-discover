import { useState } from "react";

export const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button onClick={() => setSettingsOpen(!settingsOpen)} className="">
        <svg
          className="w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="bg-violet-700"
        >
          <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      </button>
      {settingsOpen && (
        <ul className="flex flex-col settings">
          <button className="bg-grey col-auto p-1 hover:text-black">
            Logout
          </button>
          <button className="bg-grey col-auto p-1 hover:text-slate-400">
            Log in
          </button>
        </ul>
      )}
    </div>
  );
};
