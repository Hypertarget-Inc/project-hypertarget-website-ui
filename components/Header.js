import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar desktop w-nav">
                <div className="navbar-div">
                    <Link href="#"><a className="w-nav-brand"><img src="images/logo.svg" loading="lazy" alt="" className="image-4" /></a></Link>
                    <nav role="navigation" className="w-nav-menu">
                        <Link href="#"><a className="nav-link w-nav-link">About</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Features</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Pricing</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Testimonials</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Help</a></Link>
                    </nav>
                    <div>
                        <Link href="#"><a className="link-block w-inline-block">
                            <p className="paragraph">Sign In</p>
                        </a></Link>
                        <Link href="#"><a className="nav-button w-button">Start Free</a></Link>
                    </div>
                    <div className="w-nav-button">
                        <div className="w-icon-nav-menu" />
                    </div>
                </div>
            </div>
            <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar tab w-nav">
                <div className="navbar-div">
                    <div className="div-block-27">
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu" />
                        </div>
                        <Link href="#"><a className="brand w-nav-brand"><img src="images/logo.svg" loading="lazy" alt="" className="image-4" /></a></Link>
                    </div>
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <Link href="#"><a className="nav-link w-nav-link">About</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Features</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Pricing</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Testimonials</a></Link>
                        <Link href="#"><a className="nav-link w-nav-link">Help</a></Link>
                    </nav>
                    <div>
                        <Link href="#"><a className="link-block w-inline-block">
                            <p className="paragraph">Sign In</p>
                        </a></Link>
                        <Link href="#"><a className="nav-button w-button">Start Free</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}