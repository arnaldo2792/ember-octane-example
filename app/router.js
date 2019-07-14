import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('github', {path: '/'}, function() {
    this.route('user', {path: '/u/:user'}, function() {
      this.route('repo', {path: '/r/:repo'});
    });
  });
});

export default Router;
