namespace gizemsoylutr;

entity City {
  key ID  : UUID;
      name: String(80);
}

entity Person {
  key ID      : UUID;
      fullName: String(120);
      email   : String(120);
      city    : Association to City;
      isContact: Boolean default false;
}
