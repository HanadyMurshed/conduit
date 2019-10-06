import * as React from "react";
import { colors } from "../SystemVariables";
import { Typography, Fade, Paper, Popper } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

// import { Typography } from "@material-ui/core";

export const PopperMsg: React.FC<{
  open: boolean;
  id: string;
  content: string;
}> = ({ open = false, id, content }) => {
  return (
    <Popper open={open} anchorEl={document.getElementById(id)} transition>
      {({ TransitionProps }: any) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Typography
              style={{
                padding: 5,
                fontSize: 14,
                color: colors.TextPrimaryColor
              }}
            >
              <ErrorIcon style={{ height: 14, color: "#ffa300" }} />
              {content}
            </Typography>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};
