import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionModal from "../components/QuestionModal";

function Dashboard() {
  const [questionModal, setquestionModal] = useState(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {questionModal && (
        <QuestionModal show={questionModal} setModal={setquestionModal} />
      )}
      <div>
        <button
          type="button"
          className="border border-black p-3 rounded-md hover:bg-slate-300"
          onClick={() => setquestionModal(true)}
        >
          Submit your answer
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
