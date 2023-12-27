import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
    const [data, setData] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }

    const submit = async () => {
        if (!name || !email || !message) {
            alert('please fill all the fields')
        }

        else {
            try {
                let date = new Date().toLocaleString();
                let myData ={Name:name , Email:email , DateTime:date , Message:message} 
                axios.post(`${process.env.REACT_APP_GOOGLE_SHEETS_KEY}` , myData).then((response)=>{
                    alert('Message has been sent!');
                    setData({...data , name:'' , email:'' , message:''})
                })
            } catch (err) {
                alert(err);
            }
        }

    }

    return (
        <div id="contact" className='pt-5 pb-4'>
            <div className="container">
                <div className='h2 text-light'><span style={{ color: 'var(--text-color)' }}>C</span>ontact</div>
                <div className="row">

                    <div className="col-12 col-lg-6">

                        <div>
                            <input type="text"
                                placeholder='Name'
                                name='name'
                                className="form-control mb-2"
                                value={name}
                                onChange={handleChange}
                                autoComplete='off'
                            />

                            <input type="email"
                                placeholder='Email'
                                name='email'
                                className="form-control mb-2"
                                value={email}
                                onChange={handleChange}
                                autoComplete='off'
                            />

                            <textarea name="message"
                                cols="30" rows="4" className='form-control' placeholder='Message'
                                value={message}
                                onChange={handleChange}
                            ></textarea>

                            <button className="btn btn-lg mt-3"
                                    onClick={submit}
                                    type='submit'
                            >Send</button>

                        </div>

                    </div>

                    <div className=' col-12 col-lg-6 text-white ps-lg-5 pt-md-4 pt-lg-0'>
                        <div className='py-2'>
                            <span className='pe-2' style={{ color: 'var(--text-color)' }}><i className="fa-regular fa-envelope fs-3 fw-bold"></i></span>
                            muhammad.abbas.edu.now@gmail.com
                        </div>

                        <div className='py-2'>
                            <span className='pe-2' style={{ color: 'var(--text-color)' }}><i className="fa-solid fa-phone fs-3"></i></span>
                            03179734653
                        </div>

                        <div className='social-links'>
                            <Link to="https://www.facebook.com/profile.php?id=61554591695079&mibextid=ZbWkwL" target='blank'>
                                <i className="fa-brands fa-facebook my-4 mx-2 fs-1"></i>
                            </Link>

                            <Link to="https://wa.link/r1x509" target='_blank'>
                                <i className="fa-brands fa-whatsapp my-4 mx-2 fs-1"></i>
                            </Link>

                            <Link to="https://www.linkedin.com/in/muhammad-abbas-ab88a124a" target='_blank'>
                                <i className="fa-brands fa-linkedin my-4 mx-2 fs-1"></i>
                            </Link>
                        </div>

                        <a href="M.Abbas.pdf" download><button className="btn btn-lg">CV
                            <span><i className="fa-solid fa-file-arrow-down ps-3 fs-3"></i></span>
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;