const clearFields = params => {
  switch (params) {
    case "login":
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      break;
    case "signup":
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      document.getElementById("email").value = "";
      document.getElementById("fullname").value = "";
      break;
    case "request":
      document.getElementById("equipment").value = "";
      document.getElementById("model").value = "";
      document.getElementById("message").value = "";
      break;
    default:
      console.log("Enjoy your day mr default");
      break;
  }
};

/*****************************************************************
                  VALIDATION FOR LOGIN
******************************************************************/

const validateLogin = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) {
    swal("Oops!", "Please Fill all fields", "error");
    clearFields("login");
    return;
  }

  location.href = "user_page.html";
};

let login = document.getElementById("loginSubmit");
if (login) login.addEventListener("click", validateLogin);

/*****************************************************************
                  END OF VALIDATION FOR LOGIN
******************************************************************/

/*****************************************************************
                  VALIDATION FOR SIGNUP
******************************************************************/

const validateSignup = () => {
  console.log("hello");
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let fullname = document.getElementById("fullname").value;

  if (!username || !password || !fullname || !email) {
    swal("Oops!", "Please Fill all fields", "error");
    clearFields("signup");
    return;
  }

  location.href = "user_page.html";
};

let signup = document.getElementById("signupSubmit");

if (signup) signup.addEventListener("click", validateSignup);

/*****************************************************************
                  END OF VALIDATION FOR SIGNUP
******************************************************************/

/*****************************************************************
                  VALIDATION FOR REQUEST
******************************************************************/

const validateRequest = () => {
  console.log("hello");
  let equipment = document.getElementById("equipment").value;
  let model = document.getElementById("model").value;
  let message = document.getElementById("message").value;

  if (!equipment || !model || !message) {
    swal("Oops!", "Please Fill all fields", "error");
    clearFields("request");
    return;
  }

  location.href = "user_request_view.html";
};

let request = document.getElementById("requestSubmit");

if (request) request.addEventListener("click", validateRequest);

/*****************************************************************
                  END OF VALIDATION FOR REQUEST
******************************************************************/

/*****************************************************************
                SWEETALERTS FOR ADMIN DETAILS BUTTONS
******************************************************************/

const resolveRequest = evt => {
  console.log(evt.target.params);
  switch (evt.target.params) {
    case "resolve":
      swal("Dear User", "Your request has been resolved", "success");
      break;
    case "approve":
      swal("Dear User!", "Your request has been approved", "success");
      break;
    case "reject":
      swal("Oops!", "You request has been rejected", "error");
      break;
    case "status":
      swal("Dear User!", "You request is been processed", "info");
      break;
    default:
      console.log("ENjoy");
      break;
  }
};

let resolveBtn = document.getElementById("resolve");
let approveBtn = document.getElementById("approve");
let rejectBtn = document.getElementById("reject");
// let statusBtn = document.getElementById("status");
if (resolveBtn) resolveBtn.addEventListener("click", resolveRequest); resolveBtn.params = "resolve";
if (approveBtn) approveBtn.addEventListener("click", resolveRequest);approveBtn.params = "approve";
if (rejectBtn) rejectBtn.addEventListener("click", resolveRequest); rejectBtn.params = "reject";
