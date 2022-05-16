import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => alert(JSON.stringify(data))
  // const jsonObject = data => JSON.stringify(data)
  // console.log(jsonObject);

  return (
    <div className='bg-gradient-to-r from-orange-200 to-red-300 min-h-screen'>
    <div className='font-Roboto text-center'>
      <h1 className='text-7xl mb-10 '>Contact Us!</h1>
      <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
          <input className='my-2 border 3 border-black rounded-sm h-6 w-60 shadow-sm'{...register("firstName", 
          { required: "This is required.",
           minLength: {
             value: 2,
             message: 'Must have at least 2 characters'
           } 
          })}
          placeholder="First Name" />
          <p className='text-red-500'>{errors.firstName?.message}</p>
          <input className='border 2 my-3 border-black rounded-sm  h-6 w-60'{...register("lastName", 
          { required: "This is required.", 
          minLength: {
            value: 2,
          message: 'Must have at least 2 characters' 
        }
        })} placeholder="Last Name" />
          <p className='text-red-500'>{errors.lastName?.message}</p>
          <input className='border 2 my-3 border-black rounded-sm  h-6 w-60'{...register("email", { required: "This is required.", 
          pattern: {
            value: /^\S+@\S+$/i , 
          message: 'Must be a valid email address'
          }
          })} placeholder="Email" />
          <p className='text-red-500'>{errors.email?.message}</p>
        <input className='border 2 my-3 border-black rounded-sm h-6 w-60'{...register("phoneNumber", 
        { required: "This is required.", 
        minLength: {
          value: 10,
        message: 'Must have at least 10 characters'},
        maxLength: {
          value: 10,
        message: 'Must be less than 10 characters',
        }
        })} placeholder="Phone Number" />
        <p className='text-red-500'>{errors.phoneNumber?.message}</p>
        <input className='border 2 rounded-full border-red-400 w-20 h-8 bg-orange-300 border-solid shadow-lg' type="submit" />
      </form>
    </div>
    </div>

  )
}

export default ContactUs
