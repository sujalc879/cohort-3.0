
import React, { Component } from 'react'

export class AdopterData extends Component {
  render() {
    const { data, handleGoBack } = this.props;
    console.log(data);
    
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>pet Name</td>
              <td>pet Type</td>
              <td>Breed</td>
              <td>name</td>
              <td>email</td>
              <td>phone</td>
            </tr>
          </thead>
          <tbody>
            
              {data.map((val, index) => (
                <tr key={index}>
                  <td>{val.petName}</td>
                  <td>{val.petType}</td>
                  <td>{val.breed}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                </tr>
              ))}
            
          </tbody>
        </table>

        <button style={{
          width : "auto",
          padding : 10,
          borderRadius : 10,
          cursor : "pointer"
        }}
        onClick={handleGoBack}
        >Go Back</button>
      </div>
    )
  }
}

export default AdopterData;