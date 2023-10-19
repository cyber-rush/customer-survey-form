const form = document.getElementById("surveyForm");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Validate form fields (add more validations as needed)
    if (!firstName || !lastName || !dob || !country || !(genderMale || genderFemale) || !profession || !email || !mobile) {
        alert("All fields are required!");
        return;
    }

    // Display popup with form values
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genderMale ? "Male" : "Female"}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    popup.style.display = "flex";
});

document.getElementById("resetBtn").addEventListener("click", function () {
    form.reset();
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
        form.reset();
    }
});
