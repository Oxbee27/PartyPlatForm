import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
};

export default function ButtonLink({ to, variant = 'primary', children, className = '' }) {
  return (
    <Link to={to} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
