import React from "react";

const Bestseller: React.FC = () => {
    return (
        <section className="w-full mx-auto py-14">
            {/* Title */}
            <h2 className="text-4xl font-semibold mb-10 text-center">
                Best Seller
            </h2>

            {/* Shoes */}
            <div className="flex justify-center gap-10">

                <div className="w-64">
                    <img
                        src="./imageProjects/4.png"
                        alt="shoe"
                        className="w-full h-50 object-cover rounded-lg"
                    />
                    <p className="mt-3 text-center font-medium">Nike Air Max</p>
                </div>

                <div className="w-64">
                    <img
                        src="./imageProjects/10.png"
                        alt="shoe"
                        className="w-full h-50 object-cover rounded-lg"
                    />
                    <p className="mt-3 text-center font-medium">Adidas Ultraboost</p>
                </div>

                <div className="w-64">
                    <img
                        src="./imageProjects/11.png"
                        alt="shoe"
                        className="w-full h-50 object-cover rounded-lg"
                    />
                    <p className="mt-3 text-center font-medium">New Balance 550</p>
                </div>

            </div>

        </section>
    )




};

export default Bestseller;