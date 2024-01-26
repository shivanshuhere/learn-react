import { Badge } from "@/components/ui/badge";

function Card() {
  return (
    <div className="border-2 border-red-300 flex justify-center items-center w-11/12 bg-slate-500 backdrop-blur-sm rounded-md gap-4">
      <div className="w-1/3  grid place-items-center ">
        <img
          className="rounded-full aspect-square w-full"
          src="https://www.cookwithmanali.com/wp-content/uploads/2017/06/Indian-Rice-Kheer.jpg"
          alt="img"
        />
      </div>
      <div className="w-1/2 p-2 ">
        <h2>Dish Name</h2>
        <p className="text-sm ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          dolorum?
        </p>
        <Badge className="relative right-1">price</Badge>
      </div>
    </div>
  );
}

export default Card;
