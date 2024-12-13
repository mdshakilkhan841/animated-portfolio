import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "My Unique Animated Portfolio",
    description: "A colorful and interactive portfolio showcasing my work",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white`}
            >
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}

