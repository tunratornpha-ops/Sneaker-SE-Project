import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess: React.FC = () => {

    const navigate = useNavigate();
    const hasCreatedOrder = useRef(false);

    useEffect(() =>  {
        if (hasCreatedOrder.current) return;

        hasCreatedOrder.current = true;
        
        const createOrder = async () => {

            const cart = JSON.parse(localStorage.getItem("cart") || "[]");

            if (cart.length === 0) return;

            const user = JSON.parse(localStorage.getItem("user") || "null");
            const address = JSON.parse(
                localStorage.getItem("shippingAddress") || "null"
              );

            const total = cart.reduce(
                (sum: number, item: any) => sum + item.price,
                0
            );

            const order = {
                userId: user?._id || "guest",
                items: cart,
                total: total,
                address: address

            };

            await fetch("/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });

            localStorage.removeItem("cart");

            window.dispatchEvent(new Event("cartUpdated"));

        };

        createOrder();

    }, []);

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white p-10 rounded-lg shadow text-center w-[500px]">

                <h1 className="text-3xl font-semibold mb-4">
                    Order Successful 🎉
                </h1>

                <p className="text-gray-500 mb-8">
                    Thank you for your purchase!
                </p>

                <div className="flex justify-center gap-4">

                    <button
                        onClick={() => navigate("/status")}
                        className="bg-black text-white px-6 py-3 rounded"
                    >
                        View Order Status
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="border px-6 py-3 rounded"
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>

        </div>

    );
};

export default OrderSuccess;