import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const QuestionModal = ({ show, setModal }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [desc1, setdesc1] = useState("");
  const [desc2, setdesc2] = useState("");
  const [desc3, setdesc3] = useState("");
  const [desc4, setdesc4] = useState("");
  const [desc5, setdesc5] = useState("");
  const [att1, setAtt1] = useState("");
  const [att2, setAtt2] = useState("");
  const [att3, setAtt3] = useState("");
  const [att4, setAtt4] = useState("");
  const [att5, setAtt5] = useState("");

  const handleClose = () => {
    setModal(false);
    const userData = {
      Question: question,
      Ans: answer,
      clu1: { desc1, att1 },
      clu2: { desc2, att2 },
      clu3: { desc3, att3 },
      clu4: { desc4, att4 },
      clu5: { desc5, att5 },
    };

    axios
      .post("http://localhost:8000/api/dashboard/addQuestions", userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(userData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add your question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input
            type="text"
            placeholder="Enter question"
            className="w-full border border-b-black outline-none pl-2"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter answer"
            className="w-full border border-b-black outline-none pl-2"
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label htmlFor="clue">Clue 1</label>
          <div>
            <input
              type="text"
              placeholder="enter description"
              className="w-full border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setdesc1({ desc: e.target.value })}
            />
            <input
              type="text"
              placeholder="enter resource"
              className="w-[60%] border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setAtt1({ att: e.target.value })}
            />
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="clue">Clue 2</label>
          <div>
            <input
              type="text"
              placeholder="enter description"
              className="w-full border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setdesc2({ desc: e.target.value })}
            />
            <input
              type="text"
              placeholder="enter resource"
              className="w-[60%] border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setAtt2({ att: e.target.value })}
            />
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="clue">Clue 3</label>
          <div>
            <input
              type="text"
              placeholder="enter description"
              className="w-full border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setdesc3({ desc: e.target.value })}
            />
            <input
              type="text"
              placeholder="enter resource"
              className="w-[60%] border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setAtt3({ att: e.target.value })}
            />
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="clue">Clue 4</label>
          <div>
            <input
              type="text"
              placeholder="enter description"
              className="w-full border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setdesc4({ desc: e.target.value })}
            />
            <input
              type="text"
              placeholder="enter resource"
              className="w-[60%] border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setAtt4({ att: e.target.value })}
            />
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="clue">Clue 5</label>
          <div>
            <input
              type="text"
              placeholder="enter description"
              className="w-full border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setdesc5({ desc: e.target.value })}
            />
            <input
              type="text"
              placeholder="enter resource"
              className="w-[60%] border border-b-black outline-none my-2 pl-2 rounded-sm"
              onChange={(e) => setAtt5({ att: e.target.value })}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="py-2 px-3 border rounded-md border-black hover:bg-slate-300"
          onClick={handleClose}
        >
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionModal;
