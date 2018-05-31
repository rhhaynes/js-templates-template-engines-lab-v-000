function createPost(){
  const postTitle    = document.getElementById("postTitle").value;
  const postAuthor   = document.getElementById("postAuthor").value;
  const postText     = document.getElementById("postText").value;
  const postTemplate = document.getElementById("post-template").innerHTML;

  const templateFn   = _.template(postTemplate);
  const templateHTML = templateFn({'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText});

  let postDiv = document.getElementById("post");
  postDiv.innerHTML = templateHTML;
}

function postComment(){}