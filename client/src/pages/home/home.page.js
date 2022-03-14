import React from 'react';
import Products from '../../components/products/products'

function HomePage(props) {
    return (
        <div>
            <header>
                <div class="header-container">
                    <div id="heading">Fineprint</div>
                    <div id="slogan">You order. We print.</div>
                </div>
            </header>
            <div>
                <Products/>
            </div>
        </div>
    )
}

export default HomePage