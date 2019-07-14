import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProvidersGithubUserComponent extends Component {
  @service githubApikey;

  @action
  async getUser(user) {
    return await fetch(`https://api.github.com/users/${user}`, {
      headers: { Authorization: `token ${this.githubApikey.apiKey}` }
    });
  }

  @action
  async getRepos(user) {
    return await fetch(`https://api.github.com/users/${user}/repos`, {
      headers: { Authorization: `token ${this.githubApikey.apiKey}` }
    }); 
  }

  @action
  async getRepo({user, repo}) {
    return await fetch(`https://api.github.com/repos/${user}/${repo}`,  {
      headers: { Authorization: `token ${this.githubApikey.apiKey}` }
    });
  }
}
