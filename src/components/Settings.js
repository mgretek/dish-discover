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
            />
          </button>
        </>
      ) : (
        <button onClick={() => setSettingsOpen(!settingsOpen)} className="">
          Settings
        </button>
      )}
      {settingsOpen && (
        <ul className="flex flex-col settings">
          {user ? (
            <button
              onClick={logUserOut}
              className="bg-grey col-auto p-1 hover:text-black">
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-grey self-center p-1 hover:text-slate-400">
              Login
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};
