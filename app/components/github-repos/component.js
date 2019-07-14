import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GithubReposComponent extends Component {
  @tracked error = null;
  @tracked repos = [];

  @action
  async getRepos() {
    const { getRepos } = this.args;
    const response = await getRepos(this.args.user);

    if (response.ok) {
      this.error = null;
      this.repos = await response.json();
    } else {
      this.setError(response.status);
    }
  }

  setError(status) {
    switch(status) {
      case 404:
        this.error = `Repos for user ${this.args.user} not found`;
        break;
      default:
        this.error = `Unhandled error`;
    }
  }
}
