import { React, useState, useEffect } from "react";
import { Table } from "reactstrap";
import WordModal from "./wordModal";
import Loader from "./loader";
import { getWords, deleteWord } from "../actions/utility/dbActions";

const LanguageTable = () => {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);

  const fetchWords = async () => {
    let res = await getWords();
    setWords(res);
  };

  const dropWord = async (e) => {
    const id = e.target.getAttribute("name");
    setWords(words.filter((item) => item._id !== id));
    await deleteWord(id);
  };

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
        <h1 className="languageTitle">አማርኛ መማር</h1>
        <WordModal />
        <div className="languageTable">
          <Table>
            <thead>
              <tr>
                <th>English</th>
                <th>āmarinya</th>
                <th>Ge'ez</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {words?.map((word) => (
                <tr key={word._id}>
                  <td>{word.english}</td>
                  <td>{word.amharic}</td>
                  <td>{word.geez}</td>
                  <td>
                    <i className="fas fa-edit tableAction"></i>
                  </td>
                  <td>
                    <i
                      name={word._id}
                      onClick={dropWord}
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
