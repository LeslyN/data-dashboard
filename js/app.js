var studentsContainer = document.getElementById('coders-container');
var selectGenerationLima = document.getElementsByClassName('generacion')[0];
var selectGenerationAqp = document.getElementsByClassName('generacion')[1];
var selectGenerationSch = document.getElementsByClassName('generacion')[2];
var selectGenerationDf = document.getElementsByClassName('generacion')[3];
var selectGenerationG = document.getElementsByClassName('generacion')[4];
var subImagesContainer = null;


var metaTech = 1800;
var metaHSE = 1200;

selectGenerationLima.addEventListener('change', selectionGeneration);
selectGenerationAqp.addEventListener('change', selectionGeneration);
selectGenerationSch.addEventListener('change', selectionGeneration);
selectGenerationDf.addEventListener('change', selectionGeneration);
selectGenerationG.addEventListener('change', selectionGeneration);

function selectionGeneration(event) {
  studentsContainer.textContent = '';
  var filtro = event.target.value;
  cargarCoders(filtro.split('_')[0], filtro.split('_')[1]);
}

function cargarCoders(ciudad, periodo) {
  for (var i = 0 ; i < data[ciudad][periodo].students.length; i++) {
    if (data[ciudad][periodo].students[i].active) {
      var estudiante = document.createElement('div');
      var infStuden = document.createElement('p');
      var photoStudent = document.createElement('img');
      var detStudent = document.createElement('div');
      var techStudent = document.createElement('div');
      var techScore = document.createElement('span');
      var hseStudent = document.createElement('div');
      var hseScore = document.createElement('span');

      photoStudent.classList.add('student-img');
      estudiante.setAttribute('class', 'student-inf');
      detStudent.setAttribute('class', 'student-det');
      techStudent.setAttribute('class', 'student-tech');
      hseStudent.setAttribute('class', 'student-hse');


      photoStudent.src = data[ciudad][periodo].students[i].photo;
      infStuden.textContent = data[ciudad][periodo].students[i].name;
      photoStudent.textContent = data[ciudad][periodo].students[i].photo;
      techStudent.textContent = 'Tech Skills: ';
      techScore.textContent = techSkills(data[ciudad][periodo].students[i].sprints) + '%';
      hseStudent.textContent = 'Life Skills: ';
      hseScore.textContent = lifeSkills(data[ciudad][periodo].students[i].sprints) + '%';

      techStudent.appendChild(techScore);
      hseStudent.appendChild(hseScore);
      detStudent.appendChild(techStudent);
      detStudent.appendChild(hseStudent);

      estudiante.appendChild(infStuden);
      estudiante.appendChild(photoStudent);
      estudiante.appendChild(detStudent);
      studentsContainer.appendChild(estudiante);
    }
  }
}

function techSkills(techPoints) {
  var totalTechPoints = 0;
  var sprints = 0;
  for (var i = 0; i < techPoints.length; i++) {
    totalTechPoints += techPoints[i].score.tech * 1;
    sprints++;
  }
  return Math.round(((totalTechPoints / sprints) / metaTech) * 100 * 10) / 10;
}

function lifeSkills(hsePoints) {
  var totalhsePoints = 0;
  var sprints = 0;
  for (var i = 0; i < hsePoints.length; i++) {
    totalhsePoints += hsePoints[i].score.hse * 1;
    sprints++;
  }
  return Math.round(((totalhsePoints / sprints) / metaHSE) * 100 * 10) / 10;
}
