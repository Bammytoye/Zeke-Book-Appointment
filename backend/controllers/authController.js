import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "Username and password required" });

        if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD)
            return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ role: "admin", username }, process.env.JWT_SECRET, { expiresIn: "8h" });

        res.json({ token, admin: { username } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const verifyAdmin = (req, res) => {
    res.json({ valid: true, admin: req.admin });
};