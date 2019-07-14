import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class GithubInfoComponent extends Component {
  @service githubApikey;
  @service router;

  user = null;

  @action setUser({ target }) {
    this.user = target.value;
  }

  @action setApiKey({ target }){
    this.githubApikey.apiKey = target.value;
  }

  @action transitionToUser() {
    this.router.transitionTo('github.user', this.user);
  }
}