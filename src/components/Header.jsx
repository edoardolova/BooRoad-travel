import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='pb-5'>
            <nav className="borderH bg-white d-flex justify-content-between align-items-center p-3 position-fixed z-3 w-100">
                <div className='d-flex align-items-center gap-2'>
                    <Link to={'/'}><img src='/boo_road_logo.png' alt='Boo Road Travel' className='logo-img' /></Link>
                    <Link to={'/'}><h2 className='text-black mb-0' >BooRoad Travel</h2></Link>
                </div>

                {/* inserire altri elementi della nav */}
            </nav>
        </header>
    )
}