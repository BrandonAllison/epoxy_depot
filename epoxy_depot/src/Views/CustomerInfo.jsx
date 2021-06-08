import {useState, useEffect} from 'react'
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";



const CustomerInfo = () => {

    // const [client, setClient] = useState([]);

    // useEffect(() => {
    //     console.log('useEffect Hook!!!');
    //     let db = firebase.firestore();
    //     db.collection('clients').orderBy('business_name', 'asc').where('id' === props.id).onSnapshot(snapshot => {
    //       console.log('Firebase Snap!');
    //       setClient(snapshot.docs.map(doc => {
    //         return {
    //         //   key: doc.id,
    //         //   phone : doc.data().business_phone,
    //         //   name: doc.data().business_name,
    //         //   logo: doc.data().logo_url
    //         }
    //       }))
    //     })
    //     console.log(props)
    
    //   }, []);



return(

    <div>
        
    </div>
)
}

export default CustomerInfo 