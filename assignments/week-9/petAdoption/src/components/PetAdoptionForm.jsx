
import React, { useState } from 'react'
import { validation } from '../utils/validation';
import AdopterData from './AdopterData';

const PetAdoptionForm = ({color}) => {
  const [values, setValues] = useState({
    petName : "",
    petType : "Dog",
    breed : "",
    name : "",
    email : "",
    phone : ""
  });

  const { petName, petType, breed, name, email, phone } = values;

  const [showTable, setShowTable] = useState(false);

  const [data, setData] = useState([]);

  const [errors, setErrors] = useState({
    petName : "",
    breed : "",
    name : "",
    email : "",
    phone : ""
  });

  function handleOnChange(e) {
    const {name, value} = e.target;

    setValues((prev) => ({
      ...prev,
      [name] : value,
    }))
    

    let errorCopy = {...errors};
    const isError = validation(name, value, errorCopy)
    setErrors(isError)
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!petName || !breed || !name || !email || !phone ) {
      alert("please fill all the field while submitting");
      return;
    }

    
    const hasError = Object.values(errors).some((val) => val)
    if (hasError) {
      alert("Please fill the form correctly");
      return;
    }
    
    const newData = {petName, petType, breed, name, email, phone}
    setData((prev) => ([...prev, newData]))
    setShowTable(true);

    setValues({
    petName : "",
    petType : "Dog",
    breed : "",
    name : "",
    email : "",
    phone : ""
    });

    setErrors({
    petName : "",
    breed : "",
    name : "",
    email : "",
    phone : ""
    })
    
  }
  

function handleGoBack() {
  setShowTable((prev) => !prev)
}
  if (!showTable) {
    const style = {height : 100, textAlign : "start"}
    return (
      <div style={{display : "flex", justifyContent : "center"}}>
        <form style={{
          width : 550,
          backgroundColor : `${color}`,
          marginTop : 30,
          padding : 20,
          borderRadius : 10
        }}>
          <div style={style}>
          <label htmlFor="petName">Pet name</label>
          <input onChange={(e) => handleOnChange(e)} type="text" name="petName" placeholder='Pet name' />
          <small>{errors.petName}</small>
          </div>
          
          <div style={style}>
          <label htmlFor="petType">Pet Type</label>
          <select onChange={(e) => handleOnChange(e)} name="petType" defaultValue={"Dog"} >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Cow">Cow</option>
          </select>
          </div>

          <div style={style}>
          <label htmlFor="breed">breed</label>
          <input onChange={(e) => handleOnChange(e)} type="text" name='breed' placeholder='breed'/>
          <small>{errors.breed}</small>
          </div>
  
          <div style={style}>
          <label htmlFor="name">name</label>
          <input onChange={(e) => handleOnChange(e)} type="text" name='name' placeholder='Your name'/>
          <small>{errors.name}</small>
          </div>
  
          <div style={style}>
          <label htmlFor="email">email</label>
          <input onChange={(e) => handleOnChange(e)} type="text" name='email' placeholder='email' />
          <small>{errors.email}</small>
          </div>
  
          <div style={style}>
          <label htmlFor="phone" >phone</label>
          <input onChange={(e) => handleOnChange(e)} type="tel" name="phone" placeholder='phone' style={{width : "100%", height : 30}}/>
          <small style={{display : "block"}}>{errors.phone}</small>
          </div>
  
          <button onClick={(e) => {handleSubmit(e)}} style={{width : "auto", padding : 10, borderRadius : 15, cursor : "pointer"}}> Submit </button>
        </form>
      </div>
    )
  } else {
    return(
    <AdopterData data={data} handleGoBack={handleGoBack}/>
    )
  }
}

export default PetAdoptionForm
