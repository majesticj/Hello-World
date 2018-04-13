function idCard ()
{
 // object.onclick = function(){idCard}

    var firstName = document.getElementById('FirstName').value;
    var lastName = document.getElementById('LastName').value;
    var address = document.getElementById('Address').value;
    var age = document.getElementById('Age').value;
    var phoneNumber = document.getElementById('PhoneNumber').value;

    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);

    for (var i = 0; i <= numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById('Age').innerHTML = 'Age' + age;
        }
        if (numberArray[i] > 100) {
            document.getElementById('PhoneNumber').innerHTML = 'PhoneNumber' + phoneNumber;
        }

    }
        

}
 
 