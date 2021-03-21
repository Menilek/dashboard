import axios from "axios";

export const postToDB = async (ipData) => {
  try {
    await axios({
      method: "post",
      url: "/visit",
      data: {
        ip_address: ipData.ip,
        city: ipData.city,
        internet_service_provider: ipData.isp,
        timezone: ipData.tz,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getDBEntries = async () => {
  try {
    const res = await axios.get("/visitors");
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getWords = async () => {
  try {
    let endpoint = process.env.REACT_APP_BACKEND_URL;
    const res = await axios.get("http://" + endpoint + ":3001/api/words");
    // const res = await axios.get("http://0.0.0.0:3001/api/words");
    return res.data;
  } catch (err) {
    console.error(err);
  }
};