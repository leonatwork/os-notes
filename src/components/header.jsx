import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component {
  state = { navExpanded: false };
  render() {
    const navbarStyle = {
      backgroundColor: "rgb(156, 220, 164)",
    };
    const navbarTextStyle = {
      color: "white",
      fontSize: "28px",
      fontFamily: "'Merienda One', cursive",
    };
    if (this.props.showNav) {
      return (
        <Navbar collapseOnSelect style={navbarStyle} expand="lg">
          <Navbar.Brand
            style={navbarTextStyle}
            href="https://leonatwork.github.io/os-notes/"
          >
            OS Notes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {this.props.notes.map((note) => {
                let className = "list-group-item";
                if (note.id === this.props.activeNoteID)
                  className += " active-me";
                return (
                  <Nav.Link
                    key={note.id}
                    href={"#" + note.id}
                    className={className}
                    onClick={() => this.props.handleClick(note.id)}
                    style={{ cursor: "pointer", textAlign: "center" }}
                  >
                    {note.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    return (
      <Navbar expand="lg" style={navbarStyle}>
        <Navbar.Brand
          href="https://leonatwork.github.io/os-notes/"
          style={navbarTextStyle}
        >
          OS Notes
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
