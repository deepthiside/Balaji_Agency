import React from 'react';
import ServicePage from './ServicePage';
import { servicesData } from '../../data/servicesData';

export default function SocialMediaMarketing() {
  const data = servicesData.find(s => s.id === 'social-media-marketing');
  return <ServicePage {...data} />;
}
