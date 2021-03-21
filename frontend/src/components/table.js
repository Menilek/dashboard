import { React, useState, useEffect } from "react";
import { Table } from "reactstrap";
import { getWords } from "../actions/utility/dbActions";

function LanguageTable() {
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
              <th>Ge'ez</th>
              <th>āmarinya</th>
              <th>English</th>
            </tr>
          </thead>

          <tbody>
            {words?.map((word) => (
              <tr key={word.english}>
                <td>{word.geez}</td>
                <td>{word.amharic}</td>
                <td>{word.english}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default LanguageTable;
