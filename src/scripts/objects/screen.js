const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>👥 Seguidores: ${user.followers}</p>
                                            <p>👤 Seguindo: ${user.following}</p>
                                        </div>
                                      </div>`
        
        let repositoriesItems = ''
        user.repositories.forEach(repo => {
            repositoriesItems += `<li>
                                  <a href="${repo.html_url}" target="_blank">
                                  <p>${repo.name}</p>
                                  <span>🍴${repo.forks}</span>
                                  <span>👨‍💻${repo.language ?? '...'}</span>
                                  <span>⭐${repo.stargazers_count}</span> 
                                  <span>👀${repo.watchers}</span>
                                  </a>
                                  </li>`
            }
        ) 

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                             <h2>Repositórios</h2>
                                             <ul>${repositoriesItems}</ul>
                                           </div>`
        }

        let eventsItems = ''
        user.events.forEach((event) => {
            eventsItems += `<li> 
                            <p>
                            ${event.repo.name}
                            <a href=${event.repo.url} target="_blank"></a>
                            </p>
                            <p> - ${event.payload.commits ? event.payload.commits[0].message : '...'}</p>
                            </li>`
                           
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                             <h2>Eventos</h2>
                                             <ul>${eventsItems}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }