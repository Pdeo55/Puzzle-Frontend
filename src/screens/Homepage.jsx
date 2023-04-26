import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const handleClick = () => {
    console.log("start the game!");
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-full bg-black flex justify-center items-center">
        <div className="w-[40%] text-center h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-[2rem] font-bold">Hi! User</h1>
          <div className="w-full mt-10">
            <h2 className="text-white text-[1rem] font-bold">
              Rules:
              <ol>
                <li>Complete the puzzle within given time.</li>
                <li>
                  For each clue taken 10 points will be deducted from the total
                  achievable score.
                </li>
                <li>
                  ***Each clue can only be viewed once. After viewing a clue the
                  button will get disabled.
                </li>
                <li></li>
              </ol>
            </h2>
          </div>
          <Link to={'/question'}>
            <button
              className="mt-5 bg-[#EEE1FF] text-black rounded-lg font-bold px-20 py-2 hover:bg-[#a771ee]"
              onClick={handleClick}
            >
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
