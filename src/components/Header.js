import { Component } from "react";
import Logo from "./Logo";
import Menubar from "./Menubar";

class Header extends Component {
    render() {
        return (
            <div>
            <Logo></Logo>
            <Menubar></Menubar>
            <p>welcome {this.props.username}</p>
            <p>you are from {this.props.address}</p>
            <header>this is headerrrrr</header>
            </div>
        )
    }
}

export default Header;