function handleSubmit(event) {
  event.preventDefault();
  checkLength();
}

function commentLength() {
  commentBoxLength = commentBox.value.length;
  let displayCharacterLenght = document.querySelector("#comment-box-length");
  if (commentBoxLength > 140) {
    commentBox.classList.add("exceed-character-limit");
  } else {
    commentBox.classList.remove("exceed-character-limit");
  }
  displayCharacterLenght.innerHTML = commentBoxLength;
  return commentBoxLength;
}

function checkLength() {
  if (commentBoxLength > 140) {
    alert("Sorry, your comments need to be within the 140 character range.");
  }
  displayComment();
}

function displayComment() {
  let name = document.querySelector("#Name").value;
  let comment = document.querySelector(".comment-display");
  if (name.length > 0) {
    feedBack.push(`${name} wrote: ${commentBox.value}`);
  } else {
    feedBack.push(`User wrote: ${commentBox.value}`);
  }

  comment.innerHTML = feedBack;
  comment.classList.add("section");
  console.log(comment);
}
let feedBack = [];
let submit = document.querySelector("#form");
let commentBox = document.querySelector("#comment-box");
let commentBoxLength = 0;
submit.addEventListener("submit", handleSubmit);
commentBox.addEventListener("keyup", commentLength);
