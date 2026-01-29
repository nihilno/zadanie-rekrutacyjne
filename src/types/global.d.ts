export {};

declare global {
  type User = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  };

  type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };

  type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  type PersonalDataProps = {
    username: string;
    email: string;
    phone: string;
    website: string;
  };

  type AddressProps = {
    address: { street: string; suite: string; city: string; zipcode: string };
  };

  type CompanyProps = {
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}
