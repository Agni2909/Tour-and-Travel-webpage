import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { List, X } from "phosphor-react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }));
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">TRIPPY</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          {this.state.clicked ? <X size={32} /> : <List size={32} />}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.icon && <item.icon className="icon" />}
                {item.title}
              </Link>
            </li>
          ))}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
