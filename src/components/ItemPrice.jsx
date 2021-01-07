import React, { Component } from 'react';

class ItemPrice extends Component {

    constructor(props) {
        super(props);
    }
     

    render() {
        return (
            <React.Fragment>
                <td className="price">&nbsp;&emsp;&emsp;
                    <span>${this.props.data.price}</span>
                    
                </td>
            </React.Fragment>
        );
    }
}


export default ItemPrice;