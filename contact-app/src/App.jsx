import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen p-2">
        <div className="bg-white text-black  flex justify-center items-center rounded-lg h-10 ">
          {" "}
          --icon-- Firebase Contact App
        </div>
        <div className="flex justify-between gap-2 my-2 sticky top-1 ">
          <input
            type="search"
            placeholder="   search contacts..."
            className="border-2 border-white w-full rounded-sm bg-transparent text-slate-300 "
          />
          <button className=" rounded-full bg-white  text-black text-2xl px-4 py-1">
            +
          </button>
        </div>
        <div className="flex justify-center items-center   min-h-screen">
          {/* conditional rednder here */}
          {/* <p className="relative bottom-10 text-slate-300">
            --icon-- No contact found
          </p> */}
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
