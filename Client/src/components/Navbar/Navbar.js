import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import './Navbar.css';
// import Navbar from "react-bootstrap/Navbar";
// import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Form, Button, Alert } from "react-bootstrap";

export default class Nav extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {

    const li = [
      {
        link: "/",
        text: "Kelsea's Portfolio",
      },
      {
        link: "/about/",
        text: "About me",
      },
      {
        link: "/contact/",
        text: "Contact me",
      },
      {
        link: "/portfolio/",
        text: "my portfolio",
      }
    ];

    return (
          <div className="navBar">
                <button onClick={this.Toggle}>
                    <FaAlignRight />
                </button>
                <ul className={this.state.toggle ? "links show-nav" : "links"}>
                    {
                        li.map((objLink, i) => {
                            return ( <li><a href={objLink.link}>{objLink.text}</a></li> )
                        })
                    }
                </ul>
          </div>
    );
}
}
