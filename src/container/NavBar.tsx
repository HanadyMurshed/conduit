import React from "react";
import { connect } from "react-redux";
import { NavBar } from "../components/NavBar";
import { IUser } from "../types/conduit.types";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { ButtonNavBar } from "../components/ButtonNavBar";

const mapState = (state: any) => {
  return { user: state.user };
};

const useStyle = makeStyles({
  link: {
    textDecoration: "none"
  }
});

const MyNavBar = (props: any) => {
  const classes = useStyle();
  return <NavBar>{getNavBarButtons(props.user, classes)}</NavBar>;
};

const getNavBarButtons = (user: IUser, classes: any) => {
  if (user)
    return (
      <div>
        <Link className={classes.link} to="/">
          <ButtonNavBar title="Home" />
        </Link>
        <Link className={classes.link} to="/new-post">
          <ButtonNavBar
            title="New Article"
            icon={<OpenInNewIcon style={{ fontSize: 15, paddingRight: 4 }} />}
          />
        </Link>
        <Link className={classes.link} to="/settings">
          <ButtonNavBar
            title="Settings"
            icon={<SettingsIcon style={{ fontSize: 15, paddingRight: 4 }} />}
          />
        </Link>
        <Link className={classes.link} to={`/user/${user.username}`}>
          <ButtonNavBar title={user.username ? user.username : "My Profile"} />
        </Link>
      </div>
    );
  else
    return (
      <div>
        <Link className={classes.link} to="/">
          <ButtonNavBar title="Home" />
        </Link>
        <Link className={classes.link} to="sign-up">
          <ButtonNavBar title="Sign Up" />
        </Link>
        <Link className={classes.link} to="sign-in">
          <ButtonNavBar title="Sign In" />
        </Link>
      </div>
    );
};
export default connect(mapState)(MyNavBar);
