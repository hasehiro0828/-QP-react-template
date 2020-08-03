import { Box, Tab, Tabs } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface Props {}

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

const TitleTypography = styled(Typography)`
  flex-grow: 1;
`;

const StyledAppBar = styled(AppBar)`
  ${(props: { theme: Theme }) => css`
    z-index: ${props.theme.zIndex.drawer + 1};
  `}
`;

const StyledToolbar = styled(Toolbar)`
  min-height: 0;
`;

const TopLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;

export default OriginalAppBar;
