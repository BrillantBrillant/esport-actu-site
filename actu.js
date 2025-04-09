// Charger les actualités depuis le fichier actus.json
fetch('actus.json')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');
    
    data.forEach(actu => {
      const div = document.createElement('div');
      div.classList.add('news-item');
      div.innerHTML = `
        <h3>${actu.titre}</h3>
        <p>${actu.contenu}</p>
        <p><small>${actu.date}</small></p>
      `;
      newsContainer.appendChild(div);
    });
  })
  .catch(error => console.log("Erreur lors du chargement des actualités", error));
