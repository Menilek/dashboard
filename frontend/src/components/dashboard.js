import { React, Component } from "react";
import { getIPData } from "../actions/utility/ipFunctions";

class IpDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      isp: null,
      ip: null,
      tz: null,
    };
  }

  parseIPData = (ipData) => {
    this.setState({
      city: ipData.city,
      isp: ipData.isp,
      ip: ipData.ip,
      tz: ipData.tz,
    });
  };

  async componentDidMount() {
    let ipData = await getIPData();
    this.parseIPData(ipData);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>YOU ARE VISITING US FROM</p>
        <p>{this.state.city}</p>
        <p>IP Address: {this.state.ip}</p>
        <p>Internet Service Provider: {this.state.isp}</p>
        <p>Timezone: {this.state.tz}</p>
      </div>
    );
  }
}

export default IpDashboard;
