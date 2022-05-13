import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => alert(data.firstName, data.lastName, data.email, data.phoneNumber) 
  console.log(errors);

  return (
    <div className='font-serif text-center'>
      <h1>Contact Us!</h1>
      <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
          <input className='my-2 border 3 border-black rounded-sm h-6 w-60 shadow-sm'{...register("firstName", { required: "This is required.", minLength: 2 })}
          placeholder="First Name" />
          <input className='border 2 my-3 border-black rounded-sm  h-6 w-60'{...register("lastName", { required: "This is required.", minLength: 2 })} placeholder="Last Name" />
          <input className='border 2 my-3 border-black rounded-sm  h-6 w-60'{...register("email", { required: "This is required.", pattern: /^\S+@\S+$/i, message: 'last name must be 2 characters'})} placeholder="Email" />
        <input className='border 2 my-3 border-black rounded-sm h-6 w-60'{...register("phoneNumber", { required: "This is required.", minLength: 10, maxLength: 10 })} placeholder="Phone Number" />
        <input className='border 2 rounded-full border-red-400 w-20 h-8 bg-orange-300 border-solid shadow-lg' type="submit" />
      </form>
    </div>

  )
}

export default ContactUs
