function createPost(){
  const postTitle    = document.getElementById("postTitle").value;
  const postAuthor   = document.getElementById("postAuthor").value;
  const postText     = document.getElementById("postText").value;
  const postTemplate = document.getElementById("page-template").innerHTML;

  const templateFn = _.template(postTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function postComment(){}