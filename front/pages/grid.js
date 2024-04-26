import * as React from "react";
import Cards from "@/componentes/card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Task } from "@mui/icons-material";
import ImgMediaCard from "@/componentes/card";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(7),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  const [task, setTasks] = React.useState([]);
  React.useEffect(() => {
    const savedTask = localStorage.getItem("tasks");
    if (savedTask) {
      setTasks(JSON.parse(savedTask));
    }
  }, []);

  const removeTask = (taskId) => {
    const updatedTasks = task.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

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
        {task.map((task, index) => (
          <Grid xs={9} sm={4} md={5} xl={5} key={index}>
            <Item >
              <ImgMediaCard title={task.name} deadline={task.deadline} />
              <div style={{ textAlign: "right" }}>
                <DeleteIcon
                  size="small"
                  variant="masonry"
                  onClick={() => removeTask(task.id)}
                />
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
