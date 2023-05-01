import { IAddress } from "./Address.model";

export interface IPerson {
  id?: number;
  code?: string | null;
  name?: string | null;
  taxId?: string | null;
  email?: string | null;
  phone?: string | null;
  addresses?: IAddress[] | null;
}

export class Person implements IPerson {
  constructor(
    public id?: number,
    public code?: string | null,
    public name?: string | null,
    public taxId?: string | null,
    public email?: string | null,
    public phone?: string | null,
    public addresses?: IAddress[] | null,
  ) {}
}

export function getPersonId(person: IPerson): number | undefined {
  return person.id;
}
