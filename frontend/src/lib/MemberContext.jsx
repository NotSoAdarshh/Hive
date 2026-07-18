import { createContext, useContext, useEffect, useState } from 'react';
import { membersApi } from './api';

const MemberContext = createContext(null);

export function MemberProvider({ session, children }) {
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) { setLoading(false); return; }
    membersApi.me()
      .then((res) => setMember(res.data))
      .catch(() => setMember(null))
      .finally(() => setLoading(false));
  }, [session]);

  return (
    <MemberContext.Provider value={{ member, loading, setMember }}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMember() {
  return useContext(MemberContext);
}

export function useIsCoordinator() {
  const { member } = useMember();
  return member?.role === 'coordinator';
}

export function useIsManager() {
  const { member } = useMember();
  return member?.role === 'inventory_manager' || member?.role === 'coordinator';
}
