import image2 from '../../assets/image2.jpg'
import classes from './SectionRent.module.css'
export default function SectionRent() {
    return (
        <section className={classes.rent}>
            <img src={image2} alt="" />
            <div className={classes.rent_text}>
                <p><i>Прокат велосипедов</i></p>
                <p><i>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</i></p>
            </div>
        </section>
    )
}