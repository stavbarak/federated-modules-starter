import { createStyles, makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    drawer: {
          width: drawerWidth,
          flexShrink: 0,
          backgroundColor: '#fff'
    },
    drawerPaper: {
          width: drawerWidth,
          backgroundColor: '#3493d1',
          border: 'none'
    },
    toolbar: {
          ...theme.mixins.toolbar,
          backgroundColor: '#fff',
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '22px',
    },
      logo: {
          fontSize: '40px'
    },
    menuItem: {
          color: '#fff',
     }
  })
);

export default function SideNav() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
        <div className={classes.toolbar}><span className={classes.logo}>LOGO</span></div>
      
      <Divider />
      <List>
        <ListItem button component={Link} to="/page1">
          <ListItemText className={classes.menuItem} primary="Shared Button" />
        </ListItem>
        <ListItem button component={Link} to="/page2">
          <ListItemText className={classes.menuItem} primary="Shared Dialog" />
        </ListItem>
      </List>
    </Drawer>
  );
}
