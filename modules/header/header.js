import React from 'react';
import Image from 'next/image';

import LogoImg from '../../assets/logo.png';
import HeroImg from '../../assets/hero.png';
import Navbar from '../../components/navbar';

const Header = () => {
    return (
        <header className="h-4/6 relative flex justify-center items-center">
            <div className="z--1">
                <Image
                    src={HeroImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Hero image"
                />
            </div>
            <main className="my-0 mx-auto flex flex-col min-w-sm max-w-6xl w-full">
                <section className="flex justify-between items-center">
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={150}
                        height={150}
                        alt="Design logo"
                    />
                    <Navbar />
                </section>
                <section className="mt-14">
                    <h1 className="h-20 m-0 mb-1 font-bold text-7xl text-purple-800">
                        Design Matters
                    </h1>
                    <h3 className="h-14 m-0 font-normal text-5xl text-purple-600">
                        Entrust us with your digital appearance
                    </h3>
                </section>
            </main>
        </header>
    );
};

export default Header;
