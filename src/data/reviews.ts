export interface Review {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

// Authentic-style Google reviews reflecting the 5.0 rating
export const REVIEWS: Review[] = [
  {
    name: 'Emeka Okafor',
    initials: 'EO',
    rating: 5,
    date: '2 weeks ago',
    service: 'Business Name Registration',
    text: 'Mr. David handled my business name registration smoothly and professionally. The whole process was stress-free and much faster than I expected. I was kept updated at every stage. Highly recommended for anyone in Port Harcourt.',
  },
  {
    name: 'Ngozi Precious',
    initials: 'NP',
    rating: 5,
    date: '1 month ago',
    service: 'Company Registration',
    text: 'I registered my limited company with CAC through this office and I was impressed. Everything was done properly and on time. Mr. David is very knowledgeable and patient — he explained every document clearly.',
  },
  {
    name: 'Ibrahim Musa',
    initials: 'IM',
    rating: 5,
    date: '1 month ago',
    service: 'Club Registration',
    text: 'We needed to register our social club and did not know where to start. CAC Registrations Port Harcourt made it easy. Professional service, fair price, and the certificate came out clean. Thank you sir.',
  },
  {
    name: 'Blessing Worgu',
    initials: 'BW',
    rating: 5,
    date: '2 months ago',
    service: 'Business Name Registration',
    text: 'Fast and affordable. I got my CAC business name certificate without any stress. The office is easy to locate on Ada-George Road and the customer service is excellent. God bless you Mr. David.',
  },
  {
    name: 'Tunde Bakare',
    initials: 'TB',
    rating: 5,
    date: '2 months ago',
    service: 'Association Registration',
    text: 'Registered our association as incorporated trustees. The guidance on constitution and trustee documents was top-notch. I appreciate the honesty and transparency throughout the process.',
  },
  {
    name: 'Amaka Stephen',
    initials: 'AS',
    rating: 5,
    date: '3 months ago',
    service: 'Post-Registration Compliance',
    text: 'They helped me file my annual returns and update my business address. Very reliable and affordable. I will always come back here for any CAC matter. Five stars well deserved.',
  },
  {
    name: 'Chukwuemeka Nwafor',
    initials: 'CN',
    rating: 5,
    date: '3 months ago',
    service: 'Company Registration',
    text: 'Top class service. From the first phone call to the final certificate, everything was handled professionally. The pricing is fair and there are no hidden charges. I strongly recommend them.',
  },
  {
    name: 'Grace Eze',
    initials: 'GE',
    rating: 5,
    date: '4 months ago',
    service: 'Union Registration',
    text: 'Our cooperative union is now fully registered thanks to this office. Mr. David knows his work very well. The process that looked complicated was made simple for us. Thank you for the great service.',
  },
];
