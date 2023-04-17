import Home from '../public/Home.svg'
import Ctgry from '../public/carbon_collapse-categories.svg'
import Trnsport from '../public/Transport.svg'
import Logo from '../public/logo.svg'
import Hamberger from '../public/Hamberger.svg'
import CloseButton from '../public/closeNav.svg'

import styles from '../styles/navbarStyles/navbarStyles.module.css'
import { useState } from 'react'

const NavBar = () => {

    const [isOpen , setOpen] = useState(false);

    return(
        <div className={styles.nav}>
            <a href="/homeFeed"><Logo className={styles.logo}/></a>
            <div className={ isOpen ? styles.mobileContainer : styles.container} >
                <span className={styles.closebtncontainer}>
                    <CloseButton onClick={() => {setOpen(!isOpen)}} className={styles.closebtn}/>
                </span>
                <input className={styles.search} type="search" placeholder='Search...'/>
                <a href="/homeFeed">
                    <Home className={styles.home}/> 
                    <p>Home</p>
                </a>
                <a href="/activeTrading">
                    <Ctgry className={styles.catagory} />
                    <p>Tradings</p>
                </a>
                <a href="/transportServices">
                    <Trnsport className={styles.transport}/>
                    <p>Tranport</p>
                </a>
                <a className={styles.profileContainer} href="/profile">
                    <div className={styles.profile}></div>
                </a>
            </div>
            <Hamberger onClick={() => {setOpen(!isOpen)}} className={styles.hamberger}/>
        </div>
    )
}

export default NavBar