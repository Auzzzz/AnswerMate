import HomeNavbar from "@/components/home/Navbar";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex flex-col items-center m-4">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

              New Presentation
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Updates
            </a>
          </li>
          <li>
            <a>Stats</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center p-4 lg:p-2">
        <h1 className="text-2xl font-bold">Hello, USER</h1>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 m-8 ">
        <div className="card card-border border-2 bg-base-100 w-96">
          <div className="card-body">
            <h2 className="card-title">Presentation Title</h2>
            <p>DESC of presentation</p>
            <div className="flex flex-wrap gap-2">
              <div className="badge badge-info">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></path>
                    <circle
                      cx="12"
                      cy="7.25"
                      r="1.25"
                      fill="currentColor"
                      strokeWidth="2"
                    ></circle>
                  </g>
                </svg>
                Info
              </div>
              <div className="badge badge-info">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></path>
                    <circle
                      cx="12"
                      cy="7.25"
                      r="1.25"
                      fill="currentColor"
                      strokeWidth="2"
                    ></circle>
                  </g>
                </svg>
                Info
              </div>
              <div className="badge badge-info">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></path>
                    <circle
                      cx="12"
                      cy="7.25"
                      r="1.25"
                      fill="currentColor"
                      strokeWidth="2"
                    ></circle>
                  </g>
                </svg>
                Info
              </div>
              <div className="badge badge-info">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></path>
                    <circle
                      cx="12"
                      cy="7.25"
                      r="1.25"
                      fill="currentColor"
                      strokeWidth="2"
                    ></circle>
                  </g>
                </svg>
                Info
              </div>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
