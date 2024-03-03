import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

export const Shoppinglist = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-orange-100 md:px-20 xl:px-60 min-h-full">
      {user ? (
        <h1>Shopping list</h1>
      ) : (
        <div>
          <h1 className="text-5xl text-left ">
            Please log in to use the shopping list!
          </h1>
          <p className="mt-6">
            Over here you can add chosen ingriedients from your found recipes,
            to make yourself a shopping list, to make your life just a little
            bit easier. No more manually copying stuff you need to buy.
            Everything is just a mouse click away!{" "}
          </p>
        </div>
      )}
    </div>
  );
};
