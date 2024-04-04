document.getElementById("home-link").addEventListener("click", function() {
    showContent("Home");
});

document.getElementById("accounts-link").addEventListener("click", function() {
    showContent("Accounts");
});

document.getElementById("transactions-link").addEventListener("click", function() {
    showContent("Transactions");
});

document.getElementById("contact-link").addEventListener("click", function() {
    showContent("Contact");
});

function showContent(content) {
    let mainSection = document.getElementById("main-section");
    switch (content) {
        case "Home":
            mainSection.innerHTML = `
                <h2>Welcome to our Banking Web Application!</h2>
                <p>This application allows you to manage your accounts and transactions online.</p>
            `;
            break;
        case "Accounts":
            mainSection.innerHTML = `
                <h2>Accounts</h2>
                <p>Add your account management content here...</p>
            `;
            break;
        case "Transactions":
            mainSection.innerHTML = `
                <h2>Transactions</h2>
                <p>Add your transaction history and management content here...</p>
            `;
            break;
        case "Contact":
            mainSection.innerHTML = `
                <h2>Contact</h2>
                <p>Add contact information and form for inquiries here...</p>
            `;
            break;
        default:
            mainSection.innerHTML = `
                <h2>Error: Content not found</h2>
            `;
            break;
    }
}
