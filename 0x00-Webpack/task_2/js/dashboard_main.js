import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

$("body").append(
  "<span id='logo'></span>",
  "<p>Holberton Dashboard</p>",
  "<p>Dashboard data for the students</p>",
  "<button>Click here to get started</button>",
  "<p id='count'></p>",
  "<p>Copyright - Holberton School</p>"
);
let count = 0;
$("#count").text(count);

function updateCounter() {
  count++;
  $("#count").text(count);
}

$("button").on("click", _.debounce(updateCounter));
