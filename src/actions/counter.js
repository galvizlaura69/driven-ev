import { INC, DEC } from '../constants/counter';

export const increase = () => ({
 type: INC
});

export const decrease = () => ({
 type: DEC
});