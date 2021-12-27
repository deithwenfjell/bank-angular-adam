import { Klient } from './klient';
import { Transakcia } from './transakcia';

export class Ucet {
    id?: number;
    vlastnikId?: number;
    nazov?: string;
    transakcie!: Transakcia[];
}
