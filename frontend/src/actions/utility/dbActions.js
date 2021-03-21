import axios from "axios";

// export const postToDB = async (ipData) => {
//   try {
//     await axios({
//       method: "post",
//       url: "/visit",
//       data: {
//         ip_address: ipData.ip,
//         city: ipData.city,
//         internet_service_provider: ipData.isp,
//         timezone: ipData.tz,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const getDBEntries = async () => {
//   try {
//     const res = await axios.get("/visitors");
//     return res;
//   } catch (err) {
//     console.error(err);
//   }
// };

const endpoint = process.env.REACT_APP_BACKEND_URL;
// const endpoint = "0.0.0.0"; //FOR DEVELOPMENT

export const getWords = async () => {
  try {
    const res = await axios.get(`http://${endpoint}:3001/api/words`);
    console.log(res.data);
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
export const editWord = async (id) => {
  try {
  } catch (err) {
    console.error(err);
  }
};
