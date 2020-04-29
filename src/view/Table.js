import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useState } from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    Width: "100%",
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const { data, stateData } = { ...props };
  const [state, setState] = useState(null);

  const stateRow = data.data.statewise.slice(1);
  const rows = stateRow.map((key) => {
    return {
      state: key.state,
      total:
        key.deltarecovered !== "0"
          ? key.confirmed + " (+" + key.deltaconfirmed + ")"
          : key.confirmed,
      active: key.active,
      recovered:
        key.deltarecovered !== "0"
          ? key.recovered + " (+" + key.deltarecovered + ")"
          : key.recovered,
      deceased:
        key.deltadeaths !== "0"
          ? key.deaths + " (+" + key.deltadeaths + ")"
          : key.deaths,
    };
  });

  console.log(stateData.data);

  const extraRow = () => {
    var eRow = [];
    if(!stateData.data[state])
      return null;

    for (var key in stateData.data[state].districtData) {
      var temp = stateData.data[state].districtData[key];
      eRow.push({
        dName: key,
        active: temp.active,
        confirmed: temp.delta.confirmed !== 0 ? temp.confirmed + " (+" + temp.delta.confirmed + ")" : temp.confirmed,
        deceased: temp.delta.deceased !== 0 ? temp.deceased + " (+" + temp.delta.deceased + ")" : temp.deceased,
        recovered: temp.delta.recovered !== 0 ? temp.recovered + " (+" + temp.delta.recovered + ")" : temp.recovered,
      });
    }
    return eRow.map((row) => (
      <StyledTableRow key={row.dName}>
        <StyledTableCell component="th" scope="row" style={{color : "#666666"}}>
        &nbsp;&nbsp;{row.dName}
        </StyledTableCell>
        <StyledTableCell align="center" style={{ color: "#dc3545" }}>
          {row.confirmed}
        </StyledTableCell>
        <StyledTableCell align="center" style={{ color: "blue" }}>
          {row.active}
        </StyledTableCell>
        <StyledTableCell align="center" style={{ color: "#28a745" }}>
          {row.recovered}
        </StyledTableCell>
        <StyledTableCell align="center" style={{ color: "#343a40" }}>
          {row.deceased}
        </StyledTableCell>
      </StyledTableRow> 
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="customized table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>States</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center">Active</StyledTableCell>
            <StyledTableCell align="center">Recovered</StyledTableCell>
            <StyledTableCell align="center">Deceased</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
              <StyledTableRow
                key={row.state}
                onClick={(e) => {
                  setState(row.state);
                }}
              >
                <StyledTableCell component="th" scope="row" style={{fontWeight: "bold"}}>
                {state === row.state ? <ArrowDropDownIcon fontSize="small"/> : <ArrowRightIcon fontSize="small"/>}{row.state}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#dc3545" }}>
                  {row.total}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "blue" }}>
                  {row.active}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#28a745" }}>
                  {row.recovered}
                </StyledTableCell>
                <StyledTableCell align="center" style={{ color: "#343a40" }}>
                  {row.deceased}
                </StyledTableCell>
              </StyledTableRow>

              {state === row.state ? extraRow() : null}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
