import React from "react";

function Main() {
    return (
        <>
            <main className="min-h-screen w-screen flex justify-center place-items-center px-4">
                <div
                    className="w-1/2  
                 ml-28"
                >
                    <div className=" uppercase  text-8xl font-bold text-wrap pr-20 mb-10">
                        Your Feet Deserve the best
                    </div>
                    <div className="pr-48 mb-8">
                        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
                        WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE
                        TO HELP YOU WITH OUR SHOES.
                    </div>
                    <div>
                        <button className="border-2 text-white border-red-400 px-4 py-2 bg-red-600 ">
                            Shop Now
                        </button>
                        <button className="w-min px-4 py-2 border-gray-400 m-4 text-gray-400  border-2">
                            Category
                        </button>
                    </div>
                    <div>
                        <p>Also availabe at</p>
                        <div className="flex gap-3 mt-2">
                            <a href="https://flipkart.com" target="_blank">
                                <img
                                    className="w-6"
                                    src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/flipkart-512.png"
                                    alt="flipkart"
                                />
                            </a>
                            <a href="https://amazon.in" target="_blank">
                                <img
                                    className="w-6"
                                    src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_amazon-512.png"
                                    alt="amazon"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* img */}
                <div className="w-1/2 flex justify-center place-items-center">
                    <img
                        className="border-transparent rounded-lg h pointer-events-none"
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/88dd3883-4b00-462c-9c52-f28cd2033c93/air-jordan-1-low-se-shoes-m3sXwW.png"
                        alt="shoes"
                    />
                </div>
            </main>
        </>
    );
}

export default Main;
