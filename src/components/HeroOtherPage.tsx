import React from 'react';

interface HeroProps {
  /** Main heading text (e.g. "About Us", "Contact Us") */
  title: string;
  /** Optional subheading (e.g. company name or tagline) */
  subtitle?: string;
  /** Optional paragraph or tagline below the headings */
  description?: string;
  /** Path or URL to the background image */
  backgroundImage: string;
  /**
   * Optional: a CSS‐compatible linear‐gradient overlay.
   * Default is a semi‐transparent dark green.
   */
  overlayGradient?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  overlayGradient = 'rgba(0,102,51,0.4), rgba(0,102,51,0.4)',
}) => {
  return (
    <section
      className="relative pt-32 pb-16 text-white"
      style={{
        // backgroundImage: `linear-gradient(${overlayGradient}), url('${backgroundImage}')`,
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Semi‐transparent dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container (centers everything vertically + horizontally) */}
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-light-green">
              {subtitle}
            </h2>
          )}

          {description && (
            <p className="text-xl md:text-2xl opacity-90">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
