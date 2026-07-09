import { Building2, Users, Handshake, Flag, FileCheck, ShieldCheck } from 'lucide-react';

export interface Service {
  icon: typeof Building2;
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const SERVICES: Service[] = [
  {
    icon: Building2,
    title: 'CAC Business Name Registration',
    description:
      'Register your sole proprietorship or business name with the Corporate Affairs Commission — fully compliant and ready to operate.',
    features: ['Name availability search', 'Registration certificate', 'Tax ID (TIN) guidance'],
    popular: true,
  },
  {
    icon: FileCheck,
    title: 'Limited Company Registration',
    description:
      'Incorporate your Private Limited Liability Company (LTD) with directors, shareholders, and a registered share capital structure.',
    features: ['ARTICLES & MEMORANDUM', 'CAC certificate of incorporation', 'Share capital structuring'],
  },
  {
    icon: Users,
    title: 'Club & Association Registration',
    description:
      'Register your club, social association, or NGO with CAC as an incorporated trustee — fully legal and recognised.',
    features: ['Incorporated trustees', 'Constitution drafting support', 'Trustee documentation'],
  },
  {
    icon: Flag,
    title: 'Union Registration',
    description:
      'Get your trade union, cooperative, or professional body registered and legally constituted with full CAC compliance.',
    features: ['Cooperative & union setup', 'Statutory compliance', 'Registration certificate'],
  },
  {
    icon: Handshake,
    title: 'Post-Registration Compliance',
    description:
      'Annual returns, updates, changes of trustees, and address changes — keep your registration active and penalty-free.',
    features: ['Annual returns filing', 'Trustee changes', 'Address & name updates'],
  },
  {
    icon: ShieldCheck,
    title: 'Consultation & Verification',
    description:
      'Already registered? We verify the status of your CAC documents and advise on the next compliance steps for your entity.',
    features: ['Document verification', 'Status check', 'Compliance advisory'],
  },
];
