import { Button, Menu, MenuItem } from "@material-ui/core";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContextProvider";

interface Props {}

const ThemeSelector: React.FC<Props> = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const themeContext = useContext(ThemeContext);

  const handleClickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = (): void => {
    setAnchorEl(null);
  };

  const handleSelectTheme = (event: React.MouseEvent<HTMLElement>): void => {
    const { selected } = event.currentTarget.dataset;
    if (selected) {
      themeContext.handleThemeChange(selected);
    }
    handleCloseMenu();
  };

  return (
    <>
      <StyledButton aria-controls="theme-select" aria-haspopup="true" onClick={handleClickOpenMenu}>
        テーマの変更
      </StyledButton>
      <Menu id="theme-select" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem data-selected="default" onClick={handleSelectTheme}>
          デフォルト
        </MenuItem>
        <MenuItem data-selected="dark" onClick={handleSelectTheme}>
          ダーク
        </MenuItem>
      </Menu>
    </>
  );
};

const StyledButton = styled(Button)`
  color: #ffffff;
`;

export default ThemeSelector;
