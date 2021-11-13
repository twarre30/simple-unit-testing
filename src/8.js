function greetPeople(people) {
  var greeting = "Hello ";

  people.forEach(function(person) {
    greeting = greeting + person;
  });

  return greeting;
}

module.exports = greetPeople;
