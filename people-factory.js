function PeopleFactory() {
  var people = [{
        "first_name": "Joseph",
        "last_name": "Moreno",
        "age": 95,
        "country": "Philippines",
        "date": "04/11/2016"
      }, {
        "first_name": "Howard",
        "last_name": "Bailey",
        "age": 50,
        "country": "Indonesia",
        "date": "04/28/2016"
      }, {
        "first_name": "Joe",
        "last_name": "Coleman",
        "age": 74,
        "country": "Pakistan",
        "date": "05/03/2016"
      }, {
        "first_name": "Kathleen",
        "last_name": "Jenkins",
        "age": 26,
        "country": "Argentina",
        "date": "04/15/2016"
      }, {
        "first_name": "Ruby",
        "last_name": "Spencer",
        "age": 48,
        "country": "Philippines",
        "date": "05/19/2016"
      }, {
        "first_name": "George",
        "last_name": "Martin",
        "age": 83,
        "country": "Morocco",
        "date": "04/19/2016"
      }, {
        "first_name": "Cynthia",
        "last_name": "Reyes",
        "age": 46,
        "country": "Indonesia",
        "date": "05/05/2016"
      }, {
        "first_name": "Evelyn",
        "last_name": "Wells",
        "age": 81,
        "country": "Sweden",
        "date": "04/16/2016"
      }, {
        "first_name": "Bonnie",
        "last_name": "Bell",
        "age": 65,
        "country": "Germany",
        "date": "04/08/2016"
      }, {
        "first_name": "Laura",
        "last_name": "George",
        "age": 95,
        "country": "Indonesia",
        "date": "05/25/2016"
      }];

  return {
    getPeople: function() {
      return people;
    }
  };
}

angular.module('people', [])
.factory('PeopleFactory', PeopleFactory);
