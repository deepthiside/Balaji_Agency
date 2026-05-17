import React from 'react';
import ServicePage from './ServicePage';
import { servicesData } from '../../data/servicesData';

export default function Automation() {
  const data = servicesData.find(s => s.id === 'automation');
  return <ServicePage {...data} />;
}
