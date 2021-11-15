import React, { useState, useEffect } from 'react';
import { Row, Form, Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { reject } from 'lodash';
// import CategoryDropdown from "./dropDown";
import Loader from './loader';
import CategoryBadge from './categoryBadge';
import FavouriteModal from './modals/favouriteModal';
import AddWordModal from './modals/addWordModal';
import { getWords, deleteWord, addWord, editWord } from '../actions/utility/dbActions';
import EditWordModal from './modals/editWordModal';

const LanguageTable = () => {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [favouritesModalOpen, setFavouritesModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalWord, setModalWord] = useState('');
  const [modalID, setModalID] = useState('');
  const [editModalWord, setEditModalWord] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [english, setEnglish] = useState('');
  const [amharic, setAmharic] = useState('');
  const [geez, setGeez] = useState('');
  const [category, setCategory] = useState('Verb');
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['english', 'amharic', 'geez']);

  const toggleFavourite = (e) => {
    const amharic = e.target.getAttribute('value');
    const english = e.target.getAttribute('name');
    const word = { english: english, amharic: amharic };
    const isArrayAndEmpty = () => {
      return Array.isArray(favourites) && !favourites.length;
    };
    const isWordPresent = (element) => {
      return favourites.find((e) => e['amharic'] === element['amharic']) ? true : false;
    };
    let wordPresent = isWordPresent(word);
    if (!wordPresent || isArrayAndEmpty()) {
      const newFavourites = (favourites) => favourites.concat(word);
      const newFaves = newFavourites(favourites);
      setFavourites(newFaves);
      const favouritesString = JSON.stringify(newFaves);
      localStorage.setItem('Favourites', favouritesString);
    } else {
      let newFaves = reject(favourites, (fave) => fave['amharic'] === word['amharic']);
      setFavourites([...newFaves]);
      const favouritesString = JSON.stringify(newFaves);
      localStorage.setItem('Favourites', favouritesString);
    }
  };

  const toggleAddModal = () => {
    setAddModalOpen(!addModalOpen);
  };

  const toggleFavouritesModal = () => {
    setFavouritesModalOpen(!favouritesModalOpen);
  };

  const toggleDeleteModal = (e) => {
    const deleteWord = e.target.getAttribute('value');
    const id = e.target.getAttribute('name');
    setModalWord(deleteWord);
    setModalID(id);
    setDeleteModalOpen(!deleteModalOpen);
  };

  const toggleEditModal = (e) => {
    if (e) {
      const id = e.target.getAttribute('name');
      setModalID(id);
      const amharicWord = e.target.getAttribute('value');
      setModalWord(amharicWord);
      // const englishWord = e.target.getAttribute('value');
      setEditModalWord(amharicWord);
      setEditModalOpen(!editModalOpen);
    } else {
      setEditModalOpen(!editModalOpen);
    }
  };

  const clearState = () => {
    setEnglish('');
    setAmharic('');
    setGeez('');
    setCategory('Verb');
  };

  const fetchWords = async () => {
    let res = await getWords();
    setWords(res);
  };

  const fetchFavourites = () => {
    let faves = JSON.parse(localStorage.getItem('Favourites'));
    if (faves === null) {
      faves = [];
    }
    setFavourites(faves);
  };

  const dropWord = async () => {
    setWords(words.filter((item) => item._id !== modalID));
    await deleteWord(modalID);
    setModalWord('');
    setModalID('');
    setDeleteModalOpen(!deleteModalOpen);
  };

  const submitEditWord = async (e) => {
    e.preventDefault();
    try {
      const word = {};
      word['english'] = english ? english : undefined;
      word['amharic'] = amharic ? amharic : undefined;
      word['geez'] = geez ? geez : undefined;
      word['category'] = category ? category : undefined;
      word['_id'] = modalID;
      Object.keys(word).forEach((key) => word[key] === undefined && delete word[key]);
      editWord(word);
      toggleEditModal();
    } catch (err) {
      console.error(err);
      clearState();
      toggleEditModal();
    }
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

  const search = () => {
    return words.filter((word) => {
      return searchParam.some((newWord) => {
        return word[newWord].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    });
  };

  // const filterCategory = (e) => {
  //   let category = e.target.getAttribute("value");
  // };

  useEffect(() => {
    try {
      fetchWords();
      fetchFavourites();
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
            <div>
              <Button color="primary" onClick={toggleAddModal}>
                Add Word
              </Button>
              <Button color="info" onClick={toggleFavouritesModal} id="fave-btn">
                Browse Favourites
              </Button>
            </div>
          </div>
          {/* <div className="category-bar">
              {categoryOptions.map((category) => (
                <span className="category-filter" onClick={filterCategory} tabindex="-1">
                  <CategoryBadge category={category.value} />
                </span>
              ))}
            </div> */}

          <Modal
            contentClassName="favouritesModal"
            isOpen={favouritesModalOpen}
            toggle={toggleFavouritesModal}>
            <ModalHeader toggle={toggleFavouritesModal}>
              {favourites.length
                ? `Here are your ${favourites.length} fave(s)!`
                : 'Here are your faves!'}
            </ModalHeader>
            <ModalBody>
              <FavouriteModal favourites={favourites} />
            </ModalBody>
          </Modal>

          <Modal contentClassName="languageModal" isOpen={addModalOpen} toggle={toggleAddModal}>
            <ModalHeader toggle={toggleAddModal}>Add a Word</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSubmit}>
                <AddWordModal
                  english={english}
                  setEnglish={setEnglish}
                  amharic={amharic}
                  setAmharic={setAmharic}
                  geez={geez}
                  setGeez={setGeez}
                  category={category}
                  setCategory={setCategory}
                />
                <Button block color="primary" onClick={handleSubmit}>
                  ADD
                </Button>
              </Form>
            </ModalBody>
          </Modal>

          <Modal contentClassName="deleteModal" isOpen={deleteModalOpen} toggle={toggleDeleteModal}>
            <ModalHeader toggle={toggleDeleteModal}>Delete: {modalWord}?</ModalHeader>
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

          <Modal contentClassName="editModal" isOpen={editModalOpen} toggle={toggleEditModal}>
            <ModalHeader toggle={toggleEditModal}>Edit: {editModalWord}</ModalHeader>
            <ModalBody>
              <Form onSubmit={submitEditWord}>
                <EditWordModal
                  english={english}
                  setEnglish={setEnglish}
                  amharic={amharic}
                  setAmharic={setAmharic}
                  geez={geez}
                  setGeez={setGeez}
                  category={category}
                  setCategory={setCategory}
                />
                <Button block color="primary" onClick={submitEditWord}>
                  EDIT
                </Button>
              </Form>
            </ModalBody>
          </Modal>

          {/* <CategoryDropdown /> */}
        </div>

        <div className="languageTable">
          <Table responsive>
            <thead>
              <tr>
                <th>English</th>
                <th>āmarinya</th>
                <th>Ge&apos;ez</th>
                <th>Category</th>
                <th>Favourite</th>
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
                      onClick={toggleFavourite}
                      className={`tableAction ${
                        favourites &&
                        favourites.some((favourite) => favourite.amharic === word.amharic)
                          ? 'fas fa-star'
                          : 'far fa-star'
                      }`}></i>
                  </td>
                  <td>
                    <i
                      value={word.english}
                      name={word._id}
                      onClick={toggleEditModal}
                      className="fas fa-edit tableAction"></i>
                  </td>
                  <td>
                    <i
                      value={word.amharic}
                      name={word._id}
                      onClick={toggleDeleteModal}
                      className="fas fa-trash-alt tableAction"></i>
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
