let candidates = [
  { id: 1, name: "RAMESH", votes: 0 },
  { id: 2, name: "MAHESH", votes: 0 },
  { id: 3, name: "SURESH", votes: 0 },
  { id: 4, name: "LOKESH", votes: 0 },
];

function renderCandidates() {
  const candidatesList = document.getElementById('candidatesList');
  candidatesList.innerHTML = "";
  
  candidates.forEach((candidate) => {
    const candidateDiv = document.createElement('div');
    candidateDiv.className = 'candidate';
    candidateDiv.innerHTML = `
      <div class="number-circle">${candidate.id}</div>
      <span>${candidate.name}</span>
      <button onclick="voteForCandidate(${candidate.id})">VOTE</button>
    `;
    candidatesList.appendChild(candidateDiv);
  });
}

function voteForCandidate(id) {
  const candidate = candidates.find((c) => c.id === id);
  if (candidate) {
    candidate.votes++;
    alert(`Voted for ${candidate.name}`);
  }
}

function addCandidate() {
  const name = prompt("Enter the new candidate's name:");
  if (name) {
    const newCandidate = {
      id: candidates.length + 1,
      name: name.toUpperCase(),
      votes: 0,
    };
    candidates.push(newCandidate);
    renderCandidates();
  }
}

function openChangeNameModal() {
  const modal = document.getElementById('changeNameModal');
  const select = document.getElementById('candidateSelect');
  select.innerHTML = "";
  
  candidates.forEach((candidate) => {
    const option = document.createElement('option');
    option.value = candidate.id;
    option.textContent = `${candidate.id} - ${candidate.name}`;
    select.appendChild(option);
  });
  
  modal.style.display = 'flex';
}

function closeChangeNameModal() {
  const modal = document.getElementById('changeNameModal');
  modal.style.display = 'none';
}

function changeCandidateName() {
  const select = document.getElementById('candidateSelect');
  const newNameInput = document.getElementById('newName');
  const candidateId = Number(select.value);
  const newName = newNameInput.value.trim();
  
  if (!newName) {
    alert("Please enter a new name!");
    return;
  }
  
  const candidate = candidates.find((c) => c.id === candidateId);
  if (candidate) {
    candidate.name = newName.toUpperCase();
    renderCandidates();
    closeChangeNameModal();
  }
}

function changeSchoolName() {
  const newName = prompt("Enter the new school name:");
  if (newName) {
    document.getElementById('schoolName').textContent = newName.toUpperCase();
  }
}

function getResults() {
  let results = "Results:\n";
  candidates.forEach((candidate) => {
    results += `${candidate.name}: ${candidate.votes} votes\n`;
  });
  alert(results);
}

// Render initial candidates
renderCandidates();