import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // used navigate to next page
function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div>Img</div>
                <div>
                    <h1>Dice Game</h1>
                    <Button
                        className="mx-4 my-1"
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
