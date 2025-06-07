import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(form));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
                  required
                  className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
                  required
                  className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
                  minLength={6}
                  className={styles.input}
        />
      </label>

      <button className={styles.button} type="submit">Register</button>
    </form>
  );
}