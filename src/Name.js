import React from "react";
import "./App.css"
import EnhancedComponent from './Name'

class App extends React.Component {
    render() {
        // Call the props from originalComponent
        return <h1>{this.props.name}</h1>
    }
}

// Passed the originalcomponent
export default EnhancedComponent(App);
