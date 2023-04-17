import styles from '../styles/profileStyles/profilePageStyles.module.css'
import { Banner } from '../components/SignUpComponents'
import { useState } from 'react'
import { Details, Items, Tradings, AddItem } from '../components/ProfileComponents'
import { useRouter } from 'next/router'

const profile = () => {

    const [tab, setTab] = useState("Details");
    const router = useRouter()

    const obj = {
        name:"abc",
        userId:"dshhgfhkdfgdhlkv",
        address:"N0 27,brookme road,",
        nearestTown:"bacon hills,",
        district:"colombo,",
        province:"western.",
        email:"sample.gmail.com",
        phone:"0777423483",
        description:"hfhpiuhrpiuhiupughrughprouhgnjsfabhgrdihfduvhdivudisvuhivu"
    }

    const logout =() => {
        router.push('/')
    }

    return(
        <div className={styles.container}>
            <AddItem/>
            <div className={styles.card}>
                <span className={styles.selection}>
                    <p onClick={() => setTab("Details")}>Details</p>
                    <p onClick={() => setTab("Items")}>Items</p>
                    <p onClick={() => setTab("Tradings")}>Tradings</p>
                </span>
                <hr className={styles.profilehr} />
                {tab == "Details" ? <Details {...obj}/> : tab == "Items" ? <Items/> : <Tradings/>}
           </div>
            <span className={styles.logotCont}>
                <p onClick={() => logout()} className={styles.logout}>logout</p>
            </span>
        </div>
    )
}

export default profile