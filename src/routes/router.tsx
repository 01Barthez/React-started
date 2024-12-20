import { createBrowserRouter, Outlet } from 'react-router-dom'
import ScrollToTop from '@/components/custom/ScrollToTop'
import PageError from '@/pages/Error/PageError'
import HelloWord from '@/components/custom/HelloWord'
import GoodBye from '@/components/custom/GoodBye'
import TestFetch from '@/components/custom/TestFetch'

/**
 * Creates a router with specified routes and elements for each route.
 * @param {Array} routes - An array of route objects containing path and element information.
 * @returns None
 */

const Router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Outlet />

				{/* To scroll to top each time that we change routes */}
				<ScrollToTop />
			</>
		),

		// Page erreur
		errorElement: (
			<>
				<PageError />
			</>
		),

		children: [
			{
				path: '',
				element: <HelloWord/>,
			},

			{
				path: 'good-bye',
				element: <GoodBye/>,
			},
		
			{
				path: 'fetch-api',
				element: <TestFetch />,
			},

		],
	},
])

export default Router
