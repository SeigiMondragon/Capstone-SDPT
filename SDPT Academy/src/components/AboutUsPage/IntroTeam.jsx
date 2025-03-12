import styles from "./styles/IntroTeam.module.css"

function IntroTeam(){

    return(
       
        <div className={styles.meetTheTeam}>
            <div className={styles.leftCard}>
                <div className={styles.upperLeft}>
                  <h2>Lets Meet Our</h2>
                  <h1>SDPT Academy Team</h1>
                </div>
                <div className={styles.lowerLeft}>   
                    <div>Developer|Designer|Professor|Marketing</div>
                    <div className={styles.members}>2 members </div>
                </div>
            
            </div>
            <div className={styles.rightCard}>
                <hr className={styles.horizontal} />
            
            </div>
        </div>
    )

}

export default IntroTeam