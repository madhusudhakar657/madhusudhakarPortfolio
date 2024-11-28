import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false)

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(Object.values(formData).every(each => each !== null))
    console.log(Object.keys(formData))


    if (Object.values(formData).some(each => each !== '')) {
      setErrorMessage('')
      emailjs.send(
        "service_o0eswlg",
        "template_rzmg0ig",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          team: "Hiring Team"
        },
        "hMsSTC1KXpJ4BGoX0",
      ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Your message has been sent successfully!');
        setLoading(false)
        setFormData({name: '', email: '', message: '', subject: '' });
      }).catch((err) => {
        console.error('FAILED...', err);
        setLoading(false)
      });
    } else {
      setErrorMessage('Please fill all the Required fields');
      setLoading(false)
    }
  };
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 title-container">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development Projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:chakalimadhusudhakar.dev@gmail.com" className='hover:underline'>
                chakalimadhusudhakar.dev@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <a href={`tel:+917288018628`} className="text-blue-600 hover:underline">
                +917288018628
              </a>

            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>Moti Nagar, Hyderabad, Telangana, 500044</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form
              onSubmit={handleSubmit}
              className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name<span className='text-red-500 p-1'>*</span></label>
                <input id="name" type="text"
                  value={formData.name}
                  required
                  onChange={(e) => handleChange(e, "name")}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter You Name' />
              </div>
              <div>
                <label htmlFor="subject" className='block mb-2'>Subject<span className='text-red-500 p-1'>*</span></label>
                <input type="subject" id="subject"
                  value={formData.subject}
                  required
                  onChange={(e) => handleChange(e, "subject")}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter You subject' />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email<span className='text-red-500 p-1'>*</span></label>
                <input type="email" id="email"
                  value={formData.email}
                  required
                  onChange={(e) => handleChange(e, "email")}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter You Email' />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message<span className='text-red-500 p-1'>*</span></label>
                <textarea type="text" id="message"
                  value={formData.message}
                  required
                  onChange={(e) => handleChange(e, "message")}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  rows="5"
                  placeholder='Enter You Message' />
              </div>
              <button type="submit" className="flex bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                {loading ?
                  <p className="border-black rounded-full border-2 border-b-0 border-l-0 animate-spin h-6 w-6">
                  </p> : ''}
                <span className='px-1'>{loading ? 'Sending...' : 'Send'}</span>
              </button>
            </form>
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact