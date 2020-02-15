const data = [
  {
    id: 0,
    name: "Bob",
    message: "Thinking about eating burgers today, thoughts?",
    date: "15-Feb-2020",
    likeCount: 6
  },
  {
    id: 1,
    name: "Felix",
    message: "Cannot sleep tonight. Thinking of pulling an all nighter",
    date: "15-Feb-2020",
    likeCount: 136
  },
  {
    id: 2,
    name: "Steve",
    message:
      "What if we were evolved from donkeys? this keeps me awake at night omg.",
    date: "15-Feb-2020",
    likeCount: 3
  },
  {
    id: 3,
    name: "Dinkleberg",
    message: "Hello Friends, if this post reaches 1 like i will be happy!!!",
    date: "15-Feb-2020",
    likeCount: 0
  }
];

function getMedia() {
  return data;
}

function getMediaUser(data_id) {
  return data.find(profile => profile.id === data_id);
}

function createPost(message) {
  //store it like this in case i want to edit existing users in the future
  let id = parseInt("" + counter);
  counter++;

  const media = {
    id: id,
    name: "You",
    date: "15-Feb-2020",
    likeCount: 0
  };

  data.push(media);
}

module.exports = { getMedia, getMediaUser, createPost };
