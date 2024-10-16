import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Astro_Corp",
	description: "Astro_Corp Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className="antialiased bg-gray-800">
				{children}
			</body>
		</html>
	);
}
