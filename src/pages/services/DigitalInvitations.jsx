import React from 'react';
import ServicePage from './ServicePage';
import { servicesData } from '../../data/servicesData';

export default function DigitalInvitations() {
  const data = servicesData.find(s => s.id === 'digital-invitations');
  return <ServicePage {...data} />;
}
