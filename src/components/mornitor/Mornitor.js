import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";

export class Mornitor extends Component {
  constructor(props) {
    super(props);

    this.state = { totalPrice: 0, orders: [] };
    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
  }

  addOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.productId === product.productId
    );
    if (findOrder) {
      findOrder.quantity++;
    } else {
      this.state.orders.push({ product: product, quantity: 1 });
    }
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
    this.setState({ totalPrice: totalPrice, orders: this.state.orders });
  }

  delOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.productId === product.productId
    );
    let resultOrder = this.state.orders.filter(
      (order) => order.product.productId !== product.productId
    );
    const totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice);
    this.setState({ totalPrice: totalPrice, orders: resultOrder });
  }

  confirmOrder() {
    const { totalPrice, orders } = this.state;
    axios
      .post("http://127.0.0.1:3001/orders", {
        orderedDate: new Date(),
        totalPrice,
        orders,
      })
      .then(res => {
        this.setState({ totalPrice: 0, orders: [] });
      });
  }
  cancelOrder() {
    this.setState({ totalPrice: 0, orders: [] });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <ProductList
              products={this.props.products}
              onAddOrder={this.addOrder}
            />
          </div>
          <div className="col-md-3">
            <Calculator
              totalPrice={this.state.totalPrice}
              orders={this.state.orders}
              onDelOrder={this.delOrder}
              onConfirmOrder={this.confirmOrder}
              onCancelOrder={this.cancelOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mornitor;
