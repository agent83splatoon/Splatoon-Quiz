// Quiz

// Event Listener
document.getElementById("btn").addEventListener("click", btnPressed);

//Function

function btnPressed() {
  let answer1 = document.getElementById("questionone-in").value.toLowerCase();
  let answer2 = document.getElementById("questiontwo-in").value.toLowerCase();
  let answer3 = document.getElementById("questionthree-in").value.toLowerCase();
  let answer4 = document.getElementById("questionfour-in").value.toLowerCase();
  let answer5 = document.getElementById("questionfive-in").value.toLowerCase();
  let points = 0;
  let output = document.getElementById("results");
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
  console.log(answer5);

  // Incorrect or Correct
  if (answer1 === "squids") {
    document.getElementById(
      "inputone"
    ).innerHTML = `<p id="inputone"> Answer: <input id="questionone-in" ${answer1} /> Correct </p>`;
    points = points + 20;
  } else {
    document.getElementById(
      "inputone"
    ).innerHTML = `<p id ="inputone"> Answer: <input id="questionone-in" ${answer1} /> Incorrect </p>`;
  }
  if (answer2 === "agent 3" || answer2 === "agent three") {
    document.getElementById(
      "inputtwo"
    ).innerHTML = `<p id ="inputtwo"> Answer: <input id="questiontwo-in" ${answer2} /> Correct </p>`;
    points = points + 20;
  } else {
    document.getElementById(
      "inputtwo"
    ).innerHTML = `<p id="inputtwo"> Answer: <input id="questiontwo-in" ${answer2} /> Incorrect </p>`;
  }
  if (answer3 === "tri slosher" || answer3 === "tri-slosher") {
    document.getElementById(
      "inputthree"
    ).innerHTML = `<p class="inputthree"> Answer: <input id="questionthree-in" ${answer3} /> Correct </p>`;
    points = points + 20;
  } else {
    document.getElementById(
      "inputthree"
    ).innerHTML = `<p id ="inputthree"> Answer: <input id="questionthree-in" ${answer3} /> Incorrect </p>`;
  }

  if (
    answer4 === "kraken" ||
    answer4 === "bomb rush" ||
    answer4 === "splashdown" ||
    answer4 === "bomb launcher" ||
    answer4 === "bubbler"
  ) {
    document.getElementById(
      "inputfour"
    ).innerHTML = `<p id="inputfour"> Answer: <input id="questionfour-in" ${answer4} /> Correct </p>`;
    points = points + 20;
  } else {
    document.getElementById(
      "inputfour"
    ).innerHTML = `<p id="inputfour"> Answer: <input id="questionfour-in" ${answer4} /> Incorrect </p>`;
  }

  if (answer5 === "deep cut") {
    document.getElementById(
      "inputfive"
    ).innerHTML = `<p id="inputfive"> <input id="questionfive-in" ${answer5} /> Correct </p>`;
    points = points + 20;
  } else {
    document.getElementById(
      "inputfive"
    ).innerHTML = `<p id="inputfive"> Answer: <input id="questionfive-in" ${answer5}/> Incorrect </p>`;
  }

  // Score Caluclations
  console.log(points);
  if (points === 100) {
    document.getElementById(
      "results"
    ).innerHTML = `<p> Your score: 5/5 (100%) </p>
  <p> Amazing job! You know a lot! </p>`;
  } else if (points === 80) {
    document.getElementById(
      "results"
    ).innerHTML = `<p> Your score: 4/5 (80%) </p>
<p> Great job! </p>`;
  } else if (points === 60) {
    document.getElementById(
      "results"
    ).innerHTML = `<p> Your score: 3/5 (60%) </p>
    <p> Not bad... You need to learn a little more. </p>`;
  } else if (points === 40) {
    document.getElementById(
      "results"
    ).innerHTML = `<p> Your score: 2/5 (40%) </p>
    <p> You really need to know more. </p>`;
  } else if (points === 20) {
    document.getElementById(
      "results"
    ).innerHTML = `<p> Your score: 1/5 (20%) </p>
    <p> Try harder, and maybe you'll succeed, or you just need to learn more about this stuff. </p>`;
  } else {
    document.getElementById(
      "results"
    ).innerHTML = `<p> Your score: 0/5 (0%) </p>
    <p> None correct... But it's okay. Failure is a part of success!`;
  }
}
