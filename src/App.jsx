import React from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <>
        <CssBaseline />

        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>

        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="p"
                align="center"
                color="textSecondary"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                neque quibusdam in atque nihil veniam ipsam pariatur, unde
                distinctio, repellendus iusto explicabo optio aspernatur
                eveniet?
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See All Photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Some Other Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image Title"
                    ></CardMedia>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eaque, commodi modi. Nemo reiciendis et, ratione
                        minus fuga ullam dolores quos?
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Done by Karl Djotchuang Tamo for learning purposes
          </Typography>
        </footer>
      </>
    </div>
  );
};

export default App;
