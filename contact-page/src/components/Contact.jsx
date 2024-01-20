import React from "react";

function Contact() {
    return (
        <>
            <div className="min-h-screen bg-slate-200 w-full flex justify-center place-items-center flex-wrap">
                <div className="mt-8 mb-2 text-wrap px-4">
                    <h1 className="text-4xl uppercase font-semibold mb-4">
                        Contact us
                    </h1>
                    <p className="mt-2 px-2">
                        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR
                        FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST
                        WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE
                        CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL
                        MEDIA.
                    </p>
                </div>
                <div className="flex flex-wrap  justify-items-center md:flex-col md:flex-nowrap ">
                    <img src="src/assets/Service.png" alt="" />
                    <div className="flex w-full justify-center gap-4 flex-wrap ">
                        <button className="max-w-72 w-9/12 my-1 border-2 border-black uppercase rounded-md bg-black text-white ">
                            via support chat
                        </button>
                        <button className="w-9/12  max-w-72 bg-black text-white my-1 border-2 border-black rounded-md uppercase">
                            via call
                        </button>
                        <button className="w-9/12 uppercase max-w-72  mx-auto rounded-md bg-white text-black my-1 border-2 border-black">
                            via email form
                        </button>
                    </div>
                    <form className="flex mx-auto flex-col flex-wrap align-middle justify-items-center gap-2 my-4">
                        <fieldset>
                            <legend>Name</legend>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border-2 pl-2"
                                required
                            />
                            <legend>Email</legend>
                            <input
                                type="email"
                                placeholder="Enter your email "
                                className="border-2 pl-2"
                                required
                            />
                        </fieldset>
                        <textarea
                            placeholder="Message..."
                            name="msg"
                            id=""
                            cols="20"
                            rows="5"
                            required
                            className="pl-2"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-black text-white  py-1 mt-1 mb-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
