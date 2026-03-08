import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Bag: React.FC = () => {

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart") || "[]")
    );

    const [showPaypal, setShowPaypal] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [showShopeePay, setShowShopeePay] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [card, setCard] = useState("");
    const [expires, setExpires] = useState("");
    const [csc, setCSC] = useState("");
    const [address, setAddress] = useState("");


    const [confirmChecked, setConfirmChecked] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const removeItem = (index: number) => {

        const updatedCart = [...cart];

        updatedCart.splice(index, 1);

        setCart(updatedCart);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));

    };

    const subtotal = cart.reduce(
        (total: number, item: any) => total + item.price,
        0
    );

    const tax = subtotal * 0.07;

    const total = subtotal + tax;

    return (

        <div className="max-w-7xl mx-auto py-16 grid grid-cols-3 gap-12">

            {/* LEFT : CART ITEMS */}

            <div className="col-span-2">

                <h1 className="text-3xl font-semibold mb-10">
                    YOUR BAG
                </h1>

                {cart.length === 0 && (
                    <p>Your bag is empty</p>
                )}

                <div className="space-y-8">

                    {cart.map((item: any, index: number) => (

                        <div
                            key={index}
                            className="flex items-center gap-6"
                        >

                            {/* IMAGE */}

                            <img
                                src={item.image}
                                className="w-28 border p-2"
                            />

                            {/* INFO */}

                            <div className="flex-1">

                                <h2 className="font-medium">
                                    {item.name}
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    SIZE : {item.size} &nbsp; COLOR : {item.color}
                                </p>

                                <button
                                    onClick={() => removeItem(index)}
                                    className="text-sm text-red-500 mt-2"
                                >
                                    Remove
                                </button>

                            </div>

                            {/* PRICE */}

                            <div className="text-right">

                                <p>x1</p>

                                <p className="mt-2">
                                    ${item.price}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* RIGHT : SUMMARY */}

            <div className="border rounded-lg p-6 h-fit shadow-sm">

                <h2 className="text-xl font-semibold mb-6">
                    SUMMARY
                </h2>

                <div className="space-y-4 text-sm">

                    <div className="flex justify-between">
                        <p>Estimated Shipping & Handling</p>
                        <p>Free</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Estimated Tax</p>
                        <p>7%</p>
                    </div>

                </div>

                <hr className="my-6" />

                <div className="flex justify-between font-semibold">

                    <p>Total</p>

                    <p>${total.toFixed(2)}</p>

                </div>


                {/* PAYMENT BUTTONS */}

                <button onClick={() => navigate("/address")} disabled={cart.length === 0} className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-white hover:text-black">
                    Cash on
                </button>

                <button onClick={() => setShowPaypal(true)} disabled={cart.length === 0} className="w-full text-white italic text-lg bg-blue-600 border py-3 rounded mt-3 hover:bg-blue-700">
                    PayPal
                </button>

                <button onClick={() => setShowShopeePay(true)} disabled={cart.length === 0} className="w-full border text-white text-lg py-3  bg-orange-600 rounded mt-3 hover:bg-orange-500">
                    Shopee Pay
                </button>

                <button onClick={() => setShowCard(true)} disabled={cart.length === 0} className="w-full border py-3 rounded mt-3 hover:bg-black hover:text-white">
                    VISA / Mastercard
                </button>

            </div>
            {showShopeePay && (

                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    <div className="bg-white p-8 rounded-xl w-[450px] relative">

                        {/* close */}
                        <button
                            onClick={() => setShowShopeePay(false)}
                            className="absolute top-3 right-4 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-center text-2xl font-semibold text-orange-500 mb-6">
                            Shopee Pay
                        </h2>

                        {/* name */}

                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <input
                                type="text"
                                placeholder="First name"
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border p-2"
                            />

                            <input
                                type="text"
                                placeholder="Last name"
                                onChange={(e) => setLastName(e.target.value)}
                                className="border p-2"
                            />

                        </div>

                        {/* card */}

                        <input
                            type="text"
                            placeholder="Card Number"
                            onChange={(e) => setCard(e.target.value)}
                            className="border p-2 w-full mb-4"
                        />

                        {/* expire */}

                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <input
                                type="text"
                                placeholder="Expires"
                                onChange={(e) => setExpires(e.target.value)}
                                className="border p-2"
                            />

                            <input
                                type="text"
                                placeholder="CSC"
                                onChange={(e) => setCSC(e.target.value)}
                                className="border p-2"
                            />

                        </div>

                        {/* address */}

                        <input
                            type="text"
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="border p-2 w-full mb-6"
                        />

                        <div className="flex items-center gap-2 mb-6">

                            <input
                                type="checkbox"
                                checked={confirmChecked}
                                onChange={(e) => {
                                    setConfirmChecked(e.target.checked);
                                    setError("");
                                }}
                            />

                            <p className="text-sm text-gray-600">
                                I confirm that my shipping information is correct
                            </p>

                        </div>

                        {/* confirm */}

                        <button onClick={() => {
                            if (!firstName || !lastName || !card || !expires || !csc || !address) {
                                setError("Please fill in all fields");
                                return;
                            }


                            if (!confirmChecked) {
                                setError("Please confirm your payment information");
                                return;
                            }

                            navigate("/address");

                        }} className="w-full bg-orange-500 text-white py-3 rounded">
                            Confirm
                        </button>
                        {error && (
                            <p className="text-red-500 text-sm mt-3 text-center">
                                {error}
                            </p>
                        )}

                    </div>

                </div>
            )}
            {showPaypal && (

                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    <div className="bg-white p-8 rounded-xl w-[450px] relative">

                        {/* close */}
                        <button
                            onClick={() => setShowPaypal(false)}
                            className="absolute top-3 right-4 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-center text-2xl font-semibold text-blue-800 italic mb-6">
                            Paypal
                        </h2>

                        {/* name */}

                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <input
                                type="text"
                                placeholder="First name"
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border p-2"
                            />

                            <input
                                type="text"
                                placeholder="Last name"
                                onChange={(e) => setLastName(e.target.value)}
                                className="border p-2"
                            />

                        </div>

                        {/* card */}

                        <input
                            type="text"
                            placeholder="Card Number"
                            onChange={(e) => setCard(e.target.value)}
                            className="border p-2 w-full mb-4"
                        />

                        {/* expire */}

                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <input
                                type="text"
                                placeholder="Expires"
                                onChange={(e) => setExpires(e.target.value)}
                                className="border p-2"
                            />

                            <input
                                type="text"
                                placeholder="CSC"
                                onChange={(e) => setCSC(e.target.value)}
                                className="border p-2"
                            />

                        </div>

                        {/* address */}

                        <input
                            type="text"
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="border p-2 w-full mb-6"
                        />

                        <div className="flex items-center gap-2 mb-6">

                            <input
                                type="checkbox"
                                checked={confirmChecked}
                                onChange={(e) => {
                                    setConfirmChecked(e.target.checked);
                                    setError("");
                                }}
                            />

                            <p className="text-sm text-gray-600">
                                I confirm that my shipping information is correct
                            </p>

                        </div>

                        {/* confirm */}

                        <button onClick={() => {
                            if (!firstName || !lastName || !card || !expires || !csc || !address) {
                                setError("Please fill in all fields");
                                return;
                            }


                            if (!confirmChecked) {
                                setError("Please confirm your payment information");
                                return;
                            }

                            navigate("/address");

                        }} className="w-full bg-blue-600 text-white py-3 rounded">
                            Confirm
                        </button>
                        {error && (
                            <p className="text-red-500 text-sm mt-3 text-center">
                                {error}
                            </p>
                        )}

                    </div>

                </div>


            )}
            {showCard && (

                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                    <div className="bg-white p-8 rounded-xl w-[450px] relative">

                        {/* close */}
                        <button
                            onClick={() => setShowCard(false)}
                            className="absolute bg-white top-3 right-4 text-xl"
                        >
                            ✕
                        </button>
                        <div className="flex items-center justify-center gap-3 mb-8">

                            <h2 className="text-3xl font-semibold">
                                Visa / Mastercard
                            </h2>

                            <img src="/imageProjects/Visa.png" className="w-12" />
                        </div>

                        {/* name */}

                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <input
                                type="text"
                                placeholder="First name"
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border p-2"
                            />

                            <input
                                type="text"
                                placeholder="Last name"
                                onChange={(e) => setLastName(e.target.value)}
                                className="border p-2"
                            />

                        </div>

                        {/* card */}

                        <input
                            type="text"
                            placeholder="Card Number"
                            onChange={(e) => setCard(e.target.value)}
                            className="border p-2 w-full mb-4"
                        />

                        {/* expire */}

                        <div className="grid grid-cols-2 gap-4 mb-4">

                            <input
                                type="text"
                                placeholder="Expires"
                                onChange={(e) => setExpires(e.target.value)}
                                className="border p-2"
                            />

                            <input
                                type="text"
                                placeholder="CSC"
                                onChange={(e) => setCSC(e.target.value)}
                                className="border p-2"
                            />

                        </div>

                        {/* address */}

                        <input
                            type="text"
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="border p-2 w-full mb-6"
                        />

                        <div className="flex items-center gap-2 mb-6">

                            <input
                                type="checkbox"
                                checked={confirmChecked}
                                onChange={(e) => {
                                    setConfirmChecked(e.target.checked);
                                    setError("");
                                }}
                            />

                            <p className="text-sm text-gray-600">
                                I confirm that my shipping information is correct
                            </p>

                        </div>

                        {/* confirm */}

                        <button onClick={() => {
                            if (!firstName || !lastName || !card || !expires || !csc || !address) {
                                setError("Please fill in all fields");
                                return;
                            }


                            if (!confirmChecked) {
                                setError("Please confirm your payment information");
                                return;
                            }

                            navigate("/address");

                        }} className="w-full bg-black text-white py-3 rounded">
                            Confirm
                        </button>
                        {error && (
                            <p className="text-red-500 text-sm mt-3 text-center">
                                {error}
                            </p>
                        )}

                    </div>

                </div>


            )}

        </div>


    );
};

export default Bag;