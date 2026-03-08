import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#B8C7D6] w-full py-6">

            <div className="w-full mx-auto px-16">

                {/* Top Section */}
                <div className="flex justify-between items-start mb-6">

                    {/* Email subscribe */}
                    <div className="flex flex-col gap-3 mt-6">
                        <p className="text-sm tracking-wider">Email address</p>

                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="border px-4 py-2 w-96 rounded"
                        />

                        <a className="underline text-sm cursor-pointer">
                            Privacy Policy
                        </a>
                    </div>

                    {/* Find store */}
                    <div className="border bg-white rounded-xl px-4 py-4 mx-16 text-center">
                        <button className="text-lg bg-white px-2">🏬
                            <p className="tracking-wider mt-2">Find a Store</p>
                        </button>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t mb-10"></div>

                {/* Links */}
                <div className="grid grid-cols-4 gap-10">

                    {/* Column */}
                    <div>
                        <h3 className="tracking-widest font-semibold mb-4">Shop with Sneaker</h3>
                        <ul className="space-y-2 text-sm tracking-wider cursor-pointer ">
                            <li className="hover:underline">Size Guide</li>
                            <li className="hover:underline">Find a Store</li>
                            <li className="hover:underline">Blog</li>
                        </ul>
                    </div>

                    {/* Column */}
                    <div>
                        <h3 className="tracking-widest font-semibold mb-4">Help & Customer Service</h3>
                        <ul className="space-y-2 text-sm tracking-wider cursor-pointer ">
                            <li className="hover:underline">FAQ</li>
                            <li className="hover:underline">Returns & Exchange</li>
                            <li className="hover:underline">Help & Contact Us</li>
                            <li className="hover:underline">Track My Order</li>
                        
                        </ul>
                    </div>

                    {/* Column */}
                    <div>
                        <h3 className="tracking-widest font-semibold mb-4">ABOUT</h3>
                        <ul className="space-y-2 text-sm tracking-wider cursor-pointer">
                            <li className="hover:underline">Terms & Conditions</li>
                            <li className="hover:underline">Privacy Policy</li>
                            <li className="hover:underline">Cookie Policy</li>
                            <li className="hover:underline">Accessibility</li>
                            <li className="hover:underline">Cookie Settings</li>
                        </ul>
                    </div>

                    {/* Brand */}
                    <div className="text-center">
                        <h2 className="text-4xl tracking-widest mb-4">
                            SNEAKER
                        </h2>

                        <ul className="space-y-2 cursor-pointer">
                            <li className="hover:underline">About us</li>
                            <li className="hover:underline">Contact</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-8 text-sm text-gray-600">
                    Copyright © 2026
                </div>

            </div>

        </footer>
    );
};

export default Footer;