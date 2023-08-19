import * as React from "react";
import Grid from "@mui/material/Grid";
import "./Grid.css";
import Card from "./Card";

function GridItem() {
  return (
    <>
      <div className="grid1">
        <Grid container spacing={4} sx={{ flexGrow: 1 }}>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
          <Grid xs={12} md={4} lg={3} className="grid2">
            <Card />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default GridItem;
