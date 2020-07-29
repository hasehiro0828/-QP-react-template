import { Theme } from "@material-ui/core/styles";
import styled, { css } from "styled-components";

export const ToolbarSpaceDiv = styled.div`
  ${(props: { theme: Theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: ${props.theme.spacing(0, 1)}px;

    /* necessary for content to be below app bar */
    ${(props) => props.theme.mixins.toolbar}
  `}
`;
