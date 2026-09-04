import React, { useState } from 'react';
import { X, Send, CheckCircle, Mail, MapPin, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    scope: 'Digitales Produkt / UI/UX',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-card"
        className="bg-white border border-black/10 rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl relative text-[#111111]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center text-[#666666] hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
          id="close-contact-modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[#666666] text-[10px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Projektanfrage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-display">
                Lassen Sie uns sprechen.
              </h2>
              <p className="text-[#666666] text-sm font-light">
                Beschreiben Sie kurz Ihre Vision. Ich antworte gewöhnlich innerhalb von 24 Stunden.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#666666] mb-1.5 uppercase tracking-wider">
                  Ihr Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="z.B. Anna Müller"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-black/10 text-[#111111] placeholder-[#999999] focus:outline-none focus:border-black text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#666666] mb-1.5 uppercase tracking-wider">
                  E-Mail Adresse
                </label>
                <input
                  type="email"
                  required
                  placeholder="anna@unternehmen.de"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-black/10 text-[#111111] placeholder-[#999999] focus:outline-none focus:border-black text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#666666] mb-1.5 uppercase tracking-wider">
                  Projektbereich
                </label>
                <select
                  value={formState.scope}
                  onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-black/10 text-[#111111] focus:outline-none focus:border-black text-sm transition-colors cursor-pointer"
                >
                  <option value="Digitales Produkt / UI/UX">Digitales Produkt / UI/UX</option>
                  <option value="3D & WebGL Erlebnis">3D & WebGL Erlebnis</option>
                  <option value="Design System & Branding">Design System & Branding</option>
                  <option value="Strategische Beratung">Strategische Beratung</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#666666] mb-1.5 uppercase tracking-wider">
                  Ihre Nachricht
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Erzählen Sie mir von den Zielen, dem Zeitplan und den Erwartungen Ihres Projekts..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-black/10 text-[#111111] placeholder-[#999999] focus:outline-none focus:border-black text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
              >
                <span>Anfrage absenden</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#111111] font-display">
                Vielen Dank, {formState.name}!
              </h3>
              <p className="text-[#666666] text-sm max-w-sm mx-auto">
                Ihre Nachricht wurde erfolgreich übermittelt. Ich werde mich innerhalb der nächsten 24 Stunden bei Ihnen melden.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-semibold uppercase tracking-widest text-[#111111] transition-colors cursor-pointer"
            >
              Schließen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
