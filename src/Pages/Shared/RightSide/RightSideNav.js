import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);

  const gooleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(gooleProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error));
  }
  return (
    <div>
      <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
      <Button variant="outline-dark"><FaGithub/> Login With Github</Button>
    </ButtonGroup>
    <div className='mt-5'>
      <h5>Find on us</h5>
    <ListGroup>
      <ListGroup.Item className='mb-3'><FaFacebook/>  Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaWhatsapp/>  Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitch/> Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-3'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </div>
    <BrandCarousel></BrandCarousel>
    </div>
   
  );
};

export default RightSideNav;