const projectsToShow = ['app-ride', 'WEBFromScratch']

async function getReposFromGithub() {
  let data = await fetch('https://api.github.com/users/fefranco97/repos').then((response) =>
    response.json()
  )
  return data
}

async function setProjects() {
  const data = await getReposFromGithub()
  data.forEach((project) => {
    gitHubObject.setGitHubProject(
      project.id,
      project.name,
      project.language,
      project.description,
      project.svn_url,
      project.stargazers_count,
      project.watchers_count
    )
  })

  const gitHubProjects = getProjectsToShow()
  renderFristAndSecondProject(gitHubProjects)
}

function getProjectsToShow() {
  const gitHubProjects = []
  projectsToShow.forEach((projectName) => {
    gitHubProjects.push(gitHubObject.getGitHubProjectByName(projectName))
  })
  return gitHubProjects
}
function renderFristAndSecondProject(projects) {
  const projectContainerElement = document.getElementById('projects-container')
  let html = ''
  projects.forEach((project) => {
    const projectElement = createNewProjectElement(project)
    html += projectElement
  })
  projectContainerElement.innerHTML = html
}

function createNewProjectElement(project) {
  const html = `<a href="${project.url}" target="_blank">
            <div class="card">
              <div class="project-container">
                <div class="project-header">
                  <img class="icon" src="assets/folder.svg" alt="" />
                  <h2>${project.name}</h2>
                </div>
                <div class="project-content">
                  <p>${project.description}</p>
                </div>
                <div class="project-footer">
                  <img class="icon" src="assets/star.svg" alt="" />
                  <p>${project.stars}</p>
                  <img class="icon" src="assets/git-branch.svg" alt="" />
                  <p>${project.watchers}</p>
                  <div class="project-language">
                    <span class="language-circle"></span>
                    <p>${project.language}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>`

  return html
}

setProjects()

var isValid = function (s) {
  const stack = []
  const mapping = new Object({
    ')': '(',
    '}': '{',
    ']': '[',
  })
  for (var char of s) {
    if (Object.values(mapping).includes(char)) {
      stack.push(char)
    } else if (Object.keys(mapping).includes(char)) {
      const fristElement = stack.pop()
      if (mapping[char] !== fristElement) {
        return false
      }
    } else {
      return false
    }
  }
  return stack.length === 0
}

let s = ''

if (isValid(s)) console.log('valid')
else console.log('invalid')
