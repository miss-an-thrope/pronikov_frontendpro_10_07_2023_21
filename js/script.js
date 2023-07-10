const displayTable = () => {
    let form = document.getElementById("myForm");
    form.style.display = "none";

    const tableContainer = document.getElementById("tableContainer");

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;

    let languages = document.getElementsByName("languages");
    let selectedLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].checked) {
        selectedLanguages.push(languages[i].value);
      }
    }
    
    let table = "<table>" +
      "<tr><td>Ім'я:</td><td>" + firstName + "</td></tr>" +
      "<tr><td>Прізвище:</td><td>" + lastName + "</td></tr>" +
      "<tr><td>Дата народження:</td><td>" + birthdate + "</td></tr>" +
      "<tr><td>Стать:</td><td>" + gender + "</td></tr>" +
      "<tr><td>Місто:</td><td>" + city + "</td></tr>" +
      "<tr><td>Адреса:</td><td>" + address + "</td></tr";

    if (selectedLanguages.length > 0) {
      table += "<tr><td>Мови, якими володієте:</td><td>" + selectedLanguages.join(", ") + "</td></tr>";
    }

    table += "</table>";

    tableContainer.innerHTML = table;
}