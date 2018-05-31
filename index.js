function createPost(){
  const postTitle    = document.getElementById("postTitle").value;
  const postAuthor   = document.getElementById("postAuthor").value;
  const postText     = document.getElementById("postText").value;
  const postTemplate = document.getElementById("post-template").innerHTML;
  const pageTemplate = document.getElementById("page-template").innerHTML;

  const postTemplateFn   = _.template(postTemplate);
  const postTemplateHTML = postTemplateFn({'postTitle': postTitle, 'postAuthor': postAuthor, 'postText': postText});

  const pageTemplateFn   = _.template(pageTemplate);
  const pageTemplateHTML = pageTemplateFn({'post': postTemplateHTML, 'sidebar': ''});

  let postDiv = document.getElementById("post");
  postDiv.innerHTML = pageTemplateHTML;
}

function postComment(){}