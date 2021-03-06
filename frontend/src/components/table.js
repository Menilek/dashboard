import React from "react";
import { Table } from "reactstrap";
import words from "../util/amharic.json";

function LanguageTable() {
  return (
    <div>
      <h1 className="languageTitle">አማርኛ መማር</h1>
      <div className="languageTable">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ge'ez</th>
              <th>āmarinya</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <tr key={word.index}>
                <th scope="row">{word.index}</th>
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
