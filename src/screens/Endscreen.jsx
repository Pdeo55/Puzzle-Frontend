import React from "react";

const Endscreen = () => {
  const handleLogout = () => {
    console.log("logout done");
  };

  return (
    <div className="w-full h-full flex">
      <div className="w-full bg-black flex justify-center items-center">
        <div className="w-[40%] text-center h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-[2rem] font-bold">Thank You!</h1>
          <div className="w-full mt-10 flex">
            <div className="card mr-2" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title font-bold">Accuracy</h5>
                <p className="card-text">50%</p>
              </div>
            </div>
            <div className="card mr-2" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title font-bold">Time Taken</h5>
                <p className="card-text">1hr 5min</p>
              </div>
            </div>
            <div className="card mr-2" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title font-bold">Rank</h5>
                <p className="card-text">10</p>
              </div>
            </div>
          </div>
          <button
            className="mt-5 bg-[#EEE1FF] text-black rounded-lg font-bold px-20 py-2 hover:bg-[#a771ee]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Endscreen;
