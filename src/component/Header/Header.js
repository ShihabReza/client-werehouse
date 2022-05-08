
import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import auth from '../../firebase.int';

const Header = () => {
  const [user] = useAuthState (auth)

  const hendelSingOut = () =>{
    signOut(auth)
  }
    return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
             <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>

                    <Nav.Link href="/detls">Detls</Nav.Link>
                    <Nav.Link href="/SingUp">SingUp</Nav.Link>
                    
                 
                   
                   {
                     user?
                     <Nav.Link onClick={hendelSingOut}>LogOut</Nav.Link>
                     :
                     <Nav.Link href="/Login">Login</Nav.Link>
                   
                   }
                   
                  
        </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;