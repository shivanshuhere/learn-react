import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui";
import { useId } from "react";
import { useSearchParams } from "react-router-dom";
function Playground() {
    const boxes = [];
    for (let i = 1; i <= 6; i++) {
        boxes.push(<Box key={useId()} value={i} />);
    }
    const [score, setScore] = useState(0);
    const [rules, setRules] = useState(false);
    const [rule, setRule] = useState("show");
    const showRules = () => {
        setRules((prev) => !prev);
        setRule((prev) => (prev == "show" ? "hide" : "show"));
    };
    return (
        <>
            <div>
                <h1>{score}</h1>
                <p>Total Score</p>
            </div>
            {/* select number */}
            <div>
                <div className="flex">{boxes}</div>
                <p>select a number</p>
            </div>
            <div>
                <div>Dice img</div>
                <p>Click on dice to roll</p>
                <Button variant="destructive">Reset score</Button>
                <Button onClick={() => showRules()}>{rule} Rules</Button>
            </div>
            {rules ? (
                <div className="list-none">
                    <h2>how to play dice game</h2>
                    <li>select a number</li>
                    <li>click on dice img</li>
                    <li>
                        after click on dice if selected number is equal to dice
                        number you will get same point as dice
                    </li>
                    <li>
                        if you get wrong guess then 2 point will be dedcuted{" "}
                    </li>
                </div>
            ) : null}
        </>
    );
}

export default Playground;
