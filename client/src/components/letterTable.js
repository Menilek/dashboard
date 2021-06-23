import { React, useState, useEffect } from "react";
import fidel from "./fidel.json";
import { Col, Table, Row } from "reactstrap";
import "../App.css";
// import backspace from "../assets/icons/backspace-solid.svg";
import plus from "../assets/icons/plus-solid.svg";
import trash from "../assets/icons/trash-alt-solid.svg";
// import copy from "../assets/icons/copy-solid.svg";

const LetterTable = () => {
  const [word, setWord] = useState([]);
  const [letter, setLetter] = useState([]);

  useEffect(() => {
    setWord("አማርኛ");
    setLetter(fidel);
  }, []);

  const addCharacter = (e) => {
    let character = e.target.getAttribute("value");
    setWord((word) => [...word, character]);
    // console.log("WORD = " + word);
  };

  // const deleteCharacter = (e) => {
  //   let character = e.target.getAttribute("value");
  //   setWord(word.filter((letter) => letter.value !== character));
  //   console.log("CHARACTER = " + character);
  // };

  const addSpace = () => {
    setWord((word) => [...word, " "]);
  };

  const clearWord = () => {
    setWord("");
  };

  // const copyWord = () => {
  //   let word = document.getElementById("test-word");
  //   console.log(word);
  //   word.select();
  //   document.execCommand("copy");
  // };

  // const revealCharacter = (e) => {
  //   let letter = e.target.getAttribute("type");
  //   let character = e.target.getAttribute("value");
  //   let englishCharacter = letter + character;
  // };

  return (
    <div>
      <h1 className="fidelTitle" onClick={clearWord}>
        ፊደል
      </h1>
      <Row className="fidel-sentence">
        <Col sm={9}>
          <h3 className="fidel-word" id="test-word" value={word}>
            {word}
          </h3>
        </Col>
        <Col sm={1}>
          <img
            onClick={addSpace}
            className="svg-inline--fa fa-plus fa-w-14 fidelAction"
            src={plus}
            alt="add keyboard symbol"
          />
        </Col>
        <Col sm={1}>
          <img
            onClick={clearWord}
            className="svg-inline--fa fa-trash-alt fa-w-14 fidelAction"
            src={trash}
            alt="trash symbol"
          />
        </Col>
        {/* <Col sm={1}>
          <img
            onClick={copyWord}
            className="svg-inline--fa fa-copy fa-w-14 fidelAction"
            src={copy}
            alt="copy symbol"
          />
        </Col> */}
        {/* <Col sm={1}>
          <img
            onClick={deleteCharacter}
            className="svg-inline--fa fa-backspace fa-w-20 fidelAction"
            src={backspace}
            alt="backspace keyboard symbol"
          />
        </Col> */}
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
          {letter.map((char) => (
            <tr>
              <td>{char.letter}</td>
              <td
                // onMouseOver={revealCharacter}
                value={char.ä}
                onClick={addCharacter}
                className="fidel-character"
              >
                {char.ä}
              </td>
              <td onClick={addCharacter} className="fidel-character">
                {char.u}
              </td>
              <td
                value={char.i}
                onClick={addCharacter}
                className="fidel-character"
              >
                {char.i}
              </td>
              <td
                value={char.a}
                onClick={addCharacter}
                className="fidel-character"
              >
                {char.a}
              </td>
              <td
                value={char.ē}
                onClick={addCharacter}
                className="fidel-character"
              >
                {char.ē}
              </td>
              <td
                value={char.ə}
                onClick={addCharacter}
                className="fidel-character"
              >
                {char.ə}
              </td>
              <td
                value={char.o}
                onClick={addCharacter}
                className="fidel-character"
              >
                {char.o}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LetterTable;
