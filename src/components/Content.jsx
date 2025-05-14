import { useLocation } from '@tanstack/react-router';
import React from 'react'
import Breadcrumbs from './Breadcrumbs';

function Content({children}) {

    const path = useLocation();
    console.log(path)
    
    // get path name. 
    // explode via explode in js then rrtrn last element
    const pathName = path.pathname.split('/').pop();
    console.log(pathName)


	return (
        <>
        <Breadcrumbs />
        <div className="min-h-screen bg-base-100 rounded-xl shadow-lg">
			<div className="flex flex-col h-full p-4">
                
                <h2 className="text-2xl font-bold mb-4 capitalize">{pathName}</h2>
                {children}
			</div>
		</div>
        </>
	)
}

export default Content