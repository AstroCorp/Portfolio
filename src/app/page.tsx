import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col h-screen items-center justify-center p-2">
			<div
				className="rounded-full overflow-hidden"
				style={{ 
					width: 150,
					height: 150,
					backgroundColor: "#2D394D",
				}}
			>
				<Image
					src="/Portfolio/logo.png"
					alt="Logo"
					width={150}
					height={150}
					className="-mt-1.5"
					priority
				/>
			</div>
			<p className="mt-4 text-white text-2xl">En mantenimiento...</p>
		</div>
	);
}
