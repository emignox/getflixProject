import { CDBModalFooter, CDBLink, CDBBox, CDBBtn, CDBIcon} from 'cdbreact';
import './footer.css'

export const Footer = () => {
  return (
    <CDBModalFooter className="shadow">        
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <CDBBox display="flex" className="mt-4" alignItems="center">
           
              <CDBBox display="flex" className="mt-5">
                <CDBBtn flat color="white">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="white" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="white" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Streamify
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink to="../privacy">Privacy Policy</CDBLink>
              <CDBLink to="/">Cookies</CDBLink>
              <CDBLink to="/">Profil</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink to="/">Sign Up</CDBLink>
              <CDBLink to="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Pages
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBLink to="/">Movie</CDBLink>
              <CDBLink to="/">Tv Show</CDBLink>
              <CDBLink to="/">Upcomming</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Streamify, 2023. All rights reserved.</small>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer
