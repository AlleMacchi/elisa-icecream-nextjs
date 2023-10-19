import styles from './header.module.css'

export default function Header(){
    return(
        <div className={styles.container}>
                <span className={styles.title}>
                    <p>AUTHENTIC ITALIAN GELATO</p> 
                    <img src='/Elisa_Orizzontale_White.png'></img>
                    <p>A TASTE OF BOLOGNA</p>
                </span>
        </div>
    )
}