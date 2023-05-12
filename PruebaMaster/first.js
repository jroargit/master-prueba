// iniciamos el proyecto con npm init -y, luego instalamos Axios para poder hacer las peticiones a la api
// corremos el proyecto con npm first.js
const axios = require('axios');

const username = 'google';

axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(response => {

    // Ordenar los repositorios por número de estrellas y mostrar los 10 primeros
    const sortedRepos = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
    const top10Repos = sortedRepos.slice(0, 10);

    // Mostrar el nombre y el número de estrellas de los 10 repositorios más populares
    console.log(`Los 10 repositorios más populares de ${username}:`);
    top10Repos.forEach(repo => {
        console.log(`${repo.name} - ${repo.stargazers_count} estrellas`);
    });
    })
    .catch(error => {
    console.log(error);
    });


