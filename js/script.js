const allteamData = data_current;
const predData = total_pred;
const predDataS = total_predS;
const level_accData = level_acc;
const level_accDataS = level_accS;
const weekly_acc = m1_weekly_acc;
const weekly_accS = m2_weekly_acc;

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

function loadTeamsA(data) {
  var page = document.getElementById('title').innerHTML.toLowerCase()
  var maxweek = 0;
  for (k = 0; k < data.length; k++) {
    week = data[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };
  if (page == 'picksys') {
    var n = 1;
    for (j = 0; j < data.length; j++) {
      if (data[j].Week == maxweek) {
        document.getElementById(`prediction${n}A`).innerHTML = `<b>${data[j].Prediction} - ${data[j].Level}</b>`;
        document.getElementById(`match${n}A`).innerHTML = `${data[j].Base_Team} vs. ${data[j].Opp}`;
        var team = data[j].Prediction.toLowerCase();
        document.getElementById(`prediction-img${n}A`).src = `images/logos/${team}.jpg`;
        n = n + 1;
      } else {};
    };
  } else if (page == 'accuracydata'| page == 'allteamdata') {

  } else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {
        var n = 1;
        for (j = 0; j < data.length; j++) {
          if (data[j].Week == k) {
            document.getElementById(`prediction${n}A`).innerHTML = `<b>${data[j].Prediction} - ${data[j].Level}</b>`;
            document.getElementById(`match${n}A`).innerHTML = `${data[j].Base_Team} vs. ${data[j].Opp}`;
            var team = data[j].Prediction.toLowerCase();
            document.getElementById(`prediction-img${n}A`).src = `../images/logos/${team}.jpg`;
            n = n + 1;
          };
        };
      };
    };
  };
}

function loadTeamsS(data, data2) {
  var page = document.getElementById('title').innerHTML.toLowerCase()
  var maxweek = 0;
  for (k = 0; k < data.length; k++) {
    week = data[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };
  if (page == 'picksys') {
    var n = 1;
    for (j = 0; j < data.length; j++) {
      if (data[j].Week == maxweek) {
        document.getElementById(`prediction${n}S`).innerHTML = `<b>${data[j].Prediction} - ${data[j].Level}</b>`;
        document.getElementById(`match${n}S`).innerHTML = `${data[j].Base_Team} vs. ${data[j].Opp}`;
        var team = data[j].Prediction.toLowerCase();
        document.getElementById(`prediction-img${n}S`).src = `images/logos/${team}.jpg`;
        n = n + 1;
      } else {};
    };
  } else if (page == 'accuracydata'| page == 'allteamdata') {

  } else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {
        var n = 1;
        for (j = 0; j < data.length; j++) {
          if (data[j].Week == k) {
            document.getElementById(`prediction${n}S`).innerHTML = `<b>${data[j].Prediction} - ${data[j].Level}</b>`;
            document.getElementById(`match${n}S`).innerHTML = `${data[j].Base_Team} vs. ${data[j].Opp}`;
            var team = data[j].Prediction.toLowerCase();
            document.getElementById(`prediction-img${n}S`).src = `../images/logos/${team}.jpg`;
            n = n + 1;
          };
        };
      };
    };
  };
}

function levelAccA(data, data2) {
  var page = document.getElementById('title').innerHTML.toLowerCase();
  var maxweek = 0;
  for (k = 0; k < data2.length; k++) {
    week = data2[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };
  if (page == 'picksys') {
    document.getElementById('accratings').innerHTML = `<u>L3</u>: ${data[0].L3_Accuracy}% (${data[0].L3_Right}/${data[0].L3_Total}) - 
    <u>L2</u>: ${data[0].L2_Accuracy}% (${data[0].L2_Right}/${data[0].L2_Total}) - 
    <u>L1</u>: ${data[0].L1_Accuracy}% (${data[0].L1_Right}/${data[0].L1_Total}) - 
    <u>Total Accuracy:</u> ${data[0].Total}%`;
  } else if (page == 'accuracydata'| page == 'allteamdata') {} else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {
        var wins = 0;
        var total = 0;
        for (j = 0; j < data2.length; j++) {
          if (data2[j].Week == k) {
            if (data2[j].Correct == 1) {
              wins = wins + 1;
              total = total + 1;
            } else {
              total = total + 1
            }
          };
        };
        accuracy = wins/total*100;
        document.getElementById('accratings').innerHTML = `Model 1 Accuracy: ${accuracy.toFixed(1)}%`;
      };
    };
  }
}

function levelAccS(data, data2) {
  var page = document.getElementById('title').innerHTML.toLowerCase();
  var maxweek = 0;
  for (k = 0; k < data2.length; k++) {
    week = data2[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };
  if (page == 'picksys') {
    document.getElementById('accratingsS').innerHTML = `<u>L3</u>: ${data[0].L3_Accuracy}% (${data[0].L3_Right}/${data[0].L3_Total}) - 
    <u>L2</u>: ${data[0].L2_Accuracy}% (${data[0].L2_Right}/${data[0].L2_Total}) - 
    <u>L1</u>: ${data[0].L1_Accuracy}% (${data[0].L1_Right}/${data[0].L1_Total}) - 
    <u>L0</u>: ${data[0].L0_Accuracy}% (${data[0].L0_Right}/${data[0].L0_Total}) - 
    <u>Total Accuracy:</u> ${data[0].Total}%`;
  } else if (page == 'accuracydata'| page == 'allteamdata') {} else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {
        var wins = 0;
        var total = 0;
        for (j = 0; j < data2.length; j++) {
          if (data2[j].Week == k) {
            if (data2[j].Correct == 1) {
              wins = wins + 1;
              total = total + 1;
            } else {
              total = total + 1
            }
          };
        };
        accuracy = wins/total*100;
        document.getElementById('accratingsS').innerHTML = `Model 2 Accuracy: ${accuracy.toFixed(1)}%`;
      };
    };
  }
}

function confidenceA(data, data2) {
  var maxweek = 0;
  for (k = 0; k < data.length; k++) {
    week = data[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };

  var page = document.getElementById('title').innerHTML.toLowerCase();
  if (page == 'picksys') {

    document.getElementById('link-to-espn').href = `https://www.espn.com/nfl/scoreboard/_/year/2020/seasontype/2/week/${maxweek}`;

    var l3count = 0;
    var l2count = 0;
    var l1count = 0;
    var totalgames = 0;

    for (j = 0; j < data.length; j++) {
      if (data[j].Week == maxweek) {
        if (data[j].Level == 'L3') {
          l3count = l3count + 1;
        } else if (data[j].Level == 'L2') {
          l2count = l2count + 1
        } else if (data[j].Level == 'L1') {
          l1count = l1count + 1
        };
        totalgames = totalgames + 1
      } else {};
    };
  
    l3acc = ((data2[0].L3_Accuracy/100)*l3count) - (((data2[0].L3_Accuracy/100)*l3count) % 1);
    l2acc = ((data2[0].L2_Accuracy/100)*l2count) - (((data2[0].L2_Accuracy/100)*l2count) % 1);
    l1acc = ((data2[0].L1_Accuracy/100)*l1count) - (((data2[0].L1_Accuracy/100)*l1count) % 1);
    confidence = ((l3acc + l2acc + l1acc)/(totalgames)*100).toFixed(1);

    document.getElementById('pred-acc-perc').innerHTML = `<b>${confidence}% Confident</b>`;
  } else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {

        document.getElementById('link-to-espn').href = `https://www.espn.com/nfl/scoreboard/_/year/2020/seasontype/2/week/${k}`;

        var pl3count = 0;
        var pl2count = 0;
        var pl1count = 0;
        var ptotalgames = 0;
        var pl3right = 0;
        var pl2right = 0;
        var pl1right = 0;
        var cl3right = 0;
        var cl2right = 0;
        var cl1right = 0;
        var cl3count = 0;
        var cl2count = 0;
        var cl1count = 0;
        var ctotalgames = 0;

        for (j = 0; j < data.length; j++) {

          if (data[j].Week < k) {
            if (data[j].Level == 'L3') {
              pl3count = pl3count + 1;
              if (data[j].Correct == 1) {
                pl3right = pl3right + 1;
              };
            } else if (data[j].Level == 'L2') {
              pl2count = pl2count + 1;
              if (data[j].Correct == 1) {
                pl2right = pl2right + 1;
              };
            } else if (data[j].Level == 'L1') {
              pl1count = pl1count + 1;
              if (data[j].Correct == 1) {
                pl1right = pl1right + 1;
              };
            } else {};
            ptotalgames = ptotalgames + 1
          } else {};

          if (data[j].Week == k) {
            ctotalgames = ctotalgames + 1
            if (data[j].Level == 'L3') {
              cl3count = cl3count + 1;
              if (data[j].Correct == 1) {
                cl3right = cl3right + 1;
              };
            } else if (data[j].Level == 'L2') {
              cl2count = cl2count + 1;
              if (data[j].Correct == 1) {
                cl2right = cl2right + 1;
              };
            } else if (data[j].Level == 'L1') {
              cl1count = cl1count + 1;
              if (data[j].Correct == 1) {
                cl1right = cl1right + 1;
              };
            } else {};
          } else {};

        };

        var past3acc = 0;
        var past2acc = 0;
        var past1acc = 0;

        if (pl3count == 0) {
          past3acc = 0
        } else {
          past3acc = (pl3right/pl3count);
        }
        if (pl2count == 0) {
          past2acc = 0
        } else {
          past2acc = (pl2right/pl2count);
        }
        if (pl1count == 0) {
          past1acc = 0
        } else {
          past1acc = (pl1right/pl1count);
        }

        l3acc = (past3acc*cl3count) - ((past3acc*cl3count) % 1);
        l2acc = (past2acc*cl2count) - ((past2acc*cl2count) % 1);
        l1acc = (past1acc*cl1count) - ((past1acc*cl1count) % 1);
        confidence = ((l3acc + l2acc + l1acc)/(ctotalgames)*100).toFixed(1);

        document.getElementById('pred-acc-perc').innerHTML = `<b>${confidence}% Confident</b>`;

      };
    };
  };
}

function confidenceS(data, data2) {
  var maxweek = 0;
  for (k = 0; k < data.length; k++) {
    week = data[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };

  var page = document.getElementById('title').innerHTML.toLowerCase();
  if (page == 'picksys') {
    var l3count = 0;
    var l2count = 0;
    var l1count = 0;
    var l0count = 0;
    var totalgames = 0;

    for (j = 0; j < data.length; j++) {
      if (data[j].Week == maxweek) {
        if (data[j].Level == 'L3') {
          l3count = l3count + 1;
        } else if (data[j].Level == 'L2') {
          l2count = l2count + 1
        } else if (data[j].Level == 'L1') {
          l1count = l1count + 1
        } else if (data[j].Level == 'L0') {
          l0count = l0count + 1
        };
        totalgames = totalgames + 1
      } else {};
    };
  
    l3acc = ((data2[0].L3_Accuracy/100)*l3count) - (((data2[0].L3_Accuracy/100)*l3count) % 1);
    l2acc = ((data2[0].L2_Accuracy/100)*l2count) - (((data2[0].L2_Accuracy/100)*l2count) % 1);
    l1acc = ((data2[0].L1_Accuracy/100)*l1count) - (((data2[0].L1_Accuracy/100)*l1count) % 1);
    l0acc = ((data2[0].L0_Accuracy/100)*l0count) - (((data2[0].L0_Accuracy/100)*l0count) % 1);
    confidence = ((l3acc + l2acc + l1acc + l0acc)/(totalgames)*100).toFixed(1);

    document.getElementById('pred-acc-percS').innerHTML = `<b>${confidence}% Confident</b>`;
  } else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {
        var pl3count = 0;
        var pl2count = 0;
        var pl1count = 0;
        var pl0count = 0;
        var ptotalgames = 0;
        var pl3right = 0;
        var pl2right = 0;
        var pl1right = 0;
        var pl0right = 0;
        var cl3right = 0;
        var cl2right = 0;
        var cl1right = 0;
        var cl0right = 0;
        var cl3count = 0;
        var cl2count = 0;
        var cl1count = 0;
        var cl0count = 0;
        var ctotalgames = 0;

        for (j = 0; j < data.length; j++) {

          if (data[j].Week < k) {
            if (data[j].Level == 'L3') {
              pl3count = pl3count + 1;
              if (data[j].Correct == 1) {
                pl3right = pl3right + 1;
              };
            } else if (data[j].Level == 'L2') {
              pl2count = pl2count + 1;
              if (data[j].Correct == 1) {
                pl2right = pl2right + 1;
              };
            } else if (data[j].Level == 'L1') {
              pl1count = pl1count + 1;
              if (data[j].Correct == 1) {
                pl1right = pl1right + 1;
              }
            } else if (data[j].Level == 'L0') {
              pl0count = pl0count + 1;
              if (data[j].Correct == 1) {
                pl0right = pl0right + 1;
              };
            } else {};
            ptotalgames = ptotalgames + 1
          } else {};

          if (data[j].Week = k) {
            ctotalgames = ctotalgames + 1
            if (data[j].Level == 'L3') {
              cl3count = cl3count + 1;
              if (data[j].Correct == 1) {
                cl3right = cl3right + 1;
              };
            } else if (data[j].Level == 'L2') {
              cl2count = cl2count + 1;
              if (data[j].Correct == 1) {
                cl2right = cl2right + 1;
              };
            } else if (data[j].Level == 'L1') {
              cl1count = cl1count + 1;
              if (data[j].Correct == 1) {
                cl1right = cl1right + 1;
              };
            } else if (data[j].Level == 'L0') {
              cl0count = cl0count + 1;
              if (data[j].Correct == 1) {
                cl0right = cl0right + 1;
              };
            } else {};
          } else {};

        };

        var past3acc = 0;
        var past2acc = 0;
        var past1acc = 0;
        var past0acc = 0;

        if (pl3count == 0) {
          past3acc = 0
        } else {
          past3acc = (pl3right/pl3count);
        }
        if (pl2count == 0) {
          past2acc = 0
        } else {
          past2acc = (pl2right/pl2count);
        }
        if (pl1count == 0) {
          past1acc = 0
        } else {
          past1acc = (pl1right/pl1count);
        }
        if (pl0count == 0) {
          past0acc = 0
        } else {
          past0acc = (pl0right/pl0count);
        }

        l3acc = (past3acc*cl3count) - ((past3acc*cl3count) % 1);
        l2acc = (past2acc*cl2count) - ((past2acc*cl2count) % 1);
        l1acc = (past1acc*cl1count) - ((past1acc*cl1count) % 1);
        l0acc = (past0acc*cl0count) - ((past0acc*cl0count) % 1);
        confidence = ((l3acc + l2acc + l1acc + l0acc)/(ctotalgames)*100).toFixed(1);

        document.getElementById('pred-acc-percS').innerHTML = `<b>${confidence}% Confident</b>`;

      };
    };
  };
}

function styleCardsA(data) {
  var page = document.getElementById('title').innerHTML.toLowerCase();
  var maxweek = 0;
  for (i = 0; i < data.length; i++) {
    week = data[i].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };
  if (page == 'picksys') {
    var n = 1;
    for (j = 0; j < data.length; j++) {
      if (data[j].Week == maxweek) {
        document.getElementById(`card${n}A`).className = "card";
        n = n + 1;
      };
    };
  } else if (page == 'accuracydata'| page == 'allteamdata') {} else {
    for (k = 1; k < maxweek; k++) {
      if (page == `week ${k}`) {
        var n = 1;
        for (j = 0; j < data.length; j++) {
          if (data[j].Week == k) {
            if ((document.getElementById(`prediction${n}A`).innerHTML == `<b>${data[j].Prediction} - ${data[j].Level}</b>`) & (data[j].Correct == 1)) {
              document.getElementById(`card${n}A`).className = "winning-card card";
              n = n + 1;
            } else if ((document.getElementById(`prediction${n}A`).innerHTML == `<b>${data[j].Prediction} - ${data[j].Level}</b>`) & (data[j].Correct == 0)) {
              document.getElementById(`card${n}A`).className = "losing-card card";
              n = n + 1;
            } else {
              document.getElementById(`card${n}A`).className = "card";
              n = n + 1;
            };
          };
        };
      };
    };
  };
}

function styleCardsS(data) {
  var page = document.getElementById('title').innerHTML.toLowerCase();
  var maxweek = 0;
  for (k = 0; k < data.length; k++) {
    week = data[k].Week;
    if (week > maxweek) {
      maxweek = week;
    };
  };
  if (page == 'picksys') {
    var n = 1;
    for (j = 0; j < data.length; j++) {
      if (data[j].Week == maxweek) {
        document.getElementById(`card${n}S`).className = "card";
        n = n + 1;
      };
    };
  } else {};
}

levelAccA(level_accData, predData);
loadTeamsA(predData);
confidenceA(predData, level_accData);
styleCardsA(predData);
levelAccS(level_accDataS, predDataS);
loadTeamsS(predDataS);
confidenceS(predDataS, level_accDataS);
styleCardsS(predDataS);

document.getElementById("defaultOpen").click()

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

buildTable(allteamData);