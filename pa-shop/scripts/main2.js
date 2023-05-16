const myHeading = document.querySelector("h1");
myHeading.textContent = "Hallo Cristina";


window.onload = () => {
    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("aha");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
    alert("Cristina, halt dei fresse")
};


function multiply(num1, num2) {
    let result = num1 * num2;
    console.log(result);
    return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});