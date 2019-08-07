// prettier-ignore
import { withWidth } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithWidth } from "@material-ui/core/withWidth";

import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router, Switch, Redirect } from "react-router-dom";
import { history } from "./../configureStore";
import { Todo } from "./../model/model";



//import { LoginPage } from './pages/sub';

import { RootState } from "./../reducers/index";
import withRoot from "./../withRoot";
import routes from './../routes.js';
import IDCreator from '../utils/IDCreator';
import axios from 'axios';
import NoMatch from "../pages/error/NoMatch";

function RouteTag() {
	const classes = useStyles();
	React.useEffect(() => {
		if(sessionStorage.getItem('jwt_token') === null){
			const key = IDCreator.createLongId();
			console.log('key '+key);
			axios.get('/axios/CreateJwt',{
				params: {
					key: key
				}
			})
			.then((jwtToken: any) => {
				console.log(jwtToken.data);
				sessionStorage.setItem('jwt_token',jwtToken.data);
			})
			.catch((err) => {
				console.log('/axios/CreateJwt err: '+err);
			})
		}
		// console.log(sessionStorage.getItem('jwt_token'));
	})
	const switchRoutes = (
		<div className={classes.root}>
			<Switch>
				{
					routes.map((v: any, key: number) => {
						if(v.layout==='/nms/sub') {
							return(
								<Route	
									key={key}
									path={v.layout + v.path}
									component={v.component}
								/>
								
							)
						}
					})
				}
				{
					<Route path='/nms/sub/*' component={NoMatch} />
				}
				
				
				
				
			</Switch>
		</div>
		
	)
	// return ( 
	// 	<div className={classes.content}>
	// 		<Route exact={true} path="/sub/login" component={LoginPage} />
	// 		<Route exact={true} path="/main/home" component={HomePage} />
	// 		<Route exact={true} path="/main/todo" component={TodoPage} />
			
	// 	</div>
	// )

	return switchRoutes;
}



interface Props extends RouteComponentProps<void>, WithWidth {
	todoList: Todo[];
}

function Sub(props?: Props) {
	//const [mobileOpen, setMobileOpen] = React.useState(true);

	if (!props) {
		return null;
	}

	

	return (
		
		<Router history={history}>
			<RouteTag />
		</Router>
		
	);
}




const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
	},	
	content: {
		
		width: "100%",
		height: "100%",
		
	},
}));

function mapStateToProps(state: RootState) {
	return {
		todoList: state.todoList,
	};
}

export default connect(mapStateToProps)(withRoot(withWidth()(Sub)));
