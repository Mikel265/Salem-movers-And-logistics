import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Validates a Kenyan phone number in common formats:
 * +254712345678, 254712345678, 0712345678, 0112345678, +254 712 345 678, etc.
 */
export function validateKenyanPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  // Matches +2547..., +2541..., 2547..., 2541..., 07..., 01...
  const kenyanRegex = /^(?:\+?254|0)(?:7\d{8}|1\d{8})$/;
  return kenyanRegex.test(cleaned);
}

/**
 * Normalizes phone number into international format for WhatsApp: 2547XXXXXXXX or 2541XXXXXXXX
 */
export function normalizePhoneForWhatsApp(phone: string): string {
  const cleaned = phone.replace(/[\s\-+()]/g, '');
  if (cleaned.startsWith('0')) {
    return '254' + cleaned.slice(1);
  }
  if (cleaned.startsWith('254')) {
    return cleaned;
  }
  return cleaned;
}
