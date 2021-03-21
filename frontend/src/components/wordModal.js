import { React, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";
import { addWord } from "../actions/utility/dbActions";

const WordModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [english, setEnglish] = useState("");
  const [amharic, setAmharic] = useState("");
  const [geez, setGeez] = useState("");
  const [category, setCategory] = useState("verb");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const clearState = () => {
    setEnglish("");
    setAmharic("");
    setGeez("");
    setCategory("verb");
  };

  //TODO: ADD VALIDATION: no numbers, only geez can be empty
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const word = { english, amharic, geez, category };
      await addWord(word);
      console.log(category);
      clearState();
      toggleModal();
      //RE-RENDER TABLE
    } catch (err) {
      console.error(err);
      clearState();
      toggleModal();
    }
  };

  return (
    <div>
      <div className="languageButton">
        <Button onClick={toggleModal}>+</Button>
      </div>
      <Modal
        contentClassName="languageModal"
        isOpen={modalOpen}
        toggle={toggleModal}
      >
        <ModalHeader toggle={toggleModal}>Add a Word</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <Col sm={12} md={12} lg={12}>
              <FormGroup>
                <Label for="englishWord">English</Label>
                <Input
                  type="text"
                  name="english"
                  value={english}
                  id="englishWord"
                  placeholder="Amharic"
                  onChange={(e) => setEnglish(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <FormGroup>
                <Label for="amharichWord">Amharic</Label>
                <Input
                  type="text"
                  name="amharic"
                  value={amharic}
                  id="amharichWord"
                  placeholder="āmarinya"
                  onChange={(e) => setAmharic(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <FormGroup>
                <Label for="geezWord">Ge'ez</Label>
                <Input
                  type="text"
                  name="geez"
                  value={geez}
                  id="geezWord"
                  placeholder="አማርኛ"
                  onChange={(e) => setGeez(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <FormGroup>
                <Label for="wordCategory">Category</Label>
                <Input
                  type="select"
                  name="category"
                  id="wordCategory"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="verb" key="verb">
                    Verb
                  </option>
                  <option value="adverb" key="adverb">
                    Adverb
                  </option>
                  <option value="adjective" key="adjective">
                    Adjective
                  </option>
                </Input>
              </FormGroup>
            </Col>
            <Button block color="primary" onClick={handleSubmit}>
              ADD
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default WordModal;
