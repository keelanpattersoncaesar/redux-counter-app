import React from 'react'
import CardContainer from '../components/CardContainer'
import Accordian from '../components/Accordian'

const AboutView = () => {
    return (
        <div>
            <CardContainer string={"About the App"} text={"FruityCounter is an easy and simple counter app. With the display of two counters, FruityCounter easily lets you track multiple values."} />

            <CardContainer string={"How To Use"} text={"njsncjnscjs"} />

            <CardContainer string={"Redux"} text={"njsncjnscjs"} />

            <CardContainer string={"TailWind CSS"} text={"njsncjnscjs"} />
            <Accordian />
        </div>
    )
}

export default AboutView
