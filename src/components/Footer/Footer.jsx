import React from 'react';
import Description from '../../compounds/Footer/Description';
import Socials from '../../compounds/Footer/Socials';
import Products from '../../compounds/Footer/Products';
import Links from '../../compounds/Footer/Links';
import Contact from '../../compounds/Footer/Contact';
import Copyright from '../../compounds/Footer/Copyright';

export default function Footer() {
    return (
        <>
            <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
                <Socials />
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Description />
                        <Products />
                        <Links />
                        <Contact />
                    </div>
                </div>
                <Copyright />
            </footer>
        </>
    )
}
