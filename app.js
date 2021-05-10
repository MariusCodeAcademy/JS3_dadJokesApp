"use strict"; // here we go again

const dummyJokeLine = "How do you make holy water?";
const dummyJokePunch = "You boil the hell out of it";

// 1 susikurti html musu app

// 2  pasirasom css

// 3 isitraukiam reikalingus el i js
const el = {
  cat: document.querySelector(".cat"),
  sentence: document.querySelector(".sentence"),
  punchline: document.querySelector(".punchline"),
  punchBtn: document.getElementById("punch"),
  nextJoke: document.getElementById("nextJoke"),
};

el.punchBtn.addEventListener("click", punchLineHandler);
el.nextJoke.addEventListener("click", nextJokeHandler);

function punchLineHandler() {
  console.log("punch was pressed");
  showPunchLine();
}

function nextJokeHandler() {
  // loadNextJoke()
  hidePunchLine();
}

function showPunchLine() {
  el.punchline.classList.add("open");
}
function hidePunchLine() {
  el.punchline.classList.remove("open");
}

function init() {
  el.sentence.innerHTML = dummyJokeLine;
  el.punchline.innerHTML = dummyJokePunch;
}

init();

// 4 paadarom kad uzkrovus psl mes matom savo klausima ir mygtukus
// paspaudus mygutka "Punch" pasirodo buves pasleptas punchline sakinys

// 5 paspaudus mygtuka "Next Joke" is naujo matosi tik klausiamasis sakinys;
