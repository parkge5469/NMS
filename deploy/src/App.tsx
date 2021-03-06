// prettier-ignore
import { withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router, Switch, Redirect } from "react-router-dom";
import { history } from "./configureStore";
import { Todo } from "./model/model";
import { RootState } from "./reducers/index";
import withRoot from "./withRoot";

//import { LoginPage } from './pages/sub';


import Sub from './layout/Sub';
import Main from './layout/Main';
import NoMatch from "./pages/error/NoMatch";




interface Props extends RouteComponentProps<void>, WithWidth {
	todoList: Todo[];
}

function App(props?: Props) {
	
	const [mobileOpen, setMobileOpen] = React.useState(true);

	if (!props) {
		return null;
	}



	return (
		<Router history={history} >
			<Switch>
				<Route path='/nms/sub' component={Sub} />
				<Route path='/nms/main' component={Main} />
				<Route path='/nms/404' component={NoMatch} />
				<Route path='/nms/*' component={NoMatch} />
				<Redirect from='/' to='/nms/sub/login' />
				

			</Switch>
		</Router>
	);
}





function mapStateToProps(state: RootState) {
	return {
		todoList: state.todoList,
	};
}

export default connect(mapStateToProps)(withRoot(withWidth()(App)));


