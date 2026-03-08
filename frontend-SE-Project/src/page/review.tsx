import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Review: React.FC = () => {


    const [items, setItems] = useState<any[]>([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    useEffect(() => {

        const fetchOrders = async () => {

            const user = JSON.parse(localStorage.getItem("user") || "null");

            if (!user) return;

            const res = await fetch(`/api/orders/completed/${user._id}`);
            const data = await res.json();

            if (data.length > 0) {
                const latestOrder = data[data.length - 1];
                setItems(latestOrder.items);
            }

        };

        fetchOrders();

    }, []);

    const handleSubmit = async () => {
        if (rating === 0) {
            alert("Please select a rating");
            return;
        }

        const user = JSON.parse(localStorage.getItem("user") || "null");

        const review = {
            userId: user._id,
            productId: items[0].id,
            rating: rating,
            comment: comment
        };

        await fetch("/api/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        });

        alert("Review submitted!");
        setItems([]);

    };

    return (

        <div className="bg-gray-100 min-h-screen py-16">
            <div className=" px-20 mb-6 text-gray-500">

                <Link to="/user" className="text-black hover:underline">
                    Account
                </Link>

                <span> › Review</span>

            </div>

            <div className="max-w-5xl mx-auto">
                <div className="text-4xl mb-4 tracking-widest">
                    Review
                </div>

                <div className="bg-white p-8 rounded shadow">


                    {items.map((item: any, index: number) => (

                        <div key={index} className="border p-6 rounded mb-6">

                            {/* Product Info */}

                            <div className="flex justify-between items-center mb-6">

                                <div className="flex items-center gap-5">

                                    <img
                                        src={item.image}
                                        className="w-24 h-24 object-contain"
                                    />

                                    <div>

                                        <p className="font-semibold text-lg">
                                            {item.name}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            SIZE : {item.size}  COLOR : {item.color}
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            x1   ${item.price}
                                        </p>

                                    </div>

                                </div>


                                {/* Stars */}

                                <div className="flex gap-2 text-3xl cursor-pointer">

                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => setRating(star)}
                                            className={star <= rating ? "text-yellow-500" : "text-gray-400"}
                                        >
                                            ★
                                        </span>
                                    ))}

                                </div>

                            </div>


                            {/* Comment */}

                            <label className="block mb-2 font-medium">
                                Comment
                            </label>

                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={3}
                                className="w-full border p-3 rounded"
                            />

                        </div>

                    ))}

                    {/* Submit */}

                    <div className="flex justify-end">

                        <button
                            onClick={handleSubmit}
                            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
                        >
                            Submit Review
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Review;
