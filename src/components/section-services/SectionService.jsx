import Service from "../service/service"
import classes from './SectionService.module.css'

export default function SetcionServices() {
    return (
        <section className={classes.services} id="services">
            <Service title="Годовое ТО" background="#22356F" />
            <Service title="Выравнивание колес" background="#0052C1" /> 
            <Service title="Настройка переключателей" background="#76B58B" />
        </section>
    )
} 