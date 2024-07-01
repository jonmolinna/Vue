export interface userInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: addressInterface;
  phone: string;
  website: string;
  company: companyInterface;
}

export interface addressInterface {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geoInterface;
}

export interface geoInterface {
  lat: string;
  lng: string;
}

export interface companyInterface {
  name: string;
  catchPhrase: string;
  bs: string;
}
