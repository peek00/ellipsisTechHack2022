import {useNavigate} from "react-router-dom";

function HomeButtons() {
    const navigate = useNavigate();

    const linkToComplianceChecker = () => {
        navigate('/complianceinput');
    };

    const linkToStructuralChecker = () => {
        navigate('/structuralinput');
    };


    return(
  
        <div>
            <h1>Homepage</h1>
            <p>Welcome to XADEX, a new solution targetted at helping your company succeed in the financial world.</p>
            <button onClick={linkToComplianceChecker}>Compliance Checker</button>
            <button onClick={linkToStructuralChecker}>Structural Checker</button>

        </div>
       
    )
};

export default HomeButtons;