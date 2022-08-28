import {useNavigate} from "react-router-dom";
import HomeButtons from "../component/homeButtons";


import {Container, Row, Col} from 'react-bootstrap';
import splashImage from "../images/splash.jpg";
import Footer from "../component/footer";

function Home() {
    return(
            <div>
                <Row className="justify-content-center banner">
                    <h1 className="text-left homeTitle">XADEX</h1>
                </Row>
                <Row className="text-center mt-4 mb-4">
                    <p className="bigText">Say Hello.</p>
                    <p className="homeText">to a new and easy way to succeed in the financial world.</p>
                </Row>
                <HomeButtons/>
            
            </div>
       
    )
};

export default Home;