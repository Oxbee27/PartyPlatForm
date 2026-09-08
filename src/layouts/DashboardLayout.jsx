import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

export default function DashboardLayout({ title, navItems, userLabel, roleLabel, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const SidebarContent = (
    <>
      <Link to="/" className="block px-6 py-5">
        <Logo />
      </Link>
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-forest-700 text-paper'
                  : 'text-forest-600 hover:bg-mint-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-forest-100 p-4">
        <p className="text-sm font-semibold text-forest-800">{userLabel}</p>
        <p className="text-xs text-forest-400">{roleLabel}</p>
        <button
          onClick={() => navigate('/login')}
          className="mt-3 text-xs font-semibold text-forest-500 hover:text-forest-700"
        >
          Sign out
        </button>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-mint-50">
      <aside className="hidden w-64 flex-col border-r border-forest-100 bg-paper lg:flex">
        {SidebarContent}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="flex w-72 flex-col bg-paper">{SidebarContent}</div>
          <button
            className="flex-1 bg-ink/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-forest-100 bg-paper px-5 py-4 lg:px-8">
          <h1 className="font-display text-xl font-semibold text-forest-800">{title}</h1>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-forest-200 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4.5H16" stroke="#0F3D2E" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M2 9H16" stroke="#0F3D2E" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M2 13.5H16" stroke="#0F3D2E" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </header>
        <div className="px-5 py-8 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
