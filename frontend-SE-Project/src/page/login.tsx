import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await res.json();

            if (data.message === "Login success") {

                localStorage.setItem("user", JSON.stringify(data.user));

                window.dispatchEvent(new Event("userUpdated"));

                navigate("/");

            } else {

                setError(data.message || "Email or password incorrect");

            }

        } catch (error) {

            setError("Server error");

        }

    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/imageProjects/login.jpg')" }}
        >

            {/* Card */}
            <div className="bg-white w-[420px] rounded-lg shadow-lg p-8 relative">

                {/* Close button */}
                <button
                    onClick={() => navigate("/")}
                    className="absolute bg-white right-4 top-4 text-xl"
                >
                    ✕
                </button>

                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 border rounded-full flex items-center justify-center">
                        👟
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-xl font-semibold mb-6 text-center">
                    SIGN IN
                </h1>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-sm">Email</label>
                    <input
                        type="email"
                        className="w-full border rounded-md p-3 mt-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="mb-2">
                    <label className="text-sm">Password</label>
                    <input
                        type="password"
                        className="w-full border rounded-md p-3 mt-1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Error */}
                {error && (
                    <p className="text-red-500 text-sm mb-4">
                        {error}
                    </p>
                )}

                {/* Forgot password */}
                <p className="text-sm text-blue-500 mb-6 cursor-pointer">
                    Forget Password?
                </p>

                {/* Sign in button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-black text-white py-3 rounded-md"
                >
                    Sign in
                </button>

                {/* Register */}
                <p className="text-center text-sm mt-4">
                    New user?{" "}

                    <Link to="/register">
                        <span className="text-blue-500 cursor-pointer">
                            Create an account
                        </span>
                    </Link>

                </p>

            </div>
        </div>
    );
};

export default Login;