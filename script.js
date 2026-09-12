function generateQR() {

    // Get the text entered by the user
    const text = document.getElementById("textInput").value;

    // Get QR container
    const qrContainer = document.getElementById("qrContainer");

    // Check if input is empty
    if (text.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    // Remove previous QR code
    qrContainer.innerHTML = "";

    // Generate new QR code
    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200
    });
}