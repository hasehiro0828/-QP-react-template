import { Box, Tab, Tabs } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  showingDrawer: boolean;
  setShowingDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const OriginalAppBar: React.FC<Props> = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(0);

  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <TitleTypography variant="h6" noWrap>
          <TopLink to="/" onClick={() => setTabValue(0)}>
            Mini variant drawer
          </TopLink>
        </TitleTypography>

        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Top" component={Link} to="/" />
          <Tab label="Hello" component={Link} to="/hello" />
          <Tab label="Top" component={Link} to="/" />
          <Tab label="Hello" component={Link} to="/hello" />
        </Tabs>
        <Box>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Top
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/hello">
              Hello
            </MenuItem>
          </Menu>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const TitleTypography = styled(Typography)({
  flexGrow: 1,
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const StyledToolbar = styled(Toolbar)({
  minHeight: 0, // Tabsの高さに合わせるためminHeightを上書き
});

const TopLink = styled(Link)({
  color: "inherit",
  textDecoration: "inherit",
});

export default OriginalAppBar;
