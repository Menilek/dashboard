import axios from 'axios';

const endpoint = process.env.REACT_APP_BACKEND_URL;
// const endpoint = '0.0.0.0';
// const endpoint = 'localhost'; //FOR DEVELOPMENT

export const getWords = async () => {
  try {
    const res = await axios.get(`http://${endpoint}:3001/api/words`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const addWord = async (word) => {
  try {
    await axios({
      method: 'post',
      url: `http://${endpoint}:3001/api/words`,
      data: {
        amharic: word.amharic,
        geez: word.geez,
        english: word.english,
        category: word.category
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteWord = async (id) => {
  try {
    let url = `http://${endpoint}:3001/api/words/${id}`;
    await axios.delete(url);
  } catch (err) {
    console.error(err);
  }
};

export const editWord = async (word) => {
  try {
    let url = `http://${endpoint}:3001/api/words/${word._id}`;
    await axios.patch(url, word);
  } catch (err) {
    console.error(err);
  }
};
