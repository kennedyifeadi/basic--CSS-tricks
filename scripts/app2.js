let currentStep = 0;
const totalSteps = 5; // Set the total number of steps

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateProgressBar();
  }
  
  if (currentStep === totalSteps) {
    alert("Congratulations! You've completed all steps.");
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progressBar");
  const progressPercentage = (currentStep / totalSteps) * 100;
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.innerHTML = `${currentStep} of ${totalSteps} steps`;
}
