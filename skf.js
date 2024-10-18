(function() {
    // Function to set up the page
    function setupPage() {
        // Check if the title matches a specific value
        if (document.title === "Securly: Blocked") {
            // Check if the URL contains "securly"
            if (window.location.href.indexOf("securly") > -1) {
                // Remove certain elements from the page
                const elementsToRemove = document.querySelectorAll("div.head-top, div.wonderbar");
                elementsToRemove.forEach(el => el.remove());

                // Create an iframe cover
                const coverIframe = document.createElement("iframe");
                coverIframe.style.position = "fixed";
                coverIframe.style.top = "0";
                coverIframe.style.left = "0";
                coverIframe.style.width = "100%";
                coverIframe.style.height = "100%";
                coverIframe.style.border = "none";
                coverIframe.src = "about:blank"; // Change to an appropriate URL if needed
                document.body.appendChild(coverIframe);

                // Create a toggle button
                const toggleButton = document.createElement("button");
                toggleButton.style.position = "fixed";
                toggleButton.style.left = "10px";
                toggleButton.style.top = "10px";
                toggleButton.style.backgroundColor = "red";
                toggleButton.style.color = "white";
                toggleButton.textContent = "ON";

                toggleButton.addEventListener("click", function() {
                    if (this.textContent === "ON") {
                        this.style.backgroundColor = "green";
                        this.textContent = "OFF";
                        // Set cookies when toggled on
                        for (let i = 0; i < 63; i++) {
                            document.cookie = 'cd' + i + '=' + btoa('Some Random Value') + '; path=/';
                        }
                        alert("You have enabled Securly.");
                    } else {
                        this.style.backgroundColor = "red";
                        this.textContent = "ON";
                        alert("Securly has been disabled.");
                    }
                });

                document.body.appendChild(toggleButton);
            } else {
                alert("Not on a valid Securly page.");
            }
        } else {
            alert("Page title does not match.");
        }
    }

    // Run the setup function
    setupPage();
})();
