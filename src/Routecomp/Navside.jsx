import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Navside() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
   <div>
     <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink className='class-link' active aria-current='page' st><Link to='/home' > Home</Link></MDBNavbarLink>
             <MDBNavbarLink className='class-link'><Link to='/ternary' >Ternery</Link></MDBNavbarLink>
             <MDBNavbarLink className='class-link' ><Link to='/login' >Login</Link></MDBNavbarLink>
             <MDBNavbarLink className='class-link' ><Link to='/login' >Login</Link></MDBNavbarLink>
             <MDBNavbarLink className='class-link' ><Link to='/login' >signup</Link></MDBNavbarLink>
             <MDBNavbarLink className='class-link' ><Link to='/login' >Login</Link></MDBNavbarLink>


             {/* <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
              Disabled
            </MDBNavbarLink> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
   
  </div>
)}
export default Navside