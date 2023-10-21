import styles from './auth.module.css'

export default function AuthenticGelato(){
    return(
        <div className={styles.container}>
            <div className={styles.wrap}>
            <div className={styles.title}>
                <h1>Authentic gelato</h1>
            </div>
            
            <div className={`${styles.text} ${styles.text1}`}>
                <p>With Elisa Gelato, experience the true taste of Bologna without leaving Sydney
                      Our authentic gelato, crafted with traditional recipes and savoir-faire from 
                      renowned gelato makers in Bologna, offers a unique experience and indulgence at its best. 
                      With its creamy texture and rich flavours, our gelato is the perfect balance of sweetness and richness. 
                      Made in small batches using traditional methods and high-quality ingredients, 
                      our gelato offers the perfect balance of texture and flavour.
                      We are all about quality and tradition to offer you the experience of an authentic Italian gelato. 
                      With every spoon, you'll feel like you've been transported to the streets of Bologna.
                </p>
            </div>
            <div className={`${styles.img} ${styles.img1}`}>
                <img src="Serving.jpg"></img>
            </div>
            <div className={`${styles.img} ${styles.img2}`}>
            <img src="Young couple together stock photo.jpg"></img>
            </div>
            <div className={`${styles.text} ${styles.text2}`}>
                <p>At Elisa Gelato, we use the traditional way of preparing, storing and serving high quality gelato. 
                      Gelato is stored in pozzetti – stainless steel cylindrical containers deep inside the counter and covered with lids.  
                      Using pozzetti ensures that our gelato remains at the right temperature, so as to maintain its soft, smooth and creamy texture.
                      We are not about marketing or international expansion.
                </p>
            </div>
            </div>
        </div>
    )
}