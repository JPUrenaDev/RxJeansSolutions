import React, { useState } from "react";
import { useLogin } from "../../customHooks/useLogin";
import { Spinner } from "../Spinner";
import { Navigate, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, data = [] } = useLogin();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const datos = { email, pass };
    console.log(datos);
    mutate(datos);
    console.log(data);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center mt-[90px]">
          <div className="bg-white border rounded-md w-[500px] p-[40px] h-[600px] ">
            <div>
              <div className="flex justify-center mb-4">
                <img
                  className="h-[60px]"
                  src="./public/free-user-login-icon-305-thumb.png"
                ></img>
              </div>
              <h2 className="font-bold text-[30px] text-center mb-2">
                Welcome Back
              </h2>
              <div className="text-[9px] flex flex-col text-center mb-3">
                <div>Glad to see you again👋</div>
                <div>Login to your account bellow</div>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <button className="bg-white border text-[10px] justify-center px-3 h-[20px] items-center w-[170px] shadow-sm rounded flex gap-2">
                <img className="w-[19px]" src="./public/logo-page2.png"></img>{" "}
                <span className="text-[9px]">Continue with Google</span>
              </button>
            </div>

            <div className="flex flex-col mt-[50px] ">
              <div className="flex flex-col mb-2">
                <label className="text-[13px] mb-3">Email:</label>
                <input
                  disabled={isLoading}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[400px] text-[20px] px-2 border shadow-sm rounded h-[35px]  "
                ></input>
              </div>

              <div className="flex flex-col mb-3">
                <label className="text-[13px] mb-3">Password:</label>
                <input
                  disabled={isLoading}
                  value={pass}
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  className="w-[400px] px-2  text-[20px]  border shadow-sm h-[35px] rounded placeholder:p-2"
                ></input>
              </div>

              <button
                onClick={onSubmit}
                disabled={isLoading}
                className="bg-blue-700 rounded-md text-neutral-50 w-[400px] text-[20px] h-[35px] mt-[40px]"
              >
                {isLoading ? (
                  <>
                    {" "}
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                    </div>
                  </>
                ) : (
                  <h1>Login</h1>
                )}
              </button>
              <span className="text-[10px] text-center mt-7">
                Dont have an account? <span>Sign up for Free</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
