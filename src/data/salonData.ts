export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircuts' | 'colour' | 'styling' | 'treatments';
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
  relatedCategory?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircuts' | 'colour' | 'highlights' | 'styling' | 'mens' | 'children';
  imageUrl: string;
  beforeImageUrl?: string; // Optional for before-and-after showcase
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
    tagline: "Haircuts and Styling Made for You",
    subtitle: "Professional hair services for men, women and families in Preston and Cambridge.",
    phone: "519-621-4544",
    phoneClean: "5196214544",
    address: {
      unit: "Unit 2",
      street: "1453 King Street East",
      city: "Cambridge",
      province: "Ontario",
      postalCode: "N3H 3R3",
      area: "Preston and Cambridge, Ontario",
      fullAddress: "Unit 2, 1453 King Street East, Cambridge, ON N3H 3R3"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=1453+King+Street+East+Unit+2+Cambridge+Ontario",
    googleEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.643277189045!2d-80.36214532386866!3d43.38450197067851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b89694d682977%3A0xa97193f41249fa6b!2s1453%20King%20St%20E%20%232%2C%20Cambridge%2C%20ON%20N3H%203R3!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca",
    email: "info@notjustcutssalon.example.com", // EDITABLE: replace with real business email
    contactNote: "This form sends an appointment request. Your appointment is not confirmed until the salon contacts you.",
    hoursNote: "Business hours coming soon. Please call 519-621-4544 to confirm availability or schedule an appointment.",
    parkingInfo: "Convenient customer parking available directly in front of Unit 2.",
    accessibilityInfo: "Ground-level accessible entrance with wide doors and comfortable client seating.",
    socials: {
      instagram: "https://instagram.com/notjustcuts_placeholder",
      facebook: "https://facebook.com/notjustcuts_placeholder",
    }
  },

  trustBadges: [
    { title: "Local Cambridge Salon", description: "Serving Preston & Cambridge community with pride" },
    { title: "Personalized Care", description: "Attentive consultations tailored to your individual style" },
    { title: "Easy Online Requests", description: "Request your preferred appointment time online in seconds" },
  ],

  services: [
    // Haircuts
    {
      id: "womens-cut",
      name: "Women’s Haircut",
      category: "haircuts",
      description: "Includes consultation, wash, customized haircut, and basic blow-dry styling.",
      startingPrice: "$45+",
      estimatedDuration: "45–60 mins",
      popular: true
    },
    {
      id: "mens-cut",
      name: "Men’s Haircut",
      category: "haircuts",
      description: "Precision haircut tailored to your head shape and style, with wash and neckline cleanup.",
      startingPrice: "$28+",
      estimatedDuration: "30 mins",
      popular: true
    },
    {
      id: "childrens-cut",
      name: "Children’s Haircut",
      category: "haircuts",
      description: "Gentle and friendly haircut experience for children under 12.",
      startingPrice: "$22+",
      estimatedDuration: "20–30 mins"
    },
    {
      id: "senior-cut",
      name: "Senior Haircut",
      category: "haircuts",
      description: "Classic, comfortable hair trim and styling for seniors.",
      startingPrice: "$25+",
      estimatedDuration: "30 mins"
    },
    {
      id: "trim-shapeup",
      name: "Trim & Shape-Up",
      category: "haircuts",
      description: "Quick maintenance trim for bangs, edges, or beard line touch-up.",
      startingPrice: "$18+",
      estimatedDuration: "15–20 mins"
    },

    // Hair Colour
    {
      id: "root-touchup",
      name: "Root Touch-Up",
      category: "colour",
      description: "Targeted root color application to cover new growth or greys seamlessly.",
      startingPrice: "$65+",
      estimatedDuration: "60–90 mins"
    },
    {
      id: "full-colour",
      name: "Full Hair Colour",
      category: "colour",
      description: "All-over single process hair colour application from roots to ends.",
      startingPrice: "$85+",
      estimatedDuration: "90–120 mins",
      popular: true
    },
    {
      id: "highlights",
      name: "Highlights (Partial / Full)",
      category: "colour",
      description: "Custom foil highlights to add dimension, brightness, and movement.",
      startingPrice: "$95+",
      estimatedDuration: "120+ mins"
    },
    {
      id: "balayage",
      name: "Balayage / Ombré",
      category: "colour",
      description: "Hand-painted, natural-looking gradient colour for low-maintenance brilliance.",
      startingPrice: "$140+",
      estimatedDuration: "150+ mins",
      popular: true
    },
    {
      id: "colour-correction",
      name: "Colour Correction",
      category: "colour",
      description: "Specialized service to fix uneven color or reverse dark tones. Requires consultation.",
      startingPrice: "Quote required",
      estimatedDuration: "Varies"
    },
    {
      id: "toner-gloss",
      name: "Toner or Gloss Treatment",
      category: "colour",
      description: "Refreshes tone, neutralizes unwanted warmth, and restores high shine.",
      startingPrice: "$35+",
      estimatedDuration: "30 mins"
    },

    // Styling
    {
      id: "blow-dry",
      name: "Blow-Dry & Styling",
      category: "styling",
      description: "Refreshing hair wash followed by a sleek or voluminous blow-out styling.",
      startingPrice: "$35+",
      estimatedDuration: "35 mins"
    },
    {
      id: "wash-style",
      name: "Wash & Style",
      category: "styling",
      description: "Relaxing shampoo massage and complete everyday styling.",
      startingPrice: "$30+",
      estimatedDuration: "30 mins"
    },
    {
      id: "updo",
      name: "Special Event Updo",
      category: "styling",
      description: "Elegant pinned updo styling for weddings, proms, and special celebrations.",
      startingPrice: "$65+",
      estimatedDuration: "60 mins"
    },
    {
      id: "formal-styling",
      name: "Formal Event Styling",
      category: "styling",
      description: "Custom styling with hot tools for waves, curls, or modern structured looks.",
      startingPrice: "$55+",
      estimatedDuration: "45–60 mins"
    },

    // Hair Treatments
    {
      id: "deep-conditioning",
      name: "Deep Conditioning Treatment",
      category: "treatments",
      description: "Intense moisture infusion to repair dry, brittle hair and add softness.",
      startingPrice: "$25+",
      estimatedDuration: "20 mins"
    },
    {
      id: "scalp-treatment",
      name: "Scalp Health Treatment",
      category: "treatments",
      description: "Exfoliating and soothing scalp care to remove build-up and stimulate growth.",
      startingPrice: "$30+",
      estimatedDuration: "25 mins"
    },
    {
      id: "damage-repair",
      name: "Damage-Repair Treatment",
      category: "treatments",
      description: "Bond-building treatment to restore strength to chemically treated hair.",
      startingPrice: "$35+",
      estimatedDuration: "30 mins"
    },
    {
      id: "keratin-consultation",
      name: "Keratin & Smoothing Consultation",
      category: "treatments",
      description: "Consultation and test lock evaluation for long-lasting frizz smoothing.",
      startingPrice: "$20 (Credited)",
      estimatedDuration: "20 mins"
    }
  ] as ServiceItem[],

  serviceDisclaimer: "Prices may vary depending on hair length, density, condition, product use and the specific service required. Please contact the salon at 519-621-4544 for an accurate personal quote.",

  skills: [
    {
      id: "skill-1",
      title: "Precision Haircuts",
      description: "Clean geometry and structured lines customized to your facial features.",
      iconName: "Scissors",
      relatedCategory: "haircuts"
    },
    {
      id: "skill-2",
      title: "Layered Cuts & Texturizing",
      description: "Adding natural movement, volume, and softness to hair of all lengths.",
      iconName: "Sparkles",
      relatedCategory: "haircuts"
    },
    {
      id: "skill-3",
      title: "Fades & Short Styles",
      description: "Sharp fades, tapers, and classic short cuts with clean detail work.",
      iconName: "Zap",
      relatedCategory: "mens"
    },
    {
      id: "skill-4",
      title: "Children’s Haircuts",
      description: "Patient, encouraging styling for kids in a comfortable setting.",
      iconName: "Smile",
      relatedCategory: "children"
    },
    {
      id: "skill-5",
      title: "Dimensional Hair Colour",
      description: "Rich single-process shades, grey coverage, and subtle highlights.",
      iconName: "Palette",
      relatedCategory: "colour"
    },
    {
      id: "skill-6",
      title: "Balayage & Foilayage",
      description: "Seamless sun-kissed blending for natural, modern hair contrast.",
      iconName: "Sun",
      relatedCategory: "highlights"
    },
    {
      id: "skill-7",
      title: "Event & Formal Blowouts",
      description: "Long-lasting blow-outs, curls, and updos for special occasions.",
      iconName: "Heart",
      relatedCategory: "styling"
    },
    {
      id: "skill-8",
      title: "Hair Repair & Hydration",
      description: "Targeted conditioning protocols to restore elasticity and shine.",
      iconName: "ShieldCheck",
      relatedCategory: "treatments"
    }
  ] as SkillItem[],

  skillDisclaimer: "[Editable Note for Salon Owner]: Please review and confirm the specific skills and service specialties listed here before publishing.",

  gallery: [
    {
      id: "g1",
      title: "Modern Layered Cut & Blowout",
      category: "haircuts",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      beforeImageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      caption: "Soft face-framing layers with natural shine and volume. (Sample transformation)",
      altText: "Sample placeholder: Woman with modern layered haircut and styling",
      isBeforeAfter: true
    },
    {
      id: "g2",
      title: "Sun-Kissed Balayage Refresh",
      category: "colour",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      beforeImageUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
      caption: "Dimensional warm blonding with seamless root transition. (Sample transformation)",
      altText: "Sample placeholder: Blonde balayage hairstyle close up",
      isBeforeAfter: true
    },
    {
      id: "g3",
      title: "Precision Men's Fade",
      category: "mens",
      imageUrl: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      caption: "Clean mid-fade with textured top styling.",
      altText: "Sample placeholder: Men's short haircut with clean side fade",
      isBeforeAfter: false
    },
    {
      id: "g4",
      title: "Soft Blonde Highlights",
      category: "highlights",
      imageUrl: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      caption: "Fine foil highlights adding natural brightness.",
      altText: "Sample placeholder: Highlighted hair styled in soft waves",
      isBeforeAfter: false
    },
    {
      id: "g5",
      title: "Formal Waves & Special Event Styling",
      category: "styling",
      imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
      caption: "Glamorous loose waves for formal events.",
      altText: "Sample placeholder: Wavy styled hair for formal event",
      isBeforeAfter: false
    },
    {
      id: "g6",
      title: "Friendly Kid's Haircut",
      category: "children",
      imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      caption: "Neat and comfortable haircut for young clients.",
      altText: "Sample placeholder: Child receiving a friendly hair trim",
      isBeforeAfter: false
    }
  ] as GalleryItem[],

  galleryDisclaimer: "Note: Images shown above are high-quality sample portfolio placeholders. Replace with actual client photos from Not Just Cuts.",

  about: {
    heading: "Welcoming Hair Care in Preston & Cambridge",
    story: "Not Just Cuts is a local hair salon serving customers in Preston, Cambridge and nearby communities. Our goal is to provide welcoming, personalized hair services in a comfortable salon environment. Whether you are looking for a simple trim, a fresh new style or professional colour services, we take the time to understand the look you want.",
    placeholders: {
      ownerName: "[Owner / Lead Stylist Name - Editable]",
      history: "[Salon History / Founding Details - Editable]",
      experience: "[Years of Experience - Editable]",
      training: "[Certifications & Training - Editable]",
      languages: "English [Additional Languages Editable]",
      specialties: "Family cuts, dimensional colour, precision styling [Editable]",
    },
    values: [
      { title: "Friendly Environment", text: "Warm and approachable service for every family member." },
      { title: "Personal Consultation", text: "We listen carefully to your goals before picking up the shears." },
      { title: "Quality Results", text: "Careful attention to detail using professional techniques." }
    ]
  },

  whyChooseUs: [
    { title: "Personalized Consultations", desc: "We discuss your hair texture, routine, and style goals first." },
    { title: "Convenient Cambridge Location", desc: "Located at Unit 2, 1453 King Street East with easy parking." },
    { title: "Services for the Whole Family", desc: "Haircuts for women, men, seniors, and children under one roof." },
    { title: "Clear Pricing Discussions", desc: "No unexpected surprises — we discuss options before starting." },
    { title: "Professional Salon Space", desc: "Clean, hygienic, comfortable, and well-maintained facility." },
    { title: "Easy Online Requests", desc: "Request an appointment or quote online anytime at your convenience." },
    { title: "Friendly Local Service", desc: "Proud to serve our neighbours in Preston and Cambridge." },
    { title: "Style Recommendations", desc: "Practical advice on maintaining your cut and style at home." },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "Do I need an appointment?",
      answer: "We strongly recommend requesting an appointment in advance to guarantee your preferred time slot. Walk-ins are welcomed when schedule availability permits."
    },
    {
      id: "faq-2",
      question: "Do you accept walk-ins?",
      answer: "Yes, walk-in customers are welcome based on stylist availability. For specific services like balayage or full colour, booking ahead is recommended."
    },
    {
      id: "faq-3",
      question: "How can I request a quote for hair colour?",
      answer: "You can use our online Quote Request form above to send details and upload photos of your current hair and desired look, or call us directly at 519-621-4544."
    },
    {
      id: "faq-4",
      question: "How should I prepare for a colour appointment?",
      answer: "We recommend arriving with clean, dry hair free of heavy styling products or root cover sprays. Wearing a button-down shirt is also helpful for easy changing."
    },
    {
      id: "faq-5",
      question: "Can I upload an inspiration photo?",
      answer: "Yes! Our online request form allows you to attach inspiration photos so our stylists can review your vision before your visit."
    },
    {
      id: "faq-6",
      question: "Are prices the same for every customer?",
      answer: "Starting prices are listed on our Services section. Final pricing may vary depending on hair length, thickness, product volume required, and service complexity."
    },
    {
      id: "faq-7",
      question: "Do you offer children’s haircuts?",
      answer: "Yes, we offer gentle haircuts for children of all ages in a patient, welcoming environment."
    },
    {
      id: "faq-8",
      question: "How will I know my appointment is confirmed?",
      answer: "After submitting your online request, our team will review schedule availability and contact you via phone or email to confirm your exact appointment time."
    },
    {
      id: "faq-9",
      question: "Where is the salon located?",
      answer: "We are located at Unit 2, 1453 King Street East in Cambridge, Ontario (serving the Preston area). Parking is available right outside."
    },
    {
      id: "faq-10",
      question: "What is your cancellation policy?",
      answer: "We kindly ask for at least 24 hours' notice if you need to reschedule or cancel your appointment so we can offer the time slot to another client."
    }
  ] as FAQItem[],

  reviewPlaceholderNotice: "Customer reviews and testimonials will be published here after client authorization. We pride ourselves on authentic local service."
};
