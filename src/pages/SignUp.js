import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch {
        setError("Something went wrong. Check your info and try again.");
      }
    } else {
      setError("Password dont match, please try again!");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <form className="mt-3 py-3">
          {"" !== error && <div className="text-red-600">{error}</div>}
          <div className="flex justify-center">
            <h2 className="font-bold">
              Sign up here with an email and a password!
            </h2>
          </div>
          <div className="p-3 m-3 border border-gray-500">
            <input
              className=""
              type="email"
              placeholder="example.email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="p-3 m-3 border border-gray-500">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="p-3 m-3 border border-gray-500">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}></input>
          </div>
          <div className="flex justify-center">
            <button
              className="flex self-center bg-gradient-to-r from-rose-200 to-violet-300 rounded m-3 px-5 py-2 drop-shadow-md	text-gray-700 font-semibold hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-200 hover:text-gray-600"
              type="submit"
              onClick={(e) => signupWithUsernameAndPassword(e)}>
              Signup
            </button>
          </div>
          <div className="flex mt-3 justify-center">
            <span className="text-center">
              Go back to login?{" "}
              <Link className="text-blue-500" to={"/"}>
                Click here.
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
