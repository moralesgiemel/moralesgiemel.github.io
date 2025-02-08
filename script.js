function getCurrentYear() {
  const today = new Date();
  return today.getFullYear();
}

function noButtonHover(event) {
  let happyBear = document.getElementById("happy-bear");
  let angryBear = document.getElementById("angry-bear");
  let noButton = document.getElementById("no-button");

  noButton.setAttribute("disabled", true);
  happyBear.style.display = "none";
  angryBear.style.display = "block";
}

function yesButtonHover(event) {
  let happyBear = document.getElementById("happy-bear");
  let angryBear = document.getElementById("angry-bear");
  let noButton = document.getElementById("no-button");

  noButton.removeAttribute("disabled");
  angryBear.style.display = "none";
  happyBear.style.display = "block";
}

function clickYes() {
  let happyBear = document.getElementById("happy-bear");
  let angryBear = document.getElementById("angry-bear");
  let noButton = document.getElementById("no-button");
  let yesButton = document.getElementById("yes-button");
  let valentineBear = document.getElementById("valentine-bear");
  let headerQuestion = document.getElementById("header-question");
  let yeheyyy = document.getElementById("yeheyyy");
  let yeheyyyBear = document.getElementById("yeheyyy-bear");

  happyBear.style.display = "none";
  angryBear.style.display = "none";
  noButton.style.display = "none";
  yesButton.style.display = "none";
  valentineBear.style.display = "none";
  headerQuestion.style.display = "none";
  yeheyyy.style.display = "block";
  yeheyyyBear.style.display = "block";
}
