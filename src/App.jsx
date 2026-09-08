import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';

import Home from './pages/Home';
import About from './pages/About';
import Manifesto from './pages/Manifesto';
import Leadership from './pages/Leadership';
import Events from './pages/Events';
import News from './pages/News';
import Join from './pages/Join';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Grievances from './pages/Grievances';
import Transparency from './pages/Transparency';
import Chapters from './pages/Chapters';

import Login from './pages/Login';
import MemberDashboard from './pages/MemberDashboard';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/join" element={<Join />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grievances" element={<Grievances />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/chapters" element={<Chapters />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<MemberDashboard section="overview" />}
        />
        <Route
          path="/dashboard/card"
          element={<MemberDashboard section="card" />}
        />
        <Route
          path="/dashboard/events"
          element={<MemberDashboard section="events" />}
        />
        <Route
          path="/dashboard/contributions"
          element={<MemberDashboard section="contributions" />}
        />
        <Route
          path="/dashboard/messages"
          element={<MemberDashboard section="messages" />}
        />
        <Route
          path="/dashboard/profile"
          element={<MemberDashboard section="profile" />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard section="overview" />}
        />
        <Route
          path="/admin/membership"
          element={<AdminDashboard section="membership" />}
        />
        <Route
          path="/admin/chapters"
          element={<AdminDashboard section="chapters" />}
        />
        <Route
          path="/admin/events"
          element={<AdminDashboard section="events" />}
        />
        <Route
          path="/admin/contributions"
          element={<AdminDashboard section="contributions" />}
        />
        <Route
          path="/admin/compliance"
          element={<AdminDashboard section="compliance" />}
        />
      </Routes>
    </BrowserRouter>
  );
}