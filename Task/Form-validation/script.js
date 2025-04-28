const regexName = /^[A-Za-z\s]{3,50}$/;
const regexEmail = /^[\w._-]+@[\w]+\.\w{2,}$/;
const regexPincode = /^[0-9]{6}$/;
const regexPhone = /^[0-9]{10}$/;

const nameInput = document.getElementById("name");
const fatherNameInput = document.getElementById("fatherName");
const emailInput = document.getElementById("email");
const dobInput = document.getElementById("dob");
const phoneInput = document.getElementById("mobile");
const address1Input = document.getElementById("address");
const addressl1Input = document.getElementById("addressl1");
const address2Input = document.getElementById("address2");
const addressl2Input = document.getElementById("addressl2");
const city1Input = document.getElementById("city");
const city2Input = document.getElementById("city2");
const state1Input = document.getElementById("state");
const state2Input = document.getElementById("state2");
const pincode1Input = document.getElementById("pincode");
const pincode2Input = document.getElementById("pincode2");
const photoInput = document.getElementById("photo");
const displayDiv = document.getElementById("display");
displayDiv.style.display="none"

const nameError = document.getElementById("nameError");
const fatherNameError = document.getElementById("fatherNameError");
const emailError = document.getElementById("emailError");
const dobError = document.getElementById("dobError");
const mobileError = document.getElementById("mobileError");
const addressError = document.getElementById("addressError");
const address2Error = document.getElementById("address2Error");
const cityError = document.getElementById("cityError");
const city2Error = document.getElementById("city2Error");
const stateError = document.getElementById("stateError");
const state2Error = document.getElementById("state2Error");
const pincode1Error = document.getElementById("pincode1Error");
const pincode2Error = document.getElementById("pincode2Error");
const photoError = document.getElementById("fileError");

validateName = () => {
  const nameValue = nameInput.value;

  if (regexName.test(nameValue)) {
    nameError.innerHTML = "";
    return true;
  } else if (nameValue === "") {
    nameError.innerHTML = "Name is required";
    return false;
  } else {
    nameError.innerHTML = "Numeric and Specialcharcters not allowed";
    return false;
  }
};

validateFatherName = () => {
  const fatherNameValue = fatherNameInput.value;

  if (regexName.test(fatherNameValue)) {
    fatherNameError.innerHTML = "";
    return true;
  } else if (fatherNameValue === "") {
    fatherNameError.innerHTML = "Name is required";
    return false;
  } else {
    fatherNameError.innerHTML = "Numeric and Specialcharcters not allowed";
    return false;
  }
};

validateEmail = () => {
  const email_id = emailInput.value;
  if (email_id === "") {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!regexEmail.test(email_id)) {
    emailError.innerHTML = "Please enter valid Email Address";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
};
validateDOB = () => {
  const dobValue = dobInput.value;
  if (dobValue === "") {
    dobError.innerHTML = "DOB is required";
    return false;
  } else {
    dobError.innerHTML = "";
    return true;
  }
};

validatePhone = () => {
  const phoneValue = phoneInput.value;
  if (phoneValue === "") {
    mobileError.innerHTML = "PhoneNumber  is required";
    return false;
  } else if (!regexPhone.test(phoneValue)) {
    mobileError.innerHTML = "Please Enter valid Phone Number";
    return false;
  } else {
    mobileError.innerHTML = "";
    return true;
  }
};

validateAddress = () => {
  const addressValue = address1Input.value;
  if (addressValue === "") {
    addressError.innerHTML = "Address is Required";
    return false;
  } else {
    addressError.innerHTML = "";
    return true;
  }
};
validateAddress2 = () => {
  const address2Value = address2Input.value;
  if (address2Value === "") {
    address2Error.innerHTML = "Address is Required";
    return false;
  } else {
    address2Error.innerHTML = "";
    return true;
  }
};

validateCity1 = () => {
  const city1Value = city1Input.value;

  if (regexName.test(city1Value)) {
    cityError.innerHTML = "";
    return true;
  } else if (city1Value === "") {
    cityError.innerHTML = "City Name is required";
    return false;
  } else {
    cityError.innerHTML = "Numeric and Specialcharcters not allowed";
    return false;
  }
};

validateCity2 = () => {
  const city2Value = city2Input.value;

  if (regexName.test(city2Value)) {
    city2Error.innerHTML = "";
    return true;
  } else if (city2Value === "") {
    city2Error.innerHTML = "City Name is required";
    return false;
  } else {
    city2Error.innerHTML = "Numeric and Specialcharcters not allowed";
    return false;
  }
};

validatePincode = () => {
  const pincode1 = pincode1Input.value;
  if (pincode1 === "") {
    pincode1Error.innerHTML = "Please enter your pincode";
    return false;
  } else if (!regexPincode.test(pincode1)) {
    pincode1Error.innerHTML = "Please enter your valid permanent pincode";
    return false;
  } else {
    pincode1Error.innerHTML = "";
    return true;
  }
};

validatePincode2 = () => {
  const pincode2 = pincode2Input.value;
  if (pincode2 === "") {
    pincode2Error.innerHTML = "Please enter your pincode";
    return false;
  } else if (!regexPincode.test(pincode2)) {
    pincode2Error.textContent = "Please enter your valid permanent pincode";
    return false;
  } else {
    pincode2Error.textContent = "";
    return true;
  }
};

validatestate1 = () => {
  const pincode2 = state1Input.value;
  if (pincode2 === "") {
    stateError.textContent = "Please select your state";
    return false;
  } else {
    stateError.textContent = "";
    return true;
  }
};

validatestate2 = () => {
  const state2value = state2Input.value;
  if (state2value === "") {
    state2Error.textContent = "Please select your state";
    return false;
  } else {
    state2Error.textContent = "";
    return true;
  }
};

validatePhoto = () => {
  let imageCount = photoInput.files.length;
  if (imageCount === 0) {
    photoError.textContent = "Please upload your Photo";
    return false;
  } else {
    photoError.textContent = "";
    return true;
  }
};

copy=()=>{
    if(document.getElementById("check").checked)
    {
        address2Input.value=address1Input.value;
        addressl2Input.value=addressl1Input.value;
        state2Input.value=state1Input.value;
        pincode2Input.value=pincode1Input.value;
        city2Input.value=city1Input.value
        city2Input.disabled=true;
        address2Input.disabled=true;
        addressl2Input.disabled=true;
        state2Input.disabled=true;
        pincode2Input.disabled=true;
    }
    else{
        address2Input.disabled=false;
        addressl2Input.disabled=false;
        state2Input.disabled=false;
        pincode2Input.disabled=false;
        city2Input.disabled=false;
        city2Error=""
        address2Error.textContent="";
        state2Error.textContent="";
        pincode2Error.textContent="";
    }
}



validateForm= async(event)=>{
    if(validateName() && validateFatherName() && validateEmail() && validateDOB() && validatePhone() && validateAddress() && validateAddress2() && validateCity1() && validateCity2() && validatestate1() && validatestate2() && validatePincode() && validatePincode2() && validatePhoto())
    {
      event.preventDefault();
      displayDiv.style.display="block"
      document.getElementById("form").style.display="none"
      var PresentAddress= `${address1Input.value} ${addressl1Input.value}, ${city1Input.value}, ${state1Input.value}, ${pincode1Input.value} `
      var permanentAddress= `${address2Input.value} ${addressl2Input.value}, ${city2Input.value}, ${state2Input.value}, ${pincode2Input.value} `
      let base64Photo = "";
      if (photoInput.files.length > 0) {
        base64Photo = await toBase64(photoInput.files[0]);
      }

      displayDiv.innerHTML=""
      displayDiv.innerHTML=`
      <h1 style align="center">Application Details </h1> <br>
      <h3>Name: </h3> <p>${nameInput.value}</p><br>
      <h3>Father Name: </h3><p>${fatherNameInput.value}</p><br>
      <h3>Email: </h3><p>${emailInput.value}</p><br>
      <h3>Date of Birth: </h3><p>${dobInput.value}</p><br>
      <h3>Phone: </h3><p>${phoneInput.value}</p><br>
      <h3>Present Address: </h3><p>${PresentAddress}</p><br>
      <h3>Permanent Address: </h3><p>${permanentAddress}</p><br>
      <h3>Photo: </h3><p>${`<img src = "${base64Photo}" alt="photo" height="80px">`}</p><br>
      <Button onclick="newUser()">Reset</Button>
      `

    }
    else{
      validateName() ; validateFatherName() ; validateEmail() ; validateDOB() ; validatePhone() ; validateAddress() ; validateAddress2() ; validateCity1() ; validateCity2() ; validatestate1() ; validatestate2() ; validatePincode() ; validatePincode2() ; validatePhoto()
      event.preventDefault();
    }
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function newUser(){
  displayDiv.style.display="none"
  document.getElementById("form").style.display="flex"
  document.getElementById("form").reset();
}