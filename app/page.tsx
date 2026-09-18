"use client";

import Image from "next/image";
import WhatsAppButton from "./components/WhatsAppButton";
import CounterAnimation from "./components/CounterAnimation";
import { 
  People, 
  Award, 
  Book, 
  Briefcase, 
  TrendUp, 
  Star1,
  Location,
  Call,
  Sms,
  Calendar,
  User,
  Chart,
  Happyemoji,
  Layer,
  VideoPlay,
  MessageText
} from "iconsax-react";

export default function Home() {
  return (
    <>
      <WhatsAppButton />
      
      {/* 1. Section Présentation / Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/presentation/presentation-6.webp"
            alt="Communauté Propulsion"
            className="w-full h-full object-cover"
          />
          {/* Overlay violet plus transparent pour mieux voir l'image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b35d1]/60 via-[#8b35d1]/50 to-[#b45fde]/55"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          {/* Logo arrondi dans un conteneur circulaire */}
          <div className="mb-8 flex justify-center">
            <div className="w-36 h-36 rounded-full overflow-hidden drop-shadow-2xl bg-white/5">
              <img
                src="/images/Propulsion Logo.png"
                alt="Logo Communauté Propulsion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Communauté <span className="text-[#ffd700]">Propulsion</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
            Plus qu&apos;une communauté, un réseau pour grandir ensemble
          </p>
          
          {/* Badges SANS fond - juste le texte */}
          <div className="flex flex-col items-center gap-4 mb-12">
            {/* Membres et Pays sur la même ligne */}
            <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
                  <path d="M14.08 14.15C11.29 12.29 6.74 12.29 3.93 14.15C2.66 15 1.96 16.15 1.96 17.38C1.96 18.61 2.66 19.75 3.92 20.59C5.32 21.53 7.16 22 9 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="currentColor"/>
                  <path d="M19.99 7.34C20.15 9.28 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.48 15.73 8.1 15.61 6.60C15.54 5.79 15.26 5.05 14.84 4.42C15.22 4.23 15.66 4.11 16.11 4.07C18.07 3.90 19.82 5.36 19.99 7.34Z" fill="currentColor"/>
                  <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="currentColor"/>
                </svg>
                <div className="text-lg font-semibold flex items-center gap-1">
                  <CounterAnimation end={3500} prefix="+" duration={2500} formatLargeNumbers={true} />
                  <span>Membres</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" fill="currentColor"/>
                  <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" fill="currentColor"/>
                </svg>
                <div className="text-lg font-semibold flex items-center gap-1">
                  <CounterAnimation end={50} prefix="+" duration={2000} formatLargeNumbers={true} />
                  <span>Pays</span>
                </div>
              </div>
            </div>
            
            {/* Date en dessous */}
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-semibold">Depuis le 11 novembre 2025</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="group bg-white text-[#8b35d1] px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <span>Découvrir nos offres</span>
              <TrendUp size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#8b35d1] transition-all duration-300"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2. Section À Propos */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 text-[#8b35d1]">
                  <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                  <User size={28} variant="Bold" />
                  <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                À Propos de Propulsion
              </h2>
              <p className="text-xl text-gray-600">Une communauté qui transforme les ambitions en réalité</p>
            </div>
            
            {/* Vision & Fondateur */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/presentation/presentation-3.webp"
                  alt="Dr Claudel NOUBISSIE et la communauté Propulsion"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award size={32} variant="Bold" className="text-[#8b35d1]" />
                  <h3 className="text-3xl font-bold text-gray-900">Notre Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Construire une communauté internationale dynamique et solidaire dans laquelle les compétences, 
                  les connexions et le partage d&apos;expériences deviennent de véritables leviers de développement 
                  professionnel et entrepreneurial.
                </p>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-[#8b35d1]">
                  <div className="flex items-start gap-3 mb-3">
                    <User size={24} variant="Bold" className="text-[#8b35d1] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Dr Claudel NOUBISSIE</p>
                      <p className="text-gray-600">Fondateur - 11 novembre 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    &ldquo;Transformer les ressources en décisions, actions et collaborations concrètes.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Mission - 4 Piliers */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Se Former */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b35d1]">
                <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 18V7C3.5 5.89543 4.39543 5 5.5 5H9.5C10.6046 5 11.5 5.89543 11.5 7V17C11.5 18.1046 10.6046 19 9.5 19H5C4.17157 19 3.5 18.3284 3.5 17.5C3.5 17.5 3.5 17.5 3.5 18Z" fill="white"/>
                    <path d="M12.5 7C12.5 5.89543 13.3954 5 14.5 5H18.5C19.6046 5 20.5 5.89543 20.5 7V17C20.5 18.1046 19.6046 19 18.5 19H14C13.1716 19 12.5 18.3284 12.5 17.5V7Z" fill="white"/>
                    <path d="M2 5.5C2 5.22386 2.22386 5 2.5 5H21.5C21.7761 5 22 5.22386 22 5.5C22 5.77614 21.7761 6 21.5 6H2.5C2.22386 6 2 5.77614 2 5.5Z" fill="white"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Se Former</h4>
                <p className="text-gray-600 text-sm">Masterclass, formations et ressources de qualité</p>
              </div>

              {/* Créer des Connexions */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b35d1]">
                <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="white"/>
                    <path d="M14.08 14.15C11.29 12.29 6.74 12.29 3.93 14.15C2.66 15 1.96 16.15 1.96 17.38C1.96 18.61 2.66 19.75 3.92 20.59C5.32 21.53 7.16 22 9 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="white"/>
                    <path d="M19.99 7.34C20.15 9.28 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.48 15.73 8.1 15.61 6.60C15.54 5.79 15.26 5.05 14.84 4.42C15.22 4.23 15.66 4.11 16.11 4.07C18.07 3.90 19.82 5.36 19.99 7.34Z" fill="white"/>
                    <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="white"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Créer des Connexions</h4>
                <p className="text-gray-600 text-sm">Réseau professionnel solide et bénéfique</p>
              </div>

              {/* Développer ses Projets */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b35d1]">
                <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Développer ses Projets</h4>
                <p className="text-gray-600 text-sm">Structurer et faire croître vos activités</p>
              </div>

              {/* Accéder au Réseau */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b35d1]">
                <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="white"/>
                    <path d="M7 15.5L12 10.5L17 15.5" stroke="#8b35d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Accéder au Réseau</h4>
                <p className="text-gray-600 text-sm">Opportunités et partenariats stratégiques</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section Services / Programmes */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 text-[#8b35d1]">
                  <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                  <Briefcase size={28} variant="Bold" />
                  <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nos Programmes
              </h2>
              <p className="text-xl text-gray-600">Des initiatives concrètes pour votre développement</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Apéros Business",
                  desc: "Rencontres networking conviviales pour échanger et créer des opportunités",
                  icon: Happyemoji,
                  image: "presentation-17.jpeg"
                },
                {
                  title: "Brainstormings",
                  desc: "Sessions collaboratives pour développer vos idées et projets",
                  icon: MessageText,
                  image: "presentation-9.webp"
                },
                {
                  title: "Tontine Entrepreneuriale",
                  desc: "Système d'entraide financière pour soutenir les projets des membres",
                  icon: TrendUp,
                  image: "presentation-5.webp"
                },
                {
                  title: "Le Ndolo des Leaders",
                  desc: "Programme de leadership pour développer vos compétences managériales",
                  icon: Star1,
                  image: "presentation-8.webp"
                },
                {
                  title: "Fonds des Bâtisseurs",
                  desc: "Accès à des financements et ressources pour concrétiser vos projets",
                  icon: Layer,
                  image: "presentation-7.webp"
                },
                {
                  title: "Guides Pratiques",
                  desc: "Ressources et outils pour vous accompagner au quotidien",
                  icon: Book,
                  image: "presentation-10.webp"
                }
              ].map((program, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={`/images/presentation/${program.image}`}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8b35d1]/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center">
                        <program.icon size={24} variant="Bold" className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Offres / Packs */}
      <section id="offres" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 text-[#8b35d1]">
                <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                <Star1 size={28} variant="Bold" />
                <div className="w-12 h-0.5 bg-[#e91e63]"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Offres d&apos;Adhésion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le pack qui correspond à vos ambitions • Durée : 12 mois
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Pack Standard */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 flex flex-col">
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white p-8 text-center relative">
                <div className="absolute top-4 right-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">10 000</span>
                  <span className="text-xl ml-2">FCFA</span>
                </div>
                <div className="text-sm opacity-90">25 euros</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Masterclass mensuelles",
                    "Accès aux replays",
                    "Challenges communautaires",
                    "Groupe WhatsApp"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/237682365761?text=Je%20souhaite%20adh%C3%A9rer%20au%20pack%20Standard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-700 hover:bg-gray-800 text-white text-center py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Adhérer maintenant
                </a>
              </div>
            </div>

            {/* Pack Pro */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#8b35d1] relative transform md:scale-105 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#e91e63] to-[#ff6b9d] text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
                  POPULAIRE
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] text-white p-8 text-center relative pt-12">
                <div className="absolute top-4 right-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                    <path d="M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02002 21.35C5.87002 22.62 4.58002 21.67 5.14002 19.25L5.85002 16.18C5.98002 15.6 5.75002 14.79 5.33002 14.37L2.85002 11.89C1.39002 10.43 1.86002 8.95001 3.90002 8.61001L7.09002 8.08001C7.62002 7.99001 8.26002 7.52002 8.50002 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">50 000</span>
                  <span className="text-xl ml-2">FCFA</span>
                </div>
                <div className="text-sm opacity-90">100 euros</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="bg-purple-50 rounded-2xl px-4 py-3 mb-6 text-center">
                  <span className="text-[#8b35d1] font-bold text-sm">Tout le pack Standard +</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Annuaire des membres",
                    "Mises en relation prioritaires",
                    "Formations spécialisées",
                    "Suivi individuel"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/237682365761?text=Je%20souhaite%20adh%C3%A9rer%20au%20pack%20Pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#8b35d1] to-[#b45fde] hover:from-[#6b1fb5] hover:to-[#8b35d1] text-white text-center py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Adhérer maintenant
                </a>
              </div>
            </div>

            {/* Pack Élite */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-200 hover:border-yellow-400 flex flex-col">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-8 text-center relative">
                <div className="absolute top-4 right-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                    <path d="M17.18 10.75C17.04 10.75 16.89 10.7 16.77 10.6C16.28 10.26 15.68 10.06 15.05 10.01C14.17 9.94 13.33 10.21 12.68 10.78C12.58 10.86 12.45 10.91 12.32 10.91C12.19 10.91 12.06 10.87 11.96 10.78C11.31 10.21 10.47 9.94 9.59 10.01C8.96 10.06 8.36 10.26 7.87 10.6C7.54 10.83 7.09 10.75 6.86 10.42C6.63 10.09 6.71 9.64 7.04 9.41C7.75 8.91 8.59 8.62 9.46 8.55C10.65 8.45 11.8 8.81 12.7 9.56C13.6 8.81 14.75 8.45 15.94 8.55C16.81 8.62 17.65 8.91 18.36 9.41C18.69 9.64 18.77 10.09 18.54 10.42C18.39 10.63 18.15 10.75 17.89 10.75H17.18Z" fill="white"/>
                    <path d="M17.18 14.75C17.04 14.75 16.89 14.7 16.77 14.6C16.28 14.26 15.68 14.06 15.05 14.01C14.17 13.94 13.33 14.21 12.68 14.78C12.58 14.86 12.45 14.91 12.32 14.91C12.19 14.91 12.06 14.87 11.96 14.78C11.31 14.21 10.47 13.94 9.59 14.01C8.96 14.06 8.36 14.26 7.87 14.6C7.54 14.83 7.09 14.75 6.86 14.42C6.63 14.09 6.71 13.64 7.04 13.41C7.75 12.91 8.59 12.62 9.46 12.55C10.65 12.45 11.8 12.81 12.7 13.56C13.6 12.81 14.75 12.45 15.94 12.55C16.81 12.62 17.65 12.91 18.36 13.41C18.69 13.64 18.77 14.09 18.54 14.42C18.39 14.63 18.15 14.75 17.89 14.75H17.18Z" fill="white"/>
                    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="white"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Élite</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">250 000</span>
                  <span className="text-xl ml-2">FCFA</span>
                </div>
                <div className="text-sm opacity-90">500 euros</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="bg-yellow-50 rounded-2xl px-4 py-3 mb-6 text-center">
                  <span className="text-yellow-600 font-bold text-sm">Tout le pack Pro +</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Accompagnement stratégique renforcé",
                    "Visibilité premium",
                    "Accès prioritaire aux partenariats",
                    "Mentorat personnalisé"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/237682365761?text=Je%20souhaite%20adh%C3%A9rer%20au%20pack%20Elite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white text-center py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Adhérer maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section Actualités / Témoignages & Réalisations */}
      <section id="actualites" className="py-20 bg-gradient-to-br from-[#8b35d1] via-[#9d4dd8] to-[#b45fde]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-12 h-0.5 bg-white/50"></div>
                  <VideoPlay size={28} variant="Bold" />
                  <div className="w-12 h-0.5 bg-white/50"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Témoignages & Réalisations
              </h2>
              <p className="text-xl text-white/90">Découvrez l&apos;impact de Propulsion sur nos membres</p>
            </div>

            {/* Témoignages Vidéos */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((num) => (
                <div 
                  key={num}
                  className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
                >
                  <div className="relative">
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-96 object-cover"
                      poster="/images/Propulsion Logo.png"
                    >
                      <source src={`/videos/${num}.mp4`} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  </div>
                  <div className="p-6">
                    <p className="text-white/90 italic text-sm leading-relaxed">
                      {num === 1 && '"Propulsion m\'a permis de développer mon réseau et de concrétiser mes projets."'}
                      {num === 2 && '"Une communauté inspirante qui m\'accompagne dans ma croissance professionnelle."'}
                      {num === 3 && '"Les formations et le mentorat ont transformé ma façon d\'entreprendre."'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Galerie Membres */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Une communauté dynamique et engagée
              </h3>
              
              {/* Mosaïque responsive avec grid areas */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[180px]">
                {/* Grande image 1 - 2x2 */}
                <div className="col-span-2 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-3.webp"
                    alt="Dr Claudel NOUBISSIE et membres"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b35d1]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Petite image 1 */}
                <div className="col-span-1 row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-2.webp"
                    alt="Membre professionnel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Petite image 2 */}
                <div className="col-span-1 row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-4.webp"
                    alt="Apéro Business"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Moyenne verticale 1x2 */}
                <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-8.webp"
                    alt="Leadership"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e91e63]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Moyenne verticale 1x2 */}
                <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-5.webp"
                    alt="Networking"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b35d1]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Petite image 3 */}
                <div className="col-span-1 row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-7.webp"
                    alt="Formation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Petite image 4 */}
                <div className="col-span-1 row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-9.webp"
                    alt="Rencontre pro"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Moyenne horizontale 2x1 */}
                <div className="col-span-2 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-10.webp"
                    alt="Communauté en action"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b35d1]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Petite image 5 */}
                <div className="col-span-1 row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-11.webp"
                    alt="Brainstorming"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Moyenne verticale 1x2 */}
                <div className="col-span-1 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-6.webp"
                    alt="Événement Propulsion"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e91e63]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Grande image 2 - 2x2 sur desktop, 2x1 sur mobile */}
                <div className="col-span-2 row-span-1 md:row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-4.webp"
                    alt="Événement networking"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8b35d1]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Petite image 6 */}
                <div className="col-span-1 row-span-1 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <img
                    src="/images/presentation/presentation-2.webp"
                    alt="Membres actifs"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Stats sous la galerie */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <CounterAnimation end={3500} prefix="+" duration={2500} formatLargeNumbers={true} />
                  <div className="text-white/80 text-base mt-2">Membres actifs</div>
                </div>
                <div className="text-center">
                  <CounterAnimation end={50} prefix="+" duration={2000} formatLargeNumbers={true} />
                  <div className="text-white/80 text-base mt-2">Pays représentés</div>
                </div>
                <div className="text-center">
                  <CounterAnimation end={100} suffix="+" duration={2200} formatLargeNumbers={true} />
                  <div className="text-white/80 text-base mt-2">Événements annuels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 text-[#8b35d1]">
                  <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                  <Call size={28} variant="Bold" />
                  <div className="w-12 h-0.5 bg-[#e91e63]"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contactez-nous
              </h2>
              <p className="text-xl text-gray-600">Prêt à rejoindre la communauté ? Parlons-en !</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] rounded-3xl p-8 md:p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Rejoignez-nous dès aujourd&apos;hui</h3>
                <p className="text-lg mb-8 text-white/90">
                  Plus de 3 500 membres ont déjà choisi Propulsion pour propulser leur carrière et leurs projets.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-white/90">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
                      <path d="M14.08 14.15C11.29 12.29 6.74 12.29 3.93 14.15C2.66 15 1.96 16.15 1.96 17.38C1.96 18.61 2.66 19.75 3.92 20.59C5.32 21.53 7.16 22 9 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="currentColor"/>
                      <path d="M19.99 7.34C20.15 9.28 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.48 15.73 8.1 15.61 6.60C15.54 5.79 15.26 5.05 14.84 4.42C15.22 4.23 15.66 4.11 16.11 4.07C18.07 3.90 19.82 5.36 19.99 7.34Z" fill="currentColor"/>
                      <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="currentColor"/>
                    </svg>
                    <span>Réseau de +3 500 professionnels</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" fill="currentColor"/>
                      <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" fill="currentColor"/>
                    </svg>
                    <span>Présence dans +50 pays</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.92 11.08C17.66 13.83 15.56 15.93 12.81 16.19C12.41 16.23 12 16.25 11.59 16.25C9.28 16.25 7.15 15.19 5.82 13.42C5.14 12.47 4.75 11.37 4.66 10.23C4.59 9.38 4.68 8.54 4.93 7.76C5.75 5.14 8.13 3.25 10.95 3.06C11.35 3.03 11.75 3.01 12.16 3.01C14.47 3.01 16.6 4.07 17.93 5.84C18.61 6.79 19 7.89 19.09 9.03C19.16 9.87 19.07 10.71 18.82 11.49C18.71 11.37 18.56 11.25 18.37 11.13C17.59 10.63 16.54 10.43 15.44 10.58C14.77 10.67 14.16 10.93 13.66 11.32C13.56 11.4 13.46 11.48 13.37 11.58C13.21 11.73 13.09 11.91 13.01 12.11C12.94 12.27 12.91 12.45 12.91 12.63C12.91 12.81 12.95 12.98 13.03 13.14C13.14 13.36 13.32 13.56 13.56 13.72C13.99 14.01 14.58 14.18 15.23 14.18C15.61 14.18 16.01 14.13 16.41 14.04C16.96 13.91 17.47 13.68 17.92 13.38V11.08Z" fill="currentColor"/>
                    </svg>
                    <span>Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18 12.81L17.99 13.99C17.98 15.35 17.84 16.38 16.5 16.5C15.14 16.62 14.11 16.49 12.75 16.5C11.39 16.51 10.36 16.62 9 16.5C7.64 16.38 7.51 15.35 7.5 13.99L7.49 12.81V11.2L7.5 10.02C7.51 8.66 7.65 7.63 9 7.51C10.36 7.39 11.39 7.52 12.75 7.51C14.11 7.5 15.14 7.39 16.5 7.51C17.86 7.63 17.98 8.66 17.99 10.02L18 11.2V12.81Z" fill="currentColor"/>
                      <path d="M11.09 14.08L14.19 12.27C14.42 12.13 14.42 11.88 14.19 11.74L11.09 9.92C10.85 9.78 10.59 9.94 10.59 10.22V13.79C10.59 14.07 10.85 14.22 11.09 14.08Z" fill="currentColor"/>
                    </svg>
                    <span>Croissance garantie</span>
                  </div>
                </div>

                <a
                  href="#offres"
                  className="block w-full bg-white text-[#8b35d1] text-center py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Voir les offres
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#8b35d1] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Téléphone / WhatsApp</h4>
                      <a href="tel:+237682365761" className="block text-gray-600 hover:text-[#8b35d1] mb-1 transition-colors">
                        +237 682 36 57 61
                      </a>
                      <a href="tel:+237672529478" className="block text-gray-600 hover:text-[#8b35d1] transition-colors">
                        +237 672 52 94 78
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#8b35d1] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="white"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#8b35d1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Email</h4>
                      <a href="mailto:info@claudel-noubissie.com" className="block text-gray-600 hover:text-[#8b35d1] mb-1 transition-colors">
                        info@claudel-noubissie.com
                      </a>
                      <a href="mailto:contact@propulsion.cm" className="block text-gray-600 hover:text-[#8b35d1] transition-colors">
                        contact@propulsion.cm
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-[#8b35d1] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#8b35d1] to-[#b45fde] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" fill="white"/>
                        <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Localisation</h4>
                      <p className="text-gray-600 mb-1">Yaoundé • Douala</p>
                      <p className="text-gray-600">Cameroun • International</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-[#1a0a2e] to-gray-900 text-white overflow-hidden">
        {/* Effet de fond décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8b35d1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e91e63] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Section principale */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md p-2">
                  <img
                    src="/images/Propulsion Logo.png"
                    alt="Logo Propulsion"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Propulsion</h3>
                  <p className="text-sm text-gray-400">Communauté d&apos;entrepreneurs</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Rejoignez plus de <span className="text-[#ffd700] font-bold">3 500 membres</span> qui transforment 
                leurs ambitions en réalité. Une communauté dynamique présente dans plus de 50 pays.
              </p>

              {/* Stats compactes */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#8b35d1]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
                      <path d="M14.08 14.15C11.29 12.29 6.74 12.29 3.93 14.15C2.66 15 1.96 16.15 1.96 17.38C1.96 18.61 2.66 19.75 3.92 20.59C5.32 21.53 7.16 22 9 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z" fill="currentColor"/>
                      <path d="M19.99 7.34C20.15 9.28 18.77 10.98 16.86 11.21C16.85 11.21 16.85 11.21 16.84 11.21H16.81C16.75 11.21 16.69 11.21 16.64 11.23C15.67 11.28 14.78 10.97 14.11 10.4C15.14 9.48 15.73 8.1 15.61 6.60C15.54 5.79 15.26 5.05 14.84 4.42C15.22 4.23 15.66 4.11 16.11 4.07C18.07 3.90 19.82 5.36 19.99 7.34Z" fill="currentColor"/>
                      <path d="M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">+3 500</p>
                    <p className="text-xs text-gray-400">Membres</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#e91e63]/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" fill="currentColor"/>
                      <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">+50</p>
                    <p className="text-xs text-gray-400">Pays</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor"/>
                  <path d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z" fill="currentColor"/>
                </svg>
                <span>Fondée par Dr Claudel NOUBISSIE • 11/11/2025</span>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#8b35d1] to-[#e91e63] rounded-full"></div>
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <div className="flex items-start gap-3 text-gray-300 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#8b35d1]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8b35d1]/30 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Téléphone / WhatsApp</p>
                      <a href="tel:+237682365761" className="hover:text-white transition-colors block text-sm">
                        +237 682 36 57 61
                      </a>
                      <a href="tel:+237672529478" className="hover:text-white transition-colors block text-sm">
                        +237 672 52 94 78
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start gap-3 text-gray-300 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-[#e91e63]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e91e63]/30 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill="currentColor"/>
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#1a0a2e" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Email</p>
                      <a href="mailto:info@claudel-noubissie.com" className="hover:text-white transition-colors block text-sm">
                        info@claudel-noubissie.com
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-xl bg-[#ffd700]/20 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" fill="currentColor"/>
                        <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Localisation</p>
                      <p className="text-sm">Yaoundé • Douala</p>
                      <p className="text-xs text-gray-400">Cameroun • International</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Ligne de séparation avec gradient */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Communauté Propulsion. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#offres" className="text-sm text-gray-400 hover:text-white transition-colors">
                Adhérer
              </a>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.73 21.99C13.55 22.01 13.37 22.02 13.19 22.02H10.76C10.58 22.02 10.4 22.01 10.22 21.99C11.27 20.89 11.97 19.39 12.23 17.73C12.31 17.05 12.34 16.36 12.34 15.65V8.35C12.34 6.35 12.02 4.61 11.39 3.23C10.06 3.71 8.83 4.28 7.72 4.94C7.73 4.97 7.74 4.99 7.75 5.02C8.63 6.65 9.09 8.76 9.09 11.27V15.65C9.09 17.18 8.95 18.61 8.68 19.89C7.81 20.05 6.99 20.23 6.22 20.44C6.15 20.46 6.08 20.48 6 20.5C5.35 20.68 4.73 20.88 4.14 21.08C4.28 21.44 4.42 21.78 4.57 22.11C5.17 21.94 5.79 21.77 6.42 21.62C7.48 21.36 8.6 21.14 9.76 20.98C10.84 22.19 12.3 23.01 13.92 23.24C15.06 23.41 16.25 23.4 17.41 23.23C19.09 22.99 20.59 22.17 21.7 20.94C22.88 21.09 24.02 21.32 25.09 21.58C25.73 21.73 26.35 21.9 26.96 22.07C27.11 21.74 27.25 21.39 27.39 21.04C26.81 20.84 26.19 20.64 25.54 20.46C24.73 20.24 23.86 20.04 22.94 19.87C22.68 18.59 22.54 17.15 22.54 15.6V11.2C22.54 8.65 23.01 6.51 23.9 4.87C23.91 4.85 23.92 4.82 23.93 4.8C22.79 4.12 21.51 3.54 20.14 3.04C19.51 4.48 19.19 6.26 19.19 8.35V15.65C19.19 16.37 19.22 17.06 19.3 17.74C19.56 19.41 20.27 20.92 21.33 22.02C21.15 22.01 20.97 22.02 20.79 22.02H18.36C18.18 22.02 18 22.01 17.82 21.99C16.87 20.71 16.29 19.09 16.05 17.27C15.97 16.74 15.93 16.2 15.93 15.65V8.35C15.93 7.81 15.97 7.27 16.05 6.74C16.28 4.92 16.86 3.31 17.82 2.03C17.64 2.01 17.46 2 17.28 2H14.77C14.6 2 14.43 2.01 14.26 2.03C15.22 3.32 15.79 4.93 16.02 6.75C16.1 7.28 16.14 7.82 16.14 8.35V15.65C16.14 16.19 16.1 16.73 16.02 17.27C15.79 19.09 15.21 20.7 14.26 21.99C14.08 22.01 13.9 22.02 13.73 22.02Z" fill="currentColor"/>
                </svg>
                <span className="text-[#ffd700] font-semibold text-sm">Propulsez votre carrière</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
