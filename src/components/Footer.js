import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
function Footer() {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4 footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">COVID-19 Tracker</h5>
              <p>
                Here you can find all the resources to contact us 
                we would be happy to get back to you
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Contact</h5>
              <ul>
                <li className="list-unstyled">
                  Email: covid-19-tracker@gmail.com
                </li>
                <li className="list-unstyled">
                  Phone num: +212525617490
                </li>
                <li className="list-unstyled">
                  Address: 5 Rue Aïn Harrouda Casablanca 20250 Morrocco
                </li>
                <li className="list-unstyled">
                  Fax: +44 161 999 8888
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: COIVID-19 Tracker
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default Footer
