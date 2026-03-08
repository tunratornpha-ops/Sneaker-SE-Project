import React from "react";

const PromoShoe: React.FC = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-r from-[#B3DAFF] to-[#FB9494] text-center font-mono ">

            <div className="flex justify-center">
                <img
                    src="./imageProjects/3191-removebg-preview.png"
                    alt="shoe"
                    className="w-[ุ600px] rotate-[320deg] drop-shadow-2xl "
                />
            </div>

            <div className=" #gap-28">
                <h2 className="text-6xl font-semibold">
                    Nike Air Jordan X1
                </h2>

                <button className="mt-12  hover:bg-slate-400"> Shop Now</button>


            </div>


        </section>
    );
};

export default PromoShoe;