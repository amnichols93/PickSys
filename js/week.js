const allteamData = data_current;

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

buildTable(allteamData);
handleFilters();