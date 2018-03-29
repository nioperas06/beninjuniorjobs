import { environment } from '../environments/environment';

export const Config: any = {
  apiVersion: environment.API_VERSION,
  apiScheme: environment.API_SCHEME,
  apiDomain: environment.API_DOMAIN,
  toApiUrl(path) {
    return `${this.apiScheme}://${this.apiDomain}/${this.apiVersion}/${path}`;
  }
};
