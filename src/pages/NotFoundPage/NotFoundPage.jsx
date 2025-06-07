import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Вибачте, такої сторінки не існує.</p>
      <Link to="/">Повернутися на головну</Link>
    </div>
  );
}