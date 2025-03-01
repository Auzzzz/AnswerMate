import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import Auth0Button from "@/components/buttons/Auth0";
import DiscordButton from "@/components/buttons/DiscordButton";
import GoogleButton from "@/components/buttons/GoogleButton";
import LoginButton from "@/components/buttons/LoginButton";
import LogoutButton from "@/components/buttons/LogoutButton";
import HomeNavbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HomeNavbar />

      {/* Hero */}
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* speal */}

      <div className="flex flex-col items-center p-4 lg:p-6">
        <hr className="w-1/2 my-4" />
        <h2 className="text-3xl font-bold">Welcome to Box Office News!</h2>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <hr className="w-1/2 mx-4" />
      </div>
      {/* Features */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mt-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      <Footer />
    </main>
  );
}
