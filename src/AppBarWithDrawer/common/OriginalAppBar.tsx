import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { styled } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  showingDrawer: boolean;
  setShowingDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const OriginalAppBar: React.FC<Props> = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <MenuButton
          color="inherit"
          aria-label="switch drawer"
          onClick={() => props.setShowingDrawer((prevShowDrawer) => !prevShowDrawer)}
          edge="start"
        >
          <MenuIcon />
        </MenuButton>
        <TitleTypography variant="h6" noWrap>
          Mini variant drawer
        </TitleTypography>
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
      </Toolbar>
    </StyledAppBar>
  );
};

const TitleTypography = styled(Typography)({
  flexGrow: 1,
});

const MenuButton = styled(IconButton)({
  marginRight: 36,
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default OriginalAppBar;
