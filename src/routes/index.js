import React from "react";
import { Redirect } from "react-router-dom";



//Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProductDetail";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../pages/Ecommerce/EcommerceShops";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct";


// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

 // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login";
import Register1 from "../pages/AuthenticationInner/Register";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen";

import Dashboard from "../pages/Dashboard/index";

import {CPU} from "../pages/Custom-PC/CPU/index";
import {Memory} from '../pages/Custom-PC/Memory/index';
import {Motherboard} from '../pages/Custom-PC/Motherboard/index';
import {VideoCard} from '../pages/Custom-PC/Video-Card/index';
import {PowerSupply} from '../pages/Custom-PC/Power-Supply/index';
import {CPUCooler} from '../pages/Custom-PC/CPU-Cooler/index';
import {Case} from '../pages/Custom-PC/Case/index';
import {Storage} from '../pages/Custom-PC/Storage/index';
import {Software} from '../pages/Custom-PC/Operating-Software/index';

const publicRoutes = [

	{ path: "/dashboard", component: Dashboard },

	{ path : '/products/cpu', component: CPU},
	{ path : '/products/memory', component: Memory},
	{ path : '/products/motherboard', component: Motherboard},
	{ path : '/products/video-card', component: VideoCard},
	{ path : '/products/power-supply', component: PowerSupply},
	{ path : '/products/cpu-cooler', component: CPUCooler},
	{ path : '/products/case', component: Case},
	{ path : '/products/storage', component: Storage},
	{ path : '/products/software', component: Software},


	{ path: "/ecommerce-products", component: EcommerceProducts },
	{ path: "/ecommerce-product-detail", component: EcommerceProductDetail },
	{ path: "/ecommerce-orders", component: EcommerceOrders },
	{ path: "/ecommerce-customers", component: EcommerceCustomers },
	{ path: "/ecommerce-cart", component: EcommerceCart },
	{ path: "/ecommerce-checkout", component: EcommerceCheckout },
	{ path: "/ecommerce-shops", component: EcommerceShops },
	{ path: "/ecommerce-add-product", component: EcommerceAddProduct },

	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const authProtectedRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },

	// Authentication Inner
	{ path: "/pages-login", component: Login1 },
	{ path: "/pages-register", component: Register1 },
	{ path: "/pages-forgot-pwd", component: ForgetPwd1 },
	{ path : "/auth-lock-screen", component: LockScreen }
];

export { authProtectedRoutes, publicRoutes };
