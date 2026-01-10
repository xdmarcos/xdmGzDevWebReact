// Mock data for portfolio

export const personalInfo = {
  name: "xdmGzDev",
  title: "Senior iOS Engineer",
  description: "Crafting exceptional mobile experiences with cutting-edge technology. Specializing in iOS native development.",
  email: "xdmgzdev@gmail.com",
  github: "github.com/xdmgzdev",
  linkedin: "linkedin.com/in/xdmgzdev"
};

export const skills = [
  { name: "Swift", years: "8+", category: "Languages", description: "Core iOS language" },
  { name: "SwiftUI", years: "5+", category: "Frameworks", description: "Modern declarative UI" },
  { name: "UIKit", years: "8+", category: "Frameworks", description: "Traditional iOS UI framework" },
  { name: "Combine", years: "4+", category: "Frameworks", description: "Reactive programming" },
  { name: "Core Data", years: "6+", category: "Data", description: "Local data persistence" },
  { name: "CloudKit", years: "4+", category: "Cloud", description: "Apple cloud services" },
  { name: "Firebase", years: "5+", category: "Backend", description: "Backend as a service" },
  { name: "REST APIs", years: "8+", category: "Integration", description: "RESTful services" },
  { name: "GraphQL", years: "3+", category: "Integration", description: "Modern API queries" },
  { name: "Xcode", years: "10+", category: "Tools", description: "Apple IDE" },
  { name: "Git", years: "10+", category: "Tools", description: "Version control" },
  { name: "Fastlane", years: "4+", category: "CI/CD", description: "iOS automation" },
  { name: "TestFlight", years: "6+", category: "Distribution", description: "Beta testing platform" },
  { name: "MVVM", years: "6+", category: "Architecture", description: "Design pattern" },
  { name: "Clean Architecture", years: "5+", category: "Architecture", description: "Scalable app structure" }
];

export const projects = [
  {
    id: 1,
    title: "FinanceFlow Pro",
    description: "A comprehensive financial management app featuring real-time portfolio tracking, AI-powered investment insights, and seamless banking integration. Built with SwiftUI and modern iOS architecture patterns.",
    features: [
      "Real-time stock market data",
      "Biometric authentication",
      "AI investment recommendations",
      "Multi-currency support",
      "Interactive charts with animations"
    ],
    technologies: ["Swift", "SwiftUI", "Combine", "Core Data", "Firebase", "Charts API"],
    metrics: "1.5M+ downloads, 4.7★ App Store rating",
    image: "https://images.unsplash.com/photo-1762279389002-7b6abd7bd6c6?w=800&q=80"
  },
  {
    id: 2,
    title: "HealthTrack Elite",
    description: "Advanced health and fitness tracking application with Apple Watch integration, personalized workout plans, and comprehensive health metrics. Seamlessly syncs with HealthKit for unified health data.",
    features: [
      "Apple Watch companion app",
      "Custom workout builder",
      "Health metrics dashboard",
      "Social challenges & leaderboards",
      "Offline workout tracking"
    ],
    technologies: ["Swift", "HealthKit", "WatchOS", "CloudKit", "Core Motion", "WidgetKit"],
    metrics: "Featured by Apple, 800K+ active users",
    image: "https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?w=800&q=80"
  },
  {
    id: 3,
    title: "ShopSphere",
    description: "Next-generation e-commerce platform delivering personalized shopping experiences with AR product preview, one-tap checkout, and intelligent product recommendations powered by machine learning.",
    features: [
      "AR product visualization",
      "Apple Pay integration",
      "Smart search & filters",
      "Push notifications",
      "Wishlist sync across devices"
    ],
    technologies: ["Swift", "ARKit", "StoreKit", "Core ML", "Firebase", "Alamofire"],
    metrics: "50% increase in conversion rate",
    image: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?w=800&q=80"
  },
  {
    id: 4,
    title: "LearnHub Academy",
    description: "Interactive educational platform featuring video courses, quizzes, and progress tracking. Gamification elements keep learners engaged while offline mode ensures learning anywhere, anytime.",
    features: [
      "Offline content download",
      "Video playback with captions",
      "Interactive quizzes",
      "Progress analytics",
      "Achievement system"
    ],
    technologies: ["Swift", "AVFoundation", "Core Data", "Realm", "URLSession", "Charts"],
    metrics: "Used by 300+ schools worldwide",
    image: "https://images.unsplash.com/photo-1762326866764-1ef1a008e0ad?w=800&q=80"
  },
  {
    id: 5,
    title: "TravelMate Navigator",
    description: "Smart travel companion app with offline maps, itinerary planning, expense tracking, and real-time flight updates. Beautiful UI with smooth animations makes trip planning delightful.",
    features: [
      "Offline map navigation",
      "Trip itinerary planner",
      "Expense tracker with receipts",
      "Flight status notifications",
      "Currency converter"
    ],
    technologies: ["Swift", "MapKit", "Core Location", "PhotoKit", "SwiftUI", "Combine"],
    metrics: "4.8★ rating, 600K downloads",
    image: "https://images.unsplash.com/photo-1748716460543-1916e86eebee?w=800&q=80"
  },
  {
    id: 6,
    title: "MindfulSpace",
    description: "Meditation and mindfulness app featuring guided sessions, breathing exercises, and sleep stories. Elegant design with calming animations creates a peaceful user experience.",
    features: [
      "Guided meditation sessions",
      "Breathing exercise timers",
      "Sleep stories & sounds",
      "Daily mindfulness reminders",
      "Progress tracking & streaks"
    ],
    technologies: ["Swift", "AVFoundation", "UserNotifications", "WidgetKit", "SwiftUI", "CloudKit"],
    metrics: "Featured in App Store, 4.9★ rating",
    image: "https://images.unsplash.com/photo-1759481269661-2eb42cc1d3db?w=800&q=80"
  }
];

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      cta1: "View Projects",
      cta2: "Get In Touch"
    },
    about: {
      title: "About Me",
      content: "Passionate iOS engineer with extensive experience creating innovative mobile applications that delight users and drive business success. I specialize in building high-performance iOS apps using Swift, SwiftUI, and modern architectural patterns. With a keen eye for design and user experience, I create apps that not only function flawlessly but also provide intuitive and engaging interfaces. I'm committed to clean code, scalable architecture, and delivering pixel-perfect implementations."
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Expertise across the iOS development ecosystem"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Showcasing my expertise in iOS development and user experience design",
      features: "Key Features",
      technologies: "Technologies"
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Ready to bring your iOS app idea to life? Let's discuss your project.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Project Details",
        send: "Send Message"
      },
      help: "What I Can Help With",
      services: [
        "iOS app development (Swift/SwiftUI)",
        "App architecture & optimization",
        "UI/UX implementation",
        "App Store optimization",
        "Technical consulting"
      ]
    }
  },
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      cta1: "Ver Proyectos",
      cta2: "Contactar"
    },
    about: {
      title: "Sobre Mí",
      content: "Ingeniero iOS apasionado con amplia experiencia creando aplicaciones móviles innovadoras que deleitan a los usuarios y impulsan el éxito empresarial. Me especializo en construir aplicaciones iOS de alto rendimiento usando Swift, SwiftUI y patrones arquitectónicos modernos. Con un ojo agudo para el diseño y la experiencia del usuario, creo aplicaciones que no solo funcionan perfectamente, sino que también proporcionan interfaces intuitivas y atractivas. Estoy comprometido con código limpio, arquitectura escalable y entrega de implementaciones perfectas."
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Experiencia en todo el ecosistema de desarrollo iOS"
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Mostrando mi experiencia en desarrollo iOS y diseño de experiencia de usuario",
      features: "Características Clave",
      technologies: "Tecnologías"
    },
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "¿Listo para dar vida a tu idea de app iOS? Hablemos sobre tu proyecto.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        message: "Detalles del Proyecto",
        send: "Enviar Mensaje"
      },
      help: "En Qué Puedo Ayudar",
      services: [
        "Desarrollo de apps iOS (Swift/SwiftUI)",
        "Arquitectura y optimización de apps",
        "Implementación de UI/UX",
        "Optimización para App Store",
        "Consultoría técnica"
      ]
    }
  }
};
