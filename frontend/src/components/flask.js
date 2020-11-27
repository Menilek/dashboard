import axios from 'axios';
import { React, Component } from 'react';

class FlaskEndpoint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: null,
            isp: null,
            ip: null,
            tz: null
        }
    }

    getCity = () => {
        axios.get('http://0.0.0.0:5000/ane/api/ip').then(res => {
            console.log(res.data.city)
            console.log(res.data.isp)
            console.log(res.data.ip)
            console.log(res.data.tz)
            this.setState({
                city: res.data.city,
                isp: res.data.isp,
                ip: res.data.ip,
                tz: res.data.tz
            })
        })
    }

    componentDidMount() {
        this.getCity();
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
        )
    }
}

export default FlaskEndpoint;