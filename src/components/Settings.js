import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Settings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const menuRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [user] = useAuthState(auth);

  const logUserOut = async () => {
    await signOut(auth);
    setSettingsOpen(false);
  };

  return (
    <div className="flex flex-col" ref={menuRef}>
      {user ? (
        <>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className="relative"
          >
            {user.photoURL ? (
              <img
                src={user?.photoURL}
                alt="profile"
                className="block rounded-md size-10"
              />
            ) : (
              <span className="flex items-center justify-center rounded-md size-10 text-white uppercase bg-violet-400">
                {user.email.slice(0, 2)}
              </span>
            )}
          </button>
        </>
      ) : (
        <button onClick={() => setSettingsOpen(!settingsOpen)}>
          <span className="flex flex-start text-violet-400 hover:text-violet-500 md:pr-4 md:pl-4">
            <Link to="/login">Account</Link>
          </span>
        </button>
      )}
      {settingsOpen && (
        <ul className="flex">
          {user && (
            <button
              onClick={logUserOut}
              className="absolute md:right-4 py-1 px-3 bg-white rounded text-sm mt-3 md:mt-3.5 border-2 md:border-violet-200 border-pink-50"
            >
              <div className="text-gray-500 hover:text-gray-600">Logout</div>
            </button>
          )}
        </ul>
      )}
    </div>
  );
};
