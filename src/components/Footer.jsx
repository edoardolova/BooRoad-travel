export default function Footer() {
    return (
        <>
            <footer className="footer text-white text-center py-4 mt-auto">
                <div className="container">
                    <p className="mb-0">&copy; {new Date().getFullYear()} BooRoadTravel</p>
                    <div className="d-flex justify-content-md-center">
                        <ul className="list-inline mt-2 d-flex flex-column p-3 ">
                            <h6><strong>Programma Viaggi!</strong></h6>
                            <li className="list-inline-item p-2">
                                <a href="/trip/4" className="text-white text-decoration-none">
                                    Viaggi per Napoli
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="/trip/2" className="text-white text-decoration-none">
                                    Viaggi per Milano
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="/trip/3" className="text-white text-decoration-none">
                                    Viaggi per Firenze
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="/trip/5" className="text-white text-decoration-none">
                                    Viaggi per Torino
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="/trip/1" className="text-white text-decoration-none">
                                    Viaggi per Roma
                                </a>
                            </li>

                        </ul>
                        <ul className="list-inline mt-2 d-flex flex-column p-3 ">
                            <h6><strong>Il Team</strong></h6>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Edoardo
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Rolinda
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Francesco
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Giovanni
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Cristian
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline mt-2 d-flex flex-column p-3 ">
                            <h6><strong>Info utili</strong></h6>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Faq
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Il Blog
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Contattaci
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Termini e condizioni
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    Condizioni generali di <br />vendita pacchetti turistici
                                </a>
                            </li>
                        </ul>
                        <ul className="list-inline mt-2 d-flex flex-column p-3 ">
                            <h6><strong>SEGUICI!</strong></h6>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                            </li>
                            <li className="list-inline-item p-2">
                                <a href="" className="text-white text-decoration-none">
                                    <i className="bi bi-discord"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}