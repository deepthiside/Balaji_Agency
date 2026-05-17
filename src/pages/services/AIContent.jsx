import React from 'react';
import ServicePage from './ServicePage';
import { servicesData } from '../../data/servicesData';

export default function AIContent() {
  const data = servicesData.find(s => s.id === 'ai-content-influencers');
  return <ServicePage {...data} />;
}
