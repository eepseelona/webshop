function updateEmail() {
    let email = prompt("Kérlek add meg az új email címed:");
}

function updateUsername() {
    let username = prompt("Kérlek add meg az új felhasználó nevedet:");
}

function updatePassword() {
    let password = prompt("Kérlek add meg az új jelszavadat:");
}

function updateAddress() {
    let zipCode = prompt("Kérlek add meg az új irányítószámodat:");
    let city = prompt("Kérlek add meg az új települést:");
    let street = prompt("Kérlek add meg az új utcát:");
    let house = prompt("Kérlek add meg az új házszámodat:");
}


function deleteUser() {
    var mydata = JSON.parse(data);
    console.log(mydata[0].result);
    // prompt("Biztos, hogy törölni szeretnéd a felhasználót? Ha igen, add meg a jelszavadat:");
    // // let pwd = "asd";
    // if (data == false) {
    //     alert("Rossz jelszót adtál meg.");
    // } else {
    //     alert ("Sikeres törlés.");
    // }
}