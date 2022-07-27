// React icons
import { NavLink } from 'react-router-dom';
// Styles
import s from '../Navigation/Navigation.module.css';

const AuthNav = () => {
  return (
    <>
      <li className={s.navList__item}>
        <NavLink className={s.navList__link} to="/signIn">
          Sign in
        </NavLink>
      </li>
      <li className={s.navList__item}>
        <NavLink className={s.navList__link} to="/signUp">
          Sign up
        </NavLink>
      </li>
    </>
  );
};
export default AuthNav;
