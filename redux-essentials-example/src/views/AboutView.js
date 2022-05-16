import React from 'react'
import CardContainer from '../components/CardContainer'
import Accordian from '../components/Accordian'

const AboutView = () => {
    return (
    <div className='font-Roboto text-center bg-gradient-to-r from-orange-200 to-red-300'>
      <h1 className='text-7xl mb-10'>About Fruit Counter</h1>
        <div className='flex flex-row p-10 m-10'>
         <CardContainer string={"About the App"} text={"FruityCounter is an easy and simple counter app. With the display of two counters, FruityCounter easily lets you track multiple values."} />
         <CardContainer string={"How To Use"} text={"Users are able to view a number which starts at the number '0' and is able to change it's value by clicking different buttons such as: plus, minus, async, add if odd, add if even buttons." } />
         <CardContainer string={"Redux"} text={"The application is based on one single state that is stored in a redux store. State is then change through reducers and slice that contains different actions such as adding and subtracting numbers from original state."} />
         <CardContainer string={"TailWind CSS"} text={"njsncjnscjs"} />
         {/* <Accordian /> */}
        </div>  
    </div>  
    )
}

export default AboutView
