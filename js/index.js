document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("textInput");
  textInput.addEventListener("keypress", function (e) {
    if (e.key === "p") {
      sendMessage();
    }
  });

  

  function sendMessage() {
    const notification = document.querySelector(".notification");
    notification.innerHTML +=
      "<p>" + "Please Wait, I am working on it..." + "</p>";
    notification.innerHTML +=
      "<p><strong>Complexity:</strong> " +
      "How complex is the epic ? (e.g., simple, moderate, highly complex)" +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Customer Collaboration:</strong> " +
      "Is there a high degree of uncertainty regarding requirements or technology for the epic ? " +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Focus on Efficiency:</strong> " +
      "Is frequent customer feedback and iteration crucial for the epic ?" +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Focus on Quality:</strong> " +
      "Is there a strong emphasis on getting a minimum viable product (MVP) to market quickly for the epic ?" +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Project Timeline:</strong> " +
      "Is the team working on the epic  large, distributed, or self-organizing?" +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Team Size and Structure:</strong> " +
      "Is the project timeline for the epic  flexible or fixed?" +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Time to Market:</strong> " +
      "Is there a strong emphasis on defect reduction and process improvement for the epic ?" +
      "</p>";
    notification.innerHTML +=
      "<p><strong>Uncertainty:</strong> " +
      "Is there a strong need to eliminate waste and optimize workflows for the epic ?" +
      "</p>";
    notification.innerHTML +=
    '<p><strong>Recommended Methodologies:</strong> ' +
    '<p>Reason for choosing the scrum methodology</p>'+
    '<input type="button" value="Scrum" onclick="redirectToScrumPage()">' +
    '<p>Reason for choosing the Six Sigma methodology</p>'+
    '<input type="button" value="Six Sigma" onclick="redirectToSixSigmaPage()">' +
    '<p>Reason for choosing the Lean Product Development methodology</p>'+
    '<input type="button" value="Lean Product Development" onclick="redirectToLeanProductDevelopmentPage()">' +
    '</p>';
    textInput.value = "";
    notification.scrollTop = notification.scrollHeight;

  }
});

function redirectToScrumPage() {
  window.location.href = "scrum.html";
}

function redirectToSixSigmaPage() {
  window.location.href = "six-sigma.html";
}

function redirectToLeanProductDevelopmentPage() {
  window.location.href = "lean-product-development.html";
}

