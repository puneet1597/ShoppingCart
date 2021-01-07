import React, { Component } from "react";
import ItemQuantity from './ItemQuantity';
import ItemName from './ItemName';
import ItemImage from './ItemImage';
import ItemPrice from './ItemPrice';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    // const {data, incrementHandler, decrementHandler, deleteItemHandler} = this.props;

    // console.log("Inside Item: ",data, incrementHandler, decrementHandler, deleteItemHandler);
    return (
      <React.Fragment>
        <ItemName
          data={this.props.data}
          onDelete={this.props.deleteItemHandler}
          ></ItemName>
          <ItemQuantity
            data={this.props.data}
            incrementHandler={this.props.incrementHandler}
            decrementHandler={this.props.decrementHandler}
          ></ItemQuantity>
          <ItemPrice data={this.props.data}></ItemPrice>
      </React.Fragment>
    );
  }
}

export default Item;
