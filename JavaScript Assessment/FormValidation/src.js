document.getElementById("dataTable").style.display = "none";
document.getElementById("buttons").style.display = "none";

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phoneNumber");
const pwdInput = document.getElementById("password");
const cpwdInput = document.getElementById("confirmPwd");
const genderInput = document.getElementsByName("gender");
const presentAddressInput = document.getElementById("presentAddress");
const pincodeInput = document.getElementById("pincode");
const stateInput = document.getElementById("state");
const permanentAddressInput = document.getElementById("PermanentAddress");
const permanentPincodeInput = document.getElementById("permanentPincode");
const permanentStateInput = document.getElementById("permanentState");
const dobInput = document.getElementById("dob");
const birthTimeInput = document.getElementById("birthtime");
const languageInput = document.getElementsByName("language");
const interestsInput = document.getElementById("interest");
const photoInput = document.getElementById("photo");
const filesInput = document.getElementById("resume");
const form = document.getElementById("myForm");

const tableBody = document.querySelector("#dataTable tbody");

// ! error
const firstNameError = document.getElementById("firstnameError");
const lastNameError = document.getElementById("lastnameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const addressError = document.getElementById("addressError");
const pincodeError = document.getElementById("pincodeError");
const stateError = document.getElementById("stateError");
const addressError2 = document.getElementById("addressError2");
const pincodeError2 = document.getElementById("pincodeError2");
const stateError2 = document.getElementById("stateError2");
const dobError = document.getElementById("dobError");
const birthTimeError = document.getElementById("timeError");
const languagesError = document.getElementById("languagesError");
const interestError = document.getElementById("interestError");
const imageError = document.getElementById("photoError");
const resumeError = document.getElementById("fileError");
const pwdError = document.getElementById("pwdError");
const cpwdError = document.getElementById("cpwdError");
const genderError = document.getElementById("genderError");

// ! Regex
const regexName = /^[A-Za-z\s]{3,50}$/;
const regexPhone = /\d{10}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
const regexPincode = /^[0-9]{6}$/;

// ! validation

validateFirstName = () => {
  if (firstNameInput.value === "") {
    firstNameError.innerHTML = "*FirstName is required";
    firstNameInput.style.borderColor = "red";
    return false;
  } else if (!regexName.test(firstNameInput.value)) {
    firstNameError.innerHTML = "*Please Enter valid FirstName";
    firstNameInput.style.borderColor = "red";
    return false;
  } else {
    firstNameError.innerHTML = "";
    firstNameInput.style.borderColor = "green";
    return true;
  }
};

validateLastName = () => {
  if (lastNameInput.value === "") {
    lastNameError.innerHTML = "*LastName is required";
    lastNameInput.style.borderColor = "red";
    return false;
  } else if (!regexName.test(lastNameInput.value)) {
    lastNameError.innerHTML = "*Please Enter valid LastName";
    lastNameInput.style.borderColor = "red";
    return false;
  } else {
    lastNameError.innerHTML = "";
    lastNameInput.style.borderColor = "green";
    return true;
  }
};

validateEmail = () => {
  if (emailInput.value === "") {
    emailError.innerHTML = "*Email is required";
    emailInput.style.borderColor = "red";
    return false;
  } else if (!regexEmail.test(emailInput.value)) {
    emailError.innerHTML = "*Please Enter valid Email";
    emailInput.style.borderColor = "red";
    return false;
  } else {
    emailError.innerHTML = "";
    emailInput.style.borderColor = "green";
    return true;
  }
};

validatePhone = () => {
  if (phoneInput.value === "") {
    phoneError.innerHTML = "*PhoneNumber  is required";
    phoneInput.style.borderColor = "red";
    return false;
  } else if (!regexPhone.test(phoneInput.value)) {
    phoneError.innerHTML = "*Please Enter valid Phone Number";
    phoneInput.style.borderColor = "red";
    return false;
  } else {
    phoneError.innerHTML = "";
    phoneInput.style.borderColor = "green";
    return true;
  }
};

validatePassword = () => {
  if (!regexPassword.test(pwdInput.value)) {
    pwdError.innerHTML = "*Please Enter valid Password";
    pwdInput.style.borderColor = "red";
    return false;
  } else {
    pwdError.innerHTML = "";
    pwdInput.style.borderColor = "green";
    return true;
  }
};

validConfirmPassword = () => {
  if (cpwdInput.value === "") {
    cpwdError.innerHTML = "*Please Enter Confirm Password";
    cpwdInput.style.borderColor = "red";
    return true;
  } else if (pwdInput.value === cpwdInput.value) {
    cpwdError.innerHTML = "";
    cpwdInput.style.borderColor = "green";
    return true;
  } else {
    cpwdError.innerHTML = "*Please Enter valid Confirm Password";
    cpwdInput.style.borderColor = "red";
    return true;
  }
};
var genderSelected;
validateGender = () => {
  genderSelected = Array.from(genderInput).find((gender) => gender.checked);
  if (!genderSelected) {  
    genderError.innerHTML = "*Gender is required";
    return false;
  } else {
    genderError.innerHTML = "";
    return true;
  }
};

validateAddress = () => {
  if (presentAddressInput.value === "") {
    addressError.innerHTML = "*Please enter your present address";
    presentAddressInput.style.borderColor = "red";
    return false;
  } else {
    addressError.innerHTML = "";
    presentAddressInput.style.borderColor = "green";
    return true;
  }
};

validatePermanentAddress = () => {
  if (permanentAddressInput.value === "") {
    addressError2.innerHTML = "*Please enter your present address";
    permanentAddressInput.style.borderColor = "red";
    return false;
  } else {
    addressError2.innerHTML = "";
    permanentAddressInput.style.borderColor = "green";
    return true;
  }
};

validatePresentPincode = () => {
  if (pincodeInput.value === "") {
    pincodeError.innerHTML = "*Please enter your present pincode";
    pincodeInput.style.borderColor = "red";
    return false;
  } else if (!regexPincode.test(pincodeInput.value)) {
    pincodeError.innerHTML = "*Please enter your valid present pincode";
    pincodeInput.style.borderColor = "red";
    return false;
  } else {
    pincodeError.innerHTML = "";
    pincodeInput.style.borderColor = "green";
    return true;
  }
};

validatePermanentPincode = () => {
  if (permanentPincodeInput.value === "") {
    pincodeError2.innerHTML = "*Please enter your permanent pincode";
    permanentPincodeInput.style.borderColor = "red";
    return false;
  } else if (!regexPincode.test(permanentPincodeInput.value)) {
    pincodeError2.innerHTML = "*Please enter your valid permanent pincode";
    permanentPincodeInput.style.borderColor = "red";
    return false;
  } else {
    pincodeError2.innerHTML = "";
    permanentPincodeInput.style.borderColor = "green";
    return true;
  }
};

validateState = () => {
  if (stateInput.value === "") {
    stateError.innerHTML = "*Please select your present State";
    stateInput.style.borderColor = "red";
    return false;
  } else {
    stateError.innerHTML = "";
    stateInput.style.borderColor = "green";
    return true;
  }
};

validatePermanentState = () => {
  if (permanentStateInput.value === "") {
    stateError2.innerHTML = "*Please select your permanent State";
    permanentStateInput.style.borderColor = "red";
    return false;
  } else {
    stateError2.innerHTML = "";
    permanentStateInput.style.borderColor = "green";
    return true;
  }
};

validateDOB = () => {
  if (dobInput.value === "") {
    dobError.innerHTML = "*Please enter DOB";
    dobInput.style.borderColor = "red";
    return false;
  } else {
    dobError.innerHTML = "";
    dobInput.style.borderColor = "green";
    return true;
  }
};

validateTime = () => {
  if (birthTimeInput.value === "") {
    birthTimeError.innerHTML = "*Please enter BirthTime";
    birthTimeInput.style.borderColor = "red";
    return false;
  } else {
    birthTimeError.innerHTML = "";
    birthTimeInput.style.borderColor = "green";
    return true;
  }
};
var langSelected;
validateLanguages = () => {
  langSelected = Array.from(languageInput).filter((values) => values.checked);
  if (!langSelected) {
    languagesError.innerText = "*Choose One";
    // languageInput.style.borderColor = "red"
    return false;
  } else {
    languagesError.innerHTML = "";
    // languageInput.style.borderColor = "green"
    return true;
  }
};

validateInterest = () => {
  const interest = Array.from(interestsInput.options).filter(
    (option) => option.selected
  ).length;
  if (interest === 0) {
    interestError.innerHTML = "*Please select at least one field of interest";
    interestsInput.style.borderColor = "red";
    return false;
  } else {
    interestError.innerHTML = "";
    interestsInput.style.borderColor = "green";
    return true;
  }
};

validatePhoto = () => {
  let imageCount = photoInput.files.length;
  if (imageCount === 0) {
    imageError.innerHTML = "*Please upload your Photo";
    photoInput.style.borderColor = "red";
    return false;
  } else {
    imageError.innerHTML = "";
    photoInput.style.borderColor = "green";
    return true;
  }
};

validateResume = () => {
  let count = filesInput.files.length;
  if (count === 0) {
    resumeError.innerHTML = "*Please upload your Resume";
    filesInput.style.borderColor = "red";
    return false;
  } else {
    resumeError.innerHTML = "";
    filesInput.style.borderColor = "green";
    return true;
  }
};

let data = [];
let editingID = null;
formValidate = async (event) => {
  if (
    validateFirstName() && validateLastName() && validateEmail() && validatePhone() && 
    validatePassword() && validConfirmPassword() && validateGender() &&
     validateAddress() && validatePresentPincode() && validateState() && 
     validatePermanentAddress() && validatePermanentPincode() && validatePermanentState() 
     && validateDOB() && validateTime() && validateLanguages() && 
     validateInterest() && validatePhoto() && validateResume()
  ) {
    event.preventDefault();
    alert("SUBMIT");
    form.style.display = "none";
    document.getElementById("dataTable").style.display = "block";
    document.getElementById("buttons").style.display = "block";
    const firstname = firstNameInput.value.trim();
    const lastname = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = pwdInput.value.trim();
    const gender = genderSelected.value;
    const presentAddress = presentAddressInput.value.trim();
    const pincode = pincodeInput.value.trim();
    const state = stateInput.value.trim();
    const permanentAddress = permanentAddressInput.value.trim();
    const permanentPincode = permanentPincodeInput.value.trim();
    const permanentState = permanentStateInput.value.trim();
    const dob = dobInput.value.trim();
    const birthTime = birthTimeInput.value.trim();
    const languages = langSelected.map((opt) => opt.value).join(",");
    const interest = Array.from(interestsInput.selectedOptions).map(
      (opt) => opt.value
    );

    let base64photo = "";
    if (photoInput.files.length > 0) {
      base64photo = await tobase64(photoInput.files[0]);
    }

    var link = "";
    if (filesInput.files.length > 0) {
      // reader.readAsArrayBuffer(filesInput.files[0]);
      var blob = await getResume(filesInput.files[0]);
      var url = URL.createObjectURL(blob);
      link = `<a href="${url}" download="${filesInput.files[0].name}">${filesInput.files[0].name}</a>`;
    }

    if (editingID != null) {
      const index = data.findIndex((item) => item.id === editingID);
      if (index != -1) {
        data[index] = {
          ...data[index],
          firstname,
          lastname,
          email,
          phone,       
          password,
          gender,
          presentAddress,
          pincode,
          state,
          permanentAddress,
          permanentPincode,
          permanentState,
          dob,
          birthTime,
          languages,
          interest,
          photo: base64photo || data[index].photo,
          resume: link || data[index].resume,
        };
        editingID = null;
        document.getElementById("mySubmit").innerHTML = "Add";
      }
    } else {
      const newData = {
        id: data.length + 1,
        firstname,
        lastname,
        email,
        phone,
        password,
        gender,
        presentAddress,
        pincode,
        state,
        permanentAddress,
        permanentPincode,
        permanentState,
        dob,
        birthTime,
        languages,
        interest,
        photo: base64photo,
        resume: link,
      };
      data.push(newData);
    }
    renderTable();
    // console.log(form );
    // form.reset();
  } else {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validatePassword();
    validConfirmPassword();
    validateGender();
    validateAddress();
    validatePresentPincode();
    validateState();
    validatePermanentAddress();
    validatePermanentPincode();
    validatePermanentState();
    validateDOB();
    validateTime();
    validateLanguages();
    validateInterest();
    validatePhoto();
    validateResume();
    event.preventDefault();
    // alert("Please fill the form correctly!")
  }
};


const edit = (id) => {
  form.style.display = "block";
  document.getElementById("dataTable").style.display = "none";

  editingID = id;
  const item = data.find((item) => item.id === id);
  if (item) {
    firstNameInput.value = item.firstname;
    lastNameInput.value = item.lastname;
    emailInput.value = item.email;
    phoneInput.value = item.phone;
    pwdInput.value = item.password;
    genderInput.value = item.gender;
    presentAddressInput.value = item.presentAddress;
    pincodeInput.value = item.pincode;
    stateInput.value = item.state;
    permanentAddressInput.value = item.permanentAddress;
    permanentPincodeInput.value = item.permanentPincode;
    permanentStateInput.value = item.permanentState;
    dobInput.value = item.dob;
    birthTimeInput.value = item.birthTime;
    languageInput.value = item.languages;
    Array.from(interestsInput.options).forEach((option) => {
      option.selected = item.interest.includes(option.value);
    });
    document.getElementById("mySubmit").innerHTML = "Update";
  }
};

const renderTable = () => {
  tableBody.innerHTML = "";
  const row = document.createElement("tr");
  data.forEach((item) => {
    row.innerHTML = ` 
            <td>${item.firstname}</td>
            <td>${item.lastname}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>${item.password}</td>
            <td>${item.gender}</td>
            <td>${item.presentAddress}</td>
            <td>${item.pincode}</td>
            <td>${item.state}</td>
            <td>${item.permanentAddress}</td>
            <td>${item.permanentPincode}</td>
            <td>${item.permanentState}</td>
            <td>${item.dob}</td>
            <td>${item.birthTime}</td>
            <td>${item.languages}</td>
            <td>${item.interest}</td>
            <td>${item.photo ? `<img src=${item.photo} alt="img"` : ""}</td>
            <td>${item.resume}</td>
            <td>
            <button onclick=remove(${item.id})>Delete</button>
            <button onclick=edit(${item.id})>Edit</button>
            </td>`;

    tableBody.appendChild(row);
  });
};

const remove = (id) => {
  data = data.filter((item) => item.id !== id);
  renderTable();
};

const tobase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

getResume = (resume) => {
  // var file = filesInput.files[0]; // Get the uploaded file
  var reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () =>
      resolve(new Blob([reader.result], { type: resume.type }));
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(resume);
  });
};
// Read the file as an array buffer
copy = () => {
  if (document.getElementById("same").checked ) {
    permanentAddressInput.value = presentAddressInput.value;
    permanentPincodeInput.value = pincodeInput.value;
    permanentStateInput.value = stateInput.value;
    permanentAddressInput.disabled = true;
    permanentPincodeInput.disabled = true;
    permanentStateInput.disabled = true;
    stateError2.innerHTML = "";
    permanentStateInput.style.borderColor = "green";
    addressError2.innerHTML = "";
    permanentAddressInput.style.borderColor = "green";
    pincodeError2.innerHTML = "";
    permanentPincodeInput.style.borderColor = "green";
  } else {
    permanentAddressInput.disabled = false;
    permanentPincodeInput.disabled = false;
    permanentStateInput.disabled = false;
    pincodeError2.innerHTML = "";
    permanentPincodeInput.style.borderColor = "";
    addressError2.innerHTML = "";
    permanentAddressInput.style.borderColor = "";
    stateError2.innerHTML = "";
    permanentStateInput.style.borderColor = "";
  }
};

function clearStyle() {
  const inputs = document.querySelectorAll("input , textarea ,select ");
  inputs.forEach((input) => {
    input.style.borderColor = "";
  });
}

function back(){
  document.getElementById("dataTable").style.display = "none";
  form.style.display = "block";
  document.getElementById("buttons").style.display = "none";

}

function newForm() {
  editingID = null;
  form.reset();
  clearStyle();
  document.getElementById("mySubmit").innerHTML = "Submit";
  form.style.display = "block";
  document.getElementById("dataTable").style.display = "none";
  document.getElementById("buttons").style.display = "none";
}
