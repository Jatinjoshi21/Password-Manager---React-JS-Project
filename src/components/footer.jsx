import React from 'react'

const footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col items-center justify-center p-4">
        <div className="Logo text-2xl  font-bold">
            <span className="text-green-600" >&lt;</span>
            Pass
            <span className="text-green-600">Manage/&gt;</span>

        </div>
        <div>Your own Password Manager</div>
    </div>
  )
}

export default footer