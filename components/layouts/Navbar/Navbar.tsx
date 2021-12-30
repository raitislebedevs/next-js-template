import { useState, useEffect } from "react";
import { Navbar as NavbarBootstrap, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { setLoadingUser } from "../../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DropDownList } from "../../common";

const logo = "/static/images/logo.svg";
const mobileLogo = "/static/favicon.svg";

const Navbar = (props) => {
  const { dispatch, user, isLogged, isLoadingUser } = props;
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);

  const checkCurrentSession = async () => {
    dispatch(setLoadingUser(true));
    /***
     *
     * IMPLEMENTATION OF USER SERVICE IS REQUIRED!!! DUMMY DATA!!
     *
     *
     *****/
    console.log(" Hey there This is logging in stuff");
    console.log("Redux Stuff", user, isLogged, isLoadingUser);
    dispatch(setLoadingUser(false));
  };

  useEffect(() => {
    checkCurrentSession();
  }, []);

  useEffect(() => {
    let containerRef = document.getElementById("__next");
    containerRef.addEventListener("scroll", () => {
      if (containerRef.scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <NavbarBootstrap sticky="top">
      <div className="logo" id="web-logo">
        <Link href="/">
          <NavbarBootstrap.Brand href="/">
            <img src={logo} alt="Placifull" />
          </NavbarBootstrap.Brand>
        </Link>
      </div>
      <div className="logo" id="mobile-logo">
        <Link href="/">
          <NavbarBootstrap.Brand href="/">
            <img src={mobileLogo} alt="Placifull" />
          </NavbarBootstrap.Brand>
        </Link>
      </div>
      <Nav>
        <Nav.Item>
          <Nav.Link
            href="/"
            active={router.pathname === "/"}
            className="nav-item__link"
          >
            <div id="home">Home</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/services"
            active={router.pathname === "/services"}
            className="nav-item__link"
          >
            <div id="services">Services</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/contact"
            active={router.pathname === "/contact"}
            className="nav-item__link"
          >
            <div id="help-support">Help & Support</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/store"
            active={router.pathname === "/store"}
            className="nav-item__link"
          >
            <div id="store">Store</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div id="mobile-nav">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </NavbarBootstrap>
  );
};

export const mapStateToProps = (state) => ({
  isLogged: state.connectionReducer.isLogged,
  user: state.user.user,
  isLoadingUser: state.connectionReducer.isLoadingUser,
});

export default compose(connect(mapStateToProps))(Navbar);
