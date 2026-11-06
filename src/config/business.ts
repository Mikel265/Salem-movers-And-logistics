import { BusinessConfig, ServiceItem, ServicePrinciple } from '../types';

export const businessConfig: BusinessConfig = {
  name: "Salem Movers And Logistics",
  location: "Nakuru, Kenya",
  coverage: "Across Kenya",
  phoneDisplay: "+254 728 856225",
  phoneLink: "tel:+254728856225",
  whatsappNumber: "254728856225",
  whatsappUrl: "https://wa.me/254728856225",
  email: null, // initially unset; omitted from visible interface
  website: null,
  socialLinks: [], // initially unset; omitted from visible interface
  logoPath: "/logo.png",
  motto: "Moving You With Care",
  colors: {
    primary: "#01388B", // Official Royal / Cobalt Blue
    primaryDark: "#002060", // Deep Badge Navy
    accent: "#E09D4E", // Moving Box Warm Amber/Gold
    sky: "#38BDF8", // Kenya Horizon Sky Blue
    white: "#FFFFFF",
    background: "#080E1A", // Deep Navy Night
    surface: "#0F1E36",
    surfaceRaised: "#162947",
    border: "#203A63",
  },
};

export const defaultWhatsAppMessage =
  "Hello Salem Movers And Logistics. I would like to enquire about your services and request a quotation. Please assist me with the next steps.";

export const servicesData: ServiceItem[] = [
  {
    id: 'residential-moving',
    title: 'House & Residential Moving',
    shortTitle: 'House Moving',
    description:
      'Moving houses, apartments, and household belongings with careful handling and practical coordination from collection to delivery.',
    iconName: 'House',
    whatsappPrefill:
      'Hello Salem Movers And Logistics. I am interested in House & Residential Moving. Please assist me with a quotation.',
    features: [
      'Careful handling of furniture & delicate items',
      'Apartments, maisonettes & residential homes',
      'Nakuru & nationwide transfers across Kenya',
    ],
  },
  {
    id: 'office-relocation',
    title: 'Office & Commercial Relocation',
    shortTitle: 'Office Relocation',
    description:
      'Relocation services for offices, shops, and commercial spaces, helping businesses coordinate their move and minimize disruption.',
    iconName: 'Building2',
    whatsappPrefill:
      'Hello Salem Movers And Logistics. I am interested in Office & Commercial Relocation. Please assist me with a quotation.',
    features: [
      'Workstations, electronics & office archives',
      'Planned schedule to reduce downtime',
      'Shops, retail & corporate locations',
    ],
  },
  {
    id: 'furniture-transport',
    title: 'Furniture Transportation',
    shortTitle: 'Furniture Transport',
    description:
      'Transportation for furniture, appliances, and bulky household or business items according to your delivery requirements.',
    iconName: 'Truck',
    whatsappPrefill:
      'Hello Salem Movers And Logistics. I am interested in Furniture Transportation. Please assist me with a quotation.',
    features: [
      'Single large items or multi-piece consignments',
      'Secure fastening and transport transit',
      'Scheduled pickup & point-to-point delivery',
    ],
  },
  {
    id: 'packing-unpacking',
    title: 'Packing & Unpacking',
    shortTitle: 'Packing & Unpacking',
    description:
      'Packing assistance and unpacking support to help organize your move and prepare belongings for transportation.',
    iconName: 'Package',
    whatsappPrefill:
      'Hello Salem Movers And Logistics. I am interested in Packing & Unpacking services. Please assist me with a quotation.',
    features: [
      'Systematic boxing and room-by-room labeling',
      'Protection for glassware and fragile decor',
      'Assistance setting up on arrival',
    ],
  },
  {
    id: 'fumigation-pest-control',
    title: 'Fumigation & Pest Control',
    shortTitle: 'Fumigation & Pest Control',
    description:
      'Fumigation and pest-control services for residential and commercial spaces, with the service arranged according to the property and pest-control requirements.',
    iconName: 'ShieldCheck',
    whatsappPrefill:
      'Hello Salem Movers And Logistics. I am interested in Fumigation & Pest Control services. Please assist me with a quotation.',
    features: [
      'Residential houses, apartments & compounds',
      'Commercial premises, stores & office spaces',
      'Targeted treatments according to property needs',
    ],
  },
  {
    id: 'storage-services',
    title: 'Storage Services',
    shortTitle: 'Storage Services',
    description:
      'Storage solutions for customers who need additional space for their belongings during a move or for another agreed period.',
    iconName: 'Warehouse',
    whatsappPrefill:
      'Hello Salem Movers And Logistics. I am interested in Storage Services. Please assist me with a quotation.',
    features: [
      'Short-term & transitional storage options',
      'Safe holding for furniture & household goods',
      'Arranged according to agreed timelines',
    ],
  },
];

export const servicePrinciples: ServicePrinciple[] = [
  {
    number: "01",
    title: "Careful Handling",
    tagline: "Respect for belongings",
    description:
      "Every piece of furniture, box, and property is treated with diligence and respect. We prioritize structured loading, protective securing, and attentive delivery.",
  },
  {
    number: "02",
    title: "Clear Communication",
    tagline: "Direct & responsive",
    description:
      "No ambiguity. From your initial enquiry on WhatsApp or phone to the final handover, our team keeps you informed at every stage of the service.",
  },
  {
    number: "03",
    title: "Practical Coordination",
    tagline: "Organized execution",
    description:
      "Moving and property care can feel overwhelming. We bring practical planning and step-by-step coordination so your move proceeds cleanly.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us what service you need, your location, preferred date, and the details of your requirements.",
  },
  {
    number: "02",
    title: "Discuss Your Requirements",
    description:
      "We review the information, clarify any important details, and discuss the appropriate service and quotation.",
  },
  {
    number: "03",
    title: "Prepare & Carry Out the Service",
    description:
      "We coordinate the agreed moving, transportation, packing, storage, or fumigation work.",
  },
  {
    number: "04",
    title: "Complete the Job",
    description:
      "The service is completed according to the agreed scope and arrangements.",
  },
];

export const benefitsStripData = [
  { title: "MOVING & RELOCATION", subtitle: "Homes, Offices & Bulky Goods" },
  { title: "FUMIGATION & PEST CONTROL", subtitle: "Residential & Commercial" },
  { title: "SERVICES ACROSS KENYA", subtitle: "Based in Nakuru, Serving Nationwide" },
  { title: "CONVENIENT ENQUIRIES", subtitle: "Direct WhatsApp & Phone Access" },
];
