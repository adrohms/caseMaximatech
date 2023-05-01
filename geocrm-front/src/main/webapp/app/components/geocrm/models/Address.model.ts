import { IPerson } from "./Person.model";

export interface IAddress {
  id?: number;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  contry?: string | null;
  person?: IPerson | null;
  latitude?: string | null;
  longitude?: string | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public street?: string | null,
    public city?: string | null,
    public state?: string | null,
    public contry?: string | null,
    public person?: IPerson | null,
    public latitude?: string | null,
    public longitude?: string | null
  ) {}
}

export function getAddressId(address: IAddress): number | undefined {
  return address.id;
}
