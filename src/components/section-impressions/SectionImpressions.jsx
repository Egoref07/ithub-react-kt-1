import classes from "./SectionImpressions.module.css"

export default function SectionImpressions() {
    return (
        <section className={classes.background}>
            <div className={classes.text}>
                <p>
                    <i>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</i>
                </p>
                <p>
                    <i>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед</i>
                </p>
            </div>
           
        </section>
    )
}