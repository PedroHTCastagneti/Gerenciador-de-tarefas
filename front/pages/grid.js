import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(7),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
const ItemList=[
{}
];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={"2rem"}
        columns={15}
        paddingTop={"2rem"}
        paddingLeft={"1rem"}
        paddingRight={"1rem"}
      >
        {Array.from(Array(9)).map((_, index) => (
          <Grid xs={9} sm={4} md={5} xl={3} key={index}>
            <Item>???</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
