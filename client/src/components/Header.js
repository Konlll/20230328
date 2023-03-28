import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <Link to='/'>
                    <h1>Programming languages</h1>
                </Link>
                <Link to='/new' className='button'>
                    Add language
                </Link>
            </header>
        </>
    )
}

export default Header