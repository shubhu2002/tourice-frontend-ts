import React, { useState, useContext } from "react";
import { LucideLoader, XCircle } from "lucide-react";
import { ImageData } from "~/constants";
// import { AuthContext } from "../../context/AuthContext";
import { apiInstance } from "~/utils";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import Image from "next/image";
import type { UserProps } from "~/types";
import { motion } from "framer-motion";
import { useAppStore } from "~/store";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { setLoginModal } = useAppStore();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<UserProps>({
    username: "",
    email: "",
    password: "",
  });
    
  //   const { dispatch } = useContext(AuthContext);
  //   const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const { data } = await apiInstance.post<{
        status: boolean;
        newUser: UserProps;
      }>("/auth/register", credentials);

      if (data.status) {
        toast.success("Registered Successfull !");
        setLoading(false);
        setCredentials({ username: "", email: "", password: "" });
      }

      //   dispatch({ type: "REGISTER_SUCCESS" });
      //   navigate("/login-register");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: true,
        callbackUrl: "/contact",
        email: credentials.email,
        password: credentials.password,
      });
      // const { data } = await apiInstance.post<{
      //   status: boolean;
      //   newUser: UserProps;
      // }>("/auth/register", credentials);
      console.log(result);
      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Logged in successfully!");
        setLoginModal(false); // Close modal on successful login
      }

      // if (data.status) {
      //   toast.success("Registered Successfull !");
      //   setLoading(false);
      //   setCredentials({ username: "", email: "", password: "" });
      // }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };
  const handlePage = () => {
    setShow(!show);
  };

  return (
    <main className="grid h-screen w-full place-items-center">
      <motion.section
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 100 }}
        transition={{ duration: 0.35 }}
        className="relative z-[9999] flex w-5/6 flex-col rounded-xl bg-secondaryBG backdrop-blur md:w-3/5 md:flex-row"
      >
        <div onClick={() => setLoginModal(false)}>
          <XCircle
            size={32}
            strokeWidth={1}
            className="absolute right-2 top-2 z-50 cursor-pointer text-lime-50 md:text-black dark:md:text-white"
          />
        </div>
        <div className="relative flex-1">
          <div className="borde absolute left-1/2 top-1/2 z-50 w-[80%] -translate-x-1/2 -translate-y-1/2 border-white p-2 capitalize text-lime-50 md:w-[70%]">
            <h1 className="pb-2 text-sm md:text-xl">
              Sign up now to join the club
            </h1>
            <h1 className="w-full text-lg font-bold md:text-2xl">
              We Have 10 Lakh+ happy Travellers
            </h1>
          </div>
          <Image
            width={1000}
            height={1000}
            src={ImageData.goa}
            alt="carousel"
            className="h-full w-full rounded-xl brightness-[0.3]"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-center py-7">
          <h1 className="relative w-full text-center text-2xl font-bold">
            {show ? "LogIn" : "SignUp"}
            <hr className="dark:bg-textLight absolute left-2/4 top-10 h-[5px] w-7 -translate-x-1/2 rounded-2xl bg-black dark:bg-lime-50" />
          </h1>
          <div className="w-5/6">
            <div
              className={`${
                show ? "max-h-0 overflow-hidden border-none" : "max-h-36"
              } txt_field relative my-5 border-b border-gray-500`}
            >
              <input
                type="text"
                name="username"
                required={!show}
                value={credentials.username}
                className="h-12 w-full border-none bg-inherit outline-none"
                onChange={handleChange}
                autoComplete="off"
              />
              <span></span>

              <label
                htmlFor="username"
                className="dark:text-textLight pointer-events-none absolute left-0 top-2/4 z-50 -translate-y-2/4 text-textDark duration-500"
              >
                User Name
              </label>
            </div>
            <div className="txt_field relative my-5 border-b border-gray-500">
              <input
                type="email"
                name="email"
                value={credentials.email}
                required
                className="h-12 w-full border-none bg-inherit py-1 outline-none"
                onChange={handleChange}
                autoComplete="off"
              />
              <span></span>
              <label
                htmlFor="email"
                className="dark:text-textLight pointer-events-none absolute left-0 top-2/4 z-50 -translate-y-2/4 text-textDark duration-500"
              >
                E-mail
              </label>
            </div>
            <div className="txt_field relative my-5 border-b border-gray-500">
              <input
                type="password"
                name="password"
                value={credentials.password}
                autoComplete="off"
                required
                className="h-12 w-full border-none bg-inherit py-1 outline-none"
                onChange={handleChange}
              />
              <span></span>

              <label
                htmlFor="pass"
                className="dark:text-textLight pointer-events-none absolute left-0 top-2/4 z-50 -translate-y-2/4 text-textDark duration-500"
              >
                Password
              </label>
            </div>
            <div className="flex justify-evenly py-2">
              <button
                className={`${
                  show ? "bg-slate-300" : "bg-emerald-300"
                } flex w-5/12 items-center justify-center rounded-2xl py-2 dark:text-black ${loading && "opacity-60"}`}
                disabled={show}
                onClick={handleSignUp}
              >
                {!show && loading ? (
                  <LucideLoader className="animate-spin" />
                ) : (
                  "Sign Up"
                )}
              </button>
              <button
                className={`${
                  show ? "bg-emerald-300" : "bg-slate-300"
                } flex w-5/12 items-center justify-center rounded-2xl py-2 dark:text-black ${loading && "opacity-60"}`}
                disabled={!show}
                onClick={handleLogin}
              >
                {show && loading ? (
                  <LucideLoader className="animate-spin" />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
          <div
            className="mt-4 text-sm text-blue-500 hover:underline"
            onClick={handlePage}
          >
            {show ? "New User Register !!" : "Already User Login !!"}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Login;
