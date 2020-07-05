/* App.js */
import React, { useState, useEffect } from "react"
import Graph from "./view/graph"
import SearchAppBar from "./view/AppBar"
import Cards from "./view/Cards"
import axios from "axios"
import CustomizedTables from "./view/Table"
import Grid from "@material-ui/core/Grid"
import Footer from "./view/footer"
import DeltaGraph from "./view/DeltaGraph"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}))

export default function App(props) {
  const classes = useStyles()
  const [data, setData] = useState(null)
  const [stateData, setStateData] = useState(null)
  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json").then((response) => {
      setData(response)
    })
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        setStateData(response)
      })
  }, [])

  return (
    <div>
      {data && stateData ? (
        <SearchAppBar data={data} stateData={stateData} />
      ) : (
        ""
      )}
      <div style={{ margin: "0 5%" }}>
        <h2 align="center">Current status of Covid-19 in India</h2>
        {data && stateData ? <Cards data={data} stateData={stateData} /> : ""}
        <Grid container style={{ marginTop: "10px" }} spacing={2}>
          <Grid item xs={12} xs={12} sm={12} md={12} lg={6} xl={6}>
            {data && stateData ? (
              <CustomizedTables data={data} stateData={stateData} />
            ) : (
              ""
            )}
          </Grid>
          {data && stateData ? (
            <Grid
              item
              xs={12}
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              spacing={2}
            >
              <Paper style={{ marginBottom: "1rem" }} elevation={3}>
                <Graph data={data} />
              </Paper>
              <Paper style={{ marginBottom: "1rem" }} elevation={3}>
                <DeltaGraph data={data} />
              </Paper>
              {/* <Paper style={{ marginBottom: "1rem" }} elevation={3}>
                
              </Paper> */}
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </div>
      <Footer />
    </div>
  )
}
