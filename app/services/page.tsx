import { Shield, Droplet, Wind, Heart, Clock, Star, Leaf, CheckCircle, Zap } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Pappa Rich Shoe Laundry',
  description: 'Professional shoe cleaning, deep cleaning, restoration, leather care, waterproofing, and odour removal services in Calicut, Kerala.',
};

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export default function ServicesPage(): JSX.Element {
  const services: Service[] = [
    {
      id: 'premium-cleaning',
      icon: '✨',
      title: 'Premium Cleaning',
      description: 'Remove dirt, stains and odour with our advanced cleaning process, suitable for all types of shoes.',
    },
    {
      id: 'deep-cleaning',
      icon: '🔍',
      title: 'Deep Cleaning',
      description: 'Reaches deep into the material to remove stubborn stains, restore original colour and freshness.',
    },
    {
      id: 'shoe-restoration',
      icon: '👟',
      title: 'Shoe Restoration',
      description: 'Bring your worn-out shoes back to life. We repair scuffs, restore shape and refresh the look.',
    },
    {
      id: 'leather-care',
      icon: '🥾',
      title: 'Leather Care',
      description: 'Special care for leather shoes to maintain softness, shine and durability.',
    },
    {
      id: 'waterproofing',
      icon: '💧',
      title: 'Waterproofing',
      description: 'Protect your shoes from water, stains and harsh weather conditions.',
    },
    {
      id: 'odour-removal',
      icon: '💨',
      title: 'Odour Removal',
      description: 'Eliminate bad odour and keep your shoes fresh for longer.',
    },
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Skilled Experts',
      description: 'Trained and experienced in shoe care',
    },
    {
      icon: Leaf,
      title: 'Premium Products',
      description: 'Safe, eco-friendly and effective',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: "We care until you're happy",
    },
    {
      icon: Clock,
      title: 'Fast & Reliable',
      description: 'On-time service, every time',
    },
  ];

  return (
    <div className="pt-0">

      {/* Hero/Intro Section - Full Width Split */}
      <section className="bg-gray-50">
        <div className="grid grid-cols-2 min-h-64">
          {/* Left - Light background with text */}
          <div className="bg-gray-50 py-8 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-lg">
              <div className="text-sm mb-2">
                <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
                <span className="text-gray-400"> › </span>
                <span className="text-gray-600">Services</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Our Services</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                From basic cleaning to complete restoration, we offer a full range of professional shoe care services to keep your favorite pair looking fresh, clean and new.
              </p>
            </div>
          </div>

          {/* Right - Image only, full height */}
          <div className="bg-gray-50 overflow-hidden">
            <img 
              src="/header-hero.png" 
              alt="Professional shoe cleaning kit" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">
                Your Shoes Deserve The Best Care
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide expert shoe cleaning and restoration services to bring back the original look, comfort and freshness of your footwear. From everyday sneakers to premium shoes, our skilled team uses safe and effective techniques to deliver exceptional results.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Expert Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Premium Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Fast Turnaround</span>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
              <img 
                src="/services-hero.jpg" 
                alt="Professional shoe cleaning" 
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pappa Rich */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">WHY CHOOSE PAPPA RICH?</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3">
              Your Shoes Deserve The Best Care
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl">
              We combine expert care, premium products and modern techniques to deliver spotless, fresh and long-lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl mx-4 my-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Ready to Give Your Shoes a Fresh Look?</h2>
              <p className="text-gray-300 text-lg">
                Book your service today and experience the difference!
              </p>
            </div>

            <div className="flex justify-end">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                📅 Book Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
