import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ImgMediaCard({
  title,
  deadline,
}) {

  return (
      <>

    <Card sx={{ flexGrow: 1 }}>


      <CardContent>

        <Typography gutterBottom variant="h5" component="div" >
          {title}
        </Typography>
        <div 
        style={
          {textAlign:"right"}
        }
        >
        {deadline}
        </div>

      </CardContent>

       {/* Botões  */}
      <CardActions dir="rtl">
        <DeleteIcon size="small" variant="masonry" onClick={alert}/>
      </CardActions>
    </Card>
 </>
);
}
