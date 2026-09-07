import React, { useState } from 'react';
import { X, Calendar, Trees, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-09-10',
    time: '18:30',
    guests: '2',
    seating: 'Outdoor Under Trees',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-coffee-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-coffee-900 border border-coffee-800 w-full max-w-lg rounded-xl shadow-2xl overflow-hidden relative text-cream-100 animate-slide-up">
        
        <div className="flex items-center justify-between p-6 border-b border-coffee-800/80 bg-coffee-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-950/60 border border-amber-800/50 rounded-md">
              <Calendar className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-serif-vintage text-xl font-semibold text-cream-50">
                Reserve Table
              </h3>
              <p className="text-[11px] text-cream-300/70 font-light">
                Twenteas Cafeteria · Karunagappally
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-cream-400 hover:text-cream-100 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-olive-900/60 border border-olive-600/40 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-olive-400" />
            </div>
            <h4 className="font-serif-vintage text-2xl text-cream-50 font-semibold">
              Table Reservation Requested!
            </h4>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-sm mx-auto font-light leading-relaxed">
              Thank you, <strong className="text-cream-100 font-medium">{formData.name}</strong>! We have reserved space for <strong className="text-amber-400">{formData.guests} guests</strong> on <strong className="text-cream-100">{formData.date} at {formData.time}</strong> ({formData.seating}).
            </p>
            <p className="text-[11px] text-cream-400/60 font-mono">
              A confirmation WhatsApp message will be sent to {formData.phone || 'your number'}.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-amber-600 text-coffee-950 font-bold uppercase tracking-wider text-xs px-6 py-2.5 rounded-md hover:bg-amber-500 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream-300/80 mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anjali Nair"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 placeholder-cream-400/40 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-cream-300/80 mb-1 font-medium">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 placeholder-cream-400/40 focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream-300/80 mb-1 font-medium">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-cream-300/80 mb-1 font-medium">Time Slot</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 focus:outline-none"
                >
                  <option value="11:00">11:00 AM (Morning Brew)</option>
                  <option value="14:00">02:00 PM (Afternoon)</option>
                  <option value="17:30">05:30 PM (Sunset & Tea)</option>
                  <option value="18:30">06:30 PM (Evening Acoustic)</option>
                  <option value="20:00">08:00 PM (Dinner & Music)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream-300/80 mb-1 font-medium">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 focus:outline-none"
                >
                  <option value="1">1 Person (Quiet Solitude)</option>
                  <option value="2">2 Guests (Couple / Friends)</option>
                  <option value="4">4 Guests (Family Table)</option>
                  <option value="6">6 Guests (Group)</option>
                  <option value="8">8+ Guests (Celebration)</option>
                </select>
              </div>

              <div>
                <label className="block text-cream-300/80 mb-1 font-medium">Seating Preference</label>
                <select
                  value={formData.seating}
                  onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                  className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 focus:outline-none"
                >
                  <option value="Outdoor Under Trees">Outdoor Under Trees</option>
                  <option value="Shaded Wooden Deck">Shaded Wooden Deck</option>
                  <option value="Acoustic Stage View">Acoustic Stage View</option>
                  <option value="Indoor Quiet Corner">Indoor Quiet Corner</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-cream-300/80 mb-1 font-medium font-sans">Special Request (Optional)</label>
              <textarea
                rows={2}
                placeholder="High chair, birthday surprise, acoustic front row..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-coffee-950 border border-coffee-800 focus:border-amber-500 rounded-md px-3 py-2 text-cream-100 placeholder-cream-400/40 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-coffee-950 font-bold uppercase tracking-wider text-xs py-3 rounded-md shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Trees className="w-4 h-4" />
                Confirm Table Reservation
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
