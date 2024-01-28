function App() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <div className="bg-white text-black  flex justify-center items-center rounded-lg h-10">
          {" "}
          --icon--Firebase Contact App
        </div>
        <div className="w-full flex justify-center ">
          <div className="flex justify-center items-center my-1 w-1/2">
            <input
              type="search"
              placeholder="search contacts..."
              className="border-2 border-white rounded-sm bg-transparent pl-4"
            />
            <button className="w-10 rounded-full bg-white text-black">
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center text-white min-h-screen">
          --icon-- No contact found
        </div>
      </div>
    </>
  );
}

export default App;
