import React, { Component } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Mornitor from "./components/mornitor/Mornitor";
// import Footer from "./components/Footer";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: "",
    };
  }
  componentDidMount() {
    //   this.setState({
    //     products: [
    //       {
    //         productId: 1,
    //         productName: "สลัดผัก",
    //         unitPrice: "120",
    //         thumbnail: "/images/product/1.jpg",
    //       },
    //       {
    //         productId: 2,
    //         productName: "ไก่ทอด",
    //         unitPrice: "90",
    //         thumbnail: "/images/product/2.jpg",
    //       },
    //       {
    //         productId: 3,
    //         productName: "บิงซู",
    //         unitPrice: "200",
    //         thumbnail: "/images/product/3.jpg",
    //       },
    //       {
    //         productId: 4,
    //         productName: "เฟรนฟราย",
    //         unitPrice: "140",
    //         thumbnail: "/images/product/4.jpg",
    //       },
    //       {
    //         productId: 5,
    //         productName: "เค้ก 3 ชั้น",
    //         unitPrice: "200",
    //         thumbnail: "/images/product/5.jpg",
    //       },
    //       {
    //         productId: 6,
    //         productName: "กาแฟ เฮลตี้ฟู้ด",
    //         unitPrice: "140",
    //         thumbnail: "/images/product/6.jpg",
    //       },
    //     ],
    //   });
    fetch("http://110.170.148.88/api/shop", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({products: res});
      });
  }

  render() {
    return (
      <div>
          {this.state.products}
        {/* <Header />
        <Mornitor products={this.state.products} />
        <Footer company="Naphat" email="naphat.d@gmail.com" /> */}
      </div>
    );
  }
}

export default App;
