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

  if (totalweight === 0) {
    document.getElementById('totalweight').innerHTML = "Please enter a score.";
  } else {
    var weightedmean = weightedsum/totalweight;
    weightedmean = Math.round(weightedmean);
    document.getElementById('totalweight').style.display = 'none';
    if (weightedmean > 100) {
      document.querySelector('.ScoreLetter').style.display = 'none';
      document.getElementById('overestimated').innerHTML = "You overall is greater than 100. Please use 100-point scale for your scores.";
    } else {
      var gradeletter = "";
      if (100 >= weightedmean && weightedmean >= 96) {
        gradeletter = "A";
      }
      else if (95 >= weightedmean && weightedmean >= 90) {
        gradeletter = "A-";
      }
      else if (89 >= weightedmean && weightedmean >= 87) {
        gradeletter = "B+";
      }
      else if (86 >= weightedmean && weightedmean >= 84) {
        gradeletter = "B";
      }
      else if (83 >= weightedmean && weightedmean >= 80) {
        gradeletter = "B-";
      }
      else if (79 >= weightedmean && weightedmean >= 77) {
        gradeletter = "C+";
      }
      else if (76 >= weightedmean && weightedmean >= 74) {
        gradeletter = "C";
      }
      else if (73 >= weightedmean && weightedmean >= 70) {
        gradeletter = "C-";
      }
      else if (69 >= weightedmean && weightedmean >= 67) {
        gradeletter = "D+";
      }
      else if (66 >= weightedmean && weightedmean >= 64) {
        gradeletter = "D";
      }
      else if (63 >= weightedmean && weightedmean >= 60) {
        gradeletter = "D-";
      }
      else {
        gradeletter = "F";
      }
      document.getElementById('overallgrade').innerHTML = weightedmean;
      document.getElementById('gradeletter').innerHTML = gradeletter;
      document.querySelector('.ScoreLetter').style.display = 'flex';
    }
  }
}