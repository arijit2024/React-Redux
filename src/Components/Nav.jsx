import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
    // const amount = useSelector(state => state.amount)
    return(
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        Amount:<h3>12345</h3>
                    </a>
                </div>
            </nav>
        </>
    )
}
export default Nav;