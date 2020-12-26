import axios from "axios";

export const getIPData = async () => {
  try {
    let endpoint = process.env.REACT_APP_BACKEND_URL;

    const res = await axios.get("http://" + endpoint + ":5000/api/visitor");

    let ipData = {
      city: res.data.city,
      isp: res.data.isp,
      ip: res.data.ip,
      tz: res.data.tz,
    };
    return ipData;
  } catch (err) {
    console.error(err);
  }
};
