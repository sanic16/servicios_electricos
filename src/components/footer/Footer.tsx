import { footer_links, footer_socials } from "@/utils/data"
import Link from "next/link"
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link href={'/'} className="logo">
                    <div className={`logo__desc`}>
                    Electroser
                    </div>
                </Link>
                <p>
                    Comprometidos con la calidad y la innovación de cada proyecto.
                </p>
                <div className="footer__socials">
                    {
                        footer_socials.map(item => (
                            <Link href={item.href} key={item.id}>
                                { <item.icon />}
                            </Link>
                        ))
                    }
                </div>
            </article>

            <article>
                <h4>Enlaces</h4>
                {
                    footer_links.map(link => (
                        <Link href={link.path} key={link.path}>
                            { link.name }
                        </Link>
                    ))
                }
            </article>

            <article>
                <h4>Enfoque</h4>
                <Link href={'/blog'}>
                    Blog
                </Link>
                <Link href={'/investigacion'}>
                    Investigaci&oacute;n
                </Link>
                <Link href={'/eventos'}>
                    Eventos
                </Link>
                <Link href={'/noticias'}>
                    Noticias
                </Link>
            </article>

            <article>
                <h4>Contacto</h4>
                <Link href={'/contacto'}>
                    Cont&aacute;ctanos
                </Link>
                <Link href={'/nosotros'}>
                    Nosotros
                </Link>
            </article>
        </div>
        <div className="footer__copyright">
                <small>
                    &copy; { new Date().getFullYear().toString() } Electroser. Todos los derechos reservados.
                </small>
        </div>
    </footer>
  )
}

export default Footer