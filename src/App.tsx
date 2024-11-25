import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Home, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone, 
  ThumbsUp, 
  Share2, 
  Globe,
  Calendar,
  Download
} from 'lucide-react';

function App() {
  const [likes, setLikes] = useState(128);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  const handleDownloadCV = () => {
    // En una aplicación real, aquí se generaría el PDF
    try {
      const cvUrl = '/path/to/your/cv.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Alejandro_Martinez_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert('Error al descargar el CV. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Photo */}
      <div className="relative h-96">
        <img
          src="https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/431907550_7605825112842177_850476764272770064_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=gUBfVOlu7GMQ7kNvgHCzWt8&_nc_zt=23&_nc_ht=scontent.fnqn4-1.fna&_nc_gid=Aa0OB3htrJg33OCHcJvihs4&oh=00_AYCibz1wyNh9FM5W38dcXTgbBYlOlDwZtmBYycYnMdfcxw&oe=6749BB22"
          alt="Portada"
          className="w-full h-full object-cover"
        />
        
    
        {/* Profile Picture */}
        <div className="absolute -bottom-24 left-8 md:left-1/2 md:-ml-24">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80"
              alt="Perfil"
              className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Alejandro Martínez</h1>
          <p className="text-xl text-gray-600 mt-2">Ingeniero de Software Senior con más de 8 años de experiencia</p>
        </div>

        {/* Quick Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span>Líder Técnico en InnovaTech</span>
            </div>
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Máster en Informática</span>
            </div>
            <div className="flex items-center space-x-3">
              <Home className="w-5 h-5 text-blue-600" />
              <span>Madrid, España</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-blue-600" />
              <span>portfolio.dev</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Sobre Mí</h2>
              <p className="text-gray-600">
                Ingeniero de software apasionado con más de 8 años de experiencia en desarrollo full-stack. 
                Especializado en React, Node.js y arquitectura cloud. Siempre dispuesto a aprender y 
                compartir conocimientos con la comunidad.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span>alejandro.martinez@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span>+34 612 345 678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Experience Post */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold">Actualización de Experiencia</h3>
                  <p className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Publicado hace 2 días
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold">Líder Técnico en InnovaTech</h4>
                <p className="text-gray-600 mt-2">
                  Liderando un equipo de 8 desarrolladores en la construcción de soluciones cloud escalables.
                  Implementación de arquitectura de microservicios que redujo el tiempo de despliegue en un 60%.
                  Mentorización de desarrolladores junior y establecimiento de mejores prácticas.
                </p>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center space-x-2 ${isLiked ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-700`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                    <span>{likes} Me gusta</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-700">
                    <Share2 className="w-5 h-5" />
                    <span>Compartir</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-700">
                    <MessageCircle className="w-5 h-5" />
                    <span>Comentar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Habilidades y Experiencia</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 
                  'Kubernetes', 'GraphQL', 'MongoDB', 'Python', 'Diseño de Sistemas'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Download Button */}
      <footer className="bg-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-gray-600">© 2024 Alejandro Martínez</p>
          <button
            onClick={handleDownloadCV}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            <span>Descargar CV en PDF</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;