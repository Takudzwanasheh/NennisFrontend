import "./App.css";
import React from "react";
import About from "./components/about/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/ContactDetails/Contact";
import Navbar from "./components/Navbar/navbar";
import CoverPage from "./pages/coverpage/CoverPage";
import Stones from "./pages/StonesAvailable/Stones";
import ProductDetails from "./pages/StonesAvailable/ProductDetails";
import UserInfo from "./components/ContactDetails/UserInfo";
import Addproduct from "./pages/AddProducts/Addproduct";
import Respond from "./pages/Requests.jsx/Respond";

function App() {
	const Layout = () => {
		return (
			<div className='appLayout'>
				<div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
					<Navbar />
				</div>
				<Outlet />
				<Contact />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ path: "/", element: <CoverPage /> },
				{ path: "/contact", element: <Contact /> },
				{ path: "/stoneDetails/:id", element: <ProductDetails /> },
				{ path: "/availableStones", element: <Stones /> },
				{ path: "/about", element: <About /> },
				{ path: "/get_in_touch", element: <UserInfo /> },
				// { path: "/upload", element: <Addproduct /> },
			],
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: `/stoneDetails/:id`,
			element: <ProductDetails />,
		},
		{
			path: "/get_in_touch",
			element: <UserInfo />,
		},
		{
			path: "/upload",
			element: <Addproduct />,
		},
		{
			path: "/requests",
			element: <Respond />,
		},

		// {
		// 	path: "/register",
		// 	element: <RecipeReviewCard />,
		// },
	]);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}
export default App;
