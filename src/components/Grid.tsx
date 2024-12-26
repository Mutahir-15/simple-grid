import React from 'react'

function Grid() {
  return (
    <main className='max-w-[1440px] mx-auto p-2 md:p-10'>
    <div className="grid grid-cols-4 grid-rows-6 gap-2 h-screen p-4">
        <div className="col-span-1 row-span-6 bg-yellow-400 p-4 text-2xl font-bold">Nav</div>
        <div className="col-span-3 row-span-1 bg-yellow-400 p-4 text-2xl font-bold">Header</div>
        <div className="col-span-2 row-span-4 bg-yellow-400 p-4 text-2xl font-bold">Article</div>
        <div className="col-span-1 row-span-4 bg-yellow-400 p-4 text-2xl font-bold">Ads</div>
        <div className="col-span-3 row-span-1 bg-yellow-400 p-4 text-2xl font-bold">Footer</div>
    </div>
    </main>
  )
}

export default Grid
