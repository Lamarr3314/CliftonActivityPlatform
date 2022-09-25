let container = document.getElementById("EventContainer");
let DarkMode = document.getElementById("DarkMode");
let sportsDropDown = document.getElementById("SportsGames");
let eventsDropDown = document.getElementById("events");
let navbar = document.getElementById("navbar");
let navbarItems = document.querySelectorAll("#navbar h2");
let phonenavbar = document.getElementById("phonenavbar");
let phonenavbarItem = document.querySelector("#phonenavbar h2");
let light = true;
let dark = false;
window.addEventListener("load", function () {
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "@Ridgewood"
  );
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "@Ridgewood"
  );
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "@Ridgewood"
  );
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "@Ridgewood"
  );
});
DarkMode.onclick = function () {
  if (document.querySelector(".slider")) {
    lightFunction();
  }
  if (document.querySelector("input:checked + .slider")) {
    darkFunction();
  }
};
sportsDropDown.onmouseover = function () {
  eventsDropDown.style.display = "flex";
};
function newGame(
  sport,
  team1_name,
  team1_score,
  team2_name,
  team2_score,
  info_date,
  info_time,
  info_location
) {
  let sportsEvent = document.createElement("div");
  sportsEvent.id = "SportsEvent";
  sport = document.createElement("div");
  sport.id = "sport";
  sport.innerHTML = "Girls Football";
  let teams = document.createElement("div");
  teams.id = "teams";
  let team1 = document.createElement("div");
  team1.id = "team1";
  team1_name = document.createElement("h1");
  team1_name.innerHTML = "Clifton";
  team1_score = document.createElement("h2");
  team1_score.innerHTML = "40";
  let team2 = document.createElement("div");
  team2_name = document.createElement("h1");
  team2_name.innerHTML = "Bergen Tech";
  team2_score = document.createElement("h2");
  team2_score.innerHTML = "32";
  team1.appendChild(team1_name);
  team1.appendChild(team1_score);
  team2.appendChild(team2_name);
  team2.appendChild(team2_score);
  team2.id = "team2";
  let information = document.createElement("div");
  information.id = "information";
  info_date = document.createElement("p");
  info_date.innerHTML = "9/17";
  info_time = document.createElement("p");
  info_time.innerHTML = "5PM";
  info_location = document.createElement("p");
  info_location.innerHTML = "@Home";
  information.appendChild(info_date);
  information.appendChild(info_time);
  information.appendChild(info_location);
  teams.appendChild(team1);
  teams.appendChild(team2);

  sportsEvent.appendChild(sport);
  sportsEvent.appendChild(teams);
  container.appendChild(sportsEvent);
  sportsEvent.appendChild(information);
}
function lightFunction() {
  document.body.style.backgroundColor = "#dbc7a6de";
  navbar.style.backgroundColor = "#dbc7a6de";
  phonenavbar.style.backgroundColor = "#dbc7a6de";
  phonenavbarItem.style.color="black";
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].style.color = "black";
  }
}
function darkFunction() {
  document.body.style.backgroundColor = "black";
  navbar.style.backgroundColor = "black";
  phonenavbarItem.style.color="#c54211";
  phonenavbar.style.backgroundColor = "black";
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].style.color = "#c54211";
  }
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].onmouseover = function () {
      navbarItems[i].style.color = "black";
    };
    navbarItems[i].onmouseout = function () {
      if (document.querySelector("input:checked + .slider")) {
        navbarItems[i].style.color = "#c54211";
      } else {
        navbarItems[i].style.color = "black";
      }
    };
  }

}
