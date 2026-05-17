import React from 'react';
import ServicePage from './ServicePage';
import { servicesData } from '../../data/servicesData';

export default function WebDevelopment() {
  const data = servicesData.find(s => s.id === 'web-development');
  return <ServicePage {...data} />;
}
