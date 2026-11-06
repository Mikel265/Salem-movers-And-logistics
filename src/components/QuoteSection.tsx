import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  MessageCircle,
  Phone,
  Calendar,
  User,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { businessConfig } from '../config/business';
import { ServiceId, QuoteFormData } from '../types';
import { validateKenyanPhone } from '../lib/utils';

interface QuoteSectionProps {
  selectedService: ServiceId;
  onServiceChange: (service: ServiceId) => void;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  selectedService,
  onServiceChange,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    service: selectedService,
    preferredDate: '',
    pickupLocation: '',
    destinationLocation: '',
    itemsDescription: '',
    propertyType: 'residential',
    serviceLocation: '',
    pestProblem: 'general',
    pestDetails: '',
    storageItemTypes: '',
    storageDuration: '1-3 months',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handoffSuccess, setHandoffSuccess] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync external selectedService prop
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const isFumigation = formData.service === 'fumigation-pest-control';
  const isStorage = formData.service === 'storage-services';
  const isMovingOrTransport =
    formData.service === 'residential-moving' ||
    formData.service === 'office-relocation' ||
    formData.service === 'furniture-transport' ||
    formData.service === 'packing-unpacking';

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!validateKenyanPhone(formData.phone)) {
      newErrors.phone =
        'Please enter a valid Kenyan phone number (e.g. 0712 345 678 or +254 712 345 678).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date.';
    }

    if (isMovingOrTransport) {
      if (!formData.pickupLocation?.trim()) {
        newErrors.pickupLocation = 'Please provide the pickup location.';
      }
      if (!formData.destinationLocation?.trim()) {
        newErrors.destinationLocation = 'Please provide the destination location.';
      }
    } else if (isFumigation) {
      if (!formData.serviceLocation?.trim()) {
        newErrors.serviceLocation = 'Please provide the property / service location.';
      }
    } else if (isStorage) {
      if (!formData.pickupLocation?.trim()) {
        newErrors.pickupLocation = 'Please provide your current items location.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getServiceLabel = (serviceId: ServiceId): string => {
    switch (serviceId) {
      case 'residential-moving':
        return 'House & Residential Moving';
      case 'office-relocation':
        return 'Office & Commercial Relocation';
      case 'furniture-transport':
        return 'Furniture Transportation';
      case 'packing-unpacking':
        return 'Packing & Unpacking';
      case 'fumigation-pest-control':
        return 'Fumigation & Pest Control';
      case 'storage-services':
        return 'Storage Services';
      default:
        return 'General Service Enquiry';
    }
  };

  const generateWhatsAppMessage = (): string => {
    const lines = [
      `*SALEM MOVERS & LOGISTICS — QUOTATION ENQUIRY*`,
      `*Motto: Moving You With Care*`,
      `--------------------------------------`,
      `*Customer Name:* ${formData.fullName.trim()}`,
      `*Phone Number:* ${formData.phone.trim()}`,
      `*Service Required:* ${getServiceLabel(formData.service)}`,
      `*Preferred Date:* ${formData.preferredDate}`,
    ];

    if (isMovingOrTransport) {
      lines.push(`*Pickup Location:* ${formData.pickupLocation?.trim()}`);
      lines.push(`*Destination:* ${formData.destinationLocation?.trim()}`);
      if (formData.itemsDescription?.trim()) {
        lines.push(`*Items Description:* ${formData.itemsDescription.trim()}`);
      }
    } else if (isFumigation) {
      lines.push(`*Property Type:* ${formData.propertyType}`);
      lines.push(`*Service Location:* ${formData.serviceLocation?.trim()}`);
      lines.push(`*Pest Concern:* ${formData.pestProblem}`);
      if (formData.pestDetails?.trim()) {
        lines.push(`*Pest Details:* ${formData.pestDetails.trim()}`);
      }
    } else if (isStorage) {
      lines.push(`*Location of Items:* ${formData.pickupLocation?.trim()}`);
      lines.push(`*Estimated Duration:* ${formData.storageDuration}`);
      if (formData.storageItemTypes?.trim()) {
        lines.push(`*Items to Store:* ${formData.storageItemTypes.trim()}`);
      }
    }

    if (formData.additionalNotes?.trim()) {
      lines.push(`*Additional Requirements:* ${formData.additionalNotes.trim()}`);
    }

    lines.push(`--------------------------------------`);
    lines.push(`Sent via Salem Movers website enquiry handoff.`);

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp in new tab for transparent handoff
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setHandoffSuccess(true);
    }, 400);
  };

  const copyToClipboard = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <section id="quote" className="relative z-30">
      {/* 1. OFFICIAL ROYAL BLUE QUOTE BANNER */}
      <div className="bg-[#01388B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-[#1E6FD9] shadow-xl">
        <div className="max-w-[1536px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 bg-[#080E1A] text-[#38BDF8] text-xs font-bold uppercase tracking-wider rounded-full border border-[#203A63] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E09D4E]" />
              <span>GET A FREE QUOTE · MOVING YOU WITH CARE</span>
            </div>
            <h2 className="text-cta-heading text-white font-serif uppercase tracking-tight mb-4 drop-shadow-md">
              LET'S GET YOUR MOVE <span className="text-[#38BDF8] inline-block font-serif italic">STARTED.</span>
            </h2>
            <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed">
              Tell us what you need, where the service is required, and when you would like it
              carried out. Our team can review your requirements and discuss the next steps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={businessConfig.phoneLink}
              className="inline-flex items-center justify-center gap-3 bg-[#080E1A] text-white hover:text-[#38BDF8] font-bold text-sm sm:text-base px-8 py-4 uppercase tracking-wider rounded-xl transition-all duration-300 border border-[#203A63] hover:border-[#38BDF8] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#38BDF8]" />
              <span>Call: {businessConfig.phoneDisplay}</span>
            </a>
            <p className="text-xs text-blue-200 text-center lg:text-left font-medium">
              Share your requirements. Discuss the details with our team.
            </p>
          </div>
        </div>
      </div>

      {/* 2. STRUCTURED QUOTATION FORM ON NAVY RAISED SURFACE */}
      <div className="bg-[#0B1320] py-16 sm:py-20 border-b border-[#162947]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F1E36] border border-[#203A63] p-6 sm:p-10 rounded-2xl shadow-2xl">
            {/* Header info */}
            <div className="mb-8 pb-6 border-b border-[#162947]">
              <h3 className="font-serif text-3xl sm:text-4xl text-white uppercase tracking-wide mb-2 font-medium">
                Service Quotation Form
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Fill in your service requirements below. Your details will be formatted and handed
                directly to the Salem Movers team on WhatsApp for an accurate consultation.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#38BDF8] font-semibold bg-[#162947] border border-[#203A63] px-3.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Fast Response (Typically 15–30 mins)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-[#162947] border border-[#203A63] px-3.5 py-1 rounded-full">
                  <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
                </span>
              </div>
            </div>

            {handoffSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-5 bg-[#162947] border border-[#38BDF8] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                      Enquiry Handoff Initiated!
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      WhatsApp has been launched with your enquiry. You can also copy your enquiry
                      text or call our Nakuru dispatch directly at{' '}
                      <span className="text-[#38BDF8] font-semibold">
                        {businessConfig.phoneDisplay}
                      </span>
                      .
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0F1E36] border border-[#203A63] hover:border-[#38BDF8] rounded-lg text-xs font-semibold text-white shrink-0 active:scale-95 transition-all"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-4 h-4 text-[#38BDF8]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Core 1: Service Selection */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-2"
                >
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => {
                    handleInputChange(e);
                    onServiceChange(e.target.value as ServiceId);
                  }}
                  className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none transition-colors"
                >
                  <option value="residential-moving">House &amp; Residential Moving</option>
                  <option value="office-relocation">Office &amp; Commercial Relocation</option>
                  <option value="furniture-transport">Furniture Transportation</option>
                  <option value="packing-unpacking">Packing &amp; Unpacking</option>
                  <option value="fumigation-pest-control">Fumigation &amp; Pest Control</option>
                  <option value="storage-services">Storage Services</option>
                  <option value="other-enquiry">Other Service Enquiry</option>
                </select>
              </div>

              {/* Core 2: Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center justify-between"
                  >
                    <span>Full Name *</span>
                    <User className="w-3.5 h-3.5 text-slate-400" />
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. John Kamau"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full bg-[#162947] border ${
                      errors.fullName ? 'border-red-500' : 'border-[#203A63]'
                    } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500 transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center justify-between"
                  >
                    <span>Kenyan Phone Number *</span>
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 0728 856 225 or +254 728..."
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full bg-[#162947] border ${
                      errors.phone ? 'border-red-500' : 'border-[#203A63]'
                    } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500 transition-colors`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Core 3: Preferred Date */}
              <div>
                <label
                  htmlFor="preferredDate"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center justify-between"
                >
                  <span>Preferred Date of Service *</span>
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full bg-[#162947] border ${
                    errors.preferredDate ? 'border-red-500' : 'border-[#203A63]'
                  } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none transition-colors`}
                />
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* CONDITIONAL 1: Moving & Transport Fields */}
              {isMovingOrTransport && (
                <div className="pt-4 border-t border-[#162947] space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="pickupLocation"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center justify-between"
                      >
                        <span>Pickup Location *</span>
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        placeholder="e.g. Nakuru Section 58, Milimani, etc."
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        className={`w-full bg-[#162947] border ${
                          errors.pickupLocation ? 'border-red-500' : 'border-[#203A63]'
                        } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500`}
                      />
                      {errors.pickupLocation && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.pickupLocation}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="destinationLocation"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 flex items-center justify-between"
                      >
                        <span>Destination Location *</span>
                        <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      </label>
                      <input
                        type="text"
                        id="destinationLocation"
                        name="destinationLocation"
                        placeholder="e.g. Nairobi Kilimani, Eldoret, Naivasha, etc."
                        value={formData.destinationLocation}
                        onChange={handleInputChange}
                        className={`w-full bg-[#162947] border ${
                          errors.destinationLocation ? 'border-red-500' : 'border-[#203A63]'
                        } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500`}
                      />
                      {errors.destinationLocation && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.destinationLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="itemsDescription"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                    >
                      Description of Items to Move (Optional)
                    </label>
                    <textarea
                      id="itemsDescription"
                      name="itemsDescription"
                      rows={3}
                      placeholder="e.g. 2-bedroom apartment furniture, fridge, dining set, 15 boxes..."
                      value={formData.itemsDescription}
                      onChange={handleInputChange}
                      className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500"
                    />
                  </div>
                </div>
              )}

              {/* CONDITIONAL 2: Fumigation & Pest Control Fields */}
              {isFumigation && (
                <div className="pt-4 border-t border-[#162947] space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                      >
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none"
                      >
                        <option value="residential">Residential Home / House</option>
                        <option value="apartment">Apartment / Flat</option>
                        <option value="commercial">Commercial Office / Shop</option>
                        <option value="warehouse">Warehouse / GoDown</option>
                        <option value="other">Other Property</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="serviceLocation"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                      >
                        Property / Service Location *
                      </label>
                      <input
                        type="text"
                        id="serviceLocation"
                        name="serviceLocation"
                        placeholder="e.g. Nakuru Kiamunyi, Naka, etc."
                        value={formData.serviceLocation}
                        onChange={handleInputChange}
                        className={`w-full bg-[#162947] border ${
                          errors.serviceLocation ? 'border-red-500' : 'border-[#203A63]'
                        } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500`}
                      />
                      {errors.serviceLocation && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.serviceLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="pestProblem"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                      >
                        Pest Concern (If known)
                      </label>
                      <select
                        id="pestProblem"
                        name="pestProblem"
                        value={formData.pestProblem}
                        onChange={handleInputChange}
                        className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none"
                      >
                        <option value="general">General preventative pest control</option>
                        <option value="bedbugs">Bedbugs</option>
                        <option value="cockroaches">Cockroaches</option>
                        <option value="termites">Termites / Wood borers</option>
                        <option value="rodents">Rodents / Rats / Mice</option>
                        <option value="fleas_ticks">Fleas / Ticks</option>
                        <option value="other">Other pest issue</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="pestDetails"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                      >
                        Additional Pest Details
                      </label>
                      <input
                        type="text"
                        id="pestDetails"
                        name="pestDetails"
                        placeholder="e.g. 3-bedroom flat, recurring issue..."
                        value={formData.pestDetails}
                        onChange={handleInputChange}
                        className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* CONDITIONAL 3: Storage Services Fields */}
              {isStorage && (
                <div className="pt-4 border-t border-[#162947] space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="pickupLocation"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                      >
                        Current Location of Belongings *
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        placeholder="e.g. Nakuru Town, London, etc."
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        className={`w-full bg-[#162947] border ${
                          errors.pickupLocation ? 'border-red-500' : 'border-[#203A63]'
                        } focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500`}
                      />
                      {errors.pickupLocation && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.pickupLocation}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="storageDuration"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                      >
                        Approximate Storage Duration
                      </label>
                      <select
                        id="storageDuration"
                        name="storageDuration"
                        value={formData.storageDuration}
                        onChange={handleInputChange}
                        className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none"
                      >
                        <option value="1-2 weeks">1 to 2 Weeks (Transitional)</option>
                        <option value="1 month">1 Month</option>
                        <option value="2-3 months">2 to 3 Months</option>
                        <option value="3-6 months">3 to 6 Months</option>
                        <option value="long-term">Long-term (Agreed term)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="storageItemTypes"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                    >
                      Type of Items to Store
                    </label>
                    <input
                      type="text"
                      id="storageItemTypes"
                      name="storageItemTypes"
                      placeholder="e.g. Living room furniture, appliances, boxes..."
                      value={formData.storageItemTypes}
                      onChange={handleInputChange}
                      className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500"
                    />
                  </div>
                </div>
              )}

              {/* General: Additional Requirements */}
              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2"
                >
                  Additional Requirements / Specific Instructions (Optional)
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={2}
                  placeholder="Any floor level, stairs, delicate items, or specific access instructions..."
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="w-full bg-[#162947] border border-[#203A63] focus:border-[#38BDF8] text-white text-sm px-4 py-3 rounded-none placeholder:text-slate-500"
                />
              </div>

              {/* Submission Button and Transparency Notice */}
              <div className="pt-4 border-t border-[#162947] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#01388B] hover:bg-[#1E6FD9] text-white font-bold text-sm sm:text-base px-8 py-4 uppercase tracking-wider rounded-xl active:scale-[0.98] transition-all duration-300 disabled:opacity-50 border border-[#38BDF8]/40 shadow-lg shadow-[#01388B]/40 hover:shadow-xl hover:shadow-[#01388B]/50 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-[#E09D4E] group-hover:translate-x-1 transition-transform duration-300" />
                  <span>
                    {isSubmitting ? 'Opening WhatsApp...' : 'Submit & Connect on WhatsApp'}
                  </span>
                </button>

                <a
                  href={businessConfig.phoneLink}
                  className="inline-flex items-center justify-center gap-2 bg-[#162947] hover:bg-[#1f375e] text-white border border-[#203A63] text-sm px-6 py-4 font-semibold rounded-xl transition-all duration-300 active:scale-95 hover:border-[#38BDF8]/50"
                >
                  <Phone className="w-4 h-4 text-[#38BDF8]" />
                  <span>Call Us Instead</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>
                  Transparent handoff: Submitting sends your prefilled enquiry directly to Salem
                  Movers on WhatsApp (+254 728 856225). No spam, no automated bot loops.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
