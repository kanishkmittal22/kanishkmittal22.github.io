// src/components/ContactSection.tsx

import { useState } from 'react';
import emailjs from 'emailjs-com';            // ← ➊ Import EmailJS SDK
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const showHeading = !location.pathname.startsWith('/contact');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      company: '',
      email: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ➋ Run client‐side validation
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields correctly.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // ➌ Build the template parameters exactly matching your EmailJS template
      const templateParams = {
        user_name: formData.name,
        user_company: formData.company,
        user_email: formData.email,
        user_product: formData.product,
        user_quantity: formData.quantity,
        user_message: formData.message
      };

      // ➍ Send the email via EmailJS
      await emailjs.send(
        'service_d08gi33',    // ← replace with your EmailJS Service ID
        'template_dbc13o7',   // ← replace with your EmailJS Template ID
        templateParams,
        '2R6j0TT38wrbATWMj'        // ← replace with your EmailJS User/Public Key
      );

      // ➎ On success
      toast({
        title: 'Quote Request Sent!',
        description: "Thank you for your inquiry. You'll receive a confirmation email shortly."
      });

      // Reset the form
      setFormData({
        name: '',
        company: '',
        email: '',
        product: '',
        quantity: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong while sending your request. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error for that field as soon as the user types
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <span className="text-saffron font-semibold text-sm uppercase tracking-wider">Contact Us</span> */}
          {showHeading && (<span className="text-saffron font-semibold text-sm uppercase tracking-wider">Contact Us</span>)}
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mt-2 mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to partner with us? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">aarkayindustries2013@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 9582791407, 9310155801</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-saffron" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">458/466, Shambhunath Compound, Street No. 8, Friends Colony, Jhilmil Industrial Area, Delhi- 110095, India.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        className={`border-gray-300 focus:border-saffron focus:ring-saffron ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                        required
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={e => handleInputChange('company', e.target.value)}
                        className={`border-gray-300 focus:border-saffron focus:ring-saffron ${
                          errors.company ? 'border-red-500' : ''
                        }`}
                        required
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      className={`border-gray-300 focus:border-saffron focus:ring-saffron ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Interest
                      </label>
                      <Select
                        value={formData.product}
                        onValueChange={value => handleInputChange('product', value)}
                      >
                        <SelectTrigger className="border-gray-300 focus:border-saffron focus:ring-saffron">
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="foxnuts">Submersible Copper Winding Wire</SelectItem>
                          <SelectItem value="banana-powder">Bare Copper Wire</SelectItem>
                          <SelectItem value="multiple">Multiple Products</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity (kg)
                      </label>
                      <Input
                        type="text"
                        value={formData.quantity}
                        onChange={e => handleInputChange('quantity', e.target.value)}
                        placeholder="e.g., 1000 kg"
                        className="border-gray-300 focus:border-saffron focus:ring-saffron"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="border-gray-300 focus:border-saffron focus:ring-saffron"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full spice-gradient hover:opacity-90 text-white font-semibold py-3 text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Get a Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        {/* <div className="mt-16">
          <div className="rounded-lg overflow-hidden h-64 w-full">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.373509448941!2d77.26381147501004!3d28.678471581993904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc714bc3d439%3A0x380d1e7b31fc12ca!2sGali%20No.%208%2C%20Delhi!5e0!3m2!1sen!2sin!4v1749712253522!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default ContactSection;