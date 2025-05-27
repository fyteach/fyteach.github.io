function calcGrades() {
  var weights = document.getElementsByName("weight[]");
  var scores = document.getElementsByName("score[]");

  var totalweight = 0;
  var weightedsum = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores.item(i).value.length > 0) {
      totalweight += 1 * parseFloat(weights.item(i).value || 1);
      weightedsum += parseFloat(weights.item(i).value || 1) * parseFloat(scores.item(i).value);
    }
  }

  var warningMessage = document.getElementById('totalweight');
  var overestimatedMessage = document.getElementById('overestimated');

  if (totalweight === 0) {
    warningMessage.innerHTML = "Please enter a score.";
    warningMessage.style.display = 'block';
    warningMessage.classList.add('warning-active');
  } else {
    var weightedmean = weightedsum / totalweight;
    weightedmean = Math.round(weightedmean);
    warningMessage.style.display = 'none';
    warningMessage.classList.remove('warning-active');
    if (weightedmean > 100) {
      document.querySelector('.ScoreLetter').style.display = 'none';
      overestimatedMessage.innerHTML = "Your overall is greater than 100. Please use a 100-point scale for your scores.";
      overestimatedMessage.style.display = 'block';
      overestimatedMessage.classList.add('warning-active');
    } else {
      overestimatedMessage.style.display = 'none';
      overestimatedMessage.classList.remove('warning-active');
      var gradeletter = "";
      if (100 >= weightedmean && weightedmean >= 96) {
        gradeletter = "A";
      } else if (95 >= weightedmean && weightedmean >= 90) {
        gradeletter = "A-";
      } else if (89 >= weightedmean && weightedmean >= 87) {
        gradeletter = "B+";
      } else if (86 >= weightedmean && weightedmean >= 84) {
        gradeletter = "B";
      } else if (83 >= weightedmean && weightedmean >= 80) {
        gradeletter = "B-";
      } else if (79 >= weightedmean && weightedmean >= 77) {
        gradeletter = "C+";
      } else if (76 >= weightedmean && weightedmean >= 74) {
        gradeletter = "C";
      } else if (73 >= weightedmean && weightedmean >= 70) {
        gradeletter = "C-";
      } else if (69 >= weightedmean && weightedmean >= 67) {
        gradeletter = "D+";
      } else if (66 >= weightedmean && weightedmean >= 64) {
        gradeletter = "D";
      } else if (63 >= weightedmean && weightedmean >= 60) {
        gradeletter = "D-";
      } else {
        gradeletter = "F";
      }
      showModal("Overall Grade", "Your overall grade is " + weightedmean + "/100. Your grade letter is " + gradeletter + ".");
    }
  }
}

function addRow() {
  var table = document.getElementById("gradeTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = '<input type="text" name="assessment[]"/>';
  cell2.innerHTML = '<input type="number" placeholder="1" name="weight[]"/>';
  cell3.innerHTML = '<input type="number" placeholder="0" name="score[]"/>';
  cell4.innerHTML = '<button type="button" onclick="deleteRow(this)">Delete</button>';
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

document.getElementById('gradeTable').addEventListener('paste', function (e) {
  e.preventDefault();
  var text = (e.clipboardData || window.clipboardData).getData('text');
  var rows = text.split('\n');
  var table = document.getElementById("gradeTable").getElementsByTagName('tbody')[0];

  rows.forEach(function (row) {
    var cells = row.split('\t');
    if (cells.length === 3) {
      var newRow = table.insertRow();
      for (var i = 0; i < cells.length; i++) {
        var newCell = newRow.insertCell(i);
        newCell.innerHTML = '<input type="text" value="' + cells[i] + '" name="' + (i === 0 ? 'assessment[]' : (i === 1 ? 'weight[]' : 'score[]')) + '"/>';
      }
      var deleteCell = newRow.insertCell(3);
      deleteCell.innerHTML = '<button type="button" onclick="deleteRow(this)">Delete</button>';
    }
  });
});

function estimateMissingScores() {
  var weights = document.getElementsByName("weight[]");
  var scores = document.getElementsByName("score[]");
  var expectedGrade = parseFloat(document.getElementById('expectedGrade').value);

  var totalweight = 0;
  var weightedsum = 0;
  var missingWeight = 0;

  for (var i = 0; i < scores.length; i++) {
    if (scores.item(i).value.length > 0) {
      totalweight += 1 * parseFloat(weights.item(i).value || 1);
      weightedsum += parseFloat(weights.item(i).value || 1) * parseFloat(scores.item(i).value);
    } else {
      missingWeight += parseFloat(weights.item(i).value || 1);
    }
  }

  if (missingWeight === 0) {
    showModal("Estimate Missing Scores", "There are no missing scores to estimate.");
  } else {
    var requiredSum = expectedGrade * (totalweight + missingWeight) - weightedsum;
    var requiredGrade = requiredSum / missingWeight;

    if (requiredGrade > 100) {
      showModal("Estimate Missing Scores", "It is not possible to achieve the expected grade with the current weights and scores.");
    } else {
      showModal("Estimate Missing Scores", "You need an average of at least " + requiredGrade.toFixed(2) + " in the remaining assessments to achieve your expected grade.");
    }
  }
}

function showModal(title, message) {
  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modalTitle');
  var modalMessage = document.getElementById('modalMessage');

  modalTitle.innerText = title;
  modalMessage.innerText = message;

  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
