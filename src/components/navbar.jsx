import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-slate-900 flex justify-between items-center p-2 h-16 text-white"  >
        <div className="Logo text-2xl  font-bold">
            <span className="text-green-600" >&lt;</span>
            Pass
            <span className="text-green-600">Manage/&gt;</span>

        </div>
        <ul>
            <li className="flex justify-between items-center text-lg  gap-4">
            <div className="rounded-full bg-black-900 text-white w-16 p-2 flex items-center justify-center hover:bg-green-600  hover:font-bold scale:1.5">
            <a href="/"  className="text-md">Home</a>

            </div>
            <div className="rounded-full bg-black-900 text-white w-16 p-2 flex items-center justify-center hover:bg-green-600  hover:font-bold scale:1.5">
            <a href="/"  className="text-md">About</a>

            </div>
            <div className="rounded-full bg-black-900 text-white w-16 p-2 flex items-center justify-center hover:bg-green-600  hover:font-bold scale:1.5">
            <a href="/"  className="text-md">GitHub</a>

            </div>
            </li>
        </ul>
    </nav>
  )
}

export default navbar