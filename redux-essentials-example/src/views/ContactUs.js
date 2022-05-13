import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)

  return (
    <div>
      <h1>Contact Us!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: "This is required." })} placeholder="First Name" />
        <input {...register("lastName", { required: "This is required." })} placeholder="Last Name" />
        <input {...register("email", { required: "This is required." })} placeholder="Email" />
        <input {...register("phoneNumber", { required: "This is required.", min: 10 })} placeholder="Phone Number" />
        <input type="submit" />
      </form>
    </div>

  )
}

export default ContactUs
