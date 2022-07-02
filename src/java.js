function handleSubmit(event) {
  event.preventDefault();
  checkLength();
}

function commentLength() {
  commentBoxLength = commentBox.value.length;
  let displayCharacterLenght = document.querySelector("#comment-box-length");
  displayCharacterLenght.innerHTML = commentBoxLength;
  //checkLength(commentBoxLength);
  return commentBoxLength;
}

function checkLength() {
  if (commentBoxLength > 140) {
    alert("Sorry, your comments need to be within the 140 character range.");
  }
}

let submit = document.querySelector("#form");
let commentBox = document.querySelector("#comment-box");
let commentBoxLength = 0;
submit.addEventListener("submit", handleSubmit);
commentBox.addEventListener("keyup", commentLength);
