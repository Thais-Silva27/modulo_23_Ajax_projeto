document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    try {
        fetch('https://api.github.com/users/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados do perfil');
                }
                return response.json();
            })
            .then(json => {
                nameElement.innerText = json.name;
                usernameElement.innerText = json.login;
                avatarElement.src = json.avatar_url;
                reposElement.innerText = json.public_repos;
                followersElement.innerText = json.followers;
                followingElement.innerText = json.following;
                linkElement.href = json.html_url;
            });
    } catch (error) {
        console.log('Ocorreu um erro:', error.message);
    }
});
