function addDateTime(message="Bonjour"){
    const dateTimeNow = new Date();
    console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
    console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15
    return message + ", nous sommes le "+dateTimeNow.toLocaleDateString() + " et il est " + dateTimeNow.toLocaleTimeString();
}

alert(addDateTime());
