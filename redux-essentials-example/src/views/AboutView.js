import React from 'react'
import CardContainer from '../components/CardContainer'

const AboutView = () => {
    return (
        <div>
         <CardContainer string={"About the App"} text={"njsncjnscjs"} />
         <CardContainer string={"How To Use"} text={"Users are able to view a number which starts at the number '0' and is able to change it's value by clicking different buttons such as: plus, minus, async, add if odd, add if even buttons." } />
         <CardContainer string={"Redux"} text={"The application is based on one single state that is stored in a redux store. State is then change through reducers and slice that contains different actions such as adding and subtracting numbers from original state."} />
        <CardContainer string={"TailWind CSS"} text={"njsncjnscjs"} />
        </div>    
    )
}

export default AboutView
