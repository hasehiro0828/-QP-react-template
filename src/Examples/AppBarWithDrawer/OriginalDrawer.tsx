import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { ToolbarSpaceDiv } from "./StyledParts";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
    },
  })
);

interface Props {
  showingDrawer: boolean;
  setShowingDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const OriginalDrawer: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.showingDrawer,
        [classes.drawerClose]: !props.showingDrawer,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.showingDrawer,
          [classes.drawerClose]: !props.showingDrawer,
        }),
      }}
    >
      <ToolbarSpaceDiv>
        <IconButton onClick={(): void => props.setShowingDrawer(false)}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </ToolbarSpaceDiv>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Top"} />
        </ListItem>
        <ListItem button component={Link} to="/hello">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Hello"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Top"} />
        </ListItem>
        <ListItem button component={Link} to="/hello">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Hello"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default OriginalDrawer;
