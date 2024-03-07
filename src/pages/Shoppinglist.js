import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export const Shoppinglist = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="px-6 sm:px-16 mt-8 sm:mt-16 mx-6 sm:mx-auto max-w-[620px] min-h-full border-2 border-violet-200 rounded-md">
      {user ? (
        <h1>Shopping list</h1>
      ) : (
        <div>
          <h1 className="mt-14 text-center text-3xl sm:text-5xl font-semibold text-gray-800 mb-10">
            Please log in to use the shopping list
          </h1>
          <p className="text-md sm:text-lg text-center mb-16 text-gray-700">
            Say hello to your personal shopping assistant, exclusive to our
            logged-in users! Discover recipes, pick your favorites, and
            effortlessly add ingredients to your shopping list. It's like having
            a virtual grocery sidekick – making your shopping experience a
            breeze. Stay organized, never miss an item, and enjoy stress-free
            cooking prep!{" "}
          </p>
        </div>
      )}
    </div>
  );
};
