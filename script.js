function nextStep() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("greeting").innerHTML = "Hi, " + name + "!";
    document.getElementById("question").classList.remove("hidden");
}

function showImage() {
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("message").innerHTML = "Here's your surprise ❤️";
}

function sayNo() {
    document.getElementById("message").innerHTML = "Maybe next time! 😊";
}