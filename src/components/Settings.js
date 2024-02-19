import { useState } from "react";

export const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex h-full justify-center hover:bg-[#777] m-0 px-1">
      <button
        onClick={() => setSettingsOpen(!settingsOpen)}
        className="p-0 m-0 ">
        Settings
      </button>
      {settingsOpen && (
        <div>
          <button className="bg-grey col-auto">Log out</button>
        </div>
      )}
    </div>
  );
};
