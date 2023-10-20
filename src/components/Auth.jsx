import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import classes from './Auth.module.css';

export default function Auth() {
  const dispatch = useDispatch();

  const onFormSubmmit = () => {
    dispatch(login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password' required />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
}
