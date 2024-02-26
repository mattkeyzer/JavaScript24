
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
var information = '';
for (var i = 0; i < months.length; i++) {
    switch (months[i]) {
        case "January":
            information += months[i] + "<br>";
            information += "New Year's Day" + "<br>";
            information += "MLK Day" + "<br><br>";
            break;
        case "February":
            information += months[i] + "<br>";
            information += "Valentine's Day" + "<br>";
            information += "Presidents' Day" + "<br><br>";
            break;
        case "March":
            information += months[i] + "<br>";
            information += "International Women's Day" + "<br>";
            information += "St. Patrick's Day" + "<br><br>";
            break;
        case "April":
            information += months[i] + "<br>";
            information += "April Fools' Day" + "<br>";
            information += "Earth Day" + "<br><br>";
            break;
        case "May":
            information += months[i] + "<br>";
            information += "Mother's Day" + "<br>";
            information += "Memorial Day" + "<br><br>";
            break;
        case "June":
            information += months[i] + "<br>";
            information += "Father's Day" + "<br>";
            information += "Summer Solstice" + "<br><br>";
            break;
        case "July":
            information += months[i] + "<br>";
            information += "Independence Day" + "<br>";
            information += "My Birthday" + "<br><br>";
            break;
        case "August":
            information += months[i] + "<br>";
            information += "International Youth Day" + "<br>";
            information += "National Dog Day" + "<br><br>";
            break;
        case "September":
            information += months[i] + "<br>";
            information += "Labor Day" + "<br>";
            information += "9-11 Rememberance Day" + "<br><br>";
            break;
        case "October":
            information += months[i] + "<br>";
            information += "Columbus Day" + "<br>";
            information += "Halloween" + "<br><br>";
            break;
        case "November":
            information += months[i] + "<br>";
            information += "Veterans Day" + "<br>";
            information += "Thanksgiving Day" + "<br><br>";
            break;
        case "December":
            information += months[i] + "<br>";
            information += "Christmas Day" + "<br>";
            information += "New Year's Eve" + "<br><br>";
            break;

            
    
    default:
        information = "Sadface";
        break;
    }
}


document.getElementById("months").innerHTML = information;
