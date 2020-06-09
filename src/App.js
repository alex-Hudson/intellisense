import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Graph from "./Graph";
import Table from "./Table";
import axios from "axios";

const BASE_URL = "https://reference.intellisense.io/thickenernn/v1/referencia";

export default class App extends Component {
  async componentDidMount() {
    const data = await this.getData();
    console.log("changing state");
    this.setState({ graphData: data });
  }

  getData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      console.log(`GET: getting list of data`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    console.log(this.state);
    if (!this.state) return null;
    return (
      <div className="App">
        <Graph data={this.state?.graphData} />
        <Table data={this.state?.graphData.current.data["pt2-scaled"]} />
      </div>
    );
  }
}
