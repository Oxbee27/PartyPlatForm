export const party = {
  name: 'Iconicparty',
  tagline: 'Government that answers to the ward, not the other way round.',
  founded: 2021,
  registrationNo: 'INEC/PPD/0231',
};

export const stats = [
  { label: 'Registered members', value: '284,610' },
  { label: 'States with active chapters', value: '36 + FCT' },
  { label: 'Wards with a coordinator', value: '6,802' },
  { label: 'Accredited polling agents', value: '41,220' },
];

export const nigerianStates = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
  'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
];

export const leadership = [
  { name: 'Amina Balogun-Effiong', role: 'National Chairperson', chapter: 'National Secretariat, Abuja' },
  { name: 'Chukwuemeka Osaretin', role: 'Deputy National Chairperson (South)', chapter: 'Edo State' },
  { name: 'Fatima Sule Danladi', role: 'Deputy National Chairperson (North)', chapter: 'Borno State' },
  { name: 'Ifeoma Nwachukwu', role: 'National Secretary', chapter: 'National Secretariat, Abuja' },
  { name: 'Tunde Ogunleye', role: 'National Treasurer', chapter: 'Lagos State' },
  { name: 'Grace Akpan', role: 'National Woman Leader', chapter: 'Akwa Ibom State' },
];

export const events = [
  {
    title: 'Ward Coordinators Training — North West Zone',
    date: '2026-09-19',
    location: 'Kano State Secretariat',
    type: 'Training',
  },
  {
    title: 'Youth & PWD Inclusion Town Hall',
    date: '2026-09-27',
    location: 'Rivers State, Port Harcourt',
    type: 'Town Hall',
  },
  {
    title: 'National Executive Committee Sitting',
    date: '2026-10-04',
    location: 'National Secretariat, Abuja',
    type: 'Internal',
  },
  {
    title: 'Membership Registration Drive — South East Zone',
    date: '2026-10-11',
    location: 'Enugu, Anambra, Ebonyi',
    type: 'Registration',
  },
];

export const news = [
  {
    title: 'Iconicparty submits updated membership register to INEC',
    date: '2026-08-29',
    summary: 'The party confirms its Q3 continuous-update filing across all 36 states and the FCT, ahead of the statutory deadline.',
  },
  {
    title: 'National Convention date set for chapter elections',
    date: '2026-08-14',
    summary: 'Ward and LGA congresses will precede the state congresses, with independent observers invited from civil society.',
  },
  {
    title: 'New grievance desk opens for membership and primary disputes',
    date: '2026-07-30',
    summary: 'The Compliance & Grievances desk gives members a documented channel to raise disputes before they reach the courts.',
  },
];

export const manifesto = [
  {
    pillar: 'Local government autonomy',
    detail: 'Direct disbursement of LGA allocations, with ward-level publication of spending.',
  },
  {
    pillar: 'Public education funding floor',
    detail: 'A statutory minimum share of state budgets ring-fenced for basic education infrastructure.',
  },
  {
    pillar: 'Digital public services',
    detail: 'A single citizen ID for state services, cutting duplicate paperwork across ministries.',
  },
  {
    pillar: 'Small business financing',
    detail: 'State-backed low-interest loans for registered cooperatives and market associations.',
  },
];

// Simulated current member — in production this comes from an authenticated session.
export const currentMember = {
  name: 'Hauwa Bello Modu',
  memberId: 'CU-BO-2024-001842',
  state: 'Borno',
  lga: 'Maiduguri',
  ward: 'Bolori II',
  pollingUnit: 'PU 004 — Gwange Primary School',
  status: 'Active',
  joined: '2024-03-12',
  pwd: false,
  role: 'Ward Financial Secretary',
  photoInitials: 'HB',
};

export const memberContributions = [
  { date: '2026-08-01', purpose: 'Monthly dues', amount: 2000, method: 'Bank transfer' },
  { date: '2026-06-15', purpose: 'Convention levy', amount: 5000, method: 'USSD' },
  { date: '2026-03-12', purpose: 'Membership renewal', amount: 1000, method: 'Card' },
];

export const memberMessages = [
  { from: 'Bolori II Ward Office', date: '2026-09-02', subject: 'Training venue confirmed for Sept 19', unread: true },
  { from: 'National Secretariat', date: '2026-08-29', subject: 'Register submission acknowledgement', unread: false },
  { from: 'Compliance & Grievances Desk', date: '2026-07-30', subject: 'New grievance channel now open', unread: false },
];

export const adminMetrics = {
  membership: { total: 284610, newThisMonth: 3120, pendingVerification: 842, flaggedDuplicates: 37 },
  chapters: { active: 774, lgaCoverage: '774 / 774', wardCoordinatorsAssigned: 6802, wardsTotal: 8809 },
  events: { upcoming: 12, thisQuarter: 46, avgAttendance: 210 },
  contributions: { thisQuarter: 48200000, donors: 19340, avgGift: 2493 },
  compliance: {
    registerLastSubmitted: '2026-08-29',
    nextDeadline: '2026-11-29',
    openGrievances: 14,
    resolvedThisYear: 96,
    auditFlags: 5,
  },
};

export const auditLog = [
  { date: '2026-09-05 14:12', actor: 'Ward Sec. — Bolori II', action: 'Added member', detail: 'CU-BO-2026-004821 registered' },
  { date: '2026-09-05 09:40', actor: 'LGA Admin — Maiduguri', action: 'Flagged duplicate', detail: 'NIN match with CU-BO-2023-000117' },
  { date: '2026-09-04 17:02', actor: 'State Admin — Borno', action: 'Verified batch', detail: '212 records approved for register' },
  { date: '2026-09-03 11:15', actor: 'National Compliance', action: 'Filed report', detail: 'Q3 continuous update submitted to INEC' },
  { date: '2026-09-01 08:55', actor: 'Ward Sec. — Gwange', action: 'Removed member', detail: 'CU-BO-2021-000032 — deceased, next of kin notified' },
];

export const grievances = [
  { id: 'GR-2026-0142', subject: 'Ward chairmanship primary dispute', filedBy: 'Aggrieved aspirant — Konduga LGA', status: 'Under review', filed: '2026-08-30' },
  { id: 'GR-2026-0139', subject: 'Membership register omission', filedBy: 'Member — Jere LGA', status: 'Resolved', filed: '2026-08-11' },
  { id: 'GR-2026-0135', subject: 'Contribution not reflected in portal', filedBy: 'Member — Askira/Uba LGA', status: 'Resolved', filed: '2026-07-22' },
];
