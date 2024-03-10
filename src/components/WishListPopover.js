import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HeartIcon } from "./icons/HeartIcon";
import { addToWishlist } from "../components/wishlist/wishlists";

const Wishlists = [
  {
    name: "List 1",
    description: "Measure actions your users take",
    href: "##",
  },
  {
    name: "List 2",
    description: "Create your own targeted content",
    href: "##",
  },
  {
    name: "List 3",
    description: "Keep track of your growth",
    href: "##",
  },
];

export const WishListPopover = ({ recipe }) => {
  return (
    <div className="">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button className="btn text-gray-600 rounded-md">
              {" "}
              <HeartIcon />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-5 bg-white px-2 pt-2 pb-4 lg:grid-cols-2">
                    <div className="bg-gray-50 p-1.5">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <button
                          onClick={() => addToWishlist(2, recipe)}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm font-medium text-gray-900">
                            Create a new list
                          </span>
                          <span className="flex justify-center w-6 h-6 bg-gray-200 rounded-full font-bold text-gray-700">
                            <div className="self-center">
                              <svg
                                className="text-gray-700 w-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                />
                              </svg>
                            </div>
                          </span>
                        </button>
                      </a>
                    </div>
                    {Wishlists.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
