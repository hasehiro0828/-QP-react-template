import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles";
import React from "react";
import styled, { css } from "styled-components";
import OriginalAppBar from "./OriginalAppBar";
import OriginalDrawer from "./OriginalDrawer";
import { ToolbarSpaceDiv } from "./StyledParts";

interface Props {
  children: React.ReactNode;
}

const AppBarAndDrawerContainer: React.FC<Props> = (props: Props) => {
  const [showingDrawer, setShowingDrawer] = React.useState(false);

  return (
    <RootDiv>
      <CssBaseline />
      <OriginalAppBar showingDrawer={showingDrawer} setShowingDrawer={setShowingDrawer} />
      <OriginalDrawer showingDrawer={showingDrawer} setShowingDrawer={setShowingDrawer} />
      <MainContent>
        <ToolbarSpaceDiv />
        {props.children}
      </MainContent>
    </RootDiv>
  );
};

const RootDiv = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  ${(props: { theme: Theme }) => css`
    flex-grow: 1;
    padding: ${props.theme.spacing(3)}px;
  `}
`;

export default AppBarAndDrawerContainer;
