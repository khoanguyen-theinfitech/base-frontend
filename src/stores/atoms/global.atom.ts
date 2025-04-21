import { atom } from 'jotai';
import { ISessionAtom } from '@/types/global.type';

export const SessionAtom = atom<ISessionAtom | undefined>(undefined);
