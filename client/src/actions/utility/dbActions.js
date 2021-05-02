import axios from "axios";

// const endpoint = process.env.REACT_APP_BACKEND_URL;
const endpoint = "0.0.0.0"; //FOR DEVELOPMENT

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
      method: "post",
      url: `http://${endpoint}:3001/api/words`,
      data: {
        amharic: word.amharic,
        geez: word.geez,
        english: word.english,
        category: word.category,
      },
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

// TODO: IMPLEMENT ME!
// export const editWord = async (word) => {
//   try {
//     let data = Object.assign(
//       {},
//       word.english === null ? null : { english: word.english },
//       word.amharic === null ? null : { amharic: word.amharic },
//       word.geez === null ? null : { geez: word.geez }
//     );
//     let url = `http://${endpoint}:3001/api/words/${word.id}`;
//     await axios.patch(url);
//   } catch (err) {
//     console.error(err);
//   }
// };
