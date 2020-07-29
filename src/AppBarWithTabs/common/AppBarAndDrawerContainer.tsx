import CssBaseline from "@material-ui/core/CssBaseline";
import { styled } from "@material-ui/core/styles";
import React from "react";
import OriginalAppBar from "./OriginalAppBar";

interface Props {
  children: React.ReactNode;
}

const AppBarAndDrawerContainer: React.FC<Props> = (props: Props) => {
  const [showingDrawer, setShowingDrawer] = React.useState(false);

  return (
    <RootDiv>
      <CssBaseline />
      <OriginalAppBar showingDrawer={showingDrawer} setShowingDrawer={setShowingDrawer} />
      <MainContent>
        <ToolbarSpaceDiv />
        {props.children}
      </MainContent>
    </RootDiv>
  );
};

const RootDiv = styled("div")({
  display: "flex",
});

const MainContent = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const ToolbarSpaceDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  minHeight: "48px", // AppBarの高さ
}));

export default AppBarAndDrawerContainer;
