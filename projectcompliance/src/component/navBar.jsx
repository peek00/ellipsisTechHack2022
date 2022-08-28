import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

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
                <Button  variant="dark" className="NavText " onClick={linkToHome}>HOME</Button>
                <Button variant="dark" className="NavText ms-5 " onClick={linkToComplianceChecker}>COMPLIANCE CHECKER</Button>
                <Button variant="dark" className="NavText ms-5" onClick={linkToStructuralChecker}>STRUCTURAL CHECKER</Button>
            </div>
        </div>
    )
};

export default NavBar;