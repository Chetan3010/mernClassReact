import React, { useState } from 'react'

const Contact = () => {
  const [errors, setErrors] = useState({})
  
  const [contactForm, setContactForm] = useState({
    username: '',
    email: '',
    address: '',
    country: '',
    gender: '',
    agreement: false
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setContactForm(prevState => ({
      ...prevState,
      [name]: e.target.type === "checkbox" ? e.target.checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // !contactForm.username ? setErrors({username: "Enter your username"}) : delete errors.username
    // if(!errors.username) console.log(contactForm);
  }

  return (
    <div className="flex px-14 w-full items-center justify-center">
      <div className='w-full flex items-center justify-center'>
        <div className='pt-5'>
          <h1 className='text-2xl italic font-semibold w-full flex justify-center'>Contact Us</h1>
          <form className='pt-4' noValidate>

            <div className='pb-2'>
              <label htmlFor="username" className=' text-lg'>Username</label><br />
              <input type="text" id='username' name='username'
                value={contactForm.username}
                onChange={handleChange}
                className='border-2 border-green-400 p-2 rounded-md w-60'
              formNoValidate/>
            </div>

            <div className='pb-2'>
              <label htmlFor="email" className='text-lg'>Email</label><br />
              <input type="email" id='email' name='email'
                value={contactForm.email}
                onChange={handleChange}
                className='border-2 border-green-400 p-2 rounded-md w-60'
              />
            </div>

            <div className="pb-2">
              <label htmlFor="address" className='text-lg'>Address</label><br />
              <textarea cols={10} rows={5} id='address' name='address'
                value={contactForm.address}
                onChange={handleChange}
                className='border-2 border-green-400 p-2 rounded-md w-60'
              />
            </div>

            <div className="pb-2">
              <label htmlFor="country">Country</label><br />
              <select name="country" id="country"
                value={contactForm.country}
                onChange={handleChange}
                className='border-2 border-green-400 p-2 rounded-md w-60'>
                <option>SELECT YOUR COUNTRY</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="japan">Japan</option>
              </select><br />
            </div>

            <div className="pb-2">
              <label >Gender</label><br />
              <input value="male"
                onChange={handleChange} className='' type="radio" name="gender" id="male" />
              <label className='p-2' htmlFor="male">Male</label>
              <input value="female"
                onChange={handleChange} className='' type="radio" name="gender" id="female" />
              <label className='p-2' htmlFor="female">Female</label>
            </div>

            <div className="pt-2">
              <input 
                onChange={handleChange}
                value={true} 
              className='' type="checkbox" name="agreement" id="agreement" />
              <label className='p-2' htmlFor="agreement">Accept terms and conditions.</label>
            </div>

          </form>
          <div className='flex items-center justify-center'>
            <button onClick={handleSubmit} className='w-40 cursor-pointer flex justify-center items-center bg-green-500 m-4 p-3 border-[1px] border-zinc-900 text-white rounded-md text-1xl uppercase font-semibold hover:bg-green-400' >Submit</button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact