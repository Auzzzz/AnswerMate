"use client"
import { auth } from "@/auth";
import { signIn, signOut, useSession } from "next-auth/react"

import React from "react";

//TODO: session TS

const HomeNavbar = () => {
  // const session = await auth();
  // if (session.error?.name === "RefreshAccessTokenError") {
  //   signOut();
    
  // }

  const { data: session, status } = useSession();


  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <div className="dropdown">
          

        </div>
        <a className="btn btn-ghost text-xl">AnswerM8</a>
      </div>
      <div className="navbar-center hidden lg:flex">
       
      </div>
      <div className="navbar-end">
        {session ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
            <button className="btn btn-accent" onClick={() => signIn("fusionauth")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default HomeNavbar;
