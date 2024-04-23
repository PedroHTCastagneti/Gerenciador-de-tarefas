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
  description,
  deadline,
  additionalLinks,
  mediaComponent,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        // component="img"
        // alt="green iguana"
        // height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        // Não usarei imagem
      />  */}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Descrição
        </Typography>
      </CardContent>

       {/* Botões  */}
      <CardActions dir="rtl">
        <DeleteIcon size="small" variant="masonry" onClick={alert} />
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
