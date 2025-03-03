export default async function PresSlug({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  // return <div>My Post: {slug}</div>

  return (
    <main className="flex min-h-screen flex-col ">
    <div className="flex flex-col items-center m-4">
      {/* Save Bar */}
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
        <li>
          <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>


            Save
          </a>
        </li>
        <li>
          <a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

            Exit
          </a>
        </li>
        
      </ul>
    </div>



    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 m-8 ">
    <form className="flex flex-col items-center p-4 lg:p-2">
    <fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" />
  <p className="fieldset-label">Optional</p>
</fieldset>
      </form>
    </div>

    </main>
  )
}