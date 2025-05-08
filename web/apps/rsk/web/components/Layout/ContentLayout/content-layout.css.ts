import { theme } from "@island.is/island-ui/theme";
import { style } from "@vanilla-extract/css";


export const formContainer = style({
  margin: 40,
  padding: 30,
  background: theme.color.white,
  borderRadius: "10px",
  boxShadow: "2px 2px 2px #e9e9e9",
  height: "calc(100% - 80px)",
  alignContent: "center",
});

export const flexContainer = style({
  marginTop: "20px",
  display: "flex",
  minHeight: 600,
  //height: '90vh', // Set the height of the container to the full viewport height
});

export const selectContainer = style({
  width: "50%",
});

export const componentPadding = style({
  padding: "15px",
});

export const dividerPadding = style({
  paddingTop: "15px",
  paddingBottom: "15px",
});

export const editSectionButton = style({
  minHeight: "0px",
  height: "36px",
});
