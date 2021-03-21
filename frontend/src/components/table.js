import { React, useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getWords } from "../actions/utility/dbActions";

const LanguageTable = () => {
  const [words, setWords] = useState([]);

  const fetchWords = async () => {
    let res = await getWords();
    setWords(res);
  };

  useEffect(() => {
    try {
      fetchWords();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <h1 className="languageTitle">አማርኛ መማር</h1>
      <div className="languageTable">
        <Table>
          <thead>
            <tr>
              <th>English</th>
              <th>āmarinya</th>
              <th>Ge'ez</th>
            </tr>
          </thead>

          <tbody>
            {words?.map((word) => (
              <tr key={word.english}>
                <td>{word.english}</td>
                <td>{word.amharic}</td>
                <td>{word.geez}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default LanguageTable;
