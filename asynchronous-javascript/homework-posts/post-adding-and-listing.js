const posts = [
  { postId: 1, author: "Ozi", date: "21.02.20", topic: "React-Native Crash Learn" },
  { postId: 2, author: "Ozi", date: "26.02.20", topic: "How Pomodoro Works" },
  { postId: 3, author: "Ozi", date: "27.02.20", topic: "Human Learning Skills" },
  { postId: 4, author: "Ozi", date: "01.03.20", topic: "PostgreSQL Crash Learn" },
]

const listPosts = (data) => {
  posts.map(each => {
    console.log('Post ID: ', each.postId,
      ',Author: ', each.author,
      ',Date: ', each.date,
      ',Topic: ', each.topic)
  })
}

listPosts(posts);

const addPosts = (posts, newPost) => {
  posts.push(newPost);
}

const addAndListPosts = async () => {

  try {
    await addPosts(posts, { postId: 5, author: "Ozi", date: "03.03.20", topic: "PostgreSQL Crash Learn-2" })
    listPosts(posts)

  } catch (error) {
    console.log(error)
  }
}
console.log('=============After adding new post===============')
addAndListPosts();