import { React, useState, useEffect } from "react";
import fidel from "./fidel.json";
import { Table, Row } from "reactstrap";
import "../App.css";

const LetterTable = () => {
  const [word, setWord] = useState([]);

  useEffect(() => {
    setWord("አማርኛ");
  }, []);

  const addCharacter = (e) => {
    let character = e.target.getAttribute("value");
    setWord((word) => [...word, character]);
    // console.log(a);
  };

  const clearWord = () => {
    setWord("")
  }

  return (
    <div>
      <h1 className="fidelTitle" onClick={clearWord}>ፊደል</h1>
      <Row className="fidel-sentence">
        <h3>{word}</h3>
      </Row>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>ä</th>
            <th>u</th>
            <th>i</th>
            <th>a</th>
            <th>ē</th>
            <th>ə</th>
            <th>o</th>
          </tr>
        </thead>
        <tbody>
          {fidel.map((letter) => (
            <tr>
              <td>{letter.letter}</td>
              <td
                value={letter.ä}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.ä}
              </td>
              <td
                value={letter.u}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.u}
              </td>
              <td
                value={letter.i}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.i}
              </td>
              <td
                value={letter.a}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.a}
              </td>
              <td
                value={letter.ē}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.ē}
              </td>
              <td
                value={letter.ə}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.ə}
              </td>
              <td
                value={letter.o}
                onClick={addCharacter}
                className="fidel-character"
              >
                {letter.o}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LetterTable;
