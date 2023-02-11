let container = document.getElementById("EventContainer");
let cMove = document.getElementById("c");
let aMove = document.getElementById("a");
let pMove = document.getElementById("p");
let phoneNavBarExt = document.getElementById("phoneNavBarExt");
let navBarSpaceDiv = document.getElementById("navBarSpaceDiv");
let phoneMenu = document.getElementById("menu");
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
let sportsExp = document.querySelector(".sportsExp");
let maxWidth = 0.0;
let all = document.getElementById("all");
let allSports = document.getElementById("allSports");
let infoDropDown = document.getElementById("infoDropDown");
let infoPage = document.getElementById("name");
let discoveryBanner = document.getElementById("discoveryBanner");
let fall = document.getElementById("fall");
let fallExp = document.getElementById("fallExp");
let sports = document.getElementById("sports");
let expanded = document.getElementById("Expanded");
let ExpandedText = document.querySelectorAll("#Expanded h2");
let phonenavbarItem = document.querySelector("#phonenavbar h2");
let light = true;
let oneDropDown = document.getElementById("oneDrop");
let twoDropDown = document.getElementById("twoDrop");
let threeDropDown = document.getElementById("threeDrop");
let dark = false;
let extDropDown = document.getElementById("extDropDown");
let discoverBannerStop = document.querySelector("#discoverBanner h2");
let mainItems = [eventMain, signInMain, spotlightMain, nameMain];
let maxHeight = 0.0;
let myAccount = document.getElementById("signIn");
let phone_home = document.getElementById("phone_home");
let phone_spotlight = document.getElementById("phone_spotlight");
let phone_events = document.getElementById("phone_events");
let phone_signIn = document.getElementById("phone_signIn");
let phone_all_sports = document.getElementById("phone_all_sports");
let phone_fall_sports = document.getElementById("phone_fall_sports");
let phone_spring_sports = document.getElementById("phone_spring_sports");
let phone_winter_sports = document.getElementById("phone_winter_sports");
let phone_sports = document.getElementById("phone_sports");
let phone_school = document.getElementById("phone_school");
let phone_all = document.getElementById("phone_all");
let signInExp=document.getElementById("expSignIn");
let settingsExp=document.getElementById("expSettings");
let createAccountExp=document.getElementById("expCreateAccount");
let myAccountMenu=[signInExp, settingsExp, createAccountExp];
let phone_fall_crossCountry = document.getElementById(
  "phone_fall_crossCountry"
);
let phone_fall_football = document.getElementById("phone_fall_football");
let phone_fall_soccer = document.getElementById("phone_fall_soccer");
let phone_fall_tennis = document.getElementById("phone_fall_tennis");
let phone_fall_volleyball = document.getElementById("phone_fall_volleyball");
let phone_fall_cheer = document.getElementById("phone_fall_cheer");
let phone_fall_all = document.getElementById("phone_fall_all");
let phone_winter_cheer = document.getElementById("phone_winter_cheer");
let phone_winter_basketball = document.getElementById(
  "phone_winter_basketball"
);
let phone_winter_hockey = document.getElementById("phone_winter_hockey");
let phone_winter_indoorTrack = document.getElementById(
  "phone_winter_indoorTrack"
);
let phone_winter_swimming = document.getElementById("phone_winter_swimming");
let phone_winter_wrestling = document.getElementById("phonw_winter_wrestling");
let phone_winter_all = document.getElementById("phone_winter_all");
let phone_spring_baseball = document.getElementById("phone_spring_baseball");
let phone_spring_lacrosse = document.getElementById("phone_spring_lacrosse");
let phone_spring_softball = document.getElementById("phone_spring_softball");
let phone_spring_tennis = document.getElementById("phone_spring_tennis");
let phone_spring_track = document.getElementById("phone_spring_track");
let phone_spring_volleyball = document.getElementById(
  "phone_spring_volleyball"
);
let phone_spring_football = document.getElementById("phone_spring_football");
let phone_select_season = [
  phone_fall_sports,
  phone_spring_sports,
  phone_winter_sports,
  phone_all_sports,
];
let first_phone_containter = [
  phone_home,
  phone_spotlight,
  phone_events,
  phone_signIn,
];
let phone_select_event = [phone_sports, phone_school, phone_all];
let phone_select_fall = [
  phone_fall_crossCountry,
  phone_fall_football,
  phone_fall_soccer,
  phone_fall_tennis,
  phone_fall_volleyball,
  phone_fall_cheer,
  phone_fall_all,
];
let phone_select_winter = [
  phone_winter_cheer,
  phone_winter_basketball,
  phone_winter_hockey,
  phone_winter_indoorTrack,
  phone_winter_swimming,
  phone_winter_wrestling,
  phone_winter_all,
];
let phone_select_spring = [
  phone_spring_baseball,
  phone_spring_lacrosse,
  phone_spring_tennis,
  phone_spring_softball,
  phone_spring_tennis,
  phone_spring_track,
  phone_spring_volleyball,
  phone_spring_football,
];
class phoneMenuObj {
  constructor(idName) {
    this.idName = idName;
  }
  getId() {
    return this.idName;
  }
  nextOperation() {}
}
class phoneMenuEndpoint {
  constructor(hrefValue) {
    this.hrefValue = hrefValue;
  }
  nextOperation() {
    window.location.href = this.hrefValue + ".html";
  }
}
phone_spotlight.onclick = function () {
  console.log("clicked spotlight");
};
discoverBannerStop.style.opacity = "0"; //Banner-Height: -87, award height=90% of maxheight
navbar.style.borderBottomLeftRadius = "300px";
navbar.style.borderBottomRightRadius = "300px";
let moveItems = [cMove, aMove, pMove];
let foundHeight = false;
let spotlights = document.querySelectorAll("#newSpotlight");
const States = {
  homePage: true,
  firstDrop: false,
  secondDrop: false,
  thirdDrop: false,
};

window.addEventListener("load", function () {
  for (let i = 0; i < 6000; i++) {
    if (window.matchMedia("(min-width: " + i + "px)").matches) {
      maxWidth = i;
    }
  }
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-height: " + i + "px)").matches) {
      maxHeight = i;
    }
  }
  if (maxWidth > 600) {
    for (let j = 0; j < spotlights.length; j++) {
      spotlights[j].style.height = maxHeight - 87 - 40 + "px";
    }
  } else {
    for (let j = 0; j < spotlights.length; j++) {
      spotlights[j].style.height = maxHeight - 53 - 50 + "px";
    }
  }
  for (let i = 0.0; i < mainItems.length; i++) {
    mainItems[i].style.transform = "translateY(-75px)";
    mainItems[i].style.transition =
      "opacity " + ((i * 2) / 1) * 0.63 + "s, transform 10s";
    mainItems[i].style.opacity = "0";
    mainItems[i].disabled = true;
  }
  moveHat(true);
  logo.style.transition = "transform 5s";
  discoverBannerStop.style.opacity = "1";
  discoverBannerStop.style.transition =
    "opacity 3s, transform 3s, background 12s";
  discoverBannerStop.style.transform = "translateY(130px)";
  mainContainer.style.background = "none";
  discoverBannerStop.innerHTML =
    'Spotlight the <span class="auto-type"></span>of Clifton';
  var typed = new Typed(".auto-type", {
    strings: ["Athletes", "Students", "Heart"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false,
    startDelay: 2500,
    showCursor: true,
    onComplete: (self) => {
      setTimeout(function () {
        self.cursor.remove();
        discoverBannerStop.innerHTML = "Spotlight the Heart of Clifton";
        delete self;
      }, 1300);
    },
  });
});
DarkMode.onclick = function () {
  if (document.querySelector(".slider")) {
    lightFunction();
  }
  if (document.querySelector("input:checked + .slider")) {
    darkFunction();
  }
};
allSports.onclick = function () {
  window.location.href = "index.html";
  // save the selection in cookies, make api call
};
all.onclick = function () {
  window.location.href = "index.html";
  // save the selection in cookies, make api call
};
myAccount.onclick = function () {
  moveHat(true);
  for (let i = 0.0; i < mainItems.length; i++) {
    mainItems[i].style.transform = "translateY(-75px)";
    mainItems[i].style.transition =
      "opacity " + ((i * 2) / 1) * 0.63 + "s, transform 10s";
    mainItems[i].style.opacity = "0";
    mainItems[i].disabled = true;
  }
  for (let i = 0.0; i < myAccountMenu.length; i++) {
    myAccountMenu[i].style.transform = "translateY(75px)";
    myAccountMenu[i].style.transition =
      "opacity " + ((i * 2) / 1) * 0.63 + "s, transform 10s";
    myAccountMenu[i].style.opacity = "1";
  }
};

if (States.homePage) {
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
  };
  spotlightMain.onclick = function () {
    window.location.href = "spotlight.html";
  };
  States.homePage = false;
}
logo.onclick = function () {
  if (States.homePage == false) {
    discoverBannerStop.style.transition = "transform 6s, opacity 3s";
    discoverBannerStop.style.opacity = "0";
    discoverBannerStop.style.transform = "translateY(-130px)";
    expanded.style.transform = "translateY(-75px)";
    expanded.style.opacity = "0";
    expanded.style.transition = "opacity 5s, transform 6s, background 12s";
    for (let i = 0; i < mainItems.length; i++) {
      mainItems[i].style.opacity = "1";
      mainItems[i].style.transition = "opacity 5s, transform 4s";
      moveHat(false);
      mainItems[i].style.transform = "none";
    }
  }
};
fall.onclick = function () {
  fallExp.style.transition = "transform 3s, opacity 2s";
  fallExp.style.transform = "none";
  fallExp.style.opacity = "1";
  sportsExp.style.transform = "translateY(60px)";
  setTimeout(function () {
    sportsExp.style.transform = "translateY(-45px)";
  }, 3000);
  sportsExp.style.opacity = "0";
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
sports.onclick = function () {
  sportsExp.style.transition = "opacity 4s, transform 4s";
  sportsExp.style.opacity = "1";
  sportsExp.style.transform = "translateY(-18px)";
  expanded.style.transition = "opacity 2s, transform 4s";
  expanded.style.transform = "translateY(-70px)";
  expanded.style.opacity = "0";
  mainContainer.style.zIndex = "0";
  // expanded.style.zIndex="10";
};
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
infoPage.onclick = function () {
  for (let i = 0.0; i < mainItems.length; i++) {
    mainItems[i].style.transform = "translateY(-75px)";
    mainItems[i].style.transition =
      "opacity " + ((i * 2) / 1) * 0.63 + "s, transform 10s";
    mainItems[i].style.opacity = "0";
    mainItems[i].disabled = true;
  }
  moveHat(true);
  logo.style.transition = "transform 5s";
  infoDropDown.style.transition = "transform 3s";
  infoDropDown.style.transform = "translateY(-115px)";
  infoDropDown.style.transition = "justify-content=5s";
  cMove.style.marginLeft = "45%";

  setTimeout(function () {
    cMove.style.marginLeft = "27%";
    for (let i = 0; i < moveItems.length; i++) {
      moveItems[i].style.transition = "5s";
      moveItems[i].style.marginRight = "20%";
    }
  }, 4000);
  setTimeout(function () {
    extDropDown.style.transition = "transform 4s";
    extDropDown.style.transform = "translateY(-186px)";
  }, 6000);
  setTimeout(function () {
    for (let i = 0; i < moveItems.length; i++) {
      moveItems[i].style.transition = "3s";
      moveItems[i].style.marginRight = "7%";
    }
    cMove.style.marginLeft = "35%";
    oneDropDown.style.marginLeft = "40%";
    oneDropDown.style.marginRight = "2%";
    twoDropDown.style.marginRight = "2%";
    threeDropDown.style.marginRight = "2%";
  }, 10000);
};
function expandNavBar() {
  mainContainer.style.width = "100%";
}
popInPhoneMenu(first_phone_containter);
phoneMenu.onclick = function () {
  popOutPhoneMenu(first_phone_containter);
  popInPhoneMenu(phone_select_season);
};
//make the shits pop out at different times, to make a cascading effect=).
function popInPhoneMenu(directory) {
  let transitionTime;
  for (let i = 0; i < directory.length; i++) {
    switch (i) {
      case 0:
        transitionTime = 0.8;
        directory[i].style.marginTop = "60px";
        break;
      case 1:
        transitionTime = 1.7;
        break;
      case 2:
        transitionTime = 3.2;
        break;
      case 3:
        transitionTime = 5;
        break;
      default:
        transitionTime = 3;
        break;
    }
    directory[i].style.transition = "all " + transitionTime + "s";
    directory[i].style.transform = "none";
  }
}
function popOutPhoneMenu(directory) {
  //possible reverse transition speed so that the first element is slower and the last is faster
  for (let i = 0; i < directory.length; i++) {
    for (let i = 0; i < directory.length; i++) {
      switch (i) {
        case 0:
          transitionTime = 0.8;
          directory[i].style.marginTop = "20px";
          break;
        case 1:
          transitionTime = 1.7;
          break;
        case 2:
          transitionTime = 3.2;
          break;
        case 3:
          transitionTime = 5;
          break;
        default:
          transitionTime = 3;
          break;
      }
      directory[i].style.transition = "all " + transitionTime + "s";
      directory[i].style.transform = "translateX(110%)";
    }
  }
}
