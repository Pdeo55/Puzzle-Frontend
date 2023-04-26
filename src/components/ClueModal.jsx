import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { getQuestion } from "../features/questions/questionSlice";

const ClueModal = ({ show, setModal, clueNo }) => {
  const handleClose = () => setModal(false);

  // const { question } = useSelector((state) => state.question);

  // useEffect(() => {
  //   dispatch(getQuestion());
  // }, [dispatch]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Clue Number {clueNo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
          doloremque nemo autem amet accusamus vel, distinctio omnis fuga eaque
          sint tempore soluta quod tempora, repellat eveniet commodi minima?
          Facilis, culpa. Vitae voluptatibus quod sit?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="py-2 px-3 border rounded-md border-black hover:bg-slate-300"
          onClick={handleClose}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClueModal;
