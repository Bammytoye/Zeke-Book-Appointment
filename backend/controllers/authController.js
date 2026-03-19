import jwt from "jsonwebtoken";

const generateToken = (username) => {
    return jwt.sign(
        { role: "admin", username },
        process.env.JWT_SECRET,
        { expiresIn: "8h" }
    );
};

export const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const validAdmins = [
            {
                username: process.env.ADMIN_USERNAME,
                password: process.env.ADMIN_PASSWORD,
            },
            {
                username: process.env.DEMO_USERNAME,
                password: process.env.DEMO_PASSWORD,
            },
        ];

        // validation
        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password required",
            });
        }

        // check credentials
        const isValid = validAdmins.some(
            (admin) =>
                admin.username === username &&
                admin.password === password
        );

        if (!isValid) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const token = generateToken(username);

        res.json({
            success: true,
            message: "Login successful",
            token,
            admin: { username },
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};

export const verifyAdmin = (req, res) => {
    res.json({ valid: true, admin: req.admin });
};