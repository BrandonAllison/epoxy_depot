import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { Button, Form, Image, Nav } from 'react-bootstrap';
import Logo from '../Assets/logo.jpg';



const Home = () => {

// let name = props.data.first_name
// console.log("Here is the data in home", name)


    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', marginTop:'50px'}}>
            <Image src={Logo} style={{height:'250px'}}/>
            <div className="form" style={{width:'50%', padding:'20px', marginTop:'50px'}} >
           <p>Welcome to the <b>Epoxy Depot New Location Onboarding System</b>.  The onboarding walkthrough is help to ensure the marketing team has the most up to date and accurate information available to them to successfully setup marketing.  Please try to be complete and as accurate as possible when filling out the information as it only beneifits you.  Click on the button below to begin the onboarding process.  If at anytime you are unsure of how to answer, you can leave it blank (if not a required field) or contact support.</p> 
        </div>
        <Link to="/customers">
        <Button className="button"  style={{marginTop:'80px'}}>
                     Begin Onboarding
        </Button>
        </Link>
        </div>
    )
}

export default withRouter(Home) 