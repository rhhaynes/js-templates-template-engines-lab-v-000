function createPost(){
  document.getElementById("commenterName").value;
  document.getElementById("commentText").value;
  document.getElementById("comment-template").innerHTML;

  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById("comments");

  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}

function postComment(){}