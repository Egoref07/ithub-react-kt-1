import classes from "./ServiceOffer.module.css"
import image1 from '../../assets/image1.jpg'

export default function ServiceOffer() {
    return (
        <section className={classes.background}>
         <div className={classes.service_offer}>
            <h2>
                <i>Что мы предлагаем</i>
            </h2>
            <p>
                <i>
                В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. 
                </i>
            </p>
         </div>
            <img src={image1} alt="" />
        </section>
    )
}