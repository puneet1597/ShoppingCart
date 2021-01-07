import React, { Component } from 'react';

import Item from "./components/Item";

import './App.css';

class App extends Component {
  state = {
    Data: [
      {
        id: 9090,
        name: "Item1",
        price: 200,
        discount: 10,
        type: "fiction",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9091,
        name: "Item2",
        price: 250,
        discount: 15,
        type: "literature",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9092,
        name: "Item3",
        price: 320,
        discount: 5,
        type: "literature",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9093,
        name: "Item4",
        price: 290,
        discount: 0,
        type: "thriller",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9094,
        name: "Item5",
        price: 500,
        discount: 25,
        type: "thriller",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9095,
        name: "Item6",
        price: 150,
        discount: 5,
        type: "literature",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9096,
        name: "Item7",
        price: 700,
        discount: 22,
        type: "literature",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
      {
        id: 9097,
        name: "Item8",
        price: 350,
        discount: 18,
        type: "fiction",
        img_url: "https://place-hold.it/40.jpg",
        quantity: 0
      },
    ],

    totalPrice: 0,
    discount: 0,
  };

  incrementHandler =(id) => {
    let item = this.state.Data.filter(data => data.id === id);
    item[0].quantity = item[0].quantity + 1;

    // let items = [...this.state.Data.filter(data => data.id != id)];
    // items.push(item[0]);
    let items = this.state.Data.map(data => {
      if (data.id === id) {
        return item[0];
      }
      return data;
    });

    this.calculatePrice(items);

}

decrementHandler =(id) => {
  
  let item = this.state.Data.filter(data => data.id === id);
  if(item[0].quantity>0){
  item[0].quantity = item[0].quantity - 1;
  let i = item[0];
  // let items = [i, ...this.state.Data.filter(data => data.id != id)];

  let items = this.state.Data.map(data => {
    if (data.id === id) {
      return item[0];
    }
    return data;
  });
  
  
  this.calculatePrice(items);}
}

deleteItemHandler = (id) => {
  let datas = [...this.state.Data.filter(data => data.id != id)];

  this.calculatePrice(datas);
  // this.setState({Data: datas});
}

calculatePrice = (items) => {
  let totalPrice = 0;
  let totalDiscount = 0;
  items.forEach(data => {
    totalPrice += (data.price * data.quantity);
    // let discountedPrice = data.price * ((100 - data.discount) / 100);
    
      totalDiscount += (data.price * (data.discount / 100)) * data.quantity;
    
  });

  console.log(totalPrice);

  this.setState({Data: items, totalPrice: totalPrice, discount: totalDiscount});
}

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 order-sm-12">
              <header>
                <h2>
                  <b>Order Summary</b>
                </h2>
              </header>
              <hr></hr>
              <table>
              <tr>
                <th>
                  Item ({this.state.Data.length})&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </th>
                <th>&emsp;&emsp;Quantity  &nbsp; &nbsp;</th>
                <th>&emsp;Price</th>
              </tr>
              </table>
              
              <hr></hr>

              <table>
                {this.state.Data.map((data) => {
                  return (
                    
                      <tr key={data.id}>
                        <Item data={data}
                          incrementHandler={this.incrementHandler}
                          decrementHandler={this.decrementHandler}
                          deleteItemHandler={this.deleteItemHandler}
                          ></Item>
                      </tr>
                    
                  );
                })}
              </table>
            </div>
            <div class="col-sm-6 order-sm-12">
          
                <table>
                
                  <div className="total">
                    <tr>
                      <td>TOTAL</td>
                    </tr>
                    <tr className="itemsCart">
                      <td>Items({this.state.Data.length})</td>
                      <td>: </td><td>${this.state.totalPrice}</td>
                    </tr>
                    <tr className="itemsCart">
                      <td>Discount</td>
                      <td>:</td><td>${this.state.discount}</td>
                    </tr>

                    <tr className="orderTotal">
                      <th>Total price</th>
                      <th>${this.state.totalPrice - this.state.discount}</th>
                    </tr>
                  </div>
              
              </table>
              
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default App;