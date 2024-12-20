import React from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '/logo.svg'

const Logo: React.FC = () => {
	return (
		<Link to='/' className='inline-block w-24 '>
			<img
				src={LogoIcon}
				alt='Logo'
				className='w-full h-full object-contain'
			/>
		</Link>
	)
}

export default Logo
