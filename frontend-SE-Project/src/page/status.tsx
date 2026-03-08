import React, { useEffect, useState } from "react";

const Status: React.FC = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {

        const fetchOrder = async () => {

            const user = JSON.parse(localStorage.getItem("user") || "null");

            if (!user) return;

            const res = await fetch(`/api/orders/user/${user._id}`);

            const orders = await res.json();

            const latestOrder = orders[orders.length - 1];

            if (latestOrder) {
                setItems(latestOrder.items || []);
            }

        };

        fetchOrder();

    }, []);

    const subtotal = items.reduce(
        (sum: number, item: any) => sum + item.price,
        0
    );

    const tax = subtotal * 0.07;

    const total = subtotal + tax;


    return (
        <div className="bg-gray-100 min-h-screen">

            {/* HERO IMAGE */}

            <div className="w-full">
                <img
                    src="/imageProjects/1910.jpg"
                    className="w-full h-[600px] object-cover object-[center_50%]"
                />
            </div>

            <div className="max-w-6xl mx-auto py-16">

                {/* SHIPPING STATUS */}

                <h2 className="text-3xl font-semibold mb-12">
                    Shipping Status
                </h2>

                <div className="flex justify-between items-center mb-16">

                    {/* Processing */}

                    <div className="flex flex-col items-center">
                        <img src="/imageProjects/Product.png" alt="" className="w-12 " />
                        <p className="mt-2 text-gray-600">
                            Processing
                        </p>
                    </div>

                    <div className="flex-1 border-t border-dashed mx-4"></div>

                    {/* Delivery */}

                    <div className="flex flex-col items-center">
                        <img src="./imageProjects/delivery.png" alt="" className="w-14 mt-5"  />
                        <p className="mt-2 text-gray-600">
                            Delivery
                        </p>
                    </div>

                    <div className="flex-1 border-t border-dashed mx-4"></div>

                    {/* Success */}

                    <div className="flex flex-col items-center">
                        <img src="./imageProjects/check.png" alt="" className="w-12 mt-5" />
                        <p className="mt-2 text-gray-600">
                            Successfully
                        </p>
                    </div>

                </div>

                {/* YOUR ORDER */}

                <h2 className="text-2xl font-semibold mb-8">
                    Your Order
                </h2>

                <div className="grid grid-cols-2 gap-10">

                    {/* LEFT ORDER LIST */}

                    <div className="bg-white p-6 rounded shadow">

                        {items.map((item: any, index: number) => (

                            <div
                                key={index}
                                className="flex items-center justify-between mb-6"
                            >

                                <div className="flex items-center gap-4">

                                    <img
                                        src={item.image}
                                        className="w-16 h-16 object-contain"
                                    />

                                    <div>
                                        <p className="font-medium">
                                            {item.name}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            SIZE : {item.size}  COLOR : {item.color}
                                        </p>
                                    </div>

                                </div>

                                <div className="text-right">

                                    <p className="text-sm">x1</p>

                                    <p>${item.price}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* RIGHT SUMMARY */}

                    <div className="bg-white p-6 rounded shadow">

                        <p className="text-sm text-gray-500 mb-6">
                            Estimated Delivery Date: Mar 10, 2026
                        </p>

                        {items.map((item: any, index: number) => (

                            <div
                                key={index}
                                className="flex justify-between text-sm mb-2"
                            >

                                <p>
                                    {item.name}
                                </p>

                                <p>x1</p>

                            </div>

                        ))}

                        <div className="flex justify-between mb-2">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>

                        <div className="flex justify-between mb-2">
                            <p>Tax</p>
                            <p>${tax.toFixed(2)}</p>
                        </div>

                        <div className="border-t mt-4 pt-3 flex justify-between font-semibold">
                            <p>Total</p>
                            <p>${total.toFixed(2)}</p>
                        </div>

                        <button className="mt-6 border px-4 py-2 rounded">
                            Detail
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Status;