import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GithubUserRepoRoute extends Route {
  @service githubApikey;

  model({ repo }) {
    if (!this.githubApikey.validKey) {
      this.transitionTo('github');
      return;
    }

    const user = this.modelFor('github.user');

    return { repo, user };
  }


}
