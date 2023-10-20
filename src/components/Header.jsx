import { useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import classes from './Header.module.css';

export default function Header() {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    if (confirm('Are your sure want to logout?') == true) dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='#'>My Products</a>
          </li>
          <li>
            <a href='#'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
