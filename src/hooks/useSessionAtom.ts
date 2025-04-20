import { useAtom } from 'jotai';
import { SessionAtom } from '@/stores/atoms/global.atom';

export default function useSessionAtom() {
  const [session, setSession] = useAtom(SessionAtom);

  return {
    session,
    setSession,
    isLoggedIn: Boolean(session),
  };
}
