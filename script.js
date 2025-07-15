document.getElementById("verificationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const patientId = document.getElementById("patientId").value.trim();
  const medicationCode = document.getElementById("medicationCode").value.trim();
  const resultBox = document.getElementById("result");

  resultBox.innerHTML = "";

  const patientDatabase = {
    "1234567": { barcode: "11223344", page: "record_1234567.html" },
    "7896541": { barcode: "99887766", page: "record_7896541.html" },
  };

  if (
    patientDatabase[patientId] &&
    patientDatabase[patientId].barcode === medicationCode
  ) {
    window.location.href = patientDatabase[patientId].page;
  } else {
    resultBox.innerHTML = "⚠️ Patient ID or Medication Barcode is incorrect.";
  }
});
