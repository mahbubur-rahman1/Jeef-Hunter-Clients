import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = ()=>{
        logOut()
        .then()
        .catch(error=> console.log(error))
    }
    return (
        <nav className='bg-base-900'>
            <div className="navbar bg-base-900">
                <div className="navbar-start">
                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home </Link></li>
                            <li tabIndex={0}>
                                <Link to="/alltoys">
                                    All Toys

                                </Link>

                            </li>
                            <li><Link to="blog">Blogs</Link></li>
                            <li><Link to="mytoy">My Toy</Link></li>
                            <li> <Link to="addtoy">Add Toy</Link></li>
                        </ul>
                    </div>
                    <img className='h-12 w-16' src="https://m.media-amazon.com/images/I/71k6XnjuwkL._AC_UY327_QL65_.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Play-Jeep</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home </Link></li>
                        <li tabIndex={0}>
                            <Link to="/alltoys">
                                All Toys

                            </Link>
                        </li>


                        <li><Link to="mytoy">My Toy</Link></li>
                        <li> <Link to="addtoy">Add Toy</Link></li>
                        <li><Link to="blog">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user? 
                     (<a onClick={handleLogout} className='btn' > Logout</a>) :
                    ( <a className="btn"><Link to="/login"> Login</Link></a>)                                             
                    }


                </div>
            </div>
        </nav>
    );
};

export default Navbar;