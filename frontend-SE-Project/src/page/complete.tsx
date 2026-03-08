import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Complete: React.FC = () => {

    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {

        const fetchOrders = async () => {

            const user = JSON.parse(localStorage.getItem("user") || "null");

            const res = await fetch(`/api/orders/completed/${user._id}`);

            const data = await res.json();

            setOrders(data);

        };

        fetchOrders();

    }, []);


    return (

        <div className="bg-gray-100 min-h-screen py-16">

            <div className=" px-20 mb-6 text-gray-500">

                <Link to="/user" className="text-black hover:underline">
                    Account
                </Link>

                <span> › Complete</span>

            </div>
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-semibold mb-10">
                    Completed Orders
                </h1>

                {orders.length === 0 && (
                    <p className="text-gray-500">
                        No completed orders yet
                    </p>
                )}

                {orders.map((order: any) => (

                    <div
                        key={order._id}
                        className="bg-white p-6 rounded shadow mb-8"
                    >

                        {/* Order Header */}

                        <div className="flex justify-between mb-6">

                            <p className="font-semibold">
                                Order #{order._id.slice(-6)}
                            </p>

                            <p className="text-gray-500">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </p>

                        </div>


                        {/* Items */}

                        {order.items.map((item: any, i: number) => (

                            <div
                                key={i}
                                className="flex items-center justify-between mb-4"
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
                                            SIZE : {item.size} COLOR : {item.color}
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

                ))}

            </div>

        </div>

    );
};

export default Complete;