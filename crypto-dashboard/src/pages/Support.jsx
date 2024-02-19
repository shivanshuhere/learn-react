function Support() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submited");
    };
    return (
        <div className="w-full h-full bg-gray-200 grid place-items-center">
            <div className="grid w-3/4 h-5/6 relative bottom-8 grid-cols-2 grid-rows-12 gap-y-8 gap-x-5">
                <div className="row-span-10 ">
                    <div>
                        <p className="text-4xl font-semibold">Contact us</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur, cumque.
                        </p>
                    </div>
                </div>
                <div className="text-sm bg-white row-span-10 px-6 rounded-2xl">
                    <form
                        onSubmit={handleSubmit}
                        className="flex  flex-col justify-around h-full font-medium"
                    >
                        <p className="text-base">
                            You will receive response within 24 hours of time to
                            submit
                        </p>
                        <div className="grid grid-cols-2  ">
                            <label className="mr-2">Name</label>
                            <label className="ml-2">Surname</label>
                            <input
                                required
                                className="h-10  mr-2 border-[2px] border-gray-200 rounded-md placeholder:pl-3"
                                type="text"
                                placeholder="James"
                            />
                            <input
                                className="h-10 ml-2 border-[2px] border-gray-200 rounded-md placeholder:pl-3"
                                type="text"
                                placeholder="Bond"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input
                                required
                                className=" h-10 border-[2px] border-gray-200 rounded-md placeholder:pl-3"
                                type="text"
                                placeholder="name@gmail.com"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Message</label>
                            <textarea
                                required
                                className="border-[2px] border-gray-200 rounded-md placeholder:pl-3"
                                placeholder="Your message"
                                rows="4"
                            ></textarea>
                        </div>
                        <label>
                            {" "}
                            <input type="radio" required /> I agree with terms
                            and conditions
                        </label>
                        <button
                            className="w-full rounded-md bg-gray-200 font-semibold capitalize py-2 "
                            type="submit"
                        >
                            Send a message
                        </button>
                        <button className="w-full rounded-md bg-gray-200 font-semibold capitalize py-2 ">
                            Book a meeting
                        </button>
                    </form>
                </div>
                <div className="  row-span-2  ">
                    <div>
                        <p className="text-4xl font-semibold">Live Chat</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur, cumque.
                        </p>
                    </div>
                </div>
                <div className=" rounded-2xl text-white row-span-2 bg-purple-600 flex flex-col justify-center  p-4 ">
                    <p className="bg-white text-xs rounded-full text-purple-600 font-serif w-min px-2">
                        Chatbot
                    </p>
                    <p className="font-medium text-lg">Chat with us now</p>
                </div>
            </div>
        </div>
    );
}

export default Support;
