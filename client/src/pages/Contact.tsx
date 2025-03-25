import { motion } from "framer-motion";
import { FiArrowLeft, FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import ContactForm from "@/components/dashboard/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 pb-12">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mr-2">
              <FiArrowLeft className="mr-1" /> Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-neutral-800">Contact</h1>
        </div>
        <p className="text-sm text-neutral-600">
          Have a question or want to work together? Create a new support ticket to get in touch!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info */}
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
              <CardTitle className="text-md">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiMail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-neutral-800">Email</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      <a href="mailto:john.doe@example.com" className="hover:text-primary">
                        john.doe@example.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiPhone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-neutral-800">Phone</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      <a href="tel:+11234567890" className="hover:text-primary">
                        +1 (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiMapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-neutral-800">Location</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      San Francisco, California
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiClock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-neutral-800">Availability</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      Monday - Friday, 9:00 AM - 5:00 PM PST
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <h3 className="text-sm font-medium text-neutral-800 mb-3">Connect on Social Media</h3>
                <div className="flex space-x-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-600">
                    <i className="bx bxl-linkedin text-2xl"></i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900">
                    <i className="bx bxl-github text-2xl"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-400">
                    <i className="bx bxl-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="bg-neutral-50 border-b border-neutral-200 py-4">
              <CardTitle className="text-md">Create New Ticket</CardTitle>
              <p className="mt-1 text-sm text-neutral-500">Fill in the details below to get in touch with me.</p>
            </CardHeader>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
