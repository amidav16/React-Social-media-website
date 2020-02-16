//fake profile data
let counter = 5;

const data = [
  {
    id: 0,
    name: "Bob",
    surname: "Dyllan",
    description: "Hello Friends",
    status: "Single",
    location: "New Zealand",
    email: "BobDyllanIsAwesome@gmail.com",
    friends: 2
  },
  {
    id: 1,
    name: "Steve",
    surname: "England",
    description: "Your favorite scapegoat",
    status: "It's Complicated.",
    location: "Norway",
    email: "SteveEngland@hotmail.com",
    friends: 12
  },
  {
    id: 2,
    name: "Felix",
    surname: "Kjellberg",
    description: "Watch my videoes at youtube.com/pewdiepie",
    status: "Married",
    location: "Sweden",
    email: "Pewdiepie@gmail.com",
    friends: 71
  },
  {
    id: 3,
    name: "Dinkleberg",
    surname: "Stevenson",
    description: "Please add me on my profile!",
    status: "Single",
    location: "Germany",
    email: "DinkDonk@yahoo.com",
    friends: 0
  },
  {
    id: 2,
    name: "You",
    surname: "Surname",
    description: "Hey it's me!",
    status: "Single",
    location: "norway",
    email: "you",
    friends: 0
  }
];

function getData() {
  return data.reverse();
}

function getUser(data_id) {
  return data.find(profile => profile.id === data_id);
}

function createUser(name, surname, description, status, location, email) {
  //store it like this in case i want to edit existing users in the future
  let id = parseInt("" + counter);
  counter++;

  const user = {
    id: id,
    name: name,
    surname: surname,
    description: description,
    status: status,
    location: location,
    email: email,
    friends: 0
  };

  data.push(user);
}

module.exports = { getData, getUser, createUser };
