export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string;
}

export interface TrustItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  message?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  hours: string;
  whatsapp: string;
}
