alert("hello");

function addDate(){
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}

function estimate() {
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    var totalCost = cost;

    document.getElementById("estimate").innerHTML = (name + " , Your estimate = " + cost);
}

function showScreen() {
    numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById("room2").style.display = "none"
        
        document.getElementById("room3").style.display = "none"
    
    }

    if (numRooms == 2) {
        document.getElementById("room2").style.display = "block"
        
        document.getElementById("room3").style.display = "none"
    
    }
    if (numRooms == 3) {
        document.getElementById("room2").style.display = "block"
        
        document.getElementById("room3").style.display = "block"
    
    }
}