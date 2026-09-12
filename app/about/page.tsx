import { CheckCircle, Users, Leaf, Tag, Clock, Smile, Target, Eye, Search, Wrench, Droplets, Star, Check } from 'lucide-react';

export const metadata = {
  title: 'About Us | Pappa Rich Shoe Laundry',
  description: 'Learn about Pappa Rich Shoe Laundry - Professional shoe cleaning and restoration services in Calicut, Kerala.',
};

export default function AboutPage(): JSX.Element {
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
                <span className="text-gray-600">About Us</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">About Us</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn our story and why we're the best choice for your shoes
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

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">OUR STORY</span>
                <h2 className="text-4xl font-bold text-slate-900 mt-3">From Passion to Perfection</h2>
              </div>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Pappa Rich Shoe Laundry was founded with a simple vision – to provide professional shoe cleaning services that are affordable, reliable, and accessible to everyone.
                </p>
                <p>
                  Whether it's your everyday sneakers, luxury shoes, sports shoes, canvas shoes, or children's footwear, we treat every pair with the same attention to detail.
                </p>
                <p>
                  Using high-quality cleaning products and proven techniques, we restore your shoes while protecting their original quality, comfort, and appearance.
                </p>
              </div>

              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <span className="text-xl">📍</span>
                <span>Maradath, Cheruvatta, Calicut, Kerala</span>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <img 
                    src="/about-hero.jpg" 
                    alt="Shoe cleaning products" 
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow">
                      <div className="text-3xl mb-2">🧼</div>
                      <p className="text-xs font-semibold text-gray-700">Professional Cleaning</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow">
                      <div className="text-3xl mb-2">✨</div>
                      <p className="text-xs font-semibold text-gray-700">Premium Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">OUR MISSION</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted shoe laundry service in Calicut by delivering exceptional cleaning quality, outstanding customer service, and affordable pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">OUR VISION</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To help people extend the life of their footwear while promoting sustainable shoe care through professional cleaning and restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            WHY CHOOSE <span className="text-blue-600">PAPPA RICH?</span>
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: CheckCircle, title: 'Premium Cleaning', desc: 'Advanced cleaning methods for every shoe material.' },
              { icon: Users, title: 'Experienced Care', desc: 'Every pair is cleaned with attention and precision.' },
              { icon: Leaf, title: 'Eco-Friendly Products', desc: 'Safe cleaning solutions that protect both your shoes and the environment.' },
              { icon: Tag, title: 'Affordable Pricing', desc: 'Premium quality service without premium prices.' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Quick service so you can wear your favorite shoes again.' },
              { icon: Smile, title: 'Customer Satisfaction', desc: 'Our goal is to exceed your expectations with every order.' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">OUR PROCESS</h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: '01', icon: Search, title: 'Inspection', desc: 'We inspect every pair carefully.' },
              { num: '02', icon: Wrench, title: 'Deep Cleaning', desc: 'Professional cleaning using premium products.' },
              { num: '03', icon: Droplets, title: 'Drying & Sanitizing', desc: 'Proper drying and odor removal.' },
              { num: '04', icon: Star, title: 'Finishing', desc: 'Whitening, polishing, and final quality inspection.' },
              { num: '05', icon: Check, title: 'Ready for Pickup', desc: 'Fresh, clean, and ready to wear.' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                    {step.num}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
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
              <h2 className="text-4xl font-bold mb-4">Your Shoes Deserve Professional Care</h2>
              <p className="text-gray-300 text-lg">
                Don't neglect your favorite shoes—restore them. Book your cleaning today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919995123456"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919995123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
