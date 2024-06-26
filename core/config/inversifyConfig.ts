import 'reflect-metadata';
import { Container } from 'inversify';
import { configureVacancies } from '@core/config/dependencies/VacanciesConfig';

const container = new Container();

configureVacancies(container);

export default container;
