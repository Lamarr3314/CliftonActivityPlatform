let container = document.getElementById("EventContainer");
let DarkMode = document.getElementById("DarkMode");
let sportsDropDown = document.getElementById("SportsGames");
let eventsDropDown = document.getElementById("events");
let eventMain = document.getElementById("event");
let signInMain = document.getElementById("signIn");
let logo = document.getElementById("logo");
let spotlightMain = document.getElementById("spotlight");
let nameMain = document.getElementById("name");
let navbar = document.getElementById("navbar");
let placeHolder = document.getElementById("placeHolder");
let mainContainer = document.getElementById("main");
let navbarItems = document.querySelectorAll("#navbar h2");
let phonenavbar = document.getElementById("phonenavbar");
let maxWidth = 0.0;
let expanded = document.getElementById("Expanded");
let ExpandedText = document.querySelectorAll("#Expanded h2");
let phonenavbarItem = document.querySelector("#phonenavbar h2");
let light = true;
let dark = false;
let mainItems = [eventMain, signInMain, spotlightMain, nameMain];
let throughFirst = false;
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

  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-width: " + i + "px)").matches) {
      maxWidth = i;
    }
  }
});
DarkMode.onclick = function () {
  if (document.querySelector(".slider")) {
    lightFunction();
  }
  if (document.querySelector("input:checked + .slider")) {
    darkFunction();
  }
};
if (!throughFirst) {
  eventMain.onclick = function () {
    for (let i = 0.0; i < mainItems.length; i++) {
      mainItems[i].style.transform = "translateY(-75px)";
      mainItems[i].style.transition =
        "opacity " + ((i * 2) / 1) * 0.63 + "s, transform 10s";
      mainItems[i].style.opacity = "0";
      mainItems[i].disabled = true;
    }
    moveHat(true);
    logo.style.transition = "transform 5s";
    expanded.style.transition = "opacity 6s, background 5s";
    expanded.style.opacity = "1";
    expanded.style.transition = "opacity 4s, transform 6s, background 12s";
    expanded.style.transform = "translateY(-2px)";
    mainContainer.style.background = "none";
    throughFirst = true;
    navbar.style.backgroundColor = "#dbc7a6de";
    navbar.style.borderBottomLeftRadius = "300px";
    navbar.style.borderBottomRightRadius = "300px";
    setTimeout(function () {
      for (let i = 0.0; i < mainItems.length; i++) {
        mainItems[i].style.display = "none";
      }
    }, 5500);
  };
}
logo.onclick = function () {
  if (throughFirst) {
    expanded.style.transform = "translateY(-75px)";
    expanded.style.opacity = "0";
    expanded.style.transition = "opacity 5s, transform 6s, background 12s";
    mainContainer.style.background = "#dbc7a6de";
    for (let i = 0; i < mainItems.length; i++) {
      mainItems[i].style.opacity = "1";
      mainItems[i].style.transition = "opacity 5s, transform 4s";
      moveHat(false);
      mainItems[i].style.transform = "none";
    }
  }
};
for (let i = 0; i < mainItems.length; i++) {
  mainItems[i].onmouseover = function () {
    mainItems[i].style.transition = "opacity 5s, transform .2s";
    mainItems[i].style.transform = "rotate(5deg)";
  };
  mainItems[i].onmouseout = function () {
    mainItems[i].style.transform = "none";
  };
}
for (let p = 0; p < ExpandedText.length; p++) {
  ExpandedText[p].onmouseover = function () {
    ExpandedText[p].style.transition = "opacity 5s, transform .2s";
    ExpandedText[p].style.backgroundColor = "red";
    ExpandedText[p].style.transform = "rotate(5deg)";
  };
  ExpandedText[p].onmouseout = function () {
    ExpandedText[p].style.transform = "none";
  };
}
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
  phonenavbarItem.style.color = "black";
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].style.color = "black";
  }
}
function moveHat(forward) {
  if (forward) {
    logo.style.transform =
      "translateX(-" +
      (parseInt(maxWidth - 1000) + 450 - (maxWidth - 1000) / 2.25) +
      "%)";
  } else {
    logo.style.transform = "none";
  }
}
function turnHat() {
  logo.style.transform = "rotate(360deg)";
}
function darkFunction() {
  document.body.style.backgroundColor = "black";
  navbar.style.backgroundColor = "black";
  phonenavbarItem.style.color = "#c54211";
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
