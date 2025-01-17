import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

import HorizontalLayout from "./components/HorizontalLayout/";

import "./assets/scss/theme.scss";
import fakeBackend from './helpers/AuthType/fakeBackend';

fakeBackend();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
		this.getLayout = this.getLayout.bind(this);
	}

 	/**
	 * Returns the layout
	 */
	getLayout = () => {
		let layoutCls = HorizontalLayout;

		switch (this.props.layout.layoutType) {
			case "horizontal":
				layoutCls = HorizontalLayout;
				break;
			default:
                layoutCls = HorizontalLayout;
				break;
		}
		return layoutCls;
	};

	render() {
		const Layout = this.getLayout();

		return (
			<React.Fragment>
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={Layout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={Layout}
								component={route.component}
								key={idx}
								isAuthProtected={true}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout
	};
};

export default connect(mapStateToProps, null, )(App);
