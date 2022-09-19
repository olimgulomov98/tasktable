import React, {Component} from "react";
import './index.css';
import Logo from './images/logo.png'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={Logo} alt="Vector" className="logo" />
                <div className="center">
                    <p>Home</p>
                    <p>Properties</p>
                    <p>Contacts</p>
                </div>
                <button className="btnLogin">Login</button>
            </div>
        )
    }
}
export default Navbar