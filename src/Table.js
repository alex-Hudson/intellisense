import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({ data: this.parseData(this.props.data) });
  }

  parseData(data) {
    const allowed = "RD:";

    const keys = Object.keys(data);

    const filtered = [];

    keys.forEach((key) => {
      if (key.substr(0, 3).includes(allowed)) {
        filtered.push(
          Object.assign(
            { value: data[key].values[data[key].values.length - 1] },
            { key }
          )
        );
      }
    });

    return filtered;
  }

  render() {
    return (
      <div className={"temp-cdfgdlassName"}>
        {this.state?.data.map((row) => {
          return (
            <tr>
              <td>{row.key}</td>
              <td>{row.value}</td>
            </tr>
          );
        })}
      </div>
    );
  }
}
