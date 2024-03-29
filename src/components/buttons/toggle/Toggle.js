import React, { useState } from "react";

import { motion } from "framer-motion";

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className={`w-8 h-4 bg-opacity-60 bg-gray-700 flex justify-${
        isOn ? "end" : "start"
      } items-center rounded-full p-0.5 cursor-pointer transition-all duration-300 ${
        isOn ? "bg-pink-400" : ""
      }`}
      // isOn={isOn}
      ison={isOn.toString()}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-3 h-3 bg-white rounded-full"
        animate={{ x: isOn ? "0%" : "0%" }}
        transition={{ type: "spring", stiffness: 700, damping: 40 }}
      />
    </div>
  );
};
