import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-7xl mx-auto px-7 py-5">
            <Link href="/" className="font-bold text-2xl">
                Chocolate<span className="text-primary">Blog</span>
            </Link>

            <ModeToggle />

        </nav>
    )
}