import React, { useState } from 'react';
import Contact from './Contact';
import { IoArrowBackOutline } from 'react-icons/io5';
import { logo } from '../utils';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Swal from 'sweetalert2';

const Reservationtable = () => {
    const [response, setResponse] = useState(null);
    const navigate = useNavigate();

    const homeClick = () => {
        navigate('/');
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResponse("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "162ea516-ec1b-4b34-b77e-94aeae7d4991");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const result = await response.json();

            if (result.success) {
                setResponse("Thank you! Your submission has been received. We will let you know as soon as possible.");
            } else {
                setResponse("Sorry, something went wrong. Please try again.");
            }
        } catch (error) {
            setResponse("An error occurred. Please try again.");
            console.error('Error:', error);
        }
    };

    return (
        <div className='bg-coffeeMenu'>
            <Helmet>
                <style>{`
                @font-face {
                    font-family: 'Gambetta';
                    src: url('../../fonts/Gambetta-Light.woff2') format('woff2'),
                        url('../../fonts/Gambetta-Light.woff') format('woff');
                    font-weight: 300;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'GambettaBold';
                    src: url('../../fonts/Gambetta-Bold.woff2') format('woff2'),
                        url('../../fonts/Gambetta-Bold.woff') format('woff');
                    font-weight: 700;
                }
                `}</style>
            </Helmet>
            <div className='flex h-72 items-center justify-between px-10'>
                <div className='text-textColor'>
                    <IoArrowBackOutline className='h-14 w-14 cursor-pointer' onClick={homeClick} />
                </div>
                <div className='h-72 w-72 flex-1 flex justify-center'>
                    <img src={logo} className='h-full w-full object-contain' alt='Logo' />
                </div>
                <div className='h-52 w-52'></div>
            </div>
            <Contact />
            <div className='flex items-center justify-center flex-col gap-7'>
                <span className='text-textColor text-3xl' style={{ fontFamily: 'Gambetta', fontWeight: 300 }}>
                    Book Your Spot for an Unforgettable Culinary Journey
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100" height="100">
                    <circle cx="32" cy="32" r="8" fill="#FFC107"/>
                    <circle cx="32" cy="12" r="10" fill="#e3dac6"/>
                    <circle cx="50" cy="22" r="10" fill="#e3dac6"/>
                    <circle cx="50" cy="42" r="10" fill="#e3dac6"/>
                    <circle cx="32" cy="52" r="10" fill="#e3dac6"/>
                    <circle cx="14" cy="42" r="10" fill="#e3dac6"/>
                    <circle cx="14" cy="22" r="10" fill="#e3dac6"/>
                </svg>
                <div className='border text-textColor w-[800px]'></div>
            </div>
            <section className='pb-14 pt-6'>
                <div className='flex items-center justify-center px-96 w-full mb-3'>
                    <span className='text-secondtextColor text-xl text-center'>
                        For private event enquiries, or for any other Eupho House enquiries, please email us at Eupho_happyResturant@gmail.com. Our bookings & enquiries team will get in touch with you within 2 business days.
                    </span>
                </div>
                {response ? (
                    <div className='flex items-center justify-center pt-3'>
                        <span className='text-secondtextColor text-center'>{response}</span>
                    </div>
                ) : (
                    <form onSubmit={onSubmit}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center justify-center'>
                                <input placeholder='First Name' type='text' required className='bg-coffeeMenu text-textColor text-5xl outline-none text-center' name='Firstname' style={{ fontFamily: 'Gambetta', fontWeight: 300 }} />
                                <input placeholder='Last Name' type='text' className='bg-coffeeMenu text-textColor text-5xl outline-none text-center' name='Lastname' style={{ fontFamily: 'Gambetta', fontWeight: 300 }} />
                            </div>
                            <div className='flex items-center justify-center'>
                                <input maxLength={10} placeholder='Phone Number' required type='text' name='Phonenumber' className='bg-coffeeMenu text-textColor text-5xl outline-none text-center' style={{ fontFamily: 'Gambetta', fontWeight: 300 }} />
                            </div>
                            <div className='flex items-center justify-center w-full'>
                                <input size={30} placeholder='Email Address' required type='text' name='Email' className='bg-coffeeMenu text-textColor text-5xl outline-none text-center' style={{ fontFamily: 'Gambetta', fontWeight: 300 }} />
                            </div>
                            <div>
                                <input type='text' size={130} placeholder='Tell us more about your event needs here' name='message' className='bg-coffeeMenu text-textColor text-2xl outline-none text-center' style={{ fontFamily: 'Gambetta', fontWeight: 300 }} />
                            </div>
                            <div className='flex items-center justify-center gap-1'>
                                <input type='checkbox' required />
                                <label className='text-textColor'>I agree to the Cookie Policies and Privacy Policy</label>
                            </div>
                        </div>
                        <div className='flex items-center justify-center pt-9'>
                            <div className='border text-textColor w-[800px]'></div>
                        </div>
                        <div className='flex items-center justify-center pt-8 gap-5'>
                            <span className='text-secondtextColor text-2xl'>&#10070;</span>
                            <input type='submit' value="SUBMIT" className='text-secondtextColor text-2xl cursor-pointer' />
                            <span className='text-secondtextColor text-2xl'>&#10070;</span>
                        </div>
                    </form>
                )}
            </section>
            <Footer />
        </div>
    );
}

export default Reservationtable;
