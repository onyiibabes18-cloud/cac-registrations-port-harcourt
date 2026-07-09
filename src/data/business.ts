export const BUSINESS = {
  name: 'CAC Registrations Port Harcourt',
  owner: 'Mr. David',
  phone: '0807 680 5579',
  phoneDisplay: '0807 680 5579',
  phoneIntl: '+2348076805579',
  whatsapp: '2348076805579',
  email: 'hello@cacregistrationsph.com',
  address: 'Mile 3, 23 Ada-George Road, Mgbuosimiri, Port Harcourt, Rivers State',
  addressShort: 'Mile 3, 23 Ada-George Road, Port Harcourt',
  rating: 5.0,
  reviewCount: 24,
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  mapsEmbed:
    'https://www.google.com/maps?q=Ada-George+Road+Mgbuosimiri+Port+Harcourt+Rivers+State&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ada-George+Road+Mgbuosimiri+Port+Harcourt+Rivers+State',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
