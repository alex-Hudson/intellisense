import React, { Component } from "react";

export default class Table extends Component {
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
      <div className={"table-container"}>
        <table id="students">
          <tbody>
            {this.state?.data.map((row) => {
              return (
                <tr key={row.key}>
                  <td>{row.key}</td>
                  <td>{row.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
