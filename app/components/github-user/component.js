import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GithubUserComponent extends Component {
  @tracked user = null;
  @tracked error = null;

  get name() {
    const { user } = this;

    if (user) {
      if (user.name) {
        return user.name;
      }
  
      return user.login;
    }
  }

  @action
  async getUser(){
    const { getUser } = this.args;
    const response = await getUser(this.args.user);

    if (response.ok) {
      this.error = null;
      this.user = await response.json();
    } else {
      this.setError(response.status);
    }
  }

  setError(status){
    switch(status) {
      case 404:
        this.error = `User ${this.args.user} not found`;
        break;
      default:
        this.error = `Unhandled error`;
    }
  }
  
}
