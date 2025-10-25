'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useFormValidation } from '@/hooks/use-form-validation';

interface ContactDetail {
  text: string;
  href?: string;
  target?: string;
  rel?: string;
}

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefon',
    details: [{ text: '+381 64 4123944', href: 'tel:+381644123944' }] as ContactDetail[],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Imejl adresa',
    details: [{ text: 'macuraproject@gmail.com', href: 'mailto:macuraproject@gmail.com' }] as ContactDetail[],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'WhatsApp',
    details: [{ text: 'Pošalji poruku', href: 'https://wa.me/381644123944', target: '_blank', rel: 'noopener noreferrer' }] as ContactDetail[],
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Adresa',
    details: [{ text: 'Surčinska 25A' }, { text: 'Novi Beograd' }] as ContactDetail[],
  },
];

const initialFormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const validationRules = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  company: {},
  message: { required: true, minLength: 10 },
};

export default function Contact() {
  const parallaxRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    values,
    errors,
    touched,
    setValue,
    setTouchedField,
    validateAll,
    reset
  } = useFormValidation(initialFormData, validationRules);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const subject = 'Nova poruka sa sajta';
      const body = `Ime: ${values.name}\n\nEmail: ${values.email}\n\nKompanija: ${values.company}\n\nPoruka:\n${values.message}`;
      
      window.location.href = `mailto:macuraproject@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (!validateAll()) {
      return;
    }
    
    const whatsappText = `*Nova poruka sa sajta*\n\n*Ime:* ${values.name}\n*Email:* ${values.email}\n*Kompanija:* ${values.company || 'Nije navedeno'}\n\n*Poruka:*\n${values.message}`;
    
    window.open(`https://wa.me/381644123944?text=${encodeURIComponent(whatsappText)}`, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.name as keyof typeof values, e.target.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouchedField(e.target.name as keyof typeof values);
  };

  return (
    <section 
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      ref={parallaxRef}
    >

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">
            Stupite u <span className="text-gradient">kontakt</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Vaša vizija zaslužuje da postane stvarnost. Hajde da zajedno kreiramo prostor koji će nadmašiti sva vaša očekivanja.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-white">
                  Započnite razgovor
                </h3>
                
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-300">Poruka je uspešno poslata! Odgovoriću vam uskoro.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-300">Došlo je do greške. Molimo pokušajte ponovo.</span>
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Vaše ime"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#C4A572] ${
                          touched.name && errors.name ? 'border-red-500' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {touched.name && errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email adresa"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#C4A572] ${
                          touched.email && errors.email ? 'border-red-500' : ''
                        }`}
                        disabled={isSubmitting}
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="company"
                      placeholder="Kompanija (opciono)"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#C4A572]"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Recite mi o vašem projektu..."
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={6}
                      className={`bg-black/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#C4A572] resize-none ${
                        touched.message && errors.message ? 'border-red-500' : ''
                      }`}
                      disabled={isSubmitting}
                    />
                    {touched.message && errors.message && (
                      <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full luxury-gradient text-black font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Šalje se...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Pošalji poruku
                      </>
                    )}
                  </Button>
                  
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="flex-shrink mx-3 text-gray-400 text-sm">ili</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                  </div>
                  
                  <Button 
                    type="button" 
                    onClick={handleWhatsAppClick}
                    className="w-full luxury-gradient text-black font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Pošalji poruku putem WhatsApp-a
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information and Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.9, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 transform hover:scale-105 hover:border-[#C4A572] transition-all duration-300"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[#C4A572]/10 text-[#C4A572]">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-white/70">
                            {detail.href ? (
                              <a
                                href={detail.href}
                                className="hover:text-[#C4A572] transition-colors"
                                target={detail.target}
                                rel={detail.rel}
                              >
                                {detail.text}
                              </a>
                            ) : (
                              detail.text
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
            <Card className="bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 overflow-hidden">
              <CardContent className="p-0 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7059444238513!2d20.37663937675566!3d44.81512967107833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f93ba9e3ef1%3A0x6d4d760fcd2c4016!2sSur%C4%8Dinska%2025a%2C%20Beograd!5e0!3m2!1sen!2srs!4v1708444868387!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}