//import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import { AuthContext } from '../context/AuthContext';
import AppBar from '../components/Nav/AppBar';
//import AppBarSearch from '../components/Nav/AppBarSearch';

const Header = () => {
  //const { user, logout } = useContext(AuthContext);

  return (
  <div>
    <AppBar/>
    {/*}
    <Navbar bg="light" expand="lg" className="w3-card w3-white w3-round w3-margin-bottom">
      <Navbar.Brand href="/" className="w3-margin-left">
        Beauty Jobs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  className="w3-margin-right"/>
      <Navbar.Collapse id="basic-navbar-nav" >
          <Container>
        <Nav className="ms-auto w3-margin-right">
          <Nav.Link href="/jobs" aria-label="Go to jobs page">
            Jobs
          </Nav.Link>
          {user ? (
            <>
              <Nav.Link href="/newsfeed" aria-label="Go to newsfeed">
                Newsfeed
              </Nav.Link>
              <Nav.Link href="/profile" aria-label="Go to profile">
                Profile
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  logout();
                  window.location.href = '/auth/login';
                }}
                aria-label="Logout"
              >
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/auth/login" aria-label="Go to login">
                Login
              </Nav.Link>
              <Nav.Link href="/auth/register" aria-label="Go to register">
                Register
              </Nav.Link>
            </>
          )}
        </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
    */}
</div>
  );
};

export default Header;