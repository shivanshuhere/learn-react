import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui";
import { useId } from "react";
import Dice from "react-dice-roll";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Playground() {
    const boxes = [];

    for (let i = 1; i <= 6; i++) {
        boxes.push(
            <Box
                key={useId()}
                handleSelect={(value) => setSelectNumber(value)}
                value={i}
            />
        );
    }

    const [score, setScore] = useState(0);
    const [rules, setRules] = useState(false);
    const [rule, setRule] = useState("Show");
    const [selectNumber, setSelectNumber] = useState(null);
    const [flag, setFlag] = useState();
    const [currNum, setCurrNum] = useState(0);

    // no selection
    const selectionError = () => {
        alert("Please select a number ");
    };

    // show / hide btn

    const showRules = () => {
        setRules((prev) => !prev);
        setRule((prev) => (prev == "Show" ? "Hide" : "Show"));
    };

    //reset btn
    const handleReset = () => {
        setScore(0);
    };

    //compare values
    const compareVals = (value) => {
        if (value == selectNumber) {
            setScore((prev) => prev + value);
            setSelectNumber(null);
            setFlag(true);
        } else {
            setScore((prev) => prev - 2);
            setSelectNumber(null);
            setFlag(false);
        }
    };

    return (
        <>
            <div className="md:absolute md:top-8 md:left-8 m-4">
                <h1 className="text-4xl ">{score}</h1>
                <p className="font-sans ">Total Score</p>
            </div>
            {/* select number */}
            <div className="md:absolute md:top-10 md:right-10  flex flex-col items-center justify-center">
                <div className="flex flex-wrap">{boxes}</div>
                <p className="font-sans ">Select a number</p>
            </div>
            <div className="flex md:h-screen min-h-screen flex-col md:mt-0 -mt-12 justify-center items-center">
                <Dice
                    onRoll={(value) => {
                        setCurrNum(value);
                        if (selectNumber == null) {
                            selectionError();
                        } else {
                            compareVals(value);
                        }
                    }}
                    size={100}
                />

                <p className="mt-2 font-serif ">Click on dice to roll</p>
                <div className=" flex gap-4 mt-6">
                    <Button variant="destructive" onClick={() => handleReset()}>
                        Reset score
                    </Button>
                    <Button onClick={() => showRules()}>{rule} rules</Button>
                </div>
                {rules ? (
                    <div className=" px-6 py-3 relative top-16 text-slate-600 bg-red-300 m-4 rounded-md">
                        <h2 className="text-lg uppercase font-semibold text-slate-800">
                            how to play dice game
                        </h2>
                        <li>Select a number</li>
                        <li>Click on dice img</li>
                        <li>
                            After click on dice if selected number is equal to
                            dice number you will get same point as dice
                        </li>
                        <li>
                            If you get wrong guess then 2 point will be dedcuted{" "}
                        </li>
                    </div>
                ) : null}
                {flag ? (
                    <div className="absolute md:left-4 md:top-1/2 top-2 right-2 max-w-32 text-center">
                        <Alert>
                            <AlertTitle>You won 😎</AlertTitle>
                            <AlertDescription>
                                +{currNum} points !
                            </AlertDescription>
                        </Alert>
                    </div>
                ) : (
                    <div className="absolute md:left-4 md:top-1/2 top-2 right-2 max-w-32 text-center">
                        <Alert variant="destructive">
                            <AlertTitle>Try Again 😕</AlertTitle>
                            <AlertDescription>-2 points !</AlertDescription>
                        </Alert>
                    </div>
                )}
            </div>
        </>
    );
}

export default Playground;
