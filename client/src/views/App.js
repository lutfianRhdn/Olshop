import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/output.css";
import { actionType } from "../redux/constants/action-types";
import useLocalStorage from "../config/useLocalStorage";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Index from "./Index";
import Dashboard from "./Dashboard";
import User from "./users/Index";
import UserCreate from "./users/Create";
import UserUpdate from "./users/Edit";
import Store from "./store/Index";
import Create from "./store/Create";
import Product from "./products/Index";
function App(props) {
  const [user] = useLocalStorage("user");
  props.setUser(user);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/user/create" exact component={UserCreate} />
        <Route path="/user/edit/:id" exact component={UserUpdate} />
        <Route path="/user" exact component={User} />
        <Route path="/store/create" exact component={Create} />
        <Route path="/store" exact component={Store} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setUser: (payload) =>
    dispatch({ type: actionType.SET_USER, payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
