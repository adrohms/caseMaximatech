export interface IAddress {
  id?: number;
  street?: string | null;
  sector?: string | null;
  city?: string | null;
  state?: string | null;
  cep?: string | null;
  contry?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public street?: string | null,
    public sector?: string | null,
    public city?: string | null,
    public state?: string | null,
    public cep?: string | null,
    public contry?: string | null,
    public latitude?: number | null,
    public longitude?: number | null
  ) {}
}

export function getAddressId(address: IAddress): number | undefined {
  return address.id;
}
