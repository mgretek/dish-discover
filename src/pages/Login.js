import { auth, provider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch {
      setNotice("Wrong username or password!");
    }
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div className="flex flex-col border border-violet-200 rounded-md mt-14 p-6 mx-8 sm:mx-14 md:max-w-xl md:mx-auto">
      <form className="flex flex-col">
        <div className="w-12 p-3 mb-3">
          <svg
            className="text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
        </div>
        {"" !== notice && (
          <div className="" role="alert">
            {notice}
          </div>
        )}
        <div className="p-3 m-3 border border-gray-500">
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="p-3 m-3 border border-gray-500">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button
          type="submit"
          className="flex self-center bg-gradient-to-r from-rose-200 to-violet-300 rounded m-3 px-5 py-2 drop-shadow-md	text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-200 hover:text-gray-600"
          onClick={(e) => loginWithUsernameAndPassword(e)}>
          Login with email and password
        </button>
      </form>
      <button
        className="flex self-center bg-gradient-to-r from-rose-200 to-violet-300 rounded m-3 px-5 py-2 drop-shadow-md	text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-200 hover:text-gray-600"
        onClick={signInWithGoogle}>
        Sign in with Google Account
      </button>
      <div className="mt-3 text-center">
        <span>
          Need to sign up for an account
          <Link className="text-blue-500" to={"/signup"}>
            ? Click here.
          </Link>
        </span>
      </div>
    </div>
  );
};
