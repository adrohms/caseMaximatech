export interface ILtnLng {
  lat: number;
  lng: number;
}

export class LtnLng implements ILtnLng{
  constructor(
    public lat: number,
    public lng: number,
  ) {}
}

export interface IPosition {
  ltnLng: ILtnLng;
  label: string;
}

export class Position implements IPosition {
  constructor(
    public ltnLng: LtnLng,
    public label: string
  ) {}
}
