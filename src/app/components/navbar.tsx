import Link from "next/link"
const miLink = "www.google.com"

export default function Navbar(){
    return(
        <nav className="container mx-auto">
            <ul className="flex space-x-4 text-white">
                <li><Link href={miLink} className="hover:underline">Home</Link></li>
                <li><Link href={miLink} className="hover:underline">Blog</Link></li>
                <li><Link href={miLink} className="hover:underline">Videojuego</Link></li>
                <li><Link href={miLink} className="hover:underline">e.comerce</Link></li>
                <li><Link href={miLink} className="hover:underline">Formulario Contacto</Link></li>
            </ul>
        </nav>
    )
}