// Dog objects
const car1 = {
    heading: "Mercedes-AMG GT!",
    image: "images/amg.jpeg",
    caption: "This is one of the coolest cars that Mercedes makes.",
    altTag: "mercedes-amg-gt"
};

const car2 = {
    heading: "VW Beetle!",
    image: "images/beetle.jpeg",
    caption: "This is one of the most iconic cars in the world.",
    altTag: "vw-beetle"
};

const car3 = {
    heading: "Porshe Carrera GT!",
    image: "images/carreragt.png",
    caption: "It's a car that is as old as I am... Who aged better?",
    altTag: "porshe-carrera-gt"
};

const car4 = {
    heading: "Ford GT!",
    image: "images/fordgt.jpeg",
    caption: "Lots of GTs on this list. Which is best?",
    altTag: "ford-gt"
};


function loadPage(){
    loadCar1(car1, 1);
    loadCar2(car2, 2);
    loadCar3(car3, 3);
    loadCar4(car4, 4);
}


function loadCar1(car, carNum){
    document.getElementById("heading" + carNum).innerHTML = car.heading;
    document.getElementById("img" + carNum).src = car.image;
    document.getElementById("img" + carNum).style.display = "block";
    document.getElementById("p" + carNum).innerHTML = car.caption;
    document.getElementById("img" + carNum).setAttribute('alt', car.altTag);

}

function loadCar2(car, carNum){
    document.getElementById("heading" + carNum).innerHTML = car.heading;
    document.getElementById("img" + carNum).src = car.image;
    document.getElementById("img" + carNum).style.display = "block";
    document.getElementById("p" + carNum).innerHTML = car.caption;
    document.getElementById("img" + carNum).setAttribute('alt', car.altTag);

}

function loadCar3(car, carNum){
    document.getElementById("heading" + carNum).innerHTML = car.heading;
    document.getElementById("img" + carNum).src = car.image;
    document.getElementById("img" + carNum).style.display = "block";
    document.getElementById("p" + carNum).innerHTML = car.caption;
    document.getElementById("img" + carNum).setAttribute('alt', car.altTag);

}

function loadCar4(car, carNum){
    document.getElementById("heading" + carNum).innerHTML = car.heading;
    document.getElementById("img" + carNum).src = car.image;
    document.getElementById("img" + carNum).style.display = "block";
    document.getElementById("p" + carNum).innerHTML = car.caption;
    document.getElementById("img" + carNum).setAttribute('alt', car.altTag);

}