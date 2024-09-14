var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var NameEle = document.getElementById('name');
    var emailEle = document.getElementById('email');
    var phoneEle = document.getElementById('Phone');
    var educationEle = document.getElementById('Education');
    var experienceEle = document.getElementById('experience');
    var skillsEle = document.getElementById('skills');
    var name = '';
    var email = '';
    var phone = '';
    var education = '';
    var experience = '';
    var skills = '';
    if (NameEle && emailEle && phoneEle && educationEle && experienceEle && skillsEle) {
        name = NameEle.value;
        email = emailEle.value;
        phone = phoneEle.value;
        education = educationEle.value;
        experience = experienceEle.value;
        skills = skillsEle.value;
    }
    else {
        console.error('One or more elements are missing');
        return;
    }
    var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p> ");
    var resumeOutputElement = document.getElementById("resume-output");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
});
// Handle the Edit button functionality
var editBtn = document.getElementById('edit-btn');
if (editBtn) {
    editBtn.addEventListener('click', function () {
        var NameEle = document.getElementById('name');
        var emailEle = document.getElementById('email');
        var phoneEle = document.getElementById('Phone');
        var educationEle = document.getElementById('Education');
        var experienceEle = document.getElementById('experience');
        var skillsEle = document.getElementById('skills');
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
        }
        else {
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
            var name_1 = NameEle.value;
            var email = emailEle.value;
            var phone = phoneEle.value;
            var education = educationEle.value;
            var experience = experienceEle.value;
            var skills = skillsEle.value;
            var updatedResume = "\n                <h2>Resume</h2>\n                <p><strong>Name:</strong> ".concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>  ");
            var resumeOutputElement = document.getElementById("resume-output");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = updatedResume;
            }
        }
    });
}
