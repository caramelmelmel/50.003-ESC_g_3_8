import React, { Component } from "react";
import Chart from "react-apexcharts";


class ChartInstitutes extends Component {
  constructor(props) {
    super(props);

    //need to dynamic render this data from database
    //need come out with json file first
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ['KKH','CGH','SGH','SKH','NCCS','OCH'],
        },
      },
      series: [
        {
          name: "Performance Score",
          data: [98,90,97,96,89,95],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ChartInstitutes;
