import {useNavigate} from "react-router-dom";
import HomeButtons from "../component/homeButtons";


import {Container, Row, Col} from 'react-bootstrap';


function Home() {
    return(
            <div>
                <Row className="justify-content-center banner">
                    <h1 className="text-center mt-4 mb-4">Homepage</h1>
                </Row>
                <Row className="text-center mt-4 mb-4">
                    <p>Welcome to XADEX, a new solution targetted at helping your company succeed in the financial world.</p>
                </Row>
                <HomeButtons/>
            </div>
       
    )
};

export default Home;