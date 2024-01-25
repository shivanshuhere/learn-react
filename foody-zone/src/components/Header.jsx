import { Button } from "./ui/button";

function Header() {
  return (
    <div className="bg-gray-700 min-h-40 md:flex md:justify-center pb-4 sticky top-0 z-10">
      <div
        className="text-center text-3xl pt-4 font-semibold font-mono text-white
      md:absolute top-10 left-5 lg:left-10 "
      >
        F<span className="text-red-700">oo</span>dy Z
        <span className="text-red-700">o</span>ne
      </div>
      <div className="flex  justify-center py-4 md:absolute top-6 lg:top-10 right-5 lg:right-10 ">
        <input
          type="search"
          placeholder="search food here..."
          className="rounded-sm pl-2"
        />
      </div>
      <div
        className="md:self-end 
      list-none flex  text-white justify-center gap-2 sm:gap-4 md:gap-5 lg:gap-5 flex-wrap"
      >
        <Button className="bg-red-500">All</Button>
        <Button className="bg-red-500">Breakfast</Button>
        <Button className="bg-red-500">Lunch</Button>
        <Button className="bg-red-500">Dinner</Button>
      </div>
    </div>
  );
}

export default Header;
