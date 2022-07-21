const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res.text());
  console.log(res.json());

  return res.json();
}

function printPosts(posts) {
  let html = "<ul>";
  for (let post of posts) {
    html += "<li>" + post.title + "</li>";
  }
  html += "</ul>";
  document.body.innerHTML = html;
}

async function fetchAndPrintPosts() {
  try {
    const posts = await fetchPosts();
    printPosts(posts);
  } catch (err) {
    console.log(err);
  }
}

async function createPost(post)
{
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post)
  })
  
  return response.json();
}

fetchAndPrintPosts();


const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
}
createPost(newPost).then(result => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})