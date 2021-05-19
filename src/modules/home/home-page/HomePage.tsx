import { logout } from "../../auth/AuthActions";
import styles from "./homePage.module.scss";
import { useAppDispatch } from "../../../redux/store/store";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <div className={styles.logo}>Test Qoobus</div>
        <nav className={styles.navigation}>
          <button onClick={handleSignOut}>Log out</button>
        </nav>
      </header>
      <h1>Home Page</h1>
    </div>
  );
};