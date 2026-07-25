import React from 'react'
import { useParams } from 'react-router'

export default function City() {
    const { city, country, lang, edit } = useParams();
    // let { "*" : splat } = useParams();

    // Also known as "catchall" and "star" segments. If a route path pattern ends with /* then it will match any characters following the /, including other / characters.
    
    // console.log(splat);
    
  return (
    <div>
      This is the City like {city}
      This is my {country}
      this is the language that you are selected : {lang}
      {edit? "edited" : "not edited"}
    </div>
  )
}
