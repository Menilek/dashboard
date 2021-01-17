import { React, useState, useEffect } from "react";
import { getIPData } from "../actions/utility/ipFunctions";
import Loader from "./loader";

const IpDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [isp, setISP] = useState("");
  const [ip, setIP] = useState("");
  const [tz, setTZ] = useState("");

  useEffect(() => {
    async function fetchIPData() {
      let res = await getIPData();
      setCity(res.city);
      setISP(res.isp);
      setIP(res.ip);
      setTZ(res.tz);
    }
    fetchIPData();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <p>IP Location: {city}</p>
        <p>IP Address: {ip}</p>
        <p>Internet Service Provider: {isp}</p>
        <p>Timezone: {tz}</p>
      </div>
    );
  }
};

export default IpDashboard;
