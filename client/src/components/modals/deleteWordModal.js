import { React, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row
} from "reactstrap";
import { deleteWord } from "../../actions/utility/dbActions";

const DeleteWordModal = () => {

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [modalWord, setModalWord] = useState("");
    const [modalID, setModalID] = useState("");

  const toggleDeleteModal = (e) => {
    const deletedWord = e.target.getAttribute("value");
    setModalWord(deletedWord);
    const id = e.target.getAttribute("name");
    setModalID(id);
    setDeleteModalOpen(!deleteModalOpen);
  };

  const dropWord = async (e) => {
    // setWords(e.filter((item) => item._id !== modalID));
    // await deleteWord(modalID);
    // setModalWord("");
    // setModalID("");
    setDeleteModalOpen(!deleteModalOpen);
  };

  return (
    <div>
      <Modal
        contentClassName="deleteModal"
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
      >
        <ModalHeader toggle={toggleDeleteModal}>
          Delete: {modalWord}?
        </ModalHeader>
        <ModalBody>
          <Row className="deleteButtons">
            <Button onClick={dropWord} color="danger">
              DELETE
            </Button>
            <Button onClick={toggleDeleteModal} color="primary">
              CANCEL
            </Button>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DeleteWordModal;
