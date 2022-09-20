import Link from 'next/link'

export default function Footer() {
    return (
        <div className="section-8 wf-section">
            <div className="div-block-23">
                <div className="div-block-24">
                    <h1 className="heading-11">Subscribe Now for Get Special Features!</h1>
                    <p className="paragraph-13">Let's subscribe with us and find the fun.</p>
                </div>
                <div className="div-block-25">
                    <Link href="#"><a className="button-2 w-button">Subscribe Now</a></Link>
                </div>
            </div>
            <div className="div-block-26">
                <Link href="#"><a className="link-block-4 w-inline-block">
                    <p className="paragraph-14">Home</p>
                </a></Link>
                <Link href="#"><a className="link-block-4 w-inline-block">
                    <p className="paragraph-14">FAQ</p>
                </a></Link>
                <Link href="#"><a className="link-block-4 w-inline-block">
                    <p className="paragraph-14">Tutorials</p>
                </a></Link>
                <Link href="#"><a className="link-block-4 w-inline-block">
                    <p className="paragraph-14">About Us</p>
                </a></Link>
                <Link href="#"><a className="link-block-4 w-inline-block">
                    <p className="paragraph-14">Privacy Policy</p>
                </a></Link>
                <Link href="#"><a className="link-block-4 w-inline-block">
                    <p className="paragraph-14">Terms of Service</p>
                </a></Link>
            </div>
        </div>
    )
}