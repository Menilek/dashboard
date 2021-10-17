import { React, useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
// import CategoryDropdown from "./dropDown";
import Loader from "./loader";
import CategoryBadge from "./categoryBadge";
import { categoryOptions } from "../util/CategoryOptions";
import { getWords, deleteWord, addWord } from "../actions/utility/dbActions";

const LanguageTable = () => {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalWord, setModalWord] = useState("");
  const [modalID, setModalID] = useState("");
  const [editModalWord, setEditModalWord] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [english, setEnglish] = useState("");
  const [amharic, setAmharic] = useState("");
  const [geez, setGeez] = useState("");
  const [category, setCategory] = useState("Verb");
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["english", "amharic", "geez"]);

  const toggleDeleteModal = (e) => {
    const deleteWord = e.target.getAttribute("value");
    setModalWord(deleteWord);
    const id = e.target.getAttribute("name");
    setModalID(id);
    setDeleteModalOpen(!deleteModalOpen);
  };

  const toggleEditModal = (e) => {
    const amharicWord = e.target.getAttribute("value");
    setModalWord(amharicWord);
    const englishWord = e.target.getAttribute("name");
    setEditModalWord(englishWord);
    setEditModalOpen(!editModalOpen);
  };

  const toggleAddModal = () => {
    setAddModalOpen(!addModalOpen);
  };

  const clearState = () => {
    setEnglish("");
    setAmharic("");
    setGeez("");
    setCategory("Verb");
  };

  const fetchWords = async () => {
    let res = await getWords();
    setWords(res);
  };

  const dropWord = async (e) => {
    setWords(words.filter((item) => item._id !== modalID));
    await deleteWord(modalID);
    setModalWord("");
    setModalID("");
    setDeleteModalOpen(!deleteModalOpen);
  };

  const editWord = async (e) => {
    // MAKE PATCH REQUEST
    console.log("TO DO: IMPLEMENT EDIT FUNCTIONALITY");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const word = { english, amharic, geez, category };
      await addWord(word);
      setWords((words) => [...words, word]);
      clearState();
      toggleAddModal();
    } catch (err) {
      console.error(err);
      clearState();
      toggleAddModal();
    }
  };

  const search = items => {
    return words.filter((word) => {
      return searchParam.some((newWord) => {
        return (
          word[newWord]
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  // const filterCategory = (e) => {
  //   let category = e.target.getAttribute("value");
  // };

  useEffect(() => {
    try {
      fetchWords();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <h1 className="wordTitle">አማርኛ መማር</h1>
        <div className="languageActions">
          <div>
            <input
              type="search"
              name="search-form"
              className="search-query"
              placeholder="Search for..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="languageButton">
              <Button color="primary" onClick={toggleAddModal}>
                Add Word
              </Button>
            </div>
            {/* <div className="category-bar">
              {categoryOptions.map((category) => (
                <span className="category-filter" onClick={filterCategory} tabindex="-1">
                  <CategoryBadge category={category.value} />
                </span>
              ))}
            </div> */}
            <Modal
              contentClassName="languageModal"
              isOpen={addModalOpen}
              toggle={toggleAddModal}
            >
              <ModalHeader toggle={toggleAddModal}>Add a Word</ModalHeader>
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
                        {categoryOptions.map((category) => (
                          <option value={category.value} key={category.key}>
                            {category.category}
                          </option>
                        ))}
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

          <Modal
            contentClassName="editModal"
            isOpen={editModalOpen}
            toggle={toggleEditModal}
          >
            <ModalHeader toggle={toggleEditModal}>
              Edit: {modalWord}
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={editWord}>
                <Col sm={12} md={12} lg={12}>
                  <FormGroup>
                    <Label for="englishWord">English</Label>
                    <Input
                      type="text"
                      name="english"
                      // value={english}
                      id="englishWord"
                      placeholder="Amharic"
                      // onChange={(e) => setEnglish(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <FormGroup>
                    <Label for="amharichWord">Amharic</Label>
                    <Input
                      type="text"
                      name="amharic"
                      // value={amharic}
                      id="amharichWord"
                      placeholder="āmarinya"
                      // onChange={(e) => setAmharic(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col sm={12} md={12} lg={12}>
                  <FormGroup>
                    <Label for="geezWord">Ge'ez</Label>
                    <Input
                      type="text"
                      name="geez"
                      // value={geez}
                      id="geezWord"
                      placeholder="አማርኛ"
                      // onChange={(e) => setGeez(e.target.value)}
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
                      // value={category}
                      // onChange={(e) => setCategory(e.target.value)}
                    >
                      {categoryOptions.map((category) => (
                        <option value={category.value} key={category.key}>
                          {category.category}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Button block color="primary" onClick={editWord}>
                  EDIT
                </Button>
              </Form>
            </ModalBody>
          </Modal>

          {/* <CategoryDropdown /> */}
        </div>

        <div className="languageTable">
          <Table>
            <thead>
              <tr>
                <th>English</th>
                <th>āmarinya</th>
                <th>Ge'ez</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {search(words).map((word) => (
                <tr key={word._id}>
                  <td>{word.english}</td>
                  <td>{word.amharic}</td>
                  <td>{word.geez}</td>
                  <td>
                    <CategoryBadge category={word.category} />
                  </td>
                  <td>
                    <i
                      value={word.amharic}
                      name={word.english}
                      onClick={toggleEditModal}
                      className="fas fa-edit tableAction"
                    ></i>
                  </td>
                  <td>
                    <i
                      value={word.amharic}
                      name={word._id}
                      onClick={toggleDeleteModal}
                      className="fas fa-trash-alt tableAction"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
};

export default LanguageTable;
