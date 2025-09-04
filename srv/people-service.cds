using gizemsoylutr from '../db/schema';

service PeopleService {
  entity Cities  as projection on gizemsoylutr.City;
  entity Persons as projection on gizemsoylutr.Person;

  action markAsContact(person: UUID) returns String;
  action resetEmail(person: UUID) returns String;
}
