let container = document.getElementById("EventContainer");
let cMove = document.getElementById("c");
let aMove = document.getElementById("a");
let spefSportContainer;
let spefSeasonContainer;
let spefGenderContainer;
let selectSeasonContainer;
let minWidth;
let selectGenderContainer;
let trackProgressSport = false;
let pressedEvent = false;
let spefGenderh2;
let currSelectedSport;
let spefGenderText;
let spefSporth2;
let spefSeasonh2;
let spefSportText;
let addedElements = false;
let selectSportContainer;
let school_checkbox;
let sport_checkbox;
let pMove = document.getElementById("p");
let DarkMode = document.getElementById("DarkMode");
let sportsDropDown = document.getElementById("SportsGames");
let eventsDropDown = document.getElementById("events");
let eventMain = document.getElementById("event");
let signInMain = document.getElementById("signIn");
let logo = document.getElementById("logo");
let spotlightMain = document.getElementById("spotlight");
let nameMain = document.getElementById("name");
let navbar = document.getElementById("navbar");
let fillOutEvent = document.getElementById("addEvent");
let addedEvent = false;
let placeHolder = document.getElementById("placeHolder");
let mainContainer = document.getElementById("main");
let navbarItems = document.querySelectorAll("#navbar h2");
let phonenavbar = document.getElementById("phonenavbar");
let sportsExp = document.querySelector(".sportsExp");
let maxWidth = 0.0;
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
let addEventButton = document.getElementById("addIcon");
let extDropDown = document.getElementById("extDropDown");
let discoverBannerStop = document.querySelector("#discoverBanner h2");
let mainItems = [eventMain, signInMain, spotlightMain, nameMain];
discoverBannerStop.style.opacity = "0";
navbar.style.borderBottomLeftRadius = "300px";
navbar.style.borderBottomRightRadius = "300px";
class Sport {
  constructor(ScreenName, DatabaseName) {
    this.ScreenName = ScreenName;
    this.DatabaseName = DatabaseName;
  }
  getDatabaseName(gender) {
    return this.DatabaseName;
  }
  getGenders() {
    let list = [];
    if (this.DatabaseName[0] == "m") {
      list = ["Male"];
    } else {
      list = ["Female"];
    }
    return list;
  }
}
class Season {
  constructor(ScreenName, DatabaseName, list) {
    this.ScreenName = ScreenName;
    this.DatabaseName = DatabaseName;
    this.list = list;
  }
}
class mixedGender extends Sport {
  constructor(ScreenName, DatabaseName) {
    super(ScreenName, DatabaseName);
  }
  getDatabaseName(gender) {
    return gender.toLowerCase() + this.DatabaseName;
  }
  getGenders() {
    return ["Male", "Female"];
  }
}
let moveItems = [cMove, aMove, pMove];
let mBaseball = new Sport("Baseball", "male_baseball");
let fSoftball = new Sport("Softball", "female_baseball");
let mTennis = new Sport("Tennis", "male_tennis");
let fFootball = new Sport("Football", "female_football");
let Track = new mixedGender("Track", "_track");
let mVolleyball = new Sport("Volleyball", "male_volleyball");
let Hockey = new mixedGender("Hockey", "_hockey");
let Wrestling = new mixedGender("Wrestling", "_wrestling");
let Swimming = new mixedGender("Swimming", "_swimming");
let Basketball = new mixedGender("Basketball", "_volleyball");
let XC = new mixedGender("XC", "_xc");
let Soccer = new mixedGender("Soccer", "_soccer");
let fTennis = new Sport("Tennis", "female_tennis");
let mFootball = new Sport("Football", "male_football");
let gVolleyball = new Sport("Volleyball", "female_volleyball");
let winterSports = new Season("Winter", "winter", [
  Basketball,
  Hockey,
  Wrestling,
  Swimming,
]);
let fallSports = new Season("Fall", "fall", [
  XC,
  mFootball,
  Soccer,
  fTennis,
  gVolleyball,
]);
let springSports = new Season("Spring", "spring", [
  mBaseball,
  fSoftball,
  mTennis,
  mVolleyball,
  fFootball,
  Track,
]);
let seasons = [springSports, winterSports, fallSports];
const States = {
  homePage: true,
  firstDrop: false,
  secondDrop: false,
  thirdDrop: false,
};
window.addEventListener("load", function () {
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-width: " + i + "px)").matches) {
      maxWidth = i;
    }
  }
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-height: " + i + "px)").matches) {
      maxHeight = i;
    }
  }
  for (let i = 0.0; i < mainItems.length; i++) {
    mainItems[i].style.transition = "opacity .1s";
    mainItems[i].style.opacity = "0";
  }
  mainContainer.style.width = "100px";
  newGame(
    "Boys Volleyball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "Ridgewood"
  );
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "Ridgewood"
  );
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "3PM",
    "Ridgewood"
  );
  newGame(
    "Boys Basketball",
    "Clifton",
    32,
    "Montclair",
    25,
    "9/18",
    "6PM",
    "Ridgewood"
  );
  for (let i = 0; i < 10000; i++) {
    if (window.matchMedia("(min-width: " + i + "px)").matches) {
      maxWidth = i;
    }
  }
  setTimeout(function () {
    mainContainer.style.justifyContent = "space-around";
    for (let i = 0.0; i < mainItems.length; i++) {
      mainItems[i].style.transition = "opacity 9s";
      mainItems[i].style.opacity = "1";
    }
    expandNavBar();
  }, 150);
});
DarkMode.onclick = function () {
  if (document.querySelector(".slider")) {
    lightFunction();
  }
  if (document.querySelector("input:checked + .slider")) {
    darkFunction();
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
    console.log(States.homePage);
    States.homePage = false;
  };
}
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
function newEvent() {}
function newGame(
  usr_sport,
  usr_team1_name,
  usr_team1_score,
  usr_team2_name,
  usr_team2_score,
  usr_info_date,
  usr_info_time,
  usr_info_location
) {
  let sportsEvent = document.createElement("div");
  sportsEvent.id = "SportsEvent";
  let sport = document.createElement("div");
  sport.id = "sport";
  sport.innerHTML = "" + usr_sport;
  let teams = document.createElement("div");
  teams.id = "teams";
  let team1 = document.createElement("div");
  team1.id = "team1";
  let team1_name = document.createElement("h1");
  team1_name.innerHTML = "" + usr_team1_name;
  let team1_score = document.createElement("h2");
  team1_score.innerHTML = "" + usr_team1_score;
  let team2 = document.createElement("div");
  let team2_name = document.createElement("h1");
  team2_name.innerHTML = "" + usr_team2_name;
  let team2_score = document.createElement("h2");
  team2_score.innerHTML = "" + usr_team2_score;
  team1.appendChild(team1_name);
  team1.appendChild(team1_score);
  team2.appendChild(team2_name);
  team2.appendChild(team2_score);
  team2.id = "team2";
  let information = document.createElement("div");
  information.id = "information";
  let info_date = document.createElement("p");
  info_date.innerHTML = "" + usr_info_date;
  let info_time = document.createElement("p");
  info_time.innerHTML = "" + usr_info_time;
  let info_location = document.createElement("p");
  info_location.innerHTML = "@" + usr_info_location;
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
addEventButton.onclick = function () {
  addEventButton.style.transition = "all 3s";
  addEventButton.style.transform = "rotate(360deg)";
  addEvent();
};
function addEvent() {
  // all of the code, where the box is expanded and the text boxes are open, so the user can fill out all of the fields.
  // a calendar is dropped down as well to add the event.

  let selectEventContainer = document.createElement("div");
  selectEventContainer.id = "selectEventContainer";

  let selectSchool = document.createElement("div");
  selectSchool.id = "selectSchool";
  selectSchool.innerHTML =
    '<div id="selectSchoolDiv"><input type="checkbox" id="school_checkbox" onclick="selectSchool()">  <label  id="schoolCheck"for="school_checkbox"> <div id="tick_mark"></div>  </label></div>';
  let schoolCheckLabel = document.createElement("h2");
  schoolCheckLabel.innerHTML = "School Event";
  let schoolCheckLabelDiv = document.createElement("div");
  schoolCheckLabelDiv.id = "SchoolCheckLabelDiv";
  schoolCheckLabelDiv.appendChild(schoolCheckLabel);
  selectSchool.appendChild(schoolCheckLabelDiv);

  let selectSport = document.createElement("div");
  selectSport.id = "selectSport";
  selectSport.innerHTML =
    '<div id="selectSportDiv"><input type="checkbox" id="sport_checkbox" onclick="selectSport()">  <label  id="sportCheck"for="sport_checkbox"> <div id="tick_mark2"></div>  </label></div>';
  let sportCheckLabel = document.createElement("h2");
  sportCheckLabel.innerHTML = "Sport Event";
  let sportCheckLabelDiv = document.createElement("div");
  sportCheckLabelDiv.id = "SportCheckLabelDiv";
  sportCheckLabelDiv.appendChild(sportCheckLabel);
  selectSport.appendChild(sportCheckLabelDiv);
  selectEventContainer.appendChild(selectSport);
  selectEventContainer.appendChild(selectSchool);

  fillOutEvent.appendChild(selectEventContainer);
  school_checkbox = document.getElementById("school_checkbox");
  sport_checkbox = document.getElementById("sport_checkbox");
}

function selectSport() {
  if (sport_checkbox.checked) {
    school_checkbox.checked = false;
    fillNewSport();
  }
}
function selectSchool() {
  if (school_checkbox.checked) {
    sport_checkbox.checked = false;
    fillSchoolEvent();
  }
}
function fillNewSport() {
  selectSeasonSetup();
}
function selectGenderSetup(sport) {
  selectGenderContainer = document.createElement("div");
  selectGenderContainer.id = "selectGenderContainer";
  spefGenderContainer = document.createElement("div");
  fillOutEvent.appendChild(selectGenderContainer);
  spefGenderText = document.createElement("div");
  spefGenderText.id = "spefGenderText";
  spefGenderh2 = document.createElement("h2");
  spefGenderh2.innerHTML = "Select Gender";
  spefGenderText.appendChild(spefGenderh2);
  selectGenderContainer.appendChild(spefGenderText);
  spefGenderContainer.id = "selectGenderContainer";
  let genderList = sport.getGenders();
  for (let i = 0; i < genderList.length; i++) {
    selectGenderFunction(genderList[i]);
    document.getElementById("" + genderList[i]).onclick = function () {
      processStep1(sport.getDatabaseName(genderList[i]), true);
    };
  }
}
function processStep1(databaseAddress, defaultSetup) {
  if (defaultSetup) {
    deleteExcess();
    startStep2(databaseAddress);
  }
  return databaseAddress;
}
function startStep2(databaseAddress) {
  addCalendar();
  inputName();
  inputTime();
  inputMessage(databaseAddress);
  submitEvent();
}
function submitEvent() {
  let submitEvent = document.createElement("button");
  let submitEventDiv = document.createElement("div");
  submitEventDiv.id = "submitEventDiv";
  submitEvent.id = "submitEvent";
  submitEvent.innerHTML = "Post Event";
  submitEventDiv.appendChild(submitEvent);
  fillOutEvent.appendChild(submitEventDiv);
  addGameToDatabase("game");
}
function addGameToDatabase(game) {
  console.log("added to Database");
}
function inputTime() {
  let timeTitle = document.createElement("div");
  timeTitle.id = "timeTitle";
  let timeTitleh2 = document.createElement("h2");
  timeTitleh2.id = "timeTitleh2";
  timeTitleh2.innerHTML = "Input Time";
  timeTitle.appendChild(timeTitleh2);
  fillOutEvent.appendChild(timeTitle);
  let timeContainer = document.createElement("div");
  timeContainer.id = "timeContainer";
  let timeInput = document.createElement("input");
  timeInput.type = "time";
  timeInput.id = "timeInput";
  timeContainer.appendChild(timeInput);
  fillOutEvent.appendChild(timeContainer);
}
function inputMessage(databaseAddress) {
  let inputMessageTitle = document.createElement("div");
  inputMessageTitle.id = "inputMessageTitle";
  let inputMessageh2 = document.createElement("h2");
  inputMessageh2.id = "inputMessageh2";
  inputMessageh2.innerHTML = "Add a Message";
  let inputMessage = document.createElement("input");
  inputMessage.id = "inputMessage";
  let name=databaseAddress.split("_");
  inputMessage.value = "Come out and support our " + name[1] + " team!";
  let inputMessageDiv = document.createElement("div");
  inputMessageDiv.id = "inputMessageDiv";
  inputMessageDiv.appendChild(inputMessage);
  inputMessageTitle.appendChild(inputMessageh2);
  fillOutEvent.appendChild(inputMessageTitle);
  fillOutEvent.appendChild(inputMessageDiv);
}
function addCalendar() {
  let selectDateContainer = document.createElement("div");
  selectDateContainer.id = "selectDateContainer";
  let selectDateh2Container = document.createElement("div");
  selectDateh2Container.id = "selectDateh2Container";
  let selectDateh2 = document.createElement("h2");
  selectDateh2.id = "selectDateh2";
  selectDateh2.innerHTML = "Select Date";
  selectDateh2Container.appendChild(selectDateh2);
  selectDateContainer.appendChild(selectDateh2Container);
  let calendarForm = document.createElement("form");
  calendarForm.id = "calendarForm";
  let calendarLabel = document.createElement("label");
  calendarLabel.id = "calendarLabel";
  let calendar = document.createElement("input");
  calendar.id = "calendar";
  calendar.type = "date";
  calendar.value = "2022-10-11";
  calendar.value.style = "font-family: 'Chakra Petch', sans-serif;";
  calendarLabel.appendChild(calendar);
  calendarForm.appendChild(calendarLabel);
  selectDateContainer.appendChild(calendarForm);
  fillOutEvent.appendChild(selectDateContainer);
}
function inputName() {
  let nameContainer = document.createElement("div");
  nameContainer.id = "nameContainer";
  let nameh2 = document.createElement("h2");
  nameh2.id = "nameh2";
  nameh2.innerHTML = "Game Results";
  nameContainer.appendChild(nameh2);
  fillOutEvent.appendChild(nameContainer);
  let bothTeamContainer = document.createElement("div");
  bothTeamContainer.id = "bothTeamContainer";
  let team1Container = document.createElement("div");
  team1Container.id = "team1Container";
  let team2Container = document.createElement("div");
  team2Container.id = "team2Container";
  let team1Name = document.createElement("input");
  team1Name.id = "team1Name";
  team1Name.type = "text";
  team1Name.value = "Clifton";
  team1Container.appendChild(team1Name);
  let team1Score = document.createElement("input");
  team1Score.id = "team1Score";
  team1Score.type = "text";
  team1Score.value = "0";
  let team1ScoreDiv = document.createElement("div");
  team1ScoreDiv.appendChild(team1Score);
  team1Container.appendChild(team1ScoreDiv);
  let team2Name = document.createElement("input");
  team2Name.id = "team2Name";
  team2Name.type = "text";
  team2Name.value = "Team 2";
  team2Container.appendChild(team2Name);
  let team2Score = document.createElement("input");
  team2Score.type = "text";
  team2Score.id = "team2Score";
  team2Score.value = "0";
  let team2ScoreDiv = document.createElement("div");
  team2ScoreDiv.appendChild(team2Score);
  team2Container.appendChild(team2ScoreDiv);
  bothTeamContainer.appendChild(team1Container);
  bothTeamContainer.appendChild(team2Container);
  fillOutEvent.appendChild(bothTeamContainer);
}
function deleteExcess() {
  document.getElementById("selectEventContainer").style.display = "none";
  document.getElementById("selectSportContainer").style.display = "none";
  document.getElementById("selectGenderContainer").style.display = "none";
  document.getElementById("selectSeasonContainer").style.display = "none";
}
function selectSeasonSetup() {
  selectSeasonContainer = document.createElement("div");
  selectSeasonContainer.id = "selectSeasonContainer";
  spefSeasonContainer = document.createElement("div");
  fillOutEvent.appendChild(selectSeasonContainer);
  spefSeasonText = document.createElement("div");
  spefSeasonText.id = "spefSeasonText";
  spefSeasonh2 = document.createElement("h2");
  spefSeasonh2.innerHTML = "Select Season";
  spefSeasonText.appendChild(spefSeasonh2);
  selectSeasonContainer.appendChild(spefSeasonText);
  spefSeasonContainer.id = "spefSeasonContainer";
  for (let i = 0; i < seasons.length; i++) {
    selectSeasonFunction(seasons[i].ScreenName);
    document.getElementById("" + seasons[i].ScreenName).onclick = function () {
      selectSportSetup(seasons[i]);
    };
  }
}
function selectSportSetup(season) {
  selectSportContainer = document.createElement("div");
  selectSportContainer.id = "selectSportContainer";
  spefSportContainer = document.createElement("div");
  fillOutEvent.appendChild(selectSportContainer);
  spefSportText = document.createElement("div");
  spefSportText.id = "spefSportText";
  spefSporth2 = document.createElement("h2");
  spefSporth2.innerHTML = "Select Sport";
  spefSportText.appendChild(spefSporth2);
  selectSportContainer.appendChild(spefSportText);
  spefSportContainer.id = "spefSportContainer";
  for (let i = 0; i < season.list.length; i++) {
    selectSportFunction(season.list[i].ScreenName);
    document.getElementById("id_" + season.list[i].ScreenName).onclick =
      function () {
        selectGenderSetup(season.list[i]);
      };
  }
}
function selectSeasonFunction(season) {
  let selectSpefSeason = document.createElement("div");
  selectSpefSeason.id = "selectSpefSeason";
  selectSeasonContainer.appendChild(selectSpefSeason);
  let spefSeasonCheckLabel = document.createElement("button");
  spefSeasonCheckLabel.innerHTML = "<h2>" + season + "</h2>";
  spefSeasonCheckLabel.id = "" + season;
  selectSpefSeason.appendChild(spefSeasonCheckLabel);
  spefSeasonContainer.appendChild(selectSpefSeason);
  selectSeasonContainer.appendChild(spefSeasonContainer);
}
function selectGenderFunction(gender) {
  let selectSpefGender = document.createElement("div");
  selectSpefGender.id = "selectSpefGender";
  selectGenderContainer.appendChild(selectSpefGender);
  let spefGenderCheckLabel = document.createElement("button");
  spefGenderCheckLabel.innerHTML = "<h2>" + gender + "</h2>";
  spefGenderCheckLabel.id = "" + gender;
  selectSpefGender.appendChild(spefGenderCheckLabel);
  spefGenderContainer.appendChild(selectSpefGender);
  selectGenderContainer.appendChild(spefGenderContainer);
}
function selectSportFunction(sport) {
  let selectSpefSport = document.createElement("div");
  selectSpefSport.id = "selectSpefSport";
  selectSportContainer.appendChild(selectSpefSport);
  let spefSportCheckLabel = document.createElement("button");
  spefSportCheckLabel.innerHTML = "<h2>" + sport + "</h2>";
  spefSportCheckLabel.id = "id_" + sport;
  selectSpefSport.appendChild(spefSportCheckLabel);
  spefSportContainer.appendChild(selectSpefSport);
  selectSportContainer.appendChild(spefSportContainer);
}
function sportClickFunc() {}
function fillSchoolEvent() {}
