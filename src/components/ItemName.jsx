import React, { Component } from 'react';

class ItemName extends Component {

    constructor(props) {
        super(props);
    }
     

    render() {
        return (
            <React.Fragment>
                <table border="1" cellPadding=".5px" >
                
                <td>
                <span> <img src={this.props.data.img_url}></img></span>&emsp;
                    <span>{this.props.data.name}</span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <span onClick={()=>this.props.onDelete(this.props.data.id)}><b>X</b></span>&nbsp;
                </td>
                </table>&nbsp;
            </React.Fragment>
        );
    }
}


export default ItemName;