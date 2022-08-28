import {useNavigate} from "react-router-dom";


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
            <button onClick={linkToHome}>Home</button>
            <button onClick={linkToComplianceChecker}>Compliance Checker</button>
            <button onClick={linkToStructuralChecker}>Structural Checker</button>
        </div>
    )
};

export default NavBar;