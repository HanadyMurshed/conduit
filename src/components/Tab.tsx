import * as React from "react";
import { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { fontSize, colors } from "../SystemVariables";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      style={{ padding: 0, borderTop: "solid 1px" + colors.lightGray }}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  tab: {
    fontSize: fontSize.normal,
    textTransform: "none",
    width: "auto",
    height: "auto",
    fontWeight: 500,
    minWidth: 50,
    color: colors.TextSecondayColor,
    "&:hover": {
      color: colors.TextPrimaryColor
    }
  },
  indicator: { background: colors.PrimaryColor, height: 3 },
  selected: {
    color: colors.PrimaryColor,
    "&:hover": {
      color: colors.PrimaryColor
    }
  }
}));
// const MyComonent :React.FC<>;
// MyComonent.defaultProps
export const MyTab: React.FC<{ tabs: string[] }> = ({
  tabs = [],
  children
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(tabs.length === 2 ? 1 : 0);

  const handleChange = (event: ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div>
        <Tabs
          classes={{
            indicator: classes.indicator
          }}
          value={value}
          onChange={handleChange}
        >
          {tabs.map(e => (
            <Tab
              classes={{
                selected: classes.selected
              }}
              className={classes.tab}
              label={e}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </div>
      {children && Array.isArray(children) ? (
        children.map((child, index) => (
          <TabPanel value={value} index={index}>
            {child}
          </TabPanel>
        ))
      ) : (
        <TabPanel value={value} index={0}>
          {children}
        </TabPanel>
      )}
    </div>
  );
};
