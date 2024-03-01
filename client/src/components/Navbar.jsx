import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav>
                <div class="logo">
                    <h1>Avez</h1>
                </div>
                <ul>
                    <li><input type="search"/></li>
                    <li><a href="#">Opportunity</a></li>
                </ul>
                <div class="alerts">
                    <ul>
                        <li><i class='bx bxs-bell-ring' ></i></li>
                        <li><i class='bx bx-user'></i></li>
                    </ul>
                </div>
            </nav>
    </>
  )
}

export default Navbar