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
          <button onClick={() => setSettingsOpen(!settingsOpen)} className="">
            <img
              src={user?.photoURL || ""}
              width="40"
              height="30"
              alt="profile avatar"
              className="rounded-md"
            />
          </button>
        </>
      ) : (
        <button onClick={() => setSettingsOpen(!settingsOpen)} className="">
          <span className="text-gray-700 pl-3 md:pr-4 md:pl-4">Account</span>
        </button>
      )}
      {settingsOpen && (
        <ul className="flex flex-col settings">
          {user ? (
            <button
              onClick={logUserOut}
              className="bg-violet-200 col-auto p-1 hover:text-gray-800"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-violet-200 self-center p-1 hover:text-gray-800"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};
