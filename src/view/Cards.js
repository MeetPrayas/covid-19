import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

export default function Cards(props) {
  const classes = useStyles();
  const { data, stateData } = { ...props };

  console.log(data, stateData);

  return (
    <Grid style={{ padding: 5, textAlign: "center" }} container spacing={1}>
      <Grid item  md={6} lg={3}>
        <Card
          variant="outlined"
          style={{ color: "#dc3545" }}
        >
          <CardContent>
            <Typography variant="p" component="h6">
              Confirmed
            </Typography>
            <Typography variant="p" component="h6">
              +{data.data.statewise[0].deltaconfirmed}
            </Typography>
            <Typography variant="p" component="h5">
              {data.data.statewise[0].confirmed}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={3}>
        <Card
          variant="outlined"
          style={{ color: "blue" }}
        >
          <CardContent>
            <Typography variant="p" component="h6">
            Active
            </Typography>
            <Typography variant="p" component="h6">
                  &nbsp; 
            </Typography>
            <Typography variant="p" component="h5">
              {data.data.statewise[0].active}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={3}>
        <Card
          variant="outlined"
          style={{ color: "#28a745" }}
        >
          <CardContent>
            <Typography variant="p" component="h6">
              Recovered
            </Typography>
            <Typography variant="p" component="h6">
              +{data.data.statewise[0].deltarecovered}
            </Typography>
            <Typography variant="p" component="h5">
              {data.data.statewise[0].recovered}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} lg={3}>
        <Card
          variant="outlined"
          style={{ color: "#343a40" }}
        >
          <CardContent>
            <Typography variant="p" component="h6">
              Deceased
            </Typography>
            <Typography variant="p" component="h6">
              +{data.data.statewise[0].deltadeaths}
            </Typography>
            <Typography variant="p" component="h5">
              {data.data.statewise[0].deaths}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
