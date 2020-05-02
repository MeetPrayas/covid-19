/* App.js */
import React from "react"
import CanvasJSReact from "./canvas/canvasjs.react"

var CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function DeltaGraph(props) {
  const { data, stateData } = { ...props }
  const activeData = [],
    recoveredData = [],
    deceasedData = []
  data.data.cases_time_series.forEach((element) => {
    activeData.push({
      x: new Date(element.date),
      y: parseInt(element.dailyconfirmed),
    })
    recoveredData.push({
      x: new Date(element.date),
      y: parseInt(element.dailyrecovered),
    })
    deceasedData.push({
      x: new Date(element.date),
      y: parseInt(element.dailydeceased),
    })
  })

  const options = {
    theme: "light2",
    title: {
      text: "Everyday Change in number of cases",
    },
    subtitles: [
      {
        text: "*This is not an official website",
      },
    ],
    axisY: {
      includeZero: true,
    },
    axisX: {
      valueFormatString: "MMM DD",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "Confirmed",
        showInLegend: true,
        xValueFormatString: "DD MMM",
        yValueFormatString: "",
        dataPoints: activeData,
      },
      {
        type: "spline",
        name: "Recovered",
        showInLegend: true,
        xValueFormatString: "DD MMM",
        yValueFormatString: "",
        dataPoints: recoveredData,
      },
      {
        type: "spline",
        name: "Deceased",
        showInLegend: true,
        xValueFormatString: "DD MMM",
        yValueFormatString: "",
        dataPoints: deceasedData,
      },
    ],
  }
  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  )
}
