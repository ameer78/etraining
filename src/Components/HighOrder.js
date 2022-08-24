import React from 'react'

const EnhancedComponent = (OriginalComponent) => {
	class NewComponent extends React.Component {

		// Logic here
        constructor(props){
            super(props)
            this.state = {
                show: 0
            }
        }

        handleClick = () => {
            this.setState({show: this.state.show+1});
        }

		render() {
			// Pass the callable props to Original component
			return <OriginalComponent show={this.state.show} handleClick={this.handleClick} />
		}
	}
	// Returns the new component
	return NewComponent
}

export default EnhancedComponent;

