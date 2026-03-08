import React from "react";

const Newarrivals: React.FC = () => {
    return (
        <section className="w-full mx-auto py-20">

            <h2 className="text-4xl text-center mb-16 tracking-widest">
                NEW ARRIVALS
            </h2>

            {/* MEN */}
            <div className="mb-20">

                <h3 className="text-2xl text-center mb-10 tracking-widest">
                    MEN'S
                </h3>

                <div className="flex justify-center gap-10">
                    {/* card */}
                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/1.png" className="w-64  mt-10 transition duration-300 hover:scale-110" />
                    </div>

                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/2.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>

                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/3.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>
                </div>

            </div>

            {/* WOMEN */}
            <div className="mb-20">

                <h3 className="text-2xl text-center mb-10 tracking-widest">
                    WOMEN'S
                </h3>

                <div className="flex justify-center gap-10">
                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/4.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>

                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/5.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>

                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/6.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>
                </div>

            </div>

            {/* KIDS */}
            <div>

                <h3 className="text-2xl text-center mb-10 tracking-widest">
                    KID'S
                </h3>

                <div className="flex justify-center gap-10">
                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/7.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>

                    <div className="border rounded-lg p-6"> 
                        <img src="./imageProjects/8.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>

                    <div className="border rounded-lg p-6">
                        <img src="./imageProjects/9.png" className="w-64 mt-10 transition duration-300 hover:scale-110" />
                    </div>
                </div>

            </div>

        </section>
    )
};
export default Newarrivals; 