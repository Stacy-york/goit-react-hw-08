import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations'; 
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.userMenu}>
      <p>Welcome, {user.name}!</p>
      <button className={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  );
}