// RTK Query hooks
import { useSignInUserMutation } from 'services/phoneBook';

// Redux
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authSlice';

// Styles
import s from './Pages.module.css';

// React router dom
import { NavLink } from 'react-router-dom';

// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

// React icons
import { FaUserCircle } from 'react-icons/fa';

// Toast notify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const LoginPage = () => {
  const [signInUser] = useSignInUserMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }, { resetForm }) => {
      try {
        const { data } = await signInUser({ email, password });
        dispatch(signIn(data));
      } catch (error) {
        console.log(error);
        toast.error('Wrong email or password!');
      }
      resetForm();
    },
    validationSchema: schema,
  });

  const { email, password } = formik.values;

  const handleClick = () => {
    if (email === '' || password === '') {
      return toast.info(`Form fields must be completed`);
    }
  };

  return (
    <div className={s.formWrapper}>
      <FaUserCircle className={s.formWrapper__icon} />
      <h2 className={s.formWrapper__title}>Welcome</h2>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <p className={s.form__title}>Sign in to PhoneBook</p>
        <label className={s.form__label}>
          <input
            className={s.form__input}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            placeholder="Email"
          />
        </label>
        <label className={s.form__label}>
          <input
            className={s.form__input}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            placeholder="Password"
          />
        </label>
        <button className={s.form__button} type="submit" onClick={handleClick}>
          Sign in
        </button>
        <p className={s.form__text}>
          New to PhoneBook?&nbsp;
          <NavLink className={s.form__link} to="/signUp">
            Create an account
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
