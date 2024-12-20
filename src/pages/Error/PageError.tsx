import SEO from '@/components/custom/SEO'
import React from 'react'

const PageError: React.FC = () => {
	return (
		<>
			<SEO
				title='Page Not Found | React Projet Starter By Barthez Kenwou'
				description='we are sorry but this page is not available at the moment.'
			/>

			<div className='container flex items-center justify-center h-screen w-screen'>
				<h1 className='text-5xl md:text-6xl lg:text-7xl'>404 NotFound</h1>
			</div>
		</>
	)
}

export default PageError
