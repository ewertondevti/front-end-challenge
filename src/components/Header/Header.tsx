import Logo from "../Logo/Logo";
import MenuBar from "../MenuBar/MenuBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.logoContent}>
        <Logo />
        <span>Front-end Challange</span>
      </div>
      <MenuBar />
    </div>
  );
};

export default Header;
