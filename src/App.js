/* App.js */
import React, { useState, useEffect } from "react"
import Graph from "./view/graph"
import SearchAppBar from "./view/AppBar"
import Cards from "./view/Cards"
import axios from "axios"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import CustomizedTables from "./view/Table"
import Grid from "@material-ui/core/Grid"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: theme.spacing(8),
//     @keyframes example {
//       0%   {background-color: red;}
//       25%  {background-color: yellow;}
//       50%  {background-color: blue;}
//       100% {background-color: green;}
//     }
//   },
// }))

export default function App(props) {
  const [data, setData] = useState(null)
  const [stateData, setStateData] = useState(null)
  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((response) => {
      setData(response)
      console.log(response)
    })
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        setStateData(response)
        console.log(response)
      })
  }, [])

  console.log(data, stateData)
  return (
    <div>
      {data && stateData ? (
        <SearchAppBar data={data} stateData={stateData} />
      ) : (
        ""
      )}
      <div style={{ margin: "0 5%" }}>
        <h2 align="center">Current status in India</h2>
        {data && stateData ? <Cards data={data} stateData={stateData} /> : ""}
        <Grid container style={{ marginTop: "10px" }} spacing={2}>
          <Grid item xs={12} xs={12} sm={12} md={12} lg={6} xl={6}>
            {data && stateData ? (
              <Graph data={data} stateData={stateData} />
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} xs={12} sm={12} md={12} lg={6} xl={6}>
            {data && stateData ? (
              <CustomizedTables data={data} stateData={stateData} />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
