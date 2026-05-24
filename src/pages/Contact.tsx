import React, { useState } from 'react';
import { Terminal, Mail, Send, Linkedin, Github } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold font-mono text-white">
          Initiate Connection
        </h1>
        <p className="text-gray-400 font-mono">
          Looking to optimize your workflows or discuss technical operations?
          Let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6">
          <GlassCard>
            <h3 className="text-xl font-bold font-mono text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:sandeshgirish348@gmail.com"
                className="flex items-center gap-4 group">
                
                <div className="w-12 h-12 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan group-hover:bg-cyan/20 group-hover:shadow-neon-cyan transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">Email</p>
                  <p className="text-white font-medium group-hover:text-cyan transition-colors">
                    sandeshgirish348@gmaail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group">
                
                <div className="w-12 h-12 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center text-blue group-hover:bg-blue/20 group-hover:shadow-neon-blue transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-blue transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group">
                
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white/10 transition-all">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-mono">GitHub</p>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                    View repositories
                  </p>
                </div>
              </a>
            </div>
          </GlassCard>
        </div>

        <div className="md:col-span-3">
          <GlassCard>
            {isSubmitted ?
            <div className="h-full flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center text-cyan mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white">
                  Message Sent
                </h3>
                <p className="text-gray-400">
                  Connection established successfully. I'll respond shortly.
                </p>
                <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="mt-4">
                
                  Send Another
                </Button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                  htmlFor="name"
                  className="text-sm font-mono text-gray-400 block">
                  
                    Name
                  </label>
                  <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-surfaceHover border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors font-mono text-sm"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                  } />
                
                </div>

                <div className="space-y-2">
                  <label
                  htmlFor="email"
                  className="text-sm font-mono text-gray-400 block">
                  
                    Email
                  </label>
                  <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-surfaceHover border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors font-mono text-sm"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                  } />
                
                </div>

                <div className="space-y-2">
                  <label
                  htmlFor="message"
                  className="text-sm font-mono text-gray-400 block">
                  
                    Message
                  </label>
                  <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-surfaceHover border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors font-mono text-sm resize-none"
                  placeholder="How can we collaborate?"
                  value={formState.message}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value
                  })
                  } />
                
                </div>

                <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
                icon={<Send className="w-4 h-4" />}>
                
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                </Button>
              </form>
            }
          </GlassCard>
        </div>
      </div>
    </div>);

}