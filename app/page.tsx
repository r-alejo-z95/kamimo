'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/08/02/126390-736788263_large.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Comida rápida,<br />
            <span className="text-primary">saludable y deliciosa</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            La solución perfecta para personas ocupadas que quieren comer bien
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/productos"
              className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Ver Productos
            </Link>
            <Link
              href="/nosotros"
              className="bg-white hover:bg-gray-100 text-dark px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              Conocer Más
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark mb-4">¿Por qué elegir Kamimo?</h2>
            <p className="text-xl text-gray-600">Calidad, sabor y practicidad en cada producto</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Preparación Rápida',
                description: 'Listo en minutos. Del congelador a tu mesa sin complicaciones.',
                icon: '⚡',
              },
              {
                title: '100% Saludable',
                description: 'Ingredientes naturales, sin preservantes ni aditivos artificiales.',
                icon: '🥗',
              },
              {
                title: 'Delicioso Sabor',
                description: 'Recetas desarrolladas por chefs para máximo sabor y nutrición.',
                icon: '😋',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold mb-6">¿Listo para empezar a comer mejor?</h2>
          <p className="text-xl mb-8">Descubre nuestra selección de productos congelados saludables</p>
          <Link
            href="/productos"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Ver Catálogo
          </Link>
        </motion.div>
      </section>
    </div>
  )
}