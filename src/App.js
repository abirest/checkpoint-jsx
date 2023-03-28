
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBBtn, } from 'mdb-react-ui-kit';


function App() {
  return (
    <div className="App">
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="7" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <ProfilePhoto
                      style={{ width: '200px', borderRadius: '10px' }}
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                  <FullName />
                  <Address />
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-1">abirbelhaj5@gmail.com</p>
                  <p className="text-muted mb-1">www.linkedin.com/in/abir-ben-el-haj</p>
                  <p className="text-muted mb-1">+216 21 139 565</p>
                  <p className="text-muted mb-1">+216 72 139 125</p>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Follow</MDBBtn>
                      <MDBBtn className="flex-grow-1">See profile</MDBBtn>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Relations</p>
                        <p className="mb-0">152</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Following</p>
                        <p className="mb-0">450</p>
                      </div>

                      <div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Photos</p>
                        <p className="mb-0">152</p>
                      </div>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Videos</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">103</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Comments</p>
                        <p className="mb-0">1002</p>
                      </div>
                    </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    
  );
}


export default App;
