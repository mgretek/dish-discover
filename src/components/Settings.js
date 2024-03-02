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
          <svg
            className="w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="bg-violet-700"
          >
            <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
          </svg>
        </button>
      )}
      {settingsOpen && (
        <ul className="flex flex-col settings">
          {user ? (
            <button
              onClick={logUserOut}
              className="bg-grey col-auto p-1 hover:text-black"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-grey self-center p-1 hover:text-slate-400"
            >
              Login
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};
