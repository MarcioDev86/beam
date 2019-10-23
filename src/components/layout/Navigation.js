import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import UserGuide from "../../pdf/i580_User_Guide_V1-0_20190521_EN.pdf";
import beamLogo from "../../images/beam_logo.png";
import { Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Navbar color="faded" light>
          <div style={{ display: "flex", width: "100%" }}>
            <NavbarBrand className="mr-auto">
              <Link
                to="/"
                onClick={() =>
                  this.state.collapsed === false ? this.toggleNavbar() : null
                }
              >
                <img src={beamLogo} width="20%" alt="logo-beam" />
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="ml-2" />
          </div>

          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-auto">
                <NavLink>
                  <Link
                    to="/troubleshooting"
                    style={styleColor}
                    onClick={() => this.toggleNavbar()}
                  >
                    TROUBLESHOOTING
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem className="ml-auto">
                <NavLink
                  href="https://southerntelecom.mycusthelp.com/webapp/_rs/(S(tirwoac5kqzksjqnelwu02wa))/SupportHome.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styleColor}
                  onClick={() => this.toggleNavbar()}
                >
                  PRODUCT SUPPORT
                </NavLink>
              </NavItem>

              <NavItem className="ml-auto">
                <NavLink
                  href={UserGuide}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styleColor}
                  onClick={() => this.toggleNavbar()}
                >
                  USER GUIDE
                </NavLink>
              </NavItem>

              <NavItem className="ml-auto">
                <NavLink>
                  <Link
                    to="/privacy"
                    style={styleColor}
                    onClick={() => this.toggleNavbar()}
                  >
                    PRIVACY STATEMENT
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const styleColor = {
  color: "#A67EB1"
};

/*
    <Link to="/troubleshooting" style={styleColor} onClick={() => this.toggleNavbar()}>
                    TROUBLESHOOTING
                  </Link>

                  <NavLink to="/troubleshooting" style={styleColor} onClick={() => this.toggleNavbar()}>
                    TROUBLESHOOTING
                </NavLink>  
*/
