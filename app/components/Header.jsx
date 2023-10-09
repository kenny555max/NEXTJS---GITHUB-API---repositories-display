import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h3>
                    <Link href='/'>Traversy Media</Link>
                </h3>
                <nav>
                    <ul>
                        <li>
                            <Link href='/about'>about</Link>
                        </li>
                        <li>
                            <Link href='/about/team'>our team</Link>
                        </li>
                        <li>
                            <Link href='/code/repos'>code</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;