import React, { Component } from "react";
import axios from "axios";

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      count_advertisements: "",
      count_categories: "",
      count_customers: "",
      count_approved: "",
      count_panding: "",
      count_reject: "",
    };
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    axios.get("http://localhost:1337/advertisements/count/").then((res) => {
      console.log(res);

      this.setState({
        count_advertisements: res.data,
      });
    });
    axios.get("http://localhost:1337/categories/count/").then((res) => {
      console.log(res);

      this.setState({
        count_categories: res.data,
      });
    });
    axios.get("http://localhost:1337/customers/count").then((res) => {
      console.log(res);

      this.setState({
        count_customers: res.data,
      });
    });
    axios
      .get("http://localhost:1337/advertisements/advertisements_reject_count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_reject: res.data,
        });
      });
    axios
      .get("http://localhost:1337/advertisements/advertisements_panding_count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_panding: res.data,
        });
      });
    axios
      .get("http://localhost:1337/advertisements/advertisements_approved_count")
      .then((res) => {
        console.log(res);

        this.setState({
          count_approved: res.data,
        });
      });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <p>Advertisements Count : {this.state.count_advertisements} </p>
          <br />
          <p>Customers Count : {this.state.count_customers} </p>
          <br />
          <p>Category Count : {this.state.count_categories} </p>
          <br />
          <p>Panding Count : {this.state.count_panding} </p>
          <br />
          <p>Approved Count : {this.state.count_approved} </p>
          <br />
          <p>Reject Count : {this.state.count_reject} </p>
          <br />
        </div>
      </div>
    );
  }
}
