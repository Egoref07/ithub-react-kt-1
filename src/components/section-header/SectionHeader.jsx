import classes from "./SectionHeader.module.css";

export default function SectionHeader() {
  return (
    <header className={classes.header}>
      <nav className={classes.header__nav}>
        <img src="/logo.png" alt="логотип велозар" className="header__logo" />
        <ul className={classes.links}>
          <li className={classes.link}>
            <a href="#about" className="link__a">
              О нас
            </a>
          </li>
          <li className="link">
            <a href="#services" className="link__a">
              Услуги
            </a>
          </li>
          <li className="link">
            <a href="#rent" className="link__a">
              Аренда
            </a>
          </li>
        </ul>
        <button className={classes.header__button}>Связаться</button>
      </nav>
      <div className={classes.header__content}>
        <div className={classes.aboutus__text}>
          <h1 className={classes.header__brand}>Веломастерская “Велозар”</h1>
          <p className={classes.header__description}>
            Мы, мастера веломастерской «Велозар», как раз те самые счастливые
            люди, которые смогли превратить свое увлечение и хобби в профессию.
            Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил
            Вам только радость и удовольствие от езды.
          </p>
        </div>
        <img src="/mascotte.png" alt="маскот велозавр" />
      </div>
    </header>
  );
}
