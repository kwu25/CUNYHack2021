
const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);
var nameV, rollV;

function ready()
{
  nameV = document.getElementById("namebox").value;
  rollV = document.getElementById("rollbox").value;
}

document.getElementById('insert').onclick = function()
{
  ready()
  firebase.database().ref('applicant/'+rollV).set({
    Name: nameV,
    roll: rollV
  });
}
