function addPost() {
  const content = document.getElementById("postContent").value;
  if (content.trim() === "") return;

  const postContainer = document.getElementById("posts");

  const newPost = document.createElement("div");
  newPost.className = "post";
  newPost.innerHTML = `<h4>You</h4><p>${content}</p>`;

  postContainer.prepend(newPost); // Add to top
  document.getElementById("postContent").value = ""; // Clear box
}
