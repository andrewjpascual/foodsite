import { makeStyles } from "@material-ui/styles"; //Possible error here

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    boxShadow: "black",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", //16:9
  },

  infobox: {
    margin: 0,
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
  },
}));
