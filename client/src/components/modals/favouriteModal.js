import { React } from 'react';
import { Table } from 'reactstrap';

const FavouriteModal = (favourites) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>English</th>
          <th>āmarinya</th>
        </tr>
      </thead>
      <tbody>
        {favourites ? (
          favourites.favourites.map((word) => (
            <tr key={word.english}>
              <td>{word.english}</td>
              <td>{word.amharic}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td id="empty-favourites">Your favourites will go here</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default FavouriteModal;
