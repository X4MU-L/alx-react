import $ from "jquery";
import _ from "lodash";
import "./body.css";

$("body").append(
  "<p>Dashboard data for the students</p>",
  "<button>Click here to get started</button>",
  "<p id='count'></p>"
);
let count = 0;
$("#count").text(count);

function updateCounter() {
  count++;
  $("#count").text(count);
}

$("button").on("click", _.debounce(updateCounter));
