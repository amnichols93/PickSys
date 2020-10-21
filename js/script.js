const allteamData = data_current;
const predData = week7;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear out any existing data
    tbody.html("");

    // Build the rows of the table
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Fill the cells of each row with a value
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("allteam-data");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "desc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;

      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("td")[n];
          y = rows[i + 1].getElementsByTagName("td")[n];

          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                  }
          } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
              }
          };
      }
      if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount ++;
      } else {
          /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "desc") {
              dir = "asc";
              switching = true;
          }
      }
  }
}

function handleFilters() {
  let Base_Team = d3.select("#Base_Team").property("value");
  let Opp = d3.select("#Opp").property("value");
  let Year = d3.select("#Year").property("value");
  let Week = d3.select("#Week").property("value");
  let QB = d3.select("#QB").property("value");
  let HC = d3.select("#HC").property("value");
  let filteredData = allteamData;

  if (Base_Team) {
      filteredData = filteredData.filter(row => row.Base_Team === Base_Team);
  };
  if (Opp) {
      filteredData = filteredData.filter(row => row.Opp === Opp);
  };
  if (Year) {
      filteredData = filteredData.filter(row => row.Year == Year);
  };
  if (Week) {
    filteredData = filteredData.filter(row => row.Week == Week);
  };
  if (QB) {
    filteredData = filteredData.filter(row => row.QB == QB);
  };
  if (HC) {
    filteredData = filteredData.filter(row => row.Head_Coach == HC);
  };

  buildTable(filteredData);
}

function openTab(evt, pickType) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pickType).style.display = "block";
    evt.currentTarget.className += " active";
}

function loadTeamsS(n, data) {
  var page = document.getElementById('title').innerHTML.toLowerCase()
  if (page == 'picksys') {  
    document.getElementById(`prediction${n}S`).innerHTML = `${data[n-1].Prediction}`;
    document.getElementById(`match${n}S`).innerHTML = `${data[n-1].Base_Team} vs. ${data[n-1].Opp}`;
    document.getElementById(`prediction-img${n}S`).src = `images/logos/${data[n-1].Prediction}.jpg`;
  } else {
    var team = document.getElementById(`prediction${n}S`).innerHTML.toLowerCase()
    document.getElementById(`prediction-img${n}S`).src = `../images/logos/${team}.jpg`;
  }
}

function loadTeamsA(n, data) {
  var page = document.getElementById('title').innerHTML.toLowerCase()
  if (page == 'picksys') {  
    document.getElementById(`prediction${n}A`).innerHTML = `${data[n-1].Prediction} - ${data[n-1].Level}`;
    document.getElementById(`match${n}A`).innerHTML = `${data[n-1].Base_Team} vs. ${data[n-1].Opp}`;
    document.getElementById(`prediction-img${n}A`).src = `images/logos/${data[n-1].Prediction}.jpg`;
  } else {
    var team = document.getElementById(`prediction${n}A`).innerHTML.toLowerCase()
    document.getElementById(`prediction-img${n}A`).src = `../images/logos/${team}.jpg`;
  }
}

for (i = 1; i < 15; i++) {
  loadTeamsA(i, predData)
}

document.getElementById("defaultOpen").click()

var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = ["mySlides0", "mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11"]
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);
showDivs(1, 5);
showDivs(1, 6);
showDivs(1, 7);
showDivs(1, 8);
showDivs(1, 9);
showDivs(1, 10);
showDivs(1, 11);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

buildTable(allteamData);