const bookName = document.getElementById("book_name");
const emailID = document.getElementById("email_id");
const authorName = document.getElementById("author_name");
const publishedYear = document.getElementById("year");
const price = document.getElementById("price");
const categoryInput = document.getElementById("category")
const info = document.getElementById("info")
const form = document.getElementById("form")
info.display="none"
const regexName = /^[A-Za-z]{3,50}$/;
const regexEmail = /^[\w._-]+@[\w]+\.\w{2,}$/;
const regexYear = /^[0-9]{4}$/;
const regexPrice = /^[0-9]+\.[0-9]+$/;

const bookError = document.getElementById("bookName_error");
const emailError = document.getElementById("email_error");
const authorError = document.getElementById("author_error");
const yearError = document.getElementById("year_error");
const priceError = document.getElementById("price_error");
//to validate the book name
validateBookName = () => {
  const book_name = bookName.value;

  if (book_name.length > 50) {
    bookError.innerHTML = "Book name length should not exceed 50.";
    return false;
  } else if (regexName.test(book_name)) {
    bookError.innerHTML = "";
    return true;
  } else if (book_name === "") {
    bookError.innerHTML = "Book Name is required";
    return false;
  }
  else {
    bookError.innerHTML = "Numeric values not allowed";
    return false;
  }
};

validateEmail = () => {
  const email_id = emailID.value;
 if (email_id === "") {
    emailError.innerHTML = "Email is required";
    return false;
  }
  else if (!regexEmail.test(email_id)) {
    emailError.innerHTML = "Please enter valid Email Address";
    return false;
  }
  else {
    emailError.innerHTML = "";
    return true;
  }
};
validateAuthorName = () => {
  const author_name = authorName.value;

   if (author_name.length > 50) {
    authorError.innerHTML = "Book name length should not exceed 50.";
    return false;
  } else if (/\W/.test(author_name)) {
    authorError.innerHTML = "Special Character not allowed";
    return false;
  }
 else if (author_name === "") {
    authorError.innerHTML = "Author Name is required"
    return false;
  }
  else if (!regexName.test(author_name)) {
    authorError.innerHTML = "Numeric values not allowed";
    return false;
  }
  else {
    authorError.innerHTML = "";
    return true;
  }
};

validateYear = () => {
  const published_year = publishedYear.value;

  if (
    regexYear.test(published_year) &&
    published_year < new Date().getFullYear()
  ) {
    yearError.innerHTML = "";
    return true;
  } else if (published_year === "") {
    yearError.innerHTML = "year is required"
    return false;
  } else {
    yearError.innerHTML = "Please enter valid Published year";
    return false;
  }
};

validatePrice = () => {
  const book_price = price.value;

  if (regexPrice.test(book_price)) {
    priceError.innerHTML = "";
    return true;
  } else if (book_price === "") {
    priceError.innerHTML = "Book price is required"
    return false;
  } else {
    priceError.innerHTML = "Alphabets values not allowed or enter valid price";
    return false;
  }
};

let data = []
let editingID = null;

function validateForm(event) {
  if (validateBookName() && validateEmail() && validateAuthorName() && validateYear() &&
   validatePrice()) {
    event.preventDefault();
    alert("form submitted");
    form.style.display = "none"
    info.style.display = "block"
    const book_category = categoryInput.value
    const book_name = bookName.value.trim();
    const book_Author = authorName.value.trim();
    const email_id = emailID.value.trim();
    const published_year = publishedYear.value
    const book_price = parseFloat(price.value)

    const newData = {
      book_category,
      book_name,
      book_Author,
      email_id,
      published_year,
      book_price,
    }
    data.push(newData)


  } else {
    validateBookName() ; validateEmail() ; validateAuthorName() ; validateYear() ; 
    validatePrice()
    event.preventDefault();
    alert("please fill the form correctly");
  }
}

const display = () => {
  validateForm(event)
  // event.preventDefault()
  
  info.innerHTML = "";
  data.forEach((item)=>{
    info.innerHTML = `
    <h4>${item.book_name} Book Details</h4> <br><br>
    <div class="head">Category</div>  
    <span>${item.book_category}</span> <br><br>
    <div class="head">Book  </div>  
    <span>${item.book_name}</span><br><br>
    <div class="head">Author Email</div> 
    <span>${item.email_id}</span><br><br>
    <div class="head">Author </div> 
    <span>${item.book_Author}</span><br><br>
    <div class="head">Published </div> 
    <span>${item.published_year}</span><br><br>
    <div class="head">Price </div> 
    <span>${item.book_price}</span><br><br>
    <h3>
  `;
  })
  

}

