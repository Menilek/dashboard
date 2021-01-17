import { React, Component } from "react";
import { getIPData } from "../actions/utility/ipFunctions";
import Loader from './loader';

class IpDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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

  fetchIPData = async () => {
    const res = await getIPData();
    this.setState({
      loading: false,
    });
    return res;
  };

  async componentDidMount() {
    let ipData = await this.fetchIPData();
    this.parseIPData(ipData);
  }

  render() {
    if (this.state.loading) {
      return ( <Loader/> )
    }
    else {
      return (
        <div style={{ textAlign: "center" }}>
          <p>IP Location: {this.state.city}</p>
          <p>IP Address: {this.state.ip}</p>
          <p>Internet Service Provider: {this.state.isp}</p>
          <p>Timezone: {this.state.tz}</p>
        </div>
      );
    }
  }
}

export default IpDashboard;
