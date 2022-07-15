class Person
{
  constructor(firstName, lastName, dob) 
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.age = -1;
  }

  getFullName()
  {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Jacques', 'de Villiers', '123456');
const person2 = new Person('Mitchell', 'Neilson', '654321')


class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership)
  {
    super(firstName, lastName, dob);

    this.phone = phone;
    this.membership = membership;
  }

  static memberCost()
  {
    return "$1,000,000";
  }
}

const customer = new Customer('Joe', 'Soap', '0987654', '1234567', 'Gold')
const customer2 = new Customer('Jane', 'Soap', '6844687', '5u78423', 'Platinum')

console.log(Customer.memberCost())

// const people = [
//   person,
//   person2,
//   customer,
//   customer2
// ]

// for (let i = 0; i < people.length; i++) {
//   let person = people[i];
//   console.log(person.getFullName())
// }

// for (let person of people)
// {
//   console.log(person.getFullName())
// }

// people.forEach((person) => {
//   console.log(person.getFullName())
// })