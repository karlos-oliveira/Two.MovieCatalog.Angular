import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'MovieCatalog',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44325/',
    redirectUri: baseUrl,
    clientId: 'MovieCatalog_App',
    responseType: 'code',
    scope: 'offline_access MovieCatalog',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44325',
      rootNamespace: 'Two.MovieCatalog',
    },
  },
} as Environment;
