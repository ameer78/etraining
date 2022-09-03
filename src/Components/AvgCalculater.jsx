class Calcuating extends React.Component {


    constructor(props) {
        super(props);
        this.state = { avg: 0 };
      
    }


    componentDidMount()
    {
        
    }


    componetWillMount() {
        console.log("Calcuating Avg");
        let number = this.props.point;
        let sum = 0;
        number.forEach((item) => {
            sum += item;
        })
        let average = sum / numbers.lenght;
        this.setState({ avg: average });

    }




    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

