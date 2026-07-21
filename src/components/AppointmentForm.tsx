'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SALON_DATA } from '@/data/salonData';
import { Calendar, Clock, Upload, CheckCircle, AlertCircle, Send, ShieldAlert, Sparkles } from 'lucide-react';

const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (min 2 characters)'),
  phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  email: z.string().email('Please enter a valid email address'),
  contactMethod: z.enum(['phone', 'sms', 'email']),
  serviceRequested: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please choose a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time slot'),
  altDateOrTime: z.string().optional(),
  hairLength: z.string().min(1, 'Please select your current hair length'),
  hairCondition: z.string().min(1, 'Please select your current hair condition'),
  customerType: z.enum(['new', 'returning']),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must consent to be contacted regarding your request',
  }),
  // Honeypot field for spam prevention
  websiteUrlHp: z.string().max(0, 'Bot detected'),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

interface AppointmentFormProps {
  preselectedService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ preselectedService }) => {
  const router = useRouter();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      contactMethod: 'phone',
      serviceRequested: preselectedService || 'Women’s Haircut & Style',
      preferredDate: '',
      preferredTime: 'Morning (9am - 12pm)',
      altDateOrTime: '',
      hairLength: 'Medium',
      hairCondition: 'Natural / Uncoloured',
      customerType: 'new',
      message: '',
      consent: false,
      websiteUrlHp: '',
    }
  });

  // Handle Phone auto-formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 10) input = input.slice(0, 10);
    
    let formatted = input;
    if (input.length > 6) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    } else if (input.length > 3) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    }
    setValue('phone', formatted, { shouldValidate: true });
  };

  // Handle Photo Upload validation
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Type check
    if (!file.type.startsWith('image/')) {
      setFileError('Please upload an image file (JPG, PNG, WEBP).');
      return;
    }

    // Size check (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileError('Image size must be smaller than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: AppointmentFormValues) => {
    // Simulate server submission
    await new Promise(resolve => setTimeout(resolve, 800));

    // Store submission summary in sessionStorage for Thank You page display
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('lastAppointmentRequest', JSON.stringify({
        name: data.fullName,
        service: data.serviceRequested,
        date: data.preferredDate,
        time: data.preferredTime,
        phone: data.phone,
      }));
    }

    router.push('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Honeypot field (hidden from real users) */}
      <input
        type="text"
        {...register('websiteUrlHp')}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Notice Banner */}
      <div className="bg-beige-100 p-4 rounded-xl border border-beige-300 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
        <p className="text-xs text-charcoal leading-relaxed font-medium">
          {SALON_DATA.business.contactNote}
        </p>
      </div>

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Full Name <span className="text-burgundy">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Jane Doe"
            {...register('fullName')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all ${
              errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-beige-300'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Phone Number <span className="text-burgundy">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(519) 000-0000"
            onChange={handlePhoneChange}
            value={watch('phone')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all ${
              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-beige-300'
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Preferred Contact Method */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Email Address <span className="text-burgundy">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all ${
              errors.email ? 'border-red-500 bg-red-50/20' : 'border-beige-300'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contactMethod" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Preferred Contact Method <span className="text-burgundy">*</span>
          </label>
          <select
            id="contactMethod"
            {...register('contactMethod')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
          >
            <option value="phone">Phone Call</option>
            <option value="sms">SMS Text Message</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label htmlFor="serviceRequested" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Service Requested <span className="text-burgundy">*</span>
        </label>
        <select
          id="serviceRequested"
          {...register('serviceRequested')}
          className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
        >
          {SALON_DATA.services.map((svc) => (
            <option key={svc.id} value={svc.name}>
              {svc.name} ({svc.startingPrice})
            </option>
          ))}
          <option value="Consultation / Other">Consultation / Custom Request</option>
        </select>
      </div>

      {/* Dates and Time */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Preferred Date <span className="text-burgundy">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            {...register('preferredDate')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all ${
              errors.preferredDate ? 'border-red-500' : 'border-beige-300'
            }`}
          />
          {errors.preferredDate && (
            <p className="text-xs text-red-600 mt-1">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Preferred Time <span className="text-burgundy">*</span>
          </label>
          <select
            id="preferredTime"
            {...register('preferredTime')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
          >
            <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
            <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
            <option value="Late Afternoon / Evening (4pm - 7pm)">Late Afternoon (4pm - 7pm)</option>
            <option value="Flexible / Any Time">Flexible / Any Time</option>
          </select>
        </div>

        <div>
          <label htmlFor="altDateOrTime" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Alt Date / Time (Optional)
          </label>
          <input
            id="altDateOrTime"
            type="text"
            placeholder="e.g. Saturday afternoon"
            {...register('altDateOrTime')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
          />
        </div>
      </div>

      {/* Hair Details */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="hairLength" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Hair Length <span className="text-burgundy">*</span>
          </label>
          <select
            id="hairLength"
            {...register('hairLength')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
          >
            <option value="Short (above ears/chin)">Short (above chin)</option>
            <option value="Medium (shoulder length)">Medium (shoulder length)</option>
            <option value="Long (past shoulders)">Long (past shoulders)</option>
            <option value="Extra Long (waist length)">Extra Long (waist)</option>
          </select>
        </div>

        <div>
          <label htmlFor="hairCondition" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Hair Condition <span className="text-burgundy">*</span>
          </label>
          <select
            id="hairCondition"
            {...register('hairCondition')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
          >
            <option value="Natural / Uncoloured">Natural / Uncoloured</option>
            <option value="Colored / Bleached">Colored / Bleached</option>
            <option value="Permed / Chemically Treated">Chemically Treated</option>
            <option value="Dry / Damaged">Dry or Damaged</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Client Status <span className="text-burgundy">*</span>
          </label>
          <div className="flex items-center gap-4 pt-2">
            <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
              <input
                type="radio"
                value="new"
                {...register('customerType')}
                className="text-burgundy focus:ring-burgundy"
              />
              <span>New Client</span>
            </label>
            <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
              <input
                type="radio"
                value="returning"
                {...register('customerType')}
                className="text-burgundy focus:ring-burgundy"
              />
              <span>Returning Client</span>
            </label>
          </div>
        </div>
      </div>

      {/* Style Description / Notes */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Notes or Desired Style Details
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Describe the haircut, style, or colour look you want..."
          {...register('message')}
          className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy transition-all"
        />
      </div>

      {/* Optional Inspiration Photo Upload */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Optional Inspiration Photo Upload
        </label>
        <div className="border-2 border-dashed border-beige-300 rounded-xl p-4 text-center bg-beige-50 hover:bg-beige-100 transition-colors">
          <input
            type="file"
            id="photoUpload"
            accept="image/png, image/jpeg, image/webp"
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <label htmlFor="photoUpload" className="cursor-pointer flex flex-col items-center gap-2">
            <Upload className="w-6 h-6 text-burgundy" />
            <span className="text-xs font-semibold text-charcoal">
              Click to select photo (JPG, PNG, WEBP - Max 5MB)
            </span>
          </label>
          {fileError && <p className="text-xs text-red-600 mt-2">{fileError}</p>}
          {photoPreview && (
            <div className="mt-3 inline-block relative border rounded-lg overflow-hidden">
              <img src={photoPreview} alt="Upload preview" className="w-24 h-24 object-cover" />
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 absolute bottom-0 inset-x-0">
                Uploaded
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Consent Checkbox */}
      <div>
        <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
          <input
            id="consent"
            type="checkbox"
            {...register('consent')}
            className="mt-1 rounded text-burgundy focus:ring-burgundy w-4 h-4"
          />
          <span className="text-xs text-warmgrey leading-normal">
            I agree to allow Not Just Cuts to contact me via phone, SMS, or email regarding this appointment request. I understand my appointment is not confirmed until approved by salon staff.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-burgundy hover:bg-burgundy-hover text-white font-bold py-4 px-6 rounded-xl shadow-card transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-burgundy disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Sending Request...</span>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Submit Appointment Request</span>
          </>
        )}
      </button>

    </form>
  );
};
