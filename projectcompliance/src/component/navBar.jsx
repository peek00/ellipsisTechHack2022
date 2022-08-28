import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from 'react-bootstrap';


function NavBar() {
    const navigate = useNavigate();

    const linkToHome = () => {
        navigate('/');
    };

    const linkToComplianceChecker = () => {
        navigate('/complianceinput');
    };

    const linkToStructuralChecker = () => {
        navigate('/structuralinput');
    };


    return (
        
        <div className="NavBar">
            <div className="justify-items-center" > 
                           
                <Row>
                    <Col lg={1}>
                        <h1 >XADEX</h1>
                    </Col>
                    <Col lg={6}>
                    <Button variant="dark" className="NavText" onClick={linkToHome}>HOME</Button>
                    <Button variant="dark" className="NavText" onClick={linkToComplianceChecker}>COMPLIANCE CHECKER</Button>
                    <Button variant="dark" className="NavText" onClick={linkToStructuralChecker}>STRUCTURAL CHECKER</Button>
                    </Col>
                </Row>
            

            </div>
        </div>
     
    )
};

export default NavBar;