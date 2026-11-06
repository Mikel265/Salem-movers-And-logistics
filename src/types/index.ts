export type ServiceId =
  | 'residential-moving'
  | 'office-relocation'
  | 'furniture-transport'
  | 'packing-unpacking'
  | 'fumigation-pest-control'
  | 'storage-services'
  | 'other-enquiry';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  shortTitle: string;
  description: string;
  iconName: 'House' | 'Building2' | 'Truck' | 'Package' | 'ShieldCheck' | 'Warehouse';
  whatsappPrefill: string;
  features: string[];
}

export interface BusinessConfig {
  name: string;
  location: string;
  coverage: string;
  phoneDisplay: string;
  phoneLink: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string | null;
  website: string | null;
  socialLinks: Array<{ platform: string; url: string }>;
  logoPath?: string;
  motto?: string;
  colors?: Record<string, string>;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  service: ServiceId;
  preferredDate: string;
  // Moving specific
  pickupLocation?: string;
  destinationLocation?: string;
  itemsDescription?: string;
  // Fumigation specific
  propertyType?: 'residential' | 'commercial' | 'apartment' | 'warehouse' | 'other';
  serviceLocation?: string;
  pestProblem?: string;
  pestDetails?: string;
  // Storage specific
  storageItemTypes?: string;
  storageDuration?: string;
  // General
  additionalNotes?: string;
}

export interface ServicePrinciple {
  number: string;
  title: string;
  description: string;
  tagline: string;
}
