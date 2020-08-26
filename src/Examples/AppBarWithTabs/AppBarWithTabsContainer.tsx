import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "@material-ui/core/styles";
import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import OriginalAppBar from "./OriginalAppBar";

interface Props {
  children: React.ReactNode;
}

const AppBarAndDrawerContainer: React.FC<Props> = (props: Props) => {
  return (
    <RootDiv>
      <CssBaseline />
      <OriginalAppBar />
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
  ${(props: { theme: Theme }): FlattenSimpleInterpolation => css`
    flex-grow: 1;
    padding: ${props.theme.spacing(3)}px;
  `}
`;

export const ToolbarSpaceDiv = styled.div`
  ${(props: { theme: Theme }): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${props.theme.spacing(0, 1)}px;
    min-height: 48px; /* AppBarの高さ */
  `}
`;

export default AppBarAndDrawerContainer;
