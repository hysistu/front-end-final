const apiUrl = "https://66b4a05c9f9169621ea3c858.mockapi.io/api/ch/id";
const corsProxy = "https://cors-anywhere.herokuapp.com/";
let currentUserId = null;

document.addEventListener("DOMContentLoaded", getUsers);

async function getUsers() {
  try {
    const response = await fetch(corsProxy + apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const userList = document.getElementById("users");
    let dropdownPerdoruesit = document.getElementById("perdoruesit");

    userList.innerHTML = "";
    // let dropdownPerdoruesit = document.getElementById("perdoruesit");
    // userList.map(function (perdoruesi) {
    //   let opsioni = document.createElement("option");
    //   opsioni.textContent = perdoruesi.name;
    //   dropdownPerdoruesit.appendChild(opsioni.name);
    // });
    data.forEach((user) => {
      const li = document.createElement("li");
      let opsioni = document.createElement("option");
      opsioni.textContent = user.name;
      dropdownPerdoruesit.appendChild(opsioni);
      li.innerHTML = `
      <img src="${user.avatar}"  alt="${user.name}"/>
        ${user.name} (${user.email})
        <button onclick="deleteUser(${user.id})">Delete</button>
        <button onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
      `;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch(corsProxy + apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    getUsers();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteUser(id) {
  try {
    const response = await fetch(corsProxy + `${apiUrl}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    getUsers();
  } catch (error) {
    console.error("Error:", error);
  }
}

function editUser(id, currentName, currentEmail) {
  document.getElementById("name").value = currentName;
  document.getElementById("email").value = currentEmail;
  document.getElementById("updateButton").style.display = "inline-block";
  currentUserId = id;
}

async function updateUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  try {
    const response = await fetch(corsProxy + `${apiUrl}/${currentUserId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    getUsers();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("updateButton").style.display = "none";
    currentUserId = null;
  } catch (error) {
    console.error("Error:", error);
  }
}
//https://cors-anywhere.herokuapp.com/corsdemo

//https://mockapi.io/projects/66b4a05c9f9169621ea3c859
