function createPost(){
  const title  = document.getElementById("postTitle").value;
  const author = document.getElementById("postAuthor").value;
  const body   = document.getElementById("postText").value;
  const postTemp
  document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function postComment(){}