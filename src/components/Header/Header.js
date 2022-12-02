import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='Nav'>
            <div className='logo'>
                <i class="fa-solid fa-house fa-2x logofont"></i>
                <h3>Estatery</h3>
            </div>
            <ul>
                <li>
                    <NavLink to='/'>
                        Rent
                    </NavLink>
                </li>
                <li>Buy</li>
                <li>Sell</li>
                <li>
                    <NavLink to='/fav'>
                        Favourites
                    </NavLink>
                </li>
                <li>
                    <select name="Manage Property" id="property">
                        <option value="Manage Property">Manage property</option>
                        <option value="Collect Rent">Collect Rent</option>
                        <option value="Lease it">Lease it</option>
                        <option value="More">...More</option>
                    </select>
                </li>
                <li>
                    <select name="Resources" id="Resources">
                        <option value="Resources">Currency</option>
                        <option value="Collect Rent">Brochure</option>
                        <option value="Lease it">About Us</option>
                        <option value="More">...More</option>
                    </select>
                </li>
            </ul>
            <div className='login-cont'>
                <button className='login'>Login</button>
                <button className='sign-up'>Sign-up</button>
            </div>
        </div>
    )
}

export default Header
