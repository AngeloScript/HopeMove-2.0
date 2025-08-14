import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Phone, MapPin, Clock, Shield, DollarSign, Users, CheckCircle, Star, MessageCircle, Mail, Car, Award, Zap, Heart, Image, Play, Download } from 'lucide-react'
import hopeMoveLogo from './assets/hope-move-logo.jpeg'
import qrCodeDriver from './assets/qr-code.png'
import qrCodePassenger from './assets/qr-code-passenger.png'
import mediaParceiro from './assets/media-parceiro-uber.png'
import mediaCarrosContato from './assets/media-carros-contato.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const scaleOnHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  }

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [driverRef, driverInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [appRef, appInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [mediaRef, mediaInView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-blue-100"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src={hopeMoveLogo} 
                alt="Hope Move" 
                className="h-12 w-auto rounded-lg shadow-md" 
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--hope-blue)] to-[var(--hope-light-blue)] bg-clip-text text-transparent">
                Hope Move
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'media', 'driver', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-700 hover:text-[var(--hope-blue)] transition-all duration-300 font-medium relative ${
                    activeSection === section ? 'text-[var(--hope-blue)]' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {section === 'home' && 'Início'}
                  {section === 'about' && 'Sobre'}
                  {section === 'media' && 'Mídias'}
                  {section === 'driver' && 'Seja Motorista'}
                  {section === 'contact' && 'Contato'}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--hope-blue)]"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <motion.a 
              href="tel:+5516991847676" 
              className="bg-gradient-to-r from-[var(--hope-yellow)] to-yellow-400 text-[var(--hope-black)] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={scaleOnHover}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="inline w-4 h-4 mr-2" />
              Ligar Agora
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-[var(--hope-blue)] via-blue-600 to-[var(--hope-light-blue)] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-xl"
        />
        
        <div className="container mx-auto px-4 py-20" ref={heroRef}>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              HOPE MOVE
            </motion.h1>
            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-200"
            >
              CORRIDAS 24 HS COM MOTORISTAS CREDENCIADOS
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
            >
              CHEGOU O APLICATIVO QUE ATENDE VOCÊ COM TODA A RAPIDEZ E SEGURANÇA QUE VOCÊ PRECISA
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-lg mb-12 opacity-90 max-w-2xl mx-auto"
            >
              Ligue e faça suas corridas com segurança na cidade ou na região, com todo o conforto e segurança que você precisa.
            </motion.p>
            
            {/* Diferenciais com animações */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { icon: Clock, text: "Corridas 24h", color: "text-yellow-300" },
                { icon: MapPin, text: "Sistema leva e traz para aeroportos", color: "text-green-300" },
                { icon: Shield, text: "Motoristas credenciados", color: "text-blue-300" },
                { icon: DollarSign, text: "Preços justos", color: "text-yellow-300" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <item.icon className={`h-12 w-12 mb-3 ${item.color}`} />
                  <span className="text-sm font-semibold text-center">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.a 
                href="tel:+5516991847676"
                whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-[var(--hope-yellow)] to-yellow-400 text-[var(--hope-black)] hover:from-yellow-400 hover:to-yellow-500 text-xl px-12 py-6 rounded-full font-bold shadow-2xl">
                  <Phone className="mr-3 h-6 w-6" />
                  Ligar Agora
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative" ref={appRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={appInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold text-[var(--hope-black)] mb-8 bg-gradient-to-r from-[var(--hope-blue)] to-blue-600 bg-clip-text text-transparent"
            >
              Baixe nosso App
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <motion.div 
                variants={fadeInLeft}
                className="flex-1 max-w-md"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-100">
                  <motion.img 
                    src={qrCodePassenger} 
                    alt="QR Code para download do app Hope Move" 
                    className="mx-auto h-64 w-64 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <Zap className="w-4 h-4 mr-2" />
                      Escaneie para baixar o aplicativo de passageiros
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="flex-1 max-w-md"
              >
                <div className="space-y-6">
                  <motion.p 
                    className="text-2xl text-gray-700 font-semibold leading-relaxed"
                    variants={fadeInUp}
                  >
                    Acesse o aplicativo Hope Move e solicite sua corrida em segundos.
                  </motion.p>
                  <motion.div 
                    variants={staggerContainer}
                    className="space-y-4"
                  >
                    {[
                      { icon: Zap, text: "Download instantâneo" },
                      { icon: Car, text: "Interface intuitiva" },
                      { icon: Heart, text: "Experiência premium" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm"
                      >
                        <feature.icon className="h-6 w-6 text-[var(--hope-blue)]" />
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold text-center text-[var(--hope-black)] mb-16 bg-gradient-to-r from-[var(--hope-blue)] to-blue-600 bg-clip-text text-transparent"
            >
              Quem Somos
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                variants={fadeInLeft}
                className="flex-1 space-y-6"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  Na Hope Move, nossa missão é conectar pessoas com conforto, confiança e segurança, 24 horas por dia. 
                  Oferecemos corridas rápidas, seguras e com preços justos, com motoristas credenciados e um sistema 
                  exclusivo de leva e traz para aeroportos.
                </p>
                <motion.div 
                  className="grid grid-cols-2 gap-4 mt-8"
                  variants={staggerContainer}
                >
                  {[
                    { number: "24", label: "Horas de atendimento", icon: Clock },
                    { number: "100", label: "Motoristas credenciados", icon: Users },
                    { number: "5", label: "Anos de experiência", icon: Award },
                    { number: "1000", label: "Clientes satisfeitos", icon: Heart }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <stat.icon className="h-8 w-8 text-[var(--hope-blue)] mx-auto mb-2" />
                      <div className="text-3xl font-bold text-[var(--hope-blue)]">
                        {aboutInView && <CountUp end={parseInt(stat.number)} duration={2} />}
                        {stat.number.includes('+') && '+'}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="flex-1"
              >
                <motion.div 
                  className="bg-gradient-to-br from-[var(--hope-blue)] to-blue-700 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400/20 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10">
                    <Users className="h-16 w-16 mx-auto mb-6 text-[var(--hope-yellow)]" />
                    <h3 className="text-3xl font-bold mb-4 text-center">Nossa Missão</h3>
                    <p className="text-lg text-center text-blue-100">
                      Conectar pessoas com segurança e conforto, transformando cada viagem em uma experiência excepcional.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={mediaRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={mediaInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-[var(--hope-black)] mb-4 bg-gradient-to-r from-[var(--hope-blue)] to-blue-600 bg-clip-text text-transparent">
                Mídias Digitais
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Confira nossos materiais promocionais e campanhas da Hope Move
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Primeira mídia */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img 
                    src={mediaParceiro} 
                    alt="Seja parceiro de um aplicativo como a Uber em sua cidade" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Seja Parceiro</h3>
                  <p className="text-sm opacity-90">Lucre como motorista ou economize como passageiro</p>
                  <div className="flex items-center mt-3 space-x-2">
                    <Download className="h-4 w-4" />
                    <span className="text-xs">Clique no link e baixe já o app</span>
                  </div>
                </div>
              </motion.div>

              {/* Segunda mídia */}
              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img 
                    src={mediaCarrosContato} 
                    alt="Hope Move - Corridas 24hs com motoristas credenciados" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Central de Atendimento</h3>
                  <p className="text-sm opacity-90">Ligue e faça suas corridas com segurança</p>
                  <div className="flex items-center mt-3 space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-xs">(16) 99184-7676</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-400 to-[var(--hope-yellow)] text-[var(--hope-black)] flex items-center justify-center min-h-[300px]"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center p-8">
                  <Play className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Vídeos</h3>
                  <p className="opacity-80">Campanhas em vídeo chegando em breve</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <p className="text-gray-600 text-lg">
                Acompanhe nossas redes sociais para mais conteúdos e novidades da Hope Move!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Driver Section */}
      <section id="driver" className="py-20 bg-white" ref={driverRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={driverInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-[var(--hope-black)] mb-4 bg-gradient-to-r from-[var(--hope-blue)] to-blue-600 bg-clip-text text-transparent">
                Junte-se à nossa equipe
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Quer fazer parte da Hope Move? Torne-se motorista credenciado e leve mais pessoas com segurança ao seu destino.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Passos para cadastro */}
              <motion.div variants={fadeInLeft}>
                <h3 className="text-3xl font-bold text-[var(--hope-black)] mb-8 text-center lg:text-left">
                  Passos para cadastro
                </h3>
                <motion.div 
                  className="space-y-6"
                  variants={staggerContainer}
                >
                  {[
                    { step: 1, text: "Preencha formulário de interesse", icon: Users },
                    { step: 2, text: "Envie documentos para credenciamento", icon: Shield },
                    { step: 3, text: "Participe do treinamento online", icon: Award }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <div className="bg-gradient-to-br from-[var(--hope-blue)] to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <item.icon className="h-6 w-6 text-[var(--hope-blue)] mb-2" />
                        <p className="text-gray-700 font-medium">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Vantagens */}
              <motion.div variants={fadeInRight}>
                <h3 className="text-3xl font-bold text-[var(--hope-black)] mb-8 text-center lg:text-left">
                  Vantagens em destaque
                </h3>
                <motion.div 
                  className="space-y-4"
                  variants={staggerContainer}
                >
                  {[
                    { text: "Flexibilidade de horários", icon: Clock },
                    { text: "Apoio completo da central", icon: Users },
                    { text: "Sistema de pagamento justo", icon: DollarSign }
                  ].map((advantage, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <advantage.icon className="h-5 w-5 text-[var(--hope-blue)] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{advantage.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* QR Code na seção Seja Motorista */}
            <motion.div 
              variants={fadeInUp}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-[var(--hope-yellow)] to-yellow-400 text-[var(--hope-black)] hover:from-yellow-400 hover:to-yellow-500 text-xl px-12 py-6 rounded-full font-bold shadow-2xl">
                  <Users className="mr-3 h-6 w-6" />
                  Quero ser motorista
                </Button>
              </motion.div>
              <div className="mt-12">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-100 inline-block">
                  <motion.img 
                    src={qrCodeDriver} 
                    alt="QR Code para download do app Hope Move" 
                    className="mx-auto h-64 w-64 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      <Zap className="w-4 h-4 mr-2" />
                      Escaneie para baixar o aplicativo do motorista
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={contactRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-[var(--hope-black)] mb-4 bg-gradient-to-r from-[var(--hope-blue)] to-blue-600 bg-clip-text text-transparent">
                Contato
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações de contato */}
              <motion.div 
                variants={fadeInLeft}
                className="space-y-6"
              >
                {[
                  {
                    icon: Phone,
                    title: "Central de Atendimento",
                    content: "(16) 99184-7676",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: MapPin,
                    title: "Endereço",
                    content: "Avenida dos Pupins, 975",
                    color: "from-green-500 to-green-600"
                  },
                  {
                    icon: Star,
                    title: "CNPJ",
                    content: "43.456.980/0001-44",
                    color: "from-yellow-500 to-yellow-600"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`bg-gradient-to-br ${contact.color} p-3 rounded-xl shadow-lg`}>
                            <contact.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">{contact.title}</h3>
                            <p className="text-gray-600 text-lg">{contact.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >
                  <motion.a 
                    href="https://wa.me/5516991847676" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl shadow-lg">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </motion.a>
                  <motion.a 
                    href="mailto:contato@hopemove.com.br"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full border-[var(--hope-blue)] text-[var(--hope-blue)] hover:bg-[var(--hope-blue)] hover:text-white py-4 rounded-xl shadow-lg">
                      <Mail className="h-5 w-5 mr-2" />
                      E-mail
                    </Button>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Mapa placeholder */}
              <motion.div variants={fadeInRight}>
                <Card className="h-full shadow-xl border-0 overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <motion.div 
                      className="bg-gradient-to-br from-blue-100 to-blue-200 h-full min-h-[400px] flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--hope-blue)]/10 to-blue-600/20"></div>
                      <div className="text-center z-10">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <MapPin className="h-20 w-20 text-[var(--hope-blue)] mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-[var(--hope-blue)] mb-2">Mapa interativo</h3>
                        <p className="text-gray-600 font-medium">Avenida dos Pupins, 975</p>
                        <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-[var(--hope-blue)]">
                          <MapPin className="w-4 h-4 mr-2" />
                          Localização Hope Move
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-gradient-to-r from-[var(--hope-black)] to-gray-800 text-white py-12 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <motion.img 
                src={hopeMoveLogo} 
                alt="Hope Move" 
                className="h-12 w-auto rounded-lg" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Hope Move
              </span>
            </motion.div>
            <motion.p 
              variants={fadeInUp}
              className="text-lg mb-4 text-gray-300"
            >
              © Hope Move — Todos os direitos reservados
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-sm text-gray-400"
            >
              CNPJ 43.456.980/0001-44 • Avenida dos Pupins, 975 • Tel. (16) 99184-7676
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App

