function generateResume(): void {
    // Get values from form with type checking
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const jobTitleInput = document.getElementById("jobTitle") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const locationInput = document.getElementById("location") as HTMLInputElement;
    const summaryInput = document.getElementById("summary") as HTMLTextAreaElement;
    const certificationsInput = document.getElementById("certifications") as HTMLInputElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const workExperienceInput = document.getElementById("workExperience") as HTMLTextAreaElement;

    // Ensure none of the elements are null
    if (
        !nameInput || !jobTitleInput || !phoneInput || !emailInput || !locationInput || 
        !summaryInput || !certificationsInput || !educationInput || !skillsInput || !workExperienceInput
    ) {
        console.error("One or more form elements were not found.");
        return;
    }

    // Extract values from inputs
    const name: string = nameInput.value;
    const jobTitle: string = jobTitleInput.value;
    const phone: string = phoneInput.value;
    const email: string = emailInput.value;
    const location: string = locationInput.value;
    const summary: string = summaryInput.value;
    const certifications: string[] = certificationsInput.value.split(',').map(cert => cert.trim());
    const education: string = educationInput.value;
    const skills: string[] = skillsInput.value.split(',').map(skill => skill.trim());
    const workExperience: string = workExperienceInput.value;

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
    if (
        !nameOutput || !jobTitleOutput || !phoneOutput || !emailOutput || 
        !locationOutput || !summaryOutput || !certOutput || 
        !educationOutput || !skillsOutput || !workExperienceOutput
    ) {
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

function handleProfileImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const imgElement = document.getElementById('profile-picture-preview') as HTMLImageElement;
            if (imgElement) {
                imgElement.src = e.target?.result as string;
                console.log('Image preview updated');
            }
        };

        reader.readAsDataURL(file);
    } else {
        console.error("Please select a valid image file.");
    }
}

// Attach the event listener to the file input
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('profileImage')?.addEventListener('change', handleProfileImageChange);
});
