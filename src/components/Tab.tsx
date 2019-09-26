import * as React from "react";
import { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { fontSize } from "../SystemVariables";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    fontSize: fontSize.small,
    textTransform: "lowercase"
  }
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab className={classes.tab} label="Your Feed" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Gobal Feed" {...a11yProps(0)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
};
