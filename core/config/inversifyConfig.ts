import 'reflect-metadata';
import { Container } from 'inversify';
import { configureVacancies } from '@core/config/dependencies/VacanciesConfig';
import { configureHttp } from '@core/config/dependencies/HttpConfig';

const container = new Container();

configureVacancies(container);
configureHttp(container);

export default container;
