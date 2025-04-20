import React from 'react'

const Card = ({ children }) => {
    return (
        <div
            className="flex items-center justify-center bg-blue-200 min-h-screen dark:bg-blue-950 bg-cover bg-center dark:bg-blue-900 dark:border-gray-500">
            <div className="w-full max-w-5xl bg-neutral-950 rounded-lg shadow-sm dark:bg-neutral-950 dark:border-gray-00">
                {children}
            </div>
        </div>
    )
}

export default Card