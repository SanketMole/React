import React from 'react'

function Cards({username='Name', btntext='click me'}) {
    console.log(username, btntext);
    // console.log("props",props)
    return (
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 mb-4">
        <img
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btntext}
          </button>
        </div>
      </div>
    )
}

export default Cards
