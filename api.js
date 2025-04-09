// Charger les lives Twitch
fetch('https://api.twitch.tv/helix/streams', {
    headers: {
      'Client-ID': 'YOUR_TWITCH_CLIENT_ID',
      'Authorization': 'Bearer YOUR_TWITCH_ACCESS_TOKEN'
    }
  })
    .then(response => response.json())
    .then(data => {
      const streamsContainer = document.getElementById('streams-container');
      data.data.forEach(stream => {
        const div = document.createElement('div');
        div.classList.add('stream-item');
        div.innerHTML = `
          <h3>${stream.user_name}</h3>
          <p>${stream.title}</p>
          <a href="https://www.twitch.tv/${stream.user_name}" target="_blank">Voir le stream</a>
        `;
        streamsContainer.appendChild(div);
      });
    })
    .catch(error => console.log("Erreur lors du chargement des streams", error));
  