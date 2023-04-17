import * as React from "react";
import { useState } from "react";
import { navigate } from "gatsby";
import loginApi from "./loginAPI";

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const {
            success,
            authToken,
            error: apiError,
        } = await loginApi({ email, password });

        if (success) {
            localStorage.setItem("token", authToken);
            navigate("/success");
        } else {
            setError(apiError);
        }

        setLoading(false);
    };

    return (
        <main>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Log in"}
                </button>
            </form>
        </main>
    );
}

export { Form };

// niall+react@layers.studio
// L4y3r5-5tud10.1.
