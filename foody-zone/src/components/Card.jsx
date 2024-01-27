import { Badge } from "@/components/ui/badge";

function Card() {
  return (
    <div
      className="
      md:max-w-sm
    sm:max-w-md
    border-2 border-red-300 flex justify-center items-center w-5/6 bg-slate-500 backdrop-blur-sm rounded-md gap-4"
    >
      <div className="w-1/3  grid place-items-center ">
        <img
          className="rounded-full aspect-square w-full p-2"
          src="https://www.cookwithmanali.com/wp-content/uploads/2017/06/Indian-Rice-Kheer.jpg"
          alt="img"
        />
      </div>
      <div className="w-1/2 p-2 ">
        <h2 className="text-base mb-1">Dish Name</h2>
        <p className="text-xs text-wrap mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatem aperiam
        </p>
        <Badge variant="secondary" className="absolute right-2 bottom-2">
          price
        </Badge>
      </div>
    </div>
  );
}

export default Card;
