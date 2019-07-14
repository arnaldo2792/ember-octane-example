import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GihubRepoComponent extends Component {
  @tracked error = null;
  @tracked repo = null;

  @action
  async getRepo() {
    const { getRepo, model } = this.args;
    const response = await getRepo(model);

    if (response.ok) {
      this.error = null;
      this.repo = await response.json();
    } else {
      this.setError(response.status);
    }
  }

  setError(status) {
    switch(status) {
      case 404:
        this.error = `Repos ${this.args.model.repo} not found`;
        break;
      default:
        this.error = `Unhandled error`;
    }
  }
}
