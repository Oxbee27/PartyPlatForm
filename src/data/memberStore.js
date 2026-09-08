const MEMBER_KEY = 'iconicparty_member';
const SESSION_KEY = 'iconicparty_session';

export function generateMembershipNumber() {
  return `ICP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function saveMember(member) {
  localStorage.setItem(MEMBER_KEY, JSON.stringify(member));
  return member;
}

export function getMember() {
  const saved = localStorage.getItem(MEMBER_KEY);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

export function updateMember(updates) {
  const currentMember = getMember();

  if (!currentMember) {
    return null;
  }

  const updatedMember = {
    ...currentMember,
    ...updates,
  };

  saveMember(updatedMember);

  return updatedMember;
}

export function createMember(form) {
  const member = {
    membershipNumber: generateMembershipNumber(),

    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone: form.phone,
    dateOfBirth: form.dateOfBirth,
    gender: form.gender,

    state: form.state,
    lga: form.lga,
    ward: form.ward,
    pollingUnit: form.pollingUnit,

    interest: form.interest,
    volunteer: form.volunteer,
    newsletter: form.newsletter,

    status: 'Pending',

    joinedAt: new Date().toISOString(),

    avatarInitials:
      `${form.firstName?.charAt(0) || ''}${form.lastName?.charAt(0) || ''}`.toUpperCase(),
  };

  saveMember(member);

  return member;
}

export function createSession(type = 'member') {
  const session = {
    type,
    authenticated: true,
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return session;
}

export function getSession() {
  const saved = localStorage.getItem(SESSION_KEY);

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

export function isAuthenticated(type = null) {
  const session = getSession();

  if (!session || !session.authenticated) {
    return false;
  }

  if (type && session.type !== type) {
    return false;
  }

  return true;
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function clearMember() {
  localStorage.removeItem(MEMBER_KEY);
}

export function logout() {
  clearSession();
}