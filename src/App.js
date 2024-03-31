import React from "react";
import Overview from "./Component/Overview";
import Navigation from "./Component/Navigation";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Graph from "./Component/Graph";
const App = () => {
  return (
    <Box 
    width="100%" height="100vh"
    display='flex'
    justifyContent='center'
    alignContent='center'
    bgColor="#F3F8FF"
    p='10px'
    boxSizing="border-box"
    >
      <Grid
        templateRows="repeat(4,1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        width="100%" height="100vh"
        
      >
        <GridItem rowSpan={1} colSpan={4}>
          {" "}
          <Overview />
        </GridItem>
        <GridItem rowSpan={4} colSpan={1}>
          <Navigation />
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <Graph />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
