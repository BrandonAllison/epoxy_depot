import {useState, useEffect} from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


const Customer_Management = () => {


    const [form,setForm] = useState({
       business_name:'',
       business_phone:''
    });


    // const handleSubmit = async(e)=>{ 
    //     e.preventDefault();
    //     let db = firebase.firestore();
    //     db.collection("clients").doc().set({
    //       business_name: form.business_name,
    //       business_phone: form.business_phone,
    //       contact_name: form.contact_name,
    //       logo_url: form.business_logo,
    //       location_name: form.location_name,
    //       address:form.address

    //   })
    //   .then(function() {
    //     document.form.reset(); 
    //       console.log("Document successfully written!");
        
    //   })
    //   .catch(function(error) {
    //       console.error("Error writing document: ", error);
    //   });
    // }

   //This Form Needs handlesubmit added on submit

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Form className="form" name="form" style={{background:'white', padding: '20px 30px 40px 30px', borderRadius: '8px', fontWeight:'bold', width:'80%', marginTop:'50px'}} >
                <h2>Step 1 : General Information</h2>
                <Form.Group controlId="formBasicBName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Business Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_name: e.target.value})} />
                </Form.Group>
                
                <Form.Group controlId="formBasicBPhone">
                    <Form.Label>Business Phone</Form.Label>
                    <Form.Control type="text" placeholder="Business Phone" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_phone: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicContact">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control type="text" placeholder="Contact Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, contact_name: e.target.value})} />
                </Form.Group>

                
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, address: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, address: e.target.value})} />
                </Form.Group>

                <Form.Group controlId="formBasicState">
                <Form.Label>State</Form.Label>
                <Form.Control name="state" as="select" size="1" style={{border:'1px solid black', padding:'5px', borderRadius:'5px'}}>
                <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">Dist of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="Zip" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, address: e.target.value})} />
                </Form.Group>

                {/* <Form.Group controlId="formBasicAddress">
                    <Form.Label>Location Name</Form.Label>
                    <Form.Control type="text" placeholder="Location Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, location_name: e.target.value})} />
                </Form.Group> */}
                {/* <Form.Group controlId="formBasicLogo">
                    <Form.Label>Logo URL</Form.Label>
                    <Form.Control type="text" placeholder="Logo Url" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_logo: e.target.value})} />
                </Form.Group> */}

                {/* <Link to="/customers">
                    <Button className="button"  style={{marginRight:'15px'}}>
                        Back
                    </Button>
                </Link> */}
                <Link to="/sales">
                    <Button className="button"  style={{marginRight:'15px'}}>
                        Next
                    </Button>
                </Link>
                
            </Form>

        </div>

    )}

export default Customer_Management