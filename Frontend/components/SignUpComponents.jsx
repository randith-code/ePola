import styles from '../styles/signUpStyles/signUpStyles.module.css'

import Logo from '../public/logo.svg'
import { useState } from 'react'
import { sendBuyerInfo, sendSellerInfo} from '../services/logInAndSignUp'
import { useRouter } from 'next/router'

export const Banner = () =>{
    return(
        <div className={styles.banner}>
            <Logo className={styles.logo}/>
        </div>
    )
}

export const UserInfo = () => {

    const [userType, setUserType] = useState("SELLER")

    return(
        <div className={styles.formContainer}>
            <div className={styles.getUserType}>
                <span className={styles.getUserIn}>
                    <p>Join as ...</p>
                    <select name={userType} onChange={e=>setUserType(e.target.value)} id="userType">
                        <option value="SELLER">Seller</option>
                        <option value="BUYER">Buyer</option>
                    </select>
                </span>
                <hr />
            </div>
            {userType == "SELLER" ? <SellerForm userType={userType} /> : <BuyerForm userType={userType}/>}
        </div>
    )
}

const SellerForm =({userType}) => {

    const [userName, setUserName] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [email,setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [nearTown, setNearTown] = useState('')
    const [district, setDistrict] = useState('')
    const [province, setProvince] = useState('')
    const [descript, setDescript] = useState('')
    const router = useRouter()

    let sellerInfo = {
        userName : userName,
        password : password1,
        conatct : {
            email: email,
            phone : phone
        },
        location : {
            province : province,
            district : district,
            nearestTown: nearTown,
            address : address
        }
        ,
        role:userType
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(sellerInfo)
        sendSellerInfo(sellerInfo)
        router.push('/homeFeed')
        setUserName('')
        setPassword1('')
        setPassword2('')
        setEmail('')
        setPhone('')
        setAddress('')
        setNearTown('')
        setDistrict('')
        setProvince('')
        setDescript('')
    }
    return(
        <form action="" onSubmit={handleSubmit} className={styles.seller}>
            <label htmlFor="userName">
                User name
                <input 
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName} 
                    name='userName' 
                />
            </label>
            <label htmlFor="password">
                Password
                <input 
                    type="password" 
                    name='password'
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1} 
                />
            </label>
            <label htmlFor="retypePassword">
                Retype the Password
                <input 
                    type="password" 
                    name='retypePassword'
                    onChange={(e) => setPassword2(e.target.value)}
                    value={password2}  
                />
            </label>
            <label htmlFor="contact" className={styles.contact}>
                Contact
                <span>
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='E-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                    />
                    <input 
                        type="text" 
                        name='phone' 
                        placeholder='Phone Number'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone} 
                    />
                </span>
            </label>
            <label htmlFor="Location" className={styles.location}>
                Location
                <span>
                    <input 
                        type="text" 
                        name='address' 
                        placeholder='Address'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <input 
                        type="text" 
                        name='nearestTown' 
                        placeholder='Nesarest Town'
                        onChange={(e) => setNearTown(e.target.value)}
                        value={nearTown}
                    />
                    <input 
                        type="text" 
                        name='district' 
                        placeholder='District'
                        onChange={(e) => setDistrict(e.target.value)}
                        value={district} 
                    />
                    <input 
                        type="text" 
                        name='province' 
                        placeholder='Province'
                        onChange = {(e) => setProvince(e.target.value)}
                        value={province}
                    />
                </span>
            </label>
            <label htmlFor="description" className={styles.description}>
                Description
                <textarea 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="10"
                    onChange={(e) => setDescript(e.target.value)}
                    value={descript}
                ></textarea>
            </label>
            <span className={styles.btnsec}>
                <button className={styles.clear}>Clear</button>
                <button type='submit' className={styles.submit}>Submit</button>
            </span>
        </form>
    )
}

const BuyerForm =({userType}) => {

    const [userName, setUserName] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const router = useRouter()


    let buyerInfo = {
        userName: userName,
        password: password1,
        email : email,
        phone : phone,
        role: userType
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(buyerInfo)
        sendBuyerInfo(buyerInfo)
        router.push('/homeFeed')
        setUserName('')
        setPassword1('')
        setPassword2('')
        setEmail('')
        setPhone('')
    }

    return(
        <form onSubmit={handleSubmit} className={styles.buyer}>
            <label htmlFor="userName">
                User name
                <input 
                    type="text" 
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName} 
                    name='userName' 
                />
            </label>
            <label htmlFor="password">
                Password
                <input 
                    type="password" 
                    onChange={(e) => setPassword1(e.target.value)}
                    value={password1} 
                    name='password' 
                />
            </label>
            <label htmlFor="retypePassword">
                Retype the Password
                <input 
                    type="password" 
                    onChange={(e) => setPassword2(e.target.value)}
                    value={password2} 
                    name='retypePassword' 
                />
            </label>
            <label htmlFor="contact" className={styles.contact}>
                Contact
                <span>
                    <input 
                        type="email" name='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        placeholder='E-mail' 
                    />
                    <input 
                        type="text" name='phone' 
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone} 
                        placeholder='Phone Number' 
                    />
                </span>
            </label>
            <span className={styles.btnsec}>
                <button className={styles.clear}>Clear</button>
                <button type='submit' className={styles.submit}>Submit</button>
            </span>
        </form>
    )
}