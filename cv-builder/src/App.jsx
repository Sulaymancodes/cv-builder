
export default function App() {
  return (
    <>
     <h1 className="flex text-5xl font-bold color justify-center">
     Hello world!
     </h1>
     <br></br>
     <div className="flex justify-center">
      <div className="w-40 h-9 bg-blue-400 rounded mr-5">
        <p className="text-center">Blue</p>
      </div>
      <div className="w-40 h-9 bg-red-400 rounded hover:bg-sky-700">
        <p className="text-center">Red</p>
      </div>
     </div>
    </>
    
  )
}