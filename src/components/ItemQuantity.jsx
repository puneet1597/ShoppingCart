import React, { Component } from 'react';
import '../App.css';
class ItemQuantity extends Component {

    constructor(props) {
        super(props);

    }
   
    // incrementHandler =() => {
    //     console.log("increment");
    //     this.setState({count: this.state.count + 1})
    // }

    // decrementHandler =() => {
    //     this.setState({count: this.state.count - 1})
    // }

      

    render() {
        
        return (
            <React.Fragment>
            <td className="minus">&emsp;<span onClick={() => this.props.decrementHandler(this.props.data.id)} className="abc">-</span></td>
            <td className="center" ><input value={this.props.data.quantity} size="1"></input></td>
            <td className="plus"><span onClick={() => this.props.incrementHandler(this.props.data.id)} className="abc">+</span>&emsp;</td>
    </React.Fragment>
        );
    }
}


export default ItemQuantity;