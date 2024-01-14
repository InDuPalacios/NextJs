import Link from "next/link"

const rutaHome = "app"
const rutaBlog = "blog"
const rutaVideojuego = "videojuego"
const rutaEcomerce = "ecomerce"
const rutaFormulario = "formulario"

export default function Navbar(){
    return(
        <nav className="container mx-auto">
            <ul className="flex space-x-4 text-white">
                <li><Link href={`/`} className="hover:underline">Home</Link></li>
                <li><Link href={`/${rutaBlog}`} className="hover:underline">Blog</Link></li>
                <li><Link href={`/${rutaVideojuego}`} className="hover:underline">Videojuego</Link></li>
                <li><Link href={`/${rutaEcomerce}`} className="hover:underline">e.comerce</Link></li>
                <li><Link href={`/${rutaFormulario}`} className="hover:underline">Formulario Contacto</Link></li>
            </ul>
        </nav>
    )
}