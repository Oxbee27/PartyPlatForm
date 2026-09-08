# Iconicparty Party Platform

A React + Vite + Tailwind CSS platform for a Nigerian political party, covering the
public site, member portal, and party operations admin console.

## Structure

- **Public site** — home, about, manifesto, leadership, events, newsroom, membership
  registration (INEC-aligned fields: state/LGA/ward/polling unit/NIN/photo/PWD),
  volunteering, contributions, contact, and a **Compliance & Grievances** desk for
  membership and primary-election disputes.
- **Member portal** (`/dashboard`) — status, digital membership card, ward/LGA info,
  events, contributions, messages, profile.
- **Admin console** (`/admin`) — membership, chapter, event and contribution metrics,
  plus a **Compliance & Grievances** module with a register audit log and grievance
  case tracker, so the continuously-updated register requirement is demonstrable, not
  just claimed.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build in `dist/`.

## Notes on data

All content in `src/data/content.js` is placeholder/sample data (including the
simulated logged-in member and admin metrics) — wire it up to a real API and
authentication layer before deploying.
# PartyPlatForm
