import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <header className='pb-5'>
            <nav className="d-flex justify-content-between align-items-center mt-1 p-4 position-fixed z-3 w-100">
                <Link to={'/'}><h1 className='text-black mb-0' >Boo Road Travel</h1></Link>

                {/* inserire altri elementi della nav */}
            </nav>
        </header>
    )
}