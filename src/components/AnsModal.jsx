import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const AnsModal = ({ show, setModal }) => {
  const handleClose = () => setModal(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Submit your answer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          placeholder="Enter your answer"
          id="answer"
          name="answer"
          className="w-full border border-b-black outline-none my-2 pl-2"
        />
      </Modal.Body>
      <Modal.Footer>
        <Link to={'/end'}>
          <button
            className="py-2 px-3 border rounded-md border-black hover:bg-slate-300"
            onClick={handleClose}
          >
            Submit
          </button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default AnsModal;
