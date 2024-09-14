document.getElementById('resume-form')?.addEventListener("submit", function (event) {
    event.preventDefault();
 
    const NameEle = document.getElementById('name') as HTMLInputElement;
    const emailEle = document.getElementById('email') as HTMLInputElement;
    const phoneEle = document.getElementById('Phone') as HTMLInputElement;
    const educationEle = document.getElementById('Education') as HTMLInputElement;
    const experienceEle = document.getElementById('experience') as HTMLInputElement;
    const skillsEle = document.getElementById('skills') as HTMLInputElement;

    let name = '';
    let email = '';
    let phone = '';
    let education = '';
    let experience = '';
    let skills = '';

    if (NameEle && emailEle && phoneEle && educationEle && experienceEle && skillsEle) {
        name = NameEle.value;
        email = emailEle.value;
        phone = phoneEle.value;
        education = educationEle.value;
        experience = experienceEle.value;
        skills = skillsEle.value;
    } else {
        console.error('One or more elements are missing');
        return;
    }

    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p> `;

    const resumeOutputElement = document.getElementById("resume-output");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error("The resume output element is missing");
    }
});

// Handle the Edit button functionality
const editBtn = document.getElementById('edit-btn');

if (editBtn) {
    editBtn.addEventListener('click', function () {
        const NameEle = document.getElementById('name') as HTMLInputElement;
        const emailEle = document.getElementById('email') as HTMLInputElement;
        const phoneEle = document.getElementById('Phone') as HTMLInputElement;
        const educationEle = document.getElementById('Education') as HTMLInputElement;
        const experienceEle = document.getElementById('experience') as HTMLInputElement;
        const skillsEle = document.getElementById('skills') as HTMLInputElement;

        if (editBtn.textContent === 'Edit') {
            // Change the button text to 'Save'
            editBtn.textContent = 'Save';
            
            // Scroll to the top to allow editing
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Enable form fields for editing
            NameEle.disabled = false;
            emailEle.disabled = false;
            phoneEle.disabled = false;
            educationEle.disabled = false;
            experienceEle.disabled = false;
            skillsEle.disabled = false;
        } else {
            // Change the button text back to 'Edit'
            editBtn.textContent = 'Edit';

            // Disable form fields after editing is done
            NameEle.disabled = true;
            emailEle.disabled = true;
            phoneEle.disabled = true;
            educationEle.disabled = true;
            experienceEle.disabled = true;
            skillsEle.disabled = true;

            // Update the resume output with new values
            const name = NameEle.value;
            const email = emailEle.value;
            const phone = phoneEle.value;
            const education = educationEle.value;
            const experience = experienceEle.value;
            const skills = skillsEle.value;

            const updatedResume = `
                <h2>Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>  `;

            const resumeOutputElement = document.getElementById("resume-output");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = updatedResume;
            }
        }
    });
}

