import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div className="flex flex-col m-2">
      <p className="flex self-center">Sign in with Google to continue</p>
      <button
        className="flex self-center border-sky-700 border-2 m-2"
        onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
