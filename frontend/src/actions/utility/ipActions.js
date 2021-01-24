import axios from "axios";

export const getIPData = async () => {
  try {
    // let endpoint = process.env.REACT_APP_BACKEND_URL;
    // const res = await axios.get("http://" + endpoint + ":5000/api/visitor");

    const res = await axios.get("http://ip-api.com/json/");

    let ipData = {
      city: res.data.city,
      isp: res.data.isp,
      ip: res.data.query,
      tz: res.data.timezone,
    };

    return ipData;
  } catch (err) {
    console.error(err);
  }
};
