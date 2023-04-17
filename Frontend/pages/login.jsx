import Logo from '../public/logo.svg'
import styles from '../styles/loginStyles/loginStyles.module.css'

import {Frontfooter} from '../components/landing'
import { useState } from 'react'
import { login} from '../services/logInAndSignUp'
import { useRouter } from 'next/router'

const Login = () => {

    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('')
    const router = useRouter()

    let loginInfo = {
        userName : userEmail,
        password : password,
        role: userType
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(loginInfo)
        const data = await login(loginInfo)
        console.log(data)
        router.push('/homeFeed')
        setUserEmail('')
        setPassword('')
    }

    return(
        <div className={styles.container}>
            <div className={styles.headBanner}>
                <Logo className={styles.logo} />
            </div>
            <h1>Login to e-Pola ...</h1>
            <div className={styles.fields}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="" className={styles.selectRole}>
                        As a...
                        <select onChange={(e) => setUserType(e.target.value)} name="" id="">
                            <option value="BUYER">
                                Buyer
                            </option>
                            <option value="SELLER">
                                Seller
                            </option>
                            <option value="TRANSPORT">
                                Transport
                            </option>
                        </select>
                    </label>
                    <hr />
                    <label htmlFor="email">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;
                        <input onChange={(e) => setUserEmail(e.target.value)} value={userEmail} type="email" />
                    </label><br/>
                    <label htmlFor="password">Password &nbsp; | &nbsp;
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
                    </label><br/>
                    <span className={styles.btn}>
                        <button type='submit' className={styles.loginbtn}>Log in</button>
                        <button className={styles.clearbtn}>Clear</button>
                    </span>
                </form>
            </div>
            <Frontfooter/>
        </div>
    )
}

export default Login

Login.getLayout = function pageLayout(page){
    return(
        <>
            {page}
        </>
    )
}