import React,{useState} from 'react'
import Footer from '../Footer';

const Contact = () => {

    const [data,setdata]= useState({
        fullname:"",
        email:"",
        phone:"",
        message:"",
    
    });
    const InputEvent =(event)=>{
        const {name,value}=event.target;
        setdata((preval)=>{
         return{
             ...preval,
             [name]:value,
         };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Yor name ${data.fullname} and email  ${data.email} your phone number  ${data.phone} and message  ${data.message}`);
    };
    
    return (
        <div className="contact-form">
            <h1 className="text-center">Contact Us</h1>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
     <form>
            Name
            <input class="form-control" 
            type="text" 
            name="fullname"
            value={data.name}
            onChange={InputEvent}
            placeholder="Your Name" 
            aria-label="deafult input example"
            />
            Email<input class="form-control" 
            type="email"
            name="email"
            value={data.email}
            onChange={InputEvent} 
            placeholder="Your Email" 
             aria-label="deafult input example"
             />
            Phone-Number<input class="form-control" 
            type="number" 
            name="phone"
            value={data.phone}
            onChange={InputEvent}
            placeholder="Your Phone Number" 
            aria-label="deafult input example"
            />
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
             value={data.message}
             name="message"
             onChange={InputEvent}
             ></textarea>
             </div>
             <div className="mt-3">
            
             <button type="button" class="btn btn-outline-primary" id="submit" onClick={formSubmit}>Submit here</button>
            
             </div>
             </form>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
      
    )
}

export default Contact
