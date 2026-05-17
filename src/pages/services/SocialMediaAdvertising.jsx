import React from 'react';
import ServicePage from './ServicePage';
import { servicesData } from '../../data/servicesData';

export default function SocialMediaAdvertising() {
  const data = servicesData.find(s => s.id === 'social-media-advertising');
  return <ServicePage {...data} />;
}
