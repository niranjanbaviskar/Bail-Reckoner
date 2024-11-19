// Sample data for prisoners
const prisoners = [
    {
      id: "1",
      password: "12345",
      name: "John Doe",
      crime: "Theft",
      section: "IPC 379",
      age: 30,
      timeRemaining: "2 years",
    },
    {
      id: "2",
      password: "password",
      name: "Jane Smith",
      crime: "Fraud",
      section: "IPC 420",
      age: 40,
      timeRemaining: "5 years",
    },
  ];
  
  // Sample data for lawyers
  const lawyers = [
    { name: "Mr. A", specialization: "Theft" },
    { name: "Ms. B", specialization: "Fraud" },
  ];
  
  // Prisoner login
  function loginPrisoner() {
    const id = document.getElementById("prisoner-id").value;
    const password = document.getElementById("password").value;
    const prisoner = prisoners.find((p) => p.id === id && p.password === password);
  
    const detailsDiv = document.getElementById("prisoner-details");
    if (prisoner) {
      detailsDiv.innerHTML = `
        <h3>Prisoner Details</h3>
        <p>Name: ${prisoner.name}</p>
        <p>Crime: ${prisoner.crime}</p>
        <p>Section: ${prisoner.section}</p>
        <p>Age: ${prisoner.age}</p>
        <p>Time Remaining: ${prisoner.timeRemaining}</p>
      `;
    } else {
      detailsDiv.innerHTML = "<p>Invalid ID or Password.</p>";
    }
  }
  
  // Bail calculation
  function calculateBail() {
    const severity = document.getElementById("crime-severity").value;
    const resultDiv = document.getElementById("bail-result");
    if (severity) {
      const bailAmount = severity * 5000; // Example formula
      resultDiv.innerHTML = `<p>Bail Amount: ₹${bailAmount}</p>`;
    } else {
      resultDiv.innerHTML = "<p>Please enter crime severity.</p>";
    }
  }
  
  // Lawyer finder
  function findLawyer() {
    const caseType = document.getElementById("case-type").value.toLowerCase();
    const lawyer = lawyers.find((l) => l.specialization.toLowerCase() === caseType);
  
    const resultDiv = document.getElementById("lawyer-result");
    if (lawyer) {
      resultDiv.innerHTML = `<p>Recommended Lawyer: ${lawyer.name}</p>`;
    } else {
      resultDiv.innerHTML = "<p>No lawyer found for this case type.</p>";
    }
  }
  
  // FAQ toggler
  function toggleFAQ(faqNumber) {
    var faqAnswer = document.getElementById('faq-' + faqNumber);
    faqAnswer.classList.toggle('active');
  }
  window.onload = function() {
    document.body.style.paddingTop = '100px';  // Make sure padding is set after reload
  };
  
  