export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircuts' | 'colour' | 'styling';
  description: string;
  startingPrice: string;
  estimatedDuration: string;
  popular?: boolean;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircuts' | 'colour' | 'styling' | 'mens' | 'children';
  imageUrl: string;
  beforeImageUrl?: string;
  caption: string;
  altText: string;
  isBeforeAfter?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const SALON_DATA = {
  business: {
    name: "Not Just Cuts",
    tagline: "Your Local Cambridge & Preston Hair Salon",
    subtitle: "Welcoming, quality hair cuts and styling for men, women and families right here in Cambridge.",
    phone: "519-621-4544",
    phoneClean: "5196214544",
    address: {
      unit: "Unit 2",
      street: "1453 King Street East",
      city: "Cambridge",
      province: "Ontario",
      postalCode: "N3H 3R3",
      area: "Preston & Cambridge, ON",
      fullAddress: "Unit 2, 1453 King Street East, Cambridge, ON N3H 3R3"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=1453+King+Street+East+Unit+2+Cambridge+Ontario",
    googleEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.643277189045!2d-80.36214532386866!3d43.38450197067851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b89694d682977%3A0xa97193f41249fa6b!2s1453%20King%20St%20E%20%232%2C%20Cambridge%2C%20ON%20N3H%203R3!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca",
    email: "info@notjustcutssalon.example.com",
    contactNote: "This form sends an appointment request. Your appointment is confirmed once salon staff contacts you.",
    hoursNote: "Business hours coming soon. Please call 519-621-4544 to confirm availability or schedule an appointment.",
    parkingInfo: "Convenient free parking available directly outside Unit 2.",
    accessibilityInfo: "Easy ground-level entrance with comfortable seating.",
    socials: {
      instagram: "https://instagram.com/notjustcuts_placeholder",
      facebook: "https://facebook.com/notjustcuts_placeholder",
    }
  },

  trustBadges: [
    { title: "Local Preston & Cambridge Salon", description: "Friendly neighborhood care" },
    { title: "Transparent Pricing", description: "Clear starting prices with no hidden surprises" },
    { title: "Family Friendly", description: "Cuts for women, men, seniors, and kids" },
  ],

  // Simplified core service menu
  services: [
    // Haircuts & Styling
    {
      id: "womens-cut",
      name: "Women’s Haircut & Style",
      category: "haircuts",
      description: "Includes hair wash, personalized haircut, and blow-dry styling.",
      startingPrice: "$45+",
      estimatedDuration: "45–60 mins",
      popular: true
    },
    {
      id: "mens-cut",
      name: "Men’s Haircut",
      category: "haircuts",
      description: "Precision haircut, wash, and neck cleanup.",
      startingPrice: "$28+",
      estimatedDuration: "30 mins",
      popular: true
    },
    {
      id: "childrens-cut",
      name: "Children’s Haircut",
      category: "haircuts",
      description: "Gentle trim for children under 12.",
      startingPrice: "$22+",
      estimatedDuration: "20–30 mins"
    },
    {
      id: "senior-cut",
      name: "Senior Haircut",
      category: "haircuts",
      description: "Classic trim and styling for seniors.",
      startingPrice: "$25+",
      estimatedDuration: "30 mins"
    },
    {
      id: "wash-blowdry",
      name: "Wash & Blow-Dry",
      category: "styling",
      description: "Refreshing wash and everyday blowout styling.",
      startingPrice: "$30+",
      estimatedDuration: "30 mins"
    },

    // Hair Colour (Basic & Essential)
    {
      id: "root-touchup",
      name: "Root Touch-Up",
      category: "colour",
      description: "Targeted root color application to cover growth or greys.",
      startingPrice: "$65+",
      estimatedDuration: "60–90 mins"
    },
    {
      id: "full-colour",
      name: "Full Hair Colour",
      category: "colour",
      description: "All-over single process hair color from roots to ends.",
      startingPrice: "$85+",
      estimatedDuration: "90–120 mins",
      popular: true
    },
    {
      id: "highlights-basic",
      name: "Foil Highlights",
      category: "colour",
      description: "Custom foil highlights for added brightness.",
      startingPrice: "$95+",
      estimatedDuration: "120 mins"
    }
  ] as ServiceItem[],

  serviceDisclaimer: "Prices are starting estimates and may vary depending on hair length, density, and product used. Please call 519-621-4544 for exact quotes.",

  skills: [
    {
      id: "skill-1",
      title: "Precision Haircuts",
      description: "Clean cuts customized to your face shape and personal hair routine.",
      iconName: "Scissors"
    },
    {
      id: "skill-2",
      title: "Men’s Fades & Short Styles",
      description: "Sharp classic cuts, fades, and neckline cleanup.",
      iconName: "Zap"
    },
    {
      id: "skill-3",
      title: "Essential Hair Colouring",
      description: "Rich all-over colour, grey coverage, and root maintenance.",
      iconName: "Palette"
    },
    {
      id: "skill-4",
      title: "Family & Kid’s Haircuts",
      description: "Patient, welcoming haircuts for the whole family.",
      iconName: "Smile"
    }
  ] as SkillItem[],

  skillDisclaimer: "[Editable Note]: Salon owner can confirm specific services offered prior to publication.",

  gallery: [
    {
      id: "g1",
      title: "Layered Cut & Blowout",
      category: "haircuts",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      beforeImageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      caption: "Soft layers and natural volume. (Sample work)",
      altText: "Sample placeholder: Layered haircut styling",
      isBeforeAfter: true
    },
    {
      id: "g2",
      title: "Rich Full Colour",
      category: "colour",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      beforeImageUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
      caption: "Warm dimensional hair colour refresh. (Sample work)",
      altText: "Sample placeholder: Hair colour work",
      isBeforeAfter: true
    },
    {
      id: "g3",
      title: "Classic Men's Haircut",
      category: "mens",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      caption: "Clean short cut with side taper.",
      altText: "Sample placeholder: Men's short haircut",
      isBeforeAfter: false
    },
    {
      id: "g4",
      title: "Kid's Haircut",
      category: "children",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      caption: "Friendly trim for young clients.",
      altText: "Sample placeholder: Child haircut",
      isBeforeAfter: false
    }
  ] as GalleryItem[],

  galleryDisclaimer: "Note: Sample photos shown above. Replace with real photo work from Not Just Cuts.",

  about: {
    heading: "Your Neighborhood Hair Salon in Cambridge & Preston",
    story: "Not Just Cuts is a local hair salon serving customers in Preston, Cambridge and nearby communities. We offer welcoming, straightforward hair services in a comfortable environment. Whether you need a quick trim or fresh colour, we take time to give you a look you love.",
    placeholders: {
      ownerName: "[Owner / Lead Stylist Name - Editable]",
      history: "[Salon History - Editable]",
      languages: "English [Editable]",
    }
  },

  whyChooseUs: [
    { title: "Convenient Cambridge Location", desc: "Located at Unit 2, 1453 King Street East with easy free parking." },
    { title: "Cuts for the Whole Family", desc: "Services for women, men, seniors, and children in one spot." },
    { title: "Honest & Transparent Prices", desc: "Clear starting prices with upfront service discussions." },
    { title: "Easy Online Requests", desc: "Request your preferred appointment time online in seconds." },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "Do I need an appointment?",
      answer: "We recommend requesting an appointment online or by calling 519-621-4544. Walk-ins are accepted based on availability."
    },
    {
      id: "faq-2",
      question: "Do you accept walk-in clients?",
      answer: "Yes! Walk-in customers are welcome whenever a stylist is available."
    },
    {
      id: "faq-3",
      question: "Do you offer children’s haircuts?",
      answer: "Yes, we provide gentle haircuts for kids of all ages in a patient setting."
    },
    {
      id: "faq-4",
      question: "Where is the salon located?",
      answer: "Unit 2, 1453 King Street East, Cambridge, ON (serving the Preston area). Parking is right outside our door."
    },
    {
      id: "faq-5",
      question: "How will I know my appointment is confirmed?",
      answer: "After submitting an online request, salon staff will contact you via phone or email to confirm your time slot."
    }
  ] as FAQItem[],

  reviewPlaceholderNotice: "Client reviews and local testimonials will be added here after approval."
};
