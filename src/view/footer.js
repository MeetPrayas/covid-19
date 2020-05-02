import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import Grid from "@material-ui/core/Grid"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import Typography from "@material-ui/core/Typography"
import WarningIcon from "@material-ui/icons/Warning"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#343a40",
    color: "white",
    margin: "1rem 0 0 0",
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div style={{ margin: "0 10%", padding: "1rem" }}>
          <Typography style={{ color: "#17a2b8" }}>
            <WarningIcon fontSize="small" />
            This is not a ' Official Govermental Website ' nor the data is
            approved by Goverment of any organization, department, country,
            state, city or district. Data here are collected from various
            sources and displayed. This project was created for learning
            purpose. Please don't misinterpret...
          </Typography>
          <IconButton aria-label="add to shopping cart">
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="add to shopping cart">
            <LinkedInIcon />
          </IconButton>
          <Typography
            variant="caption"
            display="block"
            gutterBottom
            style={{ textAlign: "right" }}
          >
            <span>&copy; 2020 | Prayas Agrawal</span>
          </Typography>
        </div>
      </div>
    </>
  )
}
