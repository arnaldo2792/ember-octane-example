import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GithubUserRoute extends Route {
  @service githubApikey;

  model({ user }) {
    if(!this.githubApikey.validKey) {
      this.transitionTo('github');
      return;
    }
    return user;
  }
}
