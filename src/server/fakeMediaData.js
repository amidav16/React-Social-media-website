let counter = 4;

const data = [
  {
    id: 0,
    user_id: 0,
    name: "Bob",
    message: "Thinking about eating burgers today, thoughts?",
    date: "15-Feb-2020",
    likeCount: 6
  },
  {
    id: 1,
    user_id: 1,
    name: "Steve",
    message:
      "What if we were evolved from donkeys? this keeps me awake at night omg.",
    date: "15-Feb-2020",
    likeCount: 3
  },
  {
    id: 2,
    user_id: 2,
    name: "Felix",
    message: "Cannot sleep tonight. Thinking of pulling an all nighter",
    date: "15-Feb-2020",
    likeCount: 136
  },
  {
    id: 3,
    user_id: 3,
    name: "Dinkleberg",
    message: "Hello Friends, if this post reaches 1 like i will be happy!!!",
    date: "15-Feb-2020",
    likeCount: 0
  }
];

const mediaTimeline = data.reverse();

function getMedia() {
  return mediaTimeline;
}

function getMediaUser(data_id) {
  return mediaTimeline.find(profile => profile.id === data_id);
}

function createPost(message) {
  //not practical, however since we dont utilize sessions and cookies there will always be posts
  //from "you" and you needs to have the same user id to not conflict
  let id = parseInt("" + counter);
  counter++;
  const media = {
    id: id,
    user_id: 4,
    message: message,
    name: "You",
    date: "15-Feb-2020",
    likeCount: 0
  };

  mediaTimeline.unshift(media);
}

module.exports = { getMedia, getMediaUser, createPost };
