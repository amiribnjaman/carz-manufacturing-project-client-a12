import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Auth.css';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loginErr, setLoginErr] = useState('')
    const [user, loading, error] = useAuthState(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, signinUser, signinLoading, signinError,] = useSignInWithEmailAndPassword(auth);

    //  Create a user using react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
    };


    // Handle Sign in google popup
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
    }

    // Upsert User into database
    if (signinUser || googleUser) {
        const user = signinUser || googleUser;
        fetch('https://carz-manufacturing-project-server-a12.vercel.app/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: user?.user?.email,
                name: user?.user?.displayName,
                role: "user"
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.token)
                // After creating user he/she will be redirected
                const from = location.state?.from?.pathname || "/";
                if (user) {
                    navigate(from, { replace: true });
                };
            })

    }

    //  Custom login error message
    useEffect(() => {
        if (signinError) {
            setLoginErr(<p className='text-[13px] text-center text-red-500 font-semibold'>Email or password is Invalid. Please try again.</p>)
        } else if (googleError) {
            setLoginErr(<p className='text-[13px] text-center text-red-500 font-semibold'>Something wrong. Please try again.</p>)
        }
    }, [signinError, googleError])



    return (
      <div className="login-page md:pt-14">
        <div className="w-11/12 mx-auto md:flex ">
          {/*==================== WELCOME MESSAGE========== */}
          <div className="md:w-1/2  md:mt-28 flex justify-start flex-col">
            <h2 className="font-semibold text-[36px] text-white">
              Welcome Back
            </h2>
            <p className="text-[#eeeeee] text-[11px] w-[75%] mx-auto">
              To countine into your beloved thecarZ, please Login now and get the best one.
            </p>
          </div>
          <div className="md:w-1/2 md:pt-0 pt-4">
            <div class="p-6 max-w-md grid grid-cols-1 gap-3 bg-white rounded-lg border border-gray-200 shadow-md">
              <h2 className="text-xl font-semibold text-[#014E9C]">Login</h2>
              {loginErr}
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="grid grid-cols-1 gap-3"
              >
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email field is required.",
                    },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please provide a valid email",
                    },
                  })}
                  type="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                  placeholder="Your Email"
                />
                {errors.email?.type === "required" && (
                  <span className="text-sm text-left text-red-800">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-sm text-left text-red-800">
                    {errors.email?.message}
                  </span>
                )}
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password field is required.",
                    },
                    minLength: {
                      value: 8,
                      message: "Password should longer or equal 8 characters.",
                    },
                  })}
                  type="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                  placeholder="Your Password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-sm text-left text-red-800">
                    {errors.password?.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-sm text-left text-red-800">
                    {errors.password?.message}
                  </span>
                )}

                <button
                  type="submit"
                  class={`${
                    signinLoading
                      ? "bg-gray-300 py-2.5 cursor-not-allowed"
                      : "bg-[#014E9C] text-white hover:bg-[#05417f] py-3"
                  } mt-4  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 `}
                >
                  {signinLoading ? (
                    <div class="flex items-center justify-center ">
                      <div class="w-6 h-6 border-b-2 border-gray-800 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    "LOGIN"
                  )}
                </button>
              </form>

              <p className="text-left">
                <small className="">
                  New to carZ?{" "}
                  <Link to="/signup" className="text-blue-600">
                    Signup
                  </Link>
                </small>
              </p>
              <div className="flex items-center px-1">
                <div className="w-1/2 bg-black h-[1px]"></div>
                <div className="px-3">or</div>
                <div className="w-1/2 bg-black h-[1px]"></div>
              </div>

              <button
                onClick={handleSignInWithGoogle}
                type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                SIGNIN WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;