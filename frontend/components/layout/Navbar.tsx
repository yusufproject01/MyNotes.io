import Link from "next/link";

export default function Navbar() {
    return (
        <main className="w-full h-16 border-b px-12 border-slate-300 fixed z-20 bg-white flex items-center justify-between">
            <h1>Brand</h1>
                <ul className="flex gap-4 px-2">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Home</Link></li>
                </ul>
        </main>
    )
}