import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import FetchHttpConnector from '@core/modules/vacancies/infrastructure/http/FetchHttpConnector';
import type HttpConnector from '@core/modules/vacancies/infrastructure/http/HttpConnector';

export function configureHttp(container: Container) {
  // Http connector
  container.bind<HttpConnector>(TYPES.HttpConnector).to(FetchHttpConnector);
}
