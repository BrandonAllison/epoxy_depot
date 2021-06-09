import {useState, useEffect} from 'react'
import { Button, Form, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';


const Sales_Management = () => {
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
                 <h2>Step 2 : Operational Information</h2>
                 <Form.Group controlId="formBasicBName">
                     <Form.Label>Business Hours</Form.Label>
                     {/* <Form.Control type="text" placeholder="Business Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_name: e.target.value})} /> */}
                 </Form.Group>
            
                 {/* <Form.Group controlId="formBasicAddress">
                     <Form.Label>Location Name</Form.Label>
                     <Form.Control type="text" placeholder="Location Name" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, location_name: e.target.value})} />
                 </Form.Group> */}
                 {/* <Form.Group controlId="formBasicLogo">
                     <Form.Label>Logo URL</Form.Label>
                     <Form.Control type="text" placeholder="Logo Url" style={{border:'2px solid #001430'}} onChange={(e) => setForm({...form, business_logo: e.target.value})} />
                 </Form.Group> */}
                    <Link to="/customers">
                    <Button className="button"  style={{marginRight:'15px'}}>
                        Back
                    </Button>
                </Link>
                {/* <Link to="/sales">
                    <Button className="button"  style={{marginRight:'15px'}}>
                        Next
                    </Button>
                </Link> */}
             </Form>
 
         </div>
 
     )}

export default Sales_Management