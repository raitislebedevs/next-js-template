import { useState, useEffect } from 'react';
import {
  Navbar as NavbarBootstrap,
  Nav,
  Container,
} from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { setLoadingUser } from '../../../redux/actions';

const logo = '/static/images/logo.png';

const Navbar = (props) => {
  const { dispatch, user } = props;
  const router = useRouter();
  const [isScroll, setIsScroll] = useState(false);

  const checkCurrentSession = async () => {
    dispatch(setLoadingUser(true));
         /***          
         * IMPLEMENTATION OF USER SERVICE IS REQUIRED!!! DUMMY DATA!!
         * 
         *****/
        console.log(' Hey there This is logging in stuff');
    dispatch(setLoadingUser(false));
  };

  useEffect(() => {
    checkCurrentSession();
  }, []);

  useEffect(() => {
    let containerRef = document.getElementById('__next');
    containerRef.addEventListener('scroll', () => {
      if (containerRef.scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <NavbarBootstrap
      sticky="top"      
    >
      <Container>
        <Link href="/">
          <NavbarBootstrap.Brand href="/">
            <img
              src={logo}
              id="logo"            
              alt="Placifull"
            />
          </NavbarBootstrap.Brand>
        </Link>
        <Nav >
          <Nav className="navbar__right__links">
            <Nav.Item>
              <Nav.Link
                href="/"
                active={router.pathname === '/'}
                className="nav-item__link"
              >
                <div id="home">Home</div>
              </Nav.Link>
            </Nav.Item>          
            <Nav.Item>
              <Nav.Link
                href="/services"
                active={router.pathname === '/services'}
                className="nav-item__link"
              >
                <div id="help-support">Services</div>
              </Nav.Link>
            </Nav.Item>   
            <Nav.Item>
              <Nav.Link
                href="/contact"
                active={router.pathname === '/contact'}
                className="nav-item__link"
              >
                <div id="help-support">Help & Support</div>
              </Nav.Link>
            </Nav.Item> 
            <Nav.Item>
              <Nav.Link
                href="/store"
                active={router.pathname === '/store'}
                className="nav-item__link"
              >
                <div id="help-support">Store</div>
              </Nav.Link>
            </Nav.Item>        
          </Nav>          
        </Nav>
      </Container>
    </NavbarBootstrap>
  );
};

export const mapStateToProps = (state) => ({
  isLogged: state.connectionReducer.isLogged,
  user: state.connectionReducer.user,
  isLoadingUser: state.connectionReducer.isLoadingUser,
});

export default compose(
  connect(mapStateToProps)
)(Navbar);
