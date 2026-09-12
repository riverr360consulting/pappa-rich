export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const openWhatsApp = (phoneNumber: string, message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

export const sendEmail = (email: string, subject: string, body: string): void => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
