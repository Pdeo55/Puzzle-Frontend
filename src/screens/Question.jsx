import React, { useState } from "react";
import ClueModal from "../components/ClueModal";
import AnsModal from "../components/AnsModal";

const Question = () => {
  const [clueModal, setClueModal] = useState(false);
  const [ansModal, setAnsModal] = useState(false);
  const [clueNo, setClueNo] = useState(null);

  return (
    <>
      {clueModal && (
        <ClueModal show={clueModal} setModal={setClueModal} clueNo={clueNo} />
      )}
      {ansModal && <AnsModal show={AnsModal} setModal={setAnsModal} />}
      <div className="w-full bg-[rgb(32,33,36)] h-full">
        <div className="flex flex-col justify-evenly items-center h-[100%]">
          <div>
            <div className="border border-white p-10 rounded-md">
              <p>Question Image</p>
            </div>
          </div>
          <div>Question Text</div>
          <div className="w-[50vw] flex justify-between">
            <div
              className="border border-white rounded-md p-5 cursor-pointer text-white"
              onClick={() => {
                setClueModal(true);
                setClueNo(1);
              }}
            >
              <p>Clue 1</p>
            </div>
            <div
              className="border border-white rounded-md p-5 cursor-pointer text-white"
              onClick={() => {
                setClueModal(true);
                setClueNo(2);
              }}
            >
              <p>Clue 2</p>
            </div>
            <div
              className="border border-white rounded-md p-5 cursor-pointer text-white"
              onClick={() => {
                setClueModal(true);
                setClueNo(3);
              }}
            >
              <p>Clue 3</p>
            </div>
            <div
              className="border border-white rounded-md p-5 cursor-pointer text-white"
              onClick={() => {
                setClueModal(true);
                setClueNo(4);
              }}
            >
              <p>Clue 4</p>
            </div>
            <div
              className="border border-white rounded-md p-5 cursor-pointer text-white"
              onClick={() => {
                setClueModal(true);
                setClueNo(5);
              }}
            >
              <p>Clue 5</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-success"
              onClick={() => setAnsModal(true)}
            >
              Submit your answer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
