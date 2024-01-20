import React from "react";

function Contact() {
    return (
        <>
            <div className="min-h-screen bg-slate-200 w-full flex justify-center place-items-center flex-wrap">
                <div className="mt-12 mb-2 text-wrap px-4 ml-4">
                    <h1 className="text-4xl md:text-6xl ml-3 uppercase font-semibold mb-4">
                        Contact us
                    </h1>
                    <p className="mt-2 px-4 text-wrap text-sm md:text-lg lg:pr-52">
                        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR
                        FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST
                        WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE
                        CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL
                        MEDIA.
                    </p>
                </div>
                <div className="max-w-2xl lg:flex lg:flex-row-reverse lg:items-center  lg:justify-center lg:max-w-full lg:overflow-hidden">
                    <img
                        src="src/assets/Service.png"
                        className="lg:w-2/5  border-2"
                        alt=""
                    />
                    <div className="lg:w-1/2 ">
                        <div className="flex w-full justify-center gap-4 flex-wrap  ">
                            <button className="lg:w-1/3 lg:text-sm max-w-72 w-9/12 my-1 border-2 border-black uppercase rounded-sm bg-black text-white ">
                                via support chat
                            </button>
                            <button className="w-9/12 lg:w-1/3  max-w-72 bg-black text-white my-1 border-2 border-black rounded-sm uppercase">
                                via call
                            </button>
                            <button className="w-9/12 uppercase max-w-72  mx-auto rounded-sm bg-white text-black my-1 border-2 border-black">
                                via email form
                            </button>
                        </div>
                        <form className="w-9/12 mx-auto flex flex-col items-center justify-center my-4 max-w-sm">
                            <label
                                htmlFor=""
                                className="block self-start relative -bottom-3 left-4 px-1  backdrop-blur-lg "
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-slate-300"
                            />
                            <label
                                htmlFor=""
                                className="block self-start relative -bottom-3 left-4 px-1  backdrop-blur-lg "
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                className="w-full border-2 border-slate-300"
                            />
                            <textarea
                                placeholder="Message..."
                                name="msg"
                                id=""
                                cols=""
                                rows="5"
                                required
                                className=" my-2 w-full pl-4"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-black  text-white py-1 px-3 self-end"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
