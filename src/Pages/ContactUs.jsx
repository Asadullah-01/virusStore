import React, {useEffect, useState} from 'react';
import "../Pages/Css/ContactUS.css";


const ContactUs = () =>{
    const [formData , setFormData] = useState({name: "",email:"",message:""})

    const  handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    useEffect(() => {
        window.scroll(0,0)
    }, []);

    return (
        <div className="contactus-container">
            <div className="contact-us">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <p>Phone: +92 341 6859641</p>
                    <p>Email: asadullah84888@gmail.com</p>
                    <p>Address: House No 45, Al-Jannat Face 2</p>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;