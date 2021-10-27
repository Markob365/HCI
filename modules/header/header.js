import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

import LogoImg from '../../assets/logo.png';
import HeroImg from '../../assets/hero.png';

const Header = () => {
    return (
        <header className="h-4/6 relative flex items-center">
            <div className={styles.bgImg}>
                <Image
                    src={HeroImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Hero image"
                />
            </div>
            <main className="my-0 mx-auto flex flex-col w-full max-w-6xl">
                <section className={styles.navigation}>
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={150}
                        height={150}
                        alt="Design logo"
                    />
                    <nav>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Showcase</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Sign In</li>
                    </nav>
                </section>
                <section className={styles.titles}>
                    <h1>Design Matters</h1>
                    <h3>Entrust us with your digital appearance</h3>
                </section>
            </main>
        </header>
    );
};

export default Header;
