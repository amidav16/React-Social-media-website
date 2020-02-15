//fake profile data
let counter = 4;

const data = [
  {
    id: 0,
    name: "Bob",
    surname: "Dyllan",
    description: "Hello Friends",
    status: "Single",
    location: "New Zealand",
    email: "BobDyllanIsAwesome@gmail.com",
    likeCount: 2
  },
  {
    id: 1,
    name: "Steve",
    surname: "England",
    description: "Your favorite scapegoat",
    status: "It's Complicated.",
    location: "Norway",
    email: "SteveEngland@hotmail.com",
    likeCount: 12
  },
  {
    id: 2,
    name: "Felix",
    surname: "Kjellberg",
    description: "Watch my videoes at youtube.com/pewdiepie",
    status: "Married",
    location: "Sweden",
    email: "Pewdiepie@gmail.com",
    likeCount: 71
  },
  {
    id: 3,
    name: "Dinkleberg",
    surname: "Stevenson",
    description: "Please like my profile!",
    status: "Single",
    location: "Germany",
    email: "DinkDonk@yahoo.com",
    likeCount: 0
  }
];

function getData() {
  return data;
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
    likeCount: 0
  };

  data.push(user);
}

module.exports = { getData, getUser, createUser };
