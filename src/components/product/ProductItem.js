import React, { Component } from "react";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSomeThing(productName) {
    console.log(productName);
  }

  render() {
    const { productName, unitPrice, thumbnail } = this.props.product;
    return (
      <div className="col-lg-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail} alt="" />
        <h5 className="mt-2">{productName}</h5>
        <p className="title text-right">{unitPrice} THB</p>
        <button
          className="btn btn-block btn-secondary title"
          onClick={() => this.props.onAddOrder(this.props.product)}
        >
          ซื้อ
        </button>
        <hr />
      </div>
    );
  }
}

export default ProductItem;

