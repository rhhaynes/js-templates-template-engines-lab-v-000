function createPost(){
  const postTitle    = document.getElementById("postTitle").value;
  const postAuthor   = document.getElementById("postAuthor").value;
  const postText     = document.getElementById("postText").value;
  const postTemplate = document.getElementById("page-template").innerHTML;

  const templateFn   = _.template(postTemplate);
  const templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  let postDiv = document.getElementById("post");
  postDiv.innerHTML += templateHTML;
}

function postComment(){}