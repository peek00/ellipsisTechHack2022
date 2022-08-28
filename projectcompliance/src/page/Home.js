import {useNavigate} from "react-router-dom";
import HomeButtons from "../component/homeButtons";

function Home() {



    return(
  
        <div>
            <h1>Homepage</h1>
            <p>Welcome to XADEX, a new solution targetted at helping your company succeed in the financial world.</p>
            <HomeButtons/>
        </div>
       
    )
};

export default Home;