import styles from'./Loginkids.css'

export function KidCard({kid}) {

    //const imageurl = "https://image.tmdb.org/t/p/w100" + kid.avatar;
    return (
        <div>
            <button className='buttonkid'>
                <img width={120} height={120} className={styles.imgbutton} src= {kid.avatar} alt="hola" />
            </button>
            {kid.name}
        </div>
    );
}
