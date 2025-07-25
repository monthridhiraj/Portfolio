
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingLabel from '@/components/FloatingLabel';

const Contact = ({ handleContactSubmit }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-poppins">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-poppins">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:monthridhiraj@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      monthridhiraj@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Card className="p-8 bg-card/50">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FloatingLabel label="First Name">
                      <Input required name="firstName" />
                    </FloatingLabel>
                    <FloatingLabel label="Last Name">
                      <Input required name="lastName" />
                    </FloatingLabel>
                  </div>
                  
                  <FloatingLabel label="Email Address">
                    <Input type="email" required name="email" />
                  </FloatingLabel>
                  
                  <FloatingLabel label="Subject">
                    <Input required name="subject" />
                  </FloatingLabel>
                  
                  <FloatingLabel label="Your Message">
                    <Textarea rows={5} required name="message" />
                  </FloatingLabel>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
