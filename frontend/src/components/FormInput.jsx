import React from 'react'

const FormInput = ({ name, placeholder, label, className, type, ...rest}) => {
    return (
        <div>
            <label className="block mb-2 text-white text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                className={`py-2.3 sm:py-3 ps-4 bg-gray-200 pe-10 block w-full border border-dark-100 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 ` + className}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}

export default FormInput