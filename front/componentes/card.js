import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ImgMediaCard({ title, deadline }) {
  return (
    <>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
          <div style={{ textAlign: "right" }}>
            <Checkbox {...label} defaultChecked 
            sx={{
             '& .MuiSvgIcon-root': { fontSize: 30 }
            }}
            color="secondary" />
          </div>
        </Typography>
        <div style={{ textAlign: "right" }}>{deadline}</div>
      </CardContent>
    </>
  );
}
