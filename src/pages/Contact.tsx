import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { collegeInfo } from '@/data/dummyData';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copied!",
      description: `${field} copied to clipboard`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: 'Address',
      value: collegeInfo.contact.address,
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: collegeInfo.contact.phone,
      copyable: true,
    },
    {
      icon: Mail,
      label: 'Director Email',
      value: collegeInfo.contact.email,
      copyable: true,
    },
    {
      icon: Mail,
      label: 'Info Email',
      value: collegeInfo.contact.alternateEmail,
      copyable: true,
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Monday - Friday: 9:00 AM - 5:00 PM',
      copyable: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-navy text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Get in touch with Dr. Ambedkar Institute of Technology for Divyangjan
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="card-premium overflow-hidden p-0 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-2 animate-bounce-subtle" />
                    <p className="text-sm text-muted-foreground">Interactive Map</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeInfo.contact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-2"
                    >
                      Open in Google Maps
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="card-premium opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
                <h2 className="text-lg font-semibold text-foreground mb-4">Contact Details</h2>
                <div className="space-y-4">
                  {contactDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    const isCopied = copiedField === detail.label;

                    return (
                      <div
                        key={detail.label}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{detail.label}</p>
                          <p className="text-foreground font-medium break-words">{detail.value}</p>
                        </div>
                        {detail.copyable && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                            onClick={() => handleCopy(detail.value, detail.label)}
                          >
                            {isCopied ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Official Website */}
              <div className="card-premium opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Official Website</h2>
                    <p className="text-sm text-muted-foreground">Visit for more information</p>
                  </div>
                  <Button asChild variant="outline" className="gap-2">
                    <a href={collegeInfo.contact.website} target="_blank" rel="noopener noreferrer">
                      Visit
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-premium opacity-0 animate-slide-in-right" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Send className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Send a Message</h2>
                  <p className="text-sm text-muted-foreground">We'll get back to you soon</p>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled
                >
                  <Send className="h-4 w-4" />
                  Send Message
                  <span className="text-xs opacity-75">(Demo Only)</span>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  This is a demo form. For actual inquiries, please use the contact details above.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
