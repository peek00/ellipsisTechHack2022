import {useNavigate} from "react-router-dom";

import {Container, Row, Col} from 'react-bootstrap';
import Button from "react-bootstrap/Button";

function HomeButtons() {
    const navigate = useNavigate();

    const linkToComplianceChecker = () => {
        navigate('/complianceinput');
    };

    const linkToStructuralChecker = () => {
        navigate('/structuralinput');
    };


    return(
        <Row className="text-center mt-4 mb-4" >
            <div>
                <Button variant="light" className="ms-1" onClick={linkToComplianceChecker}>Compliance Checker</Button>
                <Button variant="light" className="ms-1" onClick={linkToStructuralChecker}>Structural Checker</Button>
            </div>
        </Row>
       
    )
};

export default HomeButtons;