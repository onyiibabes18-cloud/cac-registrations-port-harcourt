import { Building2, Briefcase, Users, Handshake, Flag } from 'lucide-react';

export interface Service {
  icon: typeof Building2;
  title: string;
  description: string;
  whatsappMessage: string;
}

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'CAC Business Name Registration',
    description: 'Register your sole proprietorship or business name with the Corporate Affairs Commission.',
    whatsappMessage: 'Hello, I want to register a Business Name.',
  },
  {
    icon: Briefcase,
    title: 'CAC Company Registration',
    description: 'Incorporate your Private Limited Liability Company (LTD) with CAC.',
    whatsappMessage: 'Hello, I want to register a Company.',
  },
  {
    icon: Users,
    title: 'CAC Club Registration',
    description: 'Register your club or social organisation as incorporated trustees with CAC.',
    whatsappMessage: 'Hello, I want to register a Club.',
  },
  {
    icon: Handshake,
    title: 'CAC Association Registration',
    description: 'Register your association or NGO with the Corporate Affairs Commission.',
    whatsappMessage: 'Hello, I want to register an Association.',
  },
  {
    icon: Flag,
    title: 'CAC Union Registration',
    description: 'Register your trade union, cooperative, or professional body with CAC.',
    whatsappMessage: 'Hello, I want to register a Union.',
  },
];
