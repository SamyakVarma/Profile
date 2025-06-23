import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://formspree.io/f/myzjndlw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000); // Reset status after 3 sec
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg mb-4">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Contact Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on cutting-edge technology projects? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 lg:p-12 border border-blue-100 dark:border-blue-800">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Start a Conversation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Whether you're interested in collaboration, have questions about my projects, or want to discuss innovative technology solutions, I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</p>
                      <a
                        href="mailto:nssamyakvarma@gmail.com"
                        className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        nssamyakvarma@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or inquiry"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 text-white rounded-lg font-medium transition-all duration-200
                      ${status === 'error' ? 'bg-red-600 animate-shake' :
                        status === 'success' ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}
                    `}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' && "Sending..."}
                    {status === 'success' && "Message Sent"}
                    {status === 'error' && "Try Again"}
                    {status === 'idle' && "Send Message"}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
