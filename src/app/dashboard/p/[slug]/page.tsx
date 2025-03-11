"use client";

import NewPresentation from "@/components/NewPresentation";
import { redirect, useParams } from "next/navigation";
import { use, useState } from "react";

export default function PresSlug() {
  // const slug = (await params).slug;
  const param = useParams();
  console.log(param.slug);
  const [questions, setQuestions] = useState([]);
  // return <div>My Post: {slug}</div>

  if (param.slug === "new") {
    return <NewPresentation />;
  }


  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex flex-col items-center m-4">
        {/* Save Bar */}
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Save
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              Exit
            </a>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center flex-col gap-3 ">
        <form className="flex flex-col items-center p-4 lg:p-2">
          <div className="flex justify-center items-center flex-col gap-3">
            <h2 className="text-2xl font-bold">Presentation Name</h2>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-warning w-full max-w-xs"
              />
            </div>
          </div>

          {/* Outline Button */}
          <div className="flex justify-center items-center flex-col gap-3 mt-4">
            <h2 className="text-2xl font-bold">Questions</h2>
            <div className="flex gap-2">
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row">
                  <div className="text-4xl font-thin opacity-30 tabular-nums">
                    01
                  </div>
                  <div></div>
                  <div className="list-col-grow">
                    <div>Dio Lupa</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Remaining Reason
                    </div>
                  </div>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </form>
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeW
                idth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
