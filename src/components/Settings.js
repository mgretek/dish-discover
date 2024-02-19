import { useState } from "react";

export const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button onClick={() => setSettingsOpen(!settingsOpen)} className="">
        Settings
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
