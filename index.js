"use strict";
function generateResume() {
    // Get values from form with type checking
    const nameInput = document.getElementById("name");
    const jobTitleInput = document.getElementById("jobTitle");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const locationInput = document.getElementById("location");
    const summaryInput = document.getElementById("summary");
    const certificationsInput = document.getElementById("certifications");
    const educationInput = document.getElementById("education");
    const skillsInput = document.getElementById("skills");
    const workExperienceInput = document.getElementById("workExperience");
    // Ensure none of the elements are null
    if (!nameInput || !jobTitleInput || !phoneInput || !emailInput || !locationInput ||
        !summaryInput || !certificationsInput || !educationInput || !skillsInput || !workExperienceInput) {
        console.error("One or more form elements were not found.");
        return;
    }
    // Extract values from inputs
    const name = nameInput.value;
    const jobTitle = jobTitleInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;
    const location = locationInput.value;
    const summary = summaryInput.value;
    const certifications = certificationsInput.value.split(',').map(cert => cert.trim());
    const education = educationInput.value;
    const skills = skillsInput.value.split(',').map(skill => skill.trim());
    const workExperience = workExperienceInput.value;
    // Update resume with input data
    const nameOutput = document.getElementById("name-output");
    const jobTitleOutput = document.getElementById("jobTitle-output");
    const phoneOutput = document.getElementById("phone-output");
    const emailOutput = document.getElementById("email-output");
    const locationOutput = document.getElementById("location-output");
    const summaryOutput = document.getElementById("summary-output");
    const certOutput = document.getElementById("certification-output");
    const educationOutput = document.getElementById("education-output");
    const skillsOutput = document.getElementById("skills-output");
    const workExperienceOutput = document.getElementById("work-experience-output");
    // Ensure all the output elements are available
    if (!nameOutput || !jobTitleOutput || !phoneOutput || !emailOutput ||
        !locationOutput || !summaryOutput || !certOutput ||
        !educationOutput || !skillsOutput || !workExperienceOutput) {
        console.error("One or more output elements were not found.");
        return;
    }
    // Set text content to display resume data
    nameOutput.textContent = name;
    jobTitleOutput.textContent = jobTitle;
    phoneOutput.textContent = phone;
    emailOutput.textContent = email;
    locationOutput.textContent = location;
    summaryOutput.textContent = summary;
    // Update certifications
    certOutput.innerHTML = certifications.map(cert => `<p><strong>${cert}</strong></p>`).join('');
    // Update education
    educationOutput.innerHTML = `<p><strong>${education}</strong></p>`;
    // Update skills
    skillsOutput.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
    // Update work experience
    workExperienceOutput.textContent = workExperience;
}
function handleProfileImageChange(event) {
    const input = event.target;
    const file = input.files ? input.files[0] : null;
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const imgElement = document.getElementById('profile-picture-preview');
            if (imgElement) {
                imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                console.log('Image preview updated');
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        console.error("Please select a valid image file.");
    }
}
// Attach the event listener to the file input
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('profileImage')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', handleProfileImageChange);
});
