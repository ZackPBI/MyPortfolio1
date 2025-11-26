import { Code, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a passionate developer who loves turning complex problems into
              simple, beautiful, and intuitive solutions. With several years of
              experience in the field, I've worked on a diverse range of projects
              that have sharpened my skills and fueled my creativity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My approach combines technical expertise with a keen eye for design,
              ensuring that every project not only works flawlessly but also
              provides an exceptional user experience.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer
              community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code size={28} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Clean Code
                </h3>
                <p className="text-gray-600">
                  Writing maintainable, scalable, and well-documented code that
                  stands the test of time
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-cyan-100 rounded-lg">
                <Palette size={28} className="text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Design Focus
                </h3>
                <p className="text-gray-600">
                  Creating visually stunning interfaces with attention to detail
                  and user experience
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="p-3 bg-green-100 rounded-lg">
                <Zap size={28} className="text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Performance
                </h3>
                <p className="text-gray-600">
                  Optimizing applications for speed, efficiency, and seamless user
                  interactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
