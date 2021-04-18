import React, { Component } from "react";
import Chart from "react-apexcharts";

class PerformanceScoreAcrossYearChart extends Component {
  constructor(props) {
    super(props);

    //need to dynamic render this data from database
    //need come out with json file first
    this.state = {
      options: {
        chart: {
          width: "100%",
          height: "100%",
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        /*title: {
          text: 'Performance Score Across Year',
          align: 'left'
        },*/
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },

        annotations: {
          yaxis: [
            {
              y: 95,
              borderColor: "#F06D1A",
              label: {
                borderColor: "#F06D1A",
                style: {
                  color: "#fff",
                  background: "#F06D1A",
                },
                //text: 'Support',
              },
            },
          ],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          style: {
            fontSize: "12px",
            fontFamily: "Sofia Pro",
          },
        },
      },

      series: [
        {
          name: "Performance Score",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 98],
        },
      ],
      /*
      series: [
        {
          name: "Performance Score",
          data: [calculateScore(getClickedItems(), "A"), calculateScore(getClickedItems(), "B"), calculateScore(getClickedItems(), "C"), calculateScore(getClickedItems(), "D"), calculateScore(getClickedItems(), "E")],
        },*/
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
              type="line"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default PerformanceScoreAcrossYearChart;
