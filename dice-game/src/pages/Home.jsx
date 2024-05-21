import React from "react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom"; // used navigate to next page
function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="h-screen bg-black flex flex-col justify-center items-center
            md:flex-row
            "
            >
                <div className="w-3/4">
                    <img
                        src="https://images.pexels.com/photos/37534/cube-six-gambling-play-37534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </div>
                <div className="w-1/2 flex  flex-col ">
                    <h1
                        className="font-mono text-2xl sm:text-3xl mb-4 text-slate-100
                    md:text-5xl
                    "
                    >
                        Dice Game
                    </h1>
                    <Button
                        className=" text-slate-800  text-sm bg-slate-300 md:max-w-sm md:mr-8 hover:text-white border-transparent border-[1px] hover:border-white"
                        onClick={() => navigate("/playground")}
                    >
                        Play Now
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Home;
