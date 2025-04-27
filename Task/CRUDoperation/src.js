const form = document.getElementById("form");
const myNameInput = document.getElementById("myName");
const fatherNameInput = document.getElementById("fatherName");
const genderInput = document.getElementById("gender");
const phoneInput = document.getElementById("phone");
const languagesInput = document.getElementById("languages");
const dobInput = document.getElementById("dob");
const photoInput = document.getElementById("photo");
const balanceInput = document.getElementById("balance");
const tableBody = document.querySelector("#dataTable tbody");


const regexName = /^[A-Za-z\s]{3,50}$/;
const regexPhone = /\d{10}$/;
const regexBalance = /^([0-9])+$/;

const userNameError = document.getElementById("name_error");
const fatherNameError = document.getElementById("fatherName_error");
const phoneError = document.getElementById("phone_error");
const balanceError = document.getElementById("balance_error");

let data = [];
let editingId = null;

validateName = () => {
  const my_Name = myNameInput.value;
  if (!regexName.test(my_Name)) {
    userNameError.innerHTML ="Please enter valid Name min-length-3 max-length: 50";
    return false;
  } else {
    userNameError.innerHTML = "";
    return true;
  }
};
validateFatherName = () => {
  const father_name = fatherNameInput.value;
  if (!regexName.test(father_name)) {
    fatherNameError.innerHTML ="Please enter valid Name min-length-3 max-length: 50";
    return false;
  } else {
    fatherNameError.innerHTML = "";
    return true;
  }
};
validatePhone = () => {
  const my_phone = phoneInput.value;
  if (!regexPhone.test(my_phone)) {
    phoneError.innerHTML = "Please enter valid phone";
    return false;
  } else {
    phoneError.innerHTML = "";
    return true;
  }
};
validateBalance = () => {
  const my_balance = balanceInput.value;
  if (!regexBalance.test(my_balance)) {
    balanceError.innerHTML = "Please enter valid balance";
    return false;
  } else {
    balanceError.innerHTML = "";
    return true;
  }
};


 formValidate= async(event)=> {
  if (validateName() && validateFatherName() && validatePhone() && validateBalance()) {
    event.preventDefault();
    alert("Form submitted");

    const name = myNameInput.value.trim();
    const fatherName = fatherNameInput.value.trim();
    const gender = genderInput.value;
    const phone = phoneInput.value.trim();
    const languages = Array.from(languagesInput.selectedOptions).map(
      (opt) => opt.value
    );
    const dob = dobInput.value;
    const balance = parseFloat(balanceInput.value);

    let base64Photo = "";
    if (photoInput.files.length > 0) {
      base64Photo = await toBase64(photoInput.files[0]);
    }

    if (editingId !== null) {
      const index = data.findIndex((item) => item.id === editingId);
      if (index !== -1) {
        data[index] = {
          ...data[index],
          name,
          fatherName,
          gender,
          phone,
          languages,
          dob,
          photo: base64Photo || data[index].photo,
          balance,
        };
        editingId = null;
        document.getElementById("submitButton").innerHTML = "Add";
      }
    } else {
      const newData = {
        id: data.length + 1,
        name,
        fatherName,
        gender,
        phone,
        languages,
        dob,
        photo: base64Photo,
        balance,
      };
      data.push(newData);
    }
    renderTable();
    form.reset();
  } else {
    event.preventDefault();
    alert("Please fill the form correctly");
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

var renderTable = () => {
  tableBody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.fatherName}</td>
        <td>${item.gender}</td>
        <td>${item.phone}</td>
        <td>${item.languages.join(", ")}</td>
        <td>${item.dob}</td>
        <td>${item.photo ? `<img src = "${item.photo}" alt="photo">` : ""}</td>
        <td>${item.balance.toFixed(2)}</td>
        <td>
         <button onclick="edit(${item.id})">Edit</button>
          <button onclick="remove(${item.id})">Delete</button>
        </td>`;
    tableBody.appendChild(row);
  });
};

const edit = (id) => {
  editingId = id;
  const item = data.find((item) => item.id === id);
  if (item) {
    myNameInput.value = item.name;
    fatherNameInput.value = item.fatherName;
    genderInput.value = item.gender;
    phoneInput.value = item.phone;
    dobInput.value = item.dob;
    balanceInput.value = item.balance;

    Array.from(languagesInput.options).forEach((option) => {
      option.selected = item.languages.includes(option.value);
    });

    document.getElementById("submitButton").innerText = "Update";
  }
};

const remove = (id) => {
  data = data.filter((item) => item.id !== id);
  renderTable();
};
