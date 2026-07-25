import React, { Component } from 'react';

const App = () => {
  
    return (
      
    );
};


class ClassComponent extends Component {
  state = { count : 0}

  increament = () => {
    this.state = this.state + 1
  }

  render () {
    return(
      <div>
        {this.state}
        <button onClick={this.increament}>increament</button>
      </div>
    )
  }
}

export default App;
