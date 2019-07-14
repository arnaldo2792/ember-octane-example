import Service from '@ember/service';

export default class GithubApikeyService extends Service {
  _apiKey = null;

  get validKey() {
    return this._apiKey && this._apiKey.length;
  }

  get apiKey() {
    return this._apiKey;
  }

  set apiKey(apiKey) {
    this._apiKey = apiKey;
  }
}
