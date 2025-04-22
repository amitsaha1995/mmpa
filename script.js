// script.js

function $(id) {
  return document.getElementById(id);
}

function showStatus(message, color = 'lightgreen') {
  const status = $("status");
  status.textContent = message;
  status.style.color = color;
}

// Sign up new users
function signup() {
  const email = $("email").value;
  const password = $("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showStatus("Signup successful 🎉");
    })
    .catch((error) => {
      showStatus("Signup error: " + error.message, "pink");
    });
}

// Login existing users
function login() {
  const email = $("email").value;
  const password = $("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showStatus("Login successful ✅");
    })
    .catch((error) => {
      showStatus("Login error: " + error.message, "pink");
    });
}

// Optional: track if user is signed in
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("User logged out");
  }
});
