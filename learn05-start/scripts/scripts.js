// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Gold Dog",
    image: "images/gold-dog.jpg",
    caption: "Wisdom is learning from other's mistakes",
    altTag: "Gold dog in the grass."
};

const dog3 = {
    heading: "Snow Dog",
    image: "images/snow-dog.jpg",
    caption: "Fa la la la la",
    altTag: "Hey... give him back is arm!"
};

const dog4 = {
    heading: "White Dog",
    image: "images/white-dogs.jpg",
    caption: "Just hanging out on the beach",
    altTag: "I love playing in the sand."
};

function chooseDog(dog) {
    if (dog == 1) {
        loadMe(dog1, 1) // don't put dog1 in quotes or it will pass a string   not the object
    }

    if (dog == 2) {
        loadMe(dog2, 2) // don't put dog1 in quotes or it will pass a string   not the object
    }

    if (dog == 3) {
        loadMe(dog3, 3) // don't put dog1 in quotes or it will pass a string   not the object
    }

    if (dog == 4) {
        loadMe(dog4, 4) // don't put dog1 in quotes or it will pass a string   not the object
    }
}


function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
    document.getElementById("btn" + dogNum).style.display = "none";
}