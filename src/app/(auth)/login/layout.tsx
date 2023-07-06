import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-main",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} font-inter`}>{children}</body>
		</html>
	);
}
