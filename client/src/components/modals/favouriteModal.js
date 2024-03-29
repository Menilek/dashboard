import { React } from 'react';
import { Table } from 'reactstrap';

const FavouriteModal = (favourites) => {
  return (
    <Table>
      <thead>
        {!favourites.favourites.length ? (
          <tr>
            <td id="empty-favourites">No favourites have been added yet</td>
          </tr>
        ) : (
          <tr>
            {/* <th> </th> */}
            <th>#</th>
            <th>English</th>
            <th>āmarinya</th>
          </tr>
        )}
      </thead>
      <tbody>
        {favourites.favourites.map((word) => (
          <tr key={word.english}>
            {/* <td>
              <i className="fas fa-arrows-alt-v drag"></i>
            </td> */}
            <td>{favourites.favourites.indexOf(word) + 1}</td>
            <td>{word.english}</td>
            <td>{word.amharic}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default FavouriteModal;
