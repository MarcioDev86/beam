import React, {Suspense} from 'react';
import '../../App.css';
//import Navigation from './Navigation';
import beamImg1 from '../../images/beamheroimage1.png';
//import LazyHero from 'react-lazy-hero';
//import DirectCodeEntry from './DirectCodeEntry';
//import AudoCodeEntry from './AudoCodeEntry';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../layout/Footer';
import Device from '../dropdowns/Device';
import Brand from '../dropdowns/Brand';
import Store from '../../store/Store';
//import ShowCodes from './ShowCodes';
import beamLogoWhite from '../../images/beam_logo_white.png';
import { Spinner } from 'reactstrap';
import UserGuide from '../../pdf/i580_User_Guide_V1-0_20190521_EN.pdf';

const Carousel = React.lazy(() => import('../layout/MyCarousel'));
const ShowCodes = React.lazy(() => import('../layout/ShowCodes'));
const LazyHero = React.lazy(() => import('react-lazy-hero'));

function Home() {
  return (
    <div>
        <section className="sec1">

          <Suspense fallback={
            <div width="100%" style={{textAlign: "center"}}>
              <Spinner type="grow" style={styleLoading} />
              <Spinner type="grow" style={styleLoading} />
              <Spinner type="grow" style={styleLoading} />
              <Spinner type="grow" style={styleLoading} />
            </div>
          }>
            <LazyHero imageSrc={beamImg1} opacity={0} parallaxOffset={100} className="lazyImg">
              <img src={beamLogoWhite} width="25%" align="right" className="beamlogowhite" alt="logo-whites"/>
            </LazyHero>
          </Suspense>
          
        </section>

        <section className="sec2">
          <Container>
            <Store>
              <Row>
                <Col>
                  <h1 style={{ width:"100%", marginTop:"2%"}}>Beam Smart Remote i580</h1>
                  <p style={{ width:"100%", marginTop:"2%", textAlign: "left"}}>
                    We suggest using the Beam app to program your remote. However, if you would like to 
                    program the remote using the Code List, please use the code finder tool below to quickly 
                    find compatible codes for the different devices in your home. If there are several codes 
                    available for your device, test each one and select the code that is the most compatible 
                    with your device. 
                    <br />
                    <br />
                    For more information, please refer to “PROGRAMMING USING THE CODE LIST” 
                    on <a href={`${UserGuide}#page=8`} target="_blank" rel="noopener noreferrer">page 07 of the user guide.</a>
                  </p>
                </Col>
              </Row>

              <Row style={{marginLeft: "10%", marginRight: "10%"}}>
                <Col xl="6" style={{marginBottom: "2%"}}>
                    <Device />
                </Col>
                <Col xl="6" style={{marginBottom: "2%"}}>
                  <Brand />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Suspense fallback={
                      <div width="100%">
                        <Spinner type="grow" style={styleLoading} />
                        <Spinner type="grow" style={styleLoading} />
                        <Spinner type="grow" style={styleLoading} />
                        <Spinner type="grow" style={styleLoading} />
                    </div>}>
                    <ShowCodes />
                  </Suspense>
                </Col>
              </Row>
            </Store>
          </Container>

          <Suspense fallback={
            <div width="100%">
              <Spinner type="grow" style={styleLoading} />
              <Spinner type="grow" style={styleLoading} />
              <Spinner type="grow" style={styleLoading} />
              <Spinner type="grow" style={styleLoading} />
            </div>
          }>
            <Carousel />
          </Suspense>

          <Footer />
        </section>

    </div>
  );
}

const styleLoading = {
  color: "#A67EB1",
  width: '5rem', 
  height: '5rem'
}

export default Home;