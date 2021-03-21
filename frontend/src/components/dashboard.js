import { React, useState, useEffect } from "react";
import { getIPData } from "../actions/utility/ipActions";
// import { postToDB, getDBEntries } from "../actions/utility/dbActions";
import Loader from "./loader";

const IpDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [isp, setISP] = useState("");
  const [ip, setIP] = useState("");
  const [tz, setTZ] = useState("");

  async function fetchIPData() {
    let res = await getIPData();
    setCity(res.city);
    setISP(res.isp);
    setIP(res.ip);
    setTZ(res.tz);
  }

  useEffect(() => {
    try {
      fetchIPData();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="dashboard">
        <h3 className="ip-data">IP Location: {city}</h3>
        <h3 className="ip-data">IP Address: {ip}</h3>
        <h3 className="ip-data">Internet Service Provider: {isp}</h3>
        <h3 className="ip-data">Timezone: {tz}</h3>
      </div>
    );
  }
};

export default IpDashboard;
