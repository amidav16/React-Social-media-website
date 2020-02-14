//fake profile data

const data = [
  {
    id: 1,
    name: "Bob",
    surname: "Dyllan",
    description: "Hello Friends",
    status: "Single",
    location: "New Zealand",
    email: "BobDyllanIsAwesome@gmail.com",
    likeCount: 2
  },
  {
    id: 2,
    name: "Steve",
    surname: "England",
    description: "Your favorite scapegoat",
    status: "It's Complicated.",
    location: "Norway",
    email: "SteveEngland@hotmail.com",
    likeCount: 12
  },
  {
    id: 3,
    name: "Felix",
    surname: "Kjellberg",
    description: "Watch my videoes at youtube.com/pewdiepie",
    status: "Married",
    location: "Sweden",
    email: "Pewdiepie@gmail.com",
    likeCount: 71
  },
  {
    id: 4,
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

function getUser(id_) {
  return data.find(m => m.id === id_);
}

module.exports = { getData, getUser };
