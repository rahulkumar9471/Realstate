import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const AuthFormLayout = ({ children, image, title, subtitle, linkText, linkTo }) => {
    return (
        <Card>
            <div className="flex">
                {/* Left Side - Image */}
                <div className="w-1/2 flex items-center justify-center pr-4 p-6 bg-gradient-to-l from-neutral-950 to-blue-900">
                    <img src={image} alt="Auth visual" className="w-xl max-w-full h-auto" />
                </div>
                {/* Right Side - Form */}
                <div className="w-1/2 pl-4 p-16 pl-11 items-center border-l justify-center border-gray-500 dark:border-gray-600">
                    <div className="max-w-sm mx-auto">
                        <div className="mb-6">
                            <h1 className="mb-2 text-white text-4xl font-bold dark:text-gray-300">{title}</h1>
                            <p className="mb-0 text-white text-md dark:text-gray-300">
                                {subtitle} <Link to={linkTo} className="text-blue-500 hover:underline">{linkText}</Link>
                            </p>
                        </div>
                        {children} 
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default AuthFormLayout