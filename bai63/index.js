window.onload = function ()
{
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");
  
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i < 10 ? `0${i}` : i;
      daySelect.appendChild(option);
    }
  
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      monthSelect.appendChild(option);
    }
  
    const currentYear = new Date().getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
    };
  
function Register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
  
    const hobbies = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
      hobbies.push(checkbox.value);
    });
  
    const color = document.querySelector('input[name="color"]:checked')?.value;
  
    if (!name) {
      alert("Tên không được bỏ trống! Vui lòng nhập tên");
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Email không hợp lệ! Vui lòng nhập lại");
      return;
    }
  
    const table = document.getElementById("Table");
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = gender || "";
    row.insertCell(3).textContent = `${day}/${month}/${year}`;
    row.insertCell(4).textContent = hobbies.join(", ");
  
    const colorCell = row.insertCell(5);
    colorCell.textContent = color || "";
    }
  
function Continue() {
    document.getElementById("registerForm").reset();
    document.getElementById("name").focus();
  }
  