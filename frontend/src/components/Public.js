import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Fast Notes</span></h1>
            </header>
            <main className="public__main">
                <p>Working to digitalize collaboration within small studios and businesses.</p>
                <address className="public__addr">
                    Dan D. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Kushagra-0</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    
    return content
}
export default Public