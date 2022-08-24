import React from 'react';

class AvgCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avg: 0
        }
    }
    
    componentWillMount() 
    { 
        console.log("Calculating Avg");
        let numbers = this.props.points;
        let sum = 0;
        numbers.forEach((item) => {
            sum+=item;
        })
        let average = sum/numbers.length;
        this.setState({avg: average});
    } 
   

    componentWillUpdate(){
        console.log("Calculating Avg");
        let numbers = this.props.points;
        let sum = 0;
        numbers.forEach((item) => {
            sum+=item;
        })
        let average = sum/numbers.length;
        this.setState({avg: average});
    }
 
    shouldComponentUpdate(nextProps) {
        // Rendering the component only if 
        // passed props value is changed
        
        if (nextProps.update) {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    }


    render(){
        const {avg} = this.state;
         return <div>Your Avg is {avg}</div>
    }
}

export default AvgCalculator;