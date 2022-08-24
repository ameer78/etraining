
import React, { Component } from "react";
import EnhancedComponent from "./HighOrder";
class TestComp extends Component {
   
    render() {
      return (
        <div>
          <h2>Counter 1 is:</h2>
          <h3>{this.props.show}</h3>
          <button onClick={this.props.handleClick}>Add</button>
        </div>
      );
    }
  }
    
  export default EnhancedComponent(TestComp);