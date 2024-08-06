import React from 'react';
import './../Css/Footer.css';

const Footer = () =>{

return (
<div class="w-full min-h-screen flex items-center justify-center bg-black footer" >
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full text-7xl font-bold footer-title">
                <h1 class="w-full md:w-2/3 how">How can I help you. get
                    in touch</h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between footer-bottom">
                <p class="w-full md:w-2/3 text-gray-400 ensure">  To ensure you choose me as your developer, I'm dedicated to delivering high-quality solutions tailored to your needs. Let's build something great together! </p>
                <div class="w-44 pt-6 md:pt-0">
                    <a  href="" class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center button-cts" >Send an Email</a>
                </div>
            </div>
        </div>
    </div>
)
}
export default Footer