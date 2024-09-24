function copyText() {
  const textToCopy = document.getElementById("textToCopy").value;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Success feedback
      document.getElementById("message").innerText = "Text copied!";

      // Pasting the copied text into two different fields
      document.getElementById("file1").value = textToCopy;
      document.getElementById("file2").value = textToCopy;
    })
    .catch((err) => {
      // Error feedback
      document.getElementById("message").innerText = "Failed to copy text.";
      console.error("Error copying text: ", err);
    });
}

// function copyText() {
//   const textToCopy = document.getElementById("textToCopy").value;

//   navigator.clipboard
//     .writeText(textToCopy)
//     .then(() => {
//       // Success feedback
//       document.getElementById("message").innerText = "Text copied!";
//     })
//     .catch((err) => {
//       // Error feedback
//       document.getElementById("message").innerText = "Failed to copy text.";
//       console.error("Error copying text: ", err);
//     });
// }
