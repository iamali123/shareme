import React from 'react'
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div>
         <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
            //   onSuccess={responseGoogle}
            //   onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
    </div>
  )
}

export default Login