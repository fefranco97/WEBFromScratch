let gitHubObject = {
  gitHubProjects: [],
  getAllGitHubProjects: function () {
    return this.gitHubProjects
  },
  setGitHubProject: function (id, name, language, description, stars, watchers) {
    const newGitHubProject = {
      id,
      name,
      language,
      description,
      stars,
      watchers,
    }
    this.gitHubProjects.push(newGitHubProject)
  },

  getGitHubProjectByName: function (name) {
    return this.gitHubProjects.filter((gitHubProject) => gitHubProject.name === name)[0]
  },
}
