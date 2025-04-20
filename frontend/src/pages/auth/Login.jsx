import React, { useState } from 'react' 
import img from '../../assets/login.png'
import FormInput from '../../components/FormInput'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { Eye, EyeOff } from 'lucide-react'
import AuthFormLayout from '../../components/AuthFormLayout'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <AuthFormLayout
      image={img}
      title="welcome Back"
      subtitle="Not a member?"
      linkText="Sign up"
      linkTo="/login"
    >
      <form>
        <div className="mb-5">
          <FormInput type="email" label="Email Id" placeholder="Enter Your Email" />
        </div>
        <div className="mb-5 relative">
          <FormInput
            type={showPassword ? 'text' : 'password'}
            label="Password"
            placeholder="Enter Your Password"
          />
          <span
            className="absolute right-3 top-[40px] cursor-pointer text-gray-400"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-xs text-white">
              Remember me
            </label>
          </div>
          <p className="text-white text-xs">
            <Link to="/forget-password" className="text-blue-500 hover:underline">
              Forgot Password
            </Link>
          </p>
        </div>

        <Button type="submit">Sign In</Button>
      </form>
    </AuthFormLayout>
  )
}

export default Login
