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
