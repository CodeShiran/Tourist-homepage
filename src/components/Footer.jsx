import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600  py-8 px-4'>
            <div className='font-bold after:uppercase pt-2'>
                <h6>Solutions</h6>
                <ul>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Booking</li>
                    <li className='py-1'>Flight</li>
                    <li className='py-1'>Cruises</li>
                    <li className='py-1'>Ground</li>
                </ul>
            </div>
            <div className='font-bold after:uppercase pt-2'>
                <h6>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Tours</li>
                    <li className='py-1'>Refund</li>
                </ul>
            </div>
            <div className='font-bold after:uppercase pt-2'>
                <h6>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div className='font-bold after:uppercase pt-2'>
                <h6>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to Our newsletters</p>
                <p className='py-4'>The Latest deals, articles and resources sent to your inbox weekly</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter  Email...' name="" id="" />
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1400px] mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p  className='py-4'>2025 Experiences, LLC. All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-4xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TiSocialPinterest size={30} />
            </div>
        </div>
    </div>
  )
}

export default Footer