import React, { Component } from "react";
import Chart from "react-apexcharts";
import { calculateScore, calculateScoreNonfb, getClickedItems, getClickedNfbItems } from './../services/clickedItems';


class ChartFinalScore extends Component {
  constructor(props) {
    super(props);

    //need to dynamic render this data from database
    //need come out with json file first
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          fontFamily: "Sofia Pro",
        },
        xaxis: {
          categories: (this.props.category == "fb" ? ['Professionalism & Staff Hygiene','Housekeeping & Cleanliness','Food Hygiene','Healthier Choice','Workplace Safety & Health'] : ['Professionalism & Staff Hygiene','Housekeeping & Cleanliness','Workplace Safety & Health']),
          labels: {
            rotate: 0,
            hideOverlappingLabels: false,
            style: {
              fontSize: '12px',
              fontFamily: 'Sofia Pro',
            }
          }
        },
        fill: {
          colors: [function({ value }) {
            if(value < 95) {
                return '#F22C49'
            } else {
                return '#F06D1A'
            }
          }]
        },
        yaxis: {
          min: 0,
          max: 100,
          categories: ['0', '20', '40', '60', '80', '100'],
          labels: {
            style: {
              fontSize: '12px',
              fontFamily: 'Sofia Pro',
            }
          }
        },
      },
      series: [
        {
          name: "Performance Score",
          data: (this.props.category == "fb" ? [calculateScore(getClickedItems(), "A"), calculateScore(getClickedItems(), "B"), calculateScore(getClickedItems(), "C"), calculateScore(getClickedItems(), "D"), calculateScore(getClickedItems(), "E")] : [calculateScoreNonfb(getClickedNfbItems(), "A"), calculateScoreNonfb(getClickedNfbItems(), "B"), calculateScoreNonfb(getClickedNfbItems(), "C")]),
        },
      ],
    };
  }


  render() {
    //this.checkCategory(this.props.category);
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
              height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ChartFinalScore;
