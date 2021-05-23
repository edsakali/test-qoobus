import { useSelector } from "react-redux";
import { logout } from "../../auth/AuthActions";
import styles from "./homePage.module.scss";
import { useAppDispatch } from "../../../redux/store/store";
import { AppState } from "../../../redux/store/store";
import MyStockChart from "../components/MyStockChart";
import { AnimationExample } from "../components/AnimationExample";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: AppState) => state.auth);

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
      <div className={styles.content}>
        <h1>Home Page</h1>
        <p>First name: {user?.firstName}</p>
        <p>Last name: {user?.lastName}</p>
        <MyStockChart/>
        <div className={styles.animation}>
        <AnimationExample/>
        </div>
      </div>
    </div>
  );
};
