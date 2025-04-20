import React from 'react'
import { LoaderCircle } from 'lucide-react';

const Button = ({ type, busy, children }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                type={type}
                className="text-white dark:text-white 
                    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                    shadow-zs shadow-gray-800/80 dark:shadow-s dark:shadow-neutral-100/25 
                    font-medium rounded-lg text-sm block w-full py-2.5 sm:py-3 text-center mb-2 h-full"
                >
                { busy ? <LoaderCircle size={28} className="animate-spin" /> : children }
            </button>
        </div>
    )
}

export default Button