'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload, Info, Send, Camera } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  desiredService: z.string().min(1, 'Please select desired service'),
  currentHairColour: z.string().min(2, 'Please describe current hair colour'),
  desiredResult: z.string().min(2, 'Please describe desired result'),
  hairLength: z.string().min(1, 'Select hair length'),
  previousChemicals: z.string().min(1, 'Specify previous chemical treatments'),
  preferredDate: z.string().optional(),
  additionalNotes: z.string().optional(),
  consent: z.boolean().refine(v => v === true, { message: 'Consent required' }),
  hpSpam: z.string().max(0),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export const QuoteRequestForm: React.FC = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      desiredService: 'Balayage / Ombré',
      currentHairColour: '',
      desiredResult: '',
      hairLength: 'Medium (shoulder length)',
      previousChemicals: 'None in the past 12 months',
      preferredDate: '',
      additionalNotes: '',
      consent: false,
      hpSpam: '',
    }
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length > 10) input = input.slice(0, 10);
    let formatted = input;
    if (input.length > 6) formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    else if (input.length > 3) formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    setValue('phone', formatted, { shouldValidate: true });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoError(null);
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 3) {
      setPhotoError('You can upload up to 3 photos max.');
      return;
    }

    files.forEach(file => {
      if (!file.type.startsWith('image/')) {
        setPhotoError('Only image files allowed.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setPhotoError('Each image must be under 5MB.');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data: QuoteFormValues) => {
    await new Promise(r => setTimeout(r, 800));
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('lastAppointmentRequest', JSON.stringify({
        name: data.name,
        service: `Quote Request: ${data.desiredService}`,
        date: data.preferredDate || 'Flexible',
        time: 'Pending Quote',
        phone: data.phone,
      }));
    }
    router.push('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      <input type="text" {...register('hpSpam')} tabIndex={-1} className="hidden" />

      {/* Quote Disclaimer */}
      <div className="bg-gold-bg p-4 rounded-xl border border-gold/30 flex items-start gap-3">
        <Info className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
        <p className="text-xs text-charcoal leading-relaxed font-medium">
          <strong>Quote Disclaimer: </strong>
          Online estimates are approximate. Final pricing may require an in-person consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Name <span className="text-burgundy">*</span>
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            {...register('name')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy ${
              errors.name ? 'border-red-500' : 'border-beige-300'
            }`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Phone <span className="text-burgundy">*</span>
          </label>
          <input
            type="tel"
            placeholder="(519) 000-0000"
            onChange={handlePhoneChange}
            value={watch('phone')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy ${
              errors.phone ? 'border-red-500' : 'border-beige-300'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Email <span className="text-burgundy">*</span>
        </label>
        <input
          type="email"
          placeholder="jane@example.com"
          {...register('email')}
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy ${
            errors.email ? 'border-red-500' : 'border-beige-300'
          }`}
        />
        {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Desired Service <span className="text-burgundy">*</span>
          </label>
          <select
            {...register('desiredService')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy"
          >
            <option value="Balayage / Ombré">Balayage / Ombré</option>
            <option value="Full Hair Colour">Full Hair Colour</option>
            <option value="Highlights (Full / Partial)">Highlights (Full / Partial)</option>
            <option value="Colour Correction">Colour Correction</option>
            <option value="Special Event Updo / Styling">Special Event Updo / Styling</option>
            <option value="Keratin Smoothing">Keratin Smoothing</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Hair Length <span className="text-burgundy">*</span>
          </label>
          <select
            {...register('hairLength')}
            className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy"
          >
            <option value="Short (chin length)">Short (chin length)</option>
            <option value="Medium (shoulder length)">Medium (shoulder length)</option>
            <option value="Long (past shoulders)">Long (past shoulders)</option>
            <option value="Extra Long (waist)">Extra Long (waist)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Current Hair Colour <span className="text-burgundy">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Dark brown with grown-out roots"
            {...register('currentHairColour')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy ${
              errors.currentHairColour ? 'border-red-500' : 'border-beige-300'
            }`}
          />
          {errors.currentHairColour && <p className="text-xs text-red-600 mt-1">{errors.currentHairColour.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
            Desired Goal / Result <span className="text-burgundy">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Soft honey blonde balayage"
            {...register('desiredResult')}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white focus:ring-2 focus:ring-burgundy ${
              errors.desiredResult ? 'border-red-500' : 'border-beige-300'
            }`}
          />
          {errors.desiredResult && <p className="text-xs text-red-600 mt-1">{errors.desiredResult.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Previous Chemical Treatments <span className="text-burgundy">*</span>
        </label>
        <select
          {...register('previousChemicals')}
          className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy"
        >
          <option value="None in the past 12 months">None in the past 12 months (Natural)</option>
          <option value="Box dye in past 6 months">Box dye in past 6 months</option>
          <option value="Professional salon color">Professional salon color</option>
          <option value="Bleached / Lightened">Bleached / Lightened</option>
          <option value="Perm or Chemical Straightener">Perm or Chemical Straightener</option>
        </select>
      </div>

      {/* Upload up to 3 photos */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Upload Current Hair / Inspiration Photos (Up to 3 photos)
        </label>
        <div className="border-2 border-dashed border-beige-300 rounded-xl p-4 text-center bg-beige-50 hover:bg-beige-100 transition-colors">
          <input
            type="file"
            id="quotePhotos"
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <label htmlFor="quotePhotos" className="cursor-pointer flex flex-col items-center gap-2">
            <Camera className="w-6 h-6 text-burgundy" />
            <span className="text-xs font-semibold text-charcoal">
              Click to select current hair photos or inspiration photos
            </span>
          </label>
          {photoError && <p className="text-xs text-red-600 mt-2">{photoError}</p>}
          {photos.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              {photos.map((src, i) => (
                <div key={i} className="relative w-20 h-20 border rounded-lg overflow-hidden">
                  <img src={src} alt={`Preview ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          rows={3}
          placeholder="Any specific questions or details..."
          {...register('additionalNotes')}
          className="w-full px-4 py-3 rounded-xl border border-beige-300 text-sm bg-white focus:ring-2 focus:ring-burgundy"
        />
      </div>

      <div>
        <label htmlFor="quoteConsent" className="flex items-start gap-3 cursor-pointer">
          <input
            id="quoteConsent"
            type="checkbox"
            {...register('consent')}
            className="mt-1 rounded text-burgundy focus:ring-burgundy w-4 h-4"
          />
          <span className="text-xs text-warmgrey">
            I consent to receiving an estimated price quote from Not Just Cuts via phone or email.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 mt-1">{errors.consent.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-burgundy hover:bg-burgundy-hover text-white font-bold py-4 px-6 rounded-xl shadow-card transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-burgundy disabled:opacity-50"
      >
        <Send className="w-5 h-5" />
        <span>Request Price Quote</span>
      </button>

    </form>
  );
};
