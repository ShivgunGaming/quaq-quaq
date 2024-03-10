document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const duckImageContainer = document.getElementById('duckImageContainer');
  
    generateBtn.addEventListener('click', function () {
      fetchRandomDuck();
    });
  
    function fetchRandomDuck() {
      const apiKey = 'MPQzWPW4-o-llw0P-pSpNxvhVs4v0pGttKmnCpXVmEE';
      const apiUrl = `https://api.unsplash.com/photos/random?query=duck&client_id=${apiKey}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const duckImageUrl = data.urls.regular;
          displayDuckImage(duckImageUrl);
        })
        .catch(error => {
          console.error('Error fetching duck:', error);
        });
    }
  
    function displayDuckImage(imageUrl) {
      // Clear previous image if exists
      duckImageContainer.innerHTML = '';
  
      const duckImage = document.createElement('img');
      duckImage.src = imageUrl;
      duckImage.alt = 'Random Duck';
      duckImage.style.height = '400px'
      duckImage.style.width = '400px'; // Set fixed width for the duck image
  
      duckImageContainer.appendChild(duckImage);
    }
  });
  