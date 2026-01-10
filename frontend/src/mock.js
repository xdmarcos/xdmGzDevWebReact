// Mock data for portfolio

export const personalInfo = {
  name: "xdmGzDev",
  title: "Senior iOS Engineer",
  titleEs: "Ingeniero Senior de iOS",
  description: "Crafting exceptional mobile experiences with cutting-edge technology. Specializing in iOS native development.",
  descriptionEs: "Creando experiencias móviles excepcionales con tecnología de vanguardia. Especializado en desarrollo nativo de iOS.",
  aboutContent: "Passionate iOS engineer with extensive experience creating innovative mobile applications that delight users and drive business success. I specialize in building high-performance iOS apps using Swift, SwiftUI, and modern architectural patterns. With a keen eye for design and user experience, I create apps that not only function flawlessly but also provide intuitive and engaging interfaces. I'm committed to clean code, scalable architecture, and delivering pixel-perfect implementations.",
  aboutContentEs: "Ingeniero iOS apasionado con amplia experiencia creando aplicaciones móviles innovadoras que deleitan a los usuarios y impulsan el éxito empresarial. Me especializo en construir aplicaciones iOS de alto rendimiento usando Swift, SwiftUI y patrones arquitectónicos modernos. Con un ojo agudo para el diseño y la experiencia del usuario, creo aplicaciones que no solo funcionan perfectamente, sino que también proporcionan interfaces intuitivas y atractivas. Estoy comprometido con código limpio, arquitectura escalable y entrega de implementaciones perfectas.",
  cloudTags: ["15+ Years", "Swift Expert", "iOS Native", "SwiftUI", "Published Apps", "App Store"],
  cloudTagsEs: ["15+ Años", "Experto en Swift", "iOS Nativo", "SwiftUI", "Apps Publicadas", "App Store"],
  highlights: [
    {
      icon: "Code2",
      title: "Clean Code",
      titleEs: "Código Limpio",
      description: "Writing maintainable, testable, and scalable code",
      descriptionEs: "Escribiendo código mantenible, testeable y escalable"
    },
    {
      icon: "Smartphone",
      title: "Native iOS",
      titleEs: "iOS Nativo",
      description: "Deep expertise in Swift and iOS frameworks",
      descriptionEs: "Experiencia profunda en Swift y frameworks de iOS"
    },
    {
      icon: "Layers",
      title: "Architecture",
      titleEs: "Arquitectura",
      description: "MVVM, Clean Architecture, and design patterns",
      descriptionEs: "MVVM, Arquitectura Limpia y patrones de diseño"
    },
    {
      icon: "CheckCircle2",
      title: "Code Quality",
      titleEs: "Calidad de Código",
      description: "Unit Testing, UI Test, Screenshot testing, Integration Tests and more",
      descriptionEs: "Pruebas Unitarias, Pruebas de UI, Pruebas de Captura, Pruebas de Integración y más"
    }
  ]
};

export const contactInfo = {
  title: "Let's Work Together",
  titleEs: "Trabajemos Juntos",
  subtitle: "Ready to bring your iOS app idea to life? Let's discuss your project and create something amazing together.",
  subtitleEs: "¿Listo para dar vida a tu idea de app iOS? Hablemos sobre tu proyecto y creemos algo increíble juntos.",
  services: [
    "iOS app development (Swift/SwiftUI)",
    "App architecture & optimization",
    "UI/UX implementation",
    "App Store optimization",
    "Technical consulting"
  ],
  servicesEs: [
    "Desarrollo de apps iOS (Swift/SwiftUI)",
    "Arquitectura y optimización de apps",
    "Implementación de UI/UX",
    "Optimización para App Store",
    "Consultoría técnica"
  ],
  formEndpoint: "", // Will be configured for deployment
  email: "xdmgzdev@gmail.com",
  github: "github.com/xdmgzdev",
  linkedin: "linkedin.com/in/xdmgzdev"
};

export const skills = [
  { name: "Swift", years: "10+", category: "Languages", description: "Core iOS language", descriptionEs: "Lenguaje principal de iOS", order: 1 },
  { name: "SwiftUI", years: "5+", category: "Frameworks", description: "Modern declarative UI", descriptionEs: "UI declarativa moderna", order: 2 },
  { name: "UIKit", years: "10+", category: "Frameworks", description: "Traditional iOS UI framework", descriptionEs: "Framework UI tradicional de iOS", order: 3 },
  { name: "Combine", years: "3+", category: "Frameworks", description: "Reactive programming", descriptionEs: "Programación reactiva", order: 4 },
  { name: "Core Data", years: "5+", category: "Data", description: "Local data persistence", descriptionEs: "Persistencia de datos local", order: 5 },
  { name: "CloudKit", years: "2+", category: "Cloud", description: "Apple cloud services", descriptionEs: "Servicios en la nube de Apple", order: 6 },
  { name: "Firebase", years: "8+", category: "Backend", description: "Backend as a service", descriptionEs: "Backend como servicio", order: 7 },
  { name: "REST APIs", years: "15+", category: "Integration", description: "RESTful services", descriptionEs: "Servicios RESTful", order: 8 },
  { name: "GraphQL", years: "2+", category: "Integration", description: "Modern API queries", descriptionEs: "Consultas API modernas", order: 9 },
  { name: "Xcode", years: "15+", category: "Tools", description: "Apple IDE", descriptionEs: "IDE de Apple", order: 10 },
  { name: "Git", years: "14+", category: "Tools", description: "Version control", descriptionEs: "Control de versiones", order: 11 },
  { name: "Fastlane", years: "8+", category: "CI/CD", description: "iOS automation", descriptionEs: "Automatización iOS", order: 12 },
  { name: "TestFlight", years: "12+", category: "Distribution", description: "Beta testing platform", descriptionEs: "Plataforma de pruebas beta", order: 13 },
  { name: "MVVM", years: "5+", category: "Architecture", description: "Design pattern", descriptionEs: "Patrón de diseño", order: 14 },
  { name: "Clean Architecture", years: "12+", category: "Architecture", description: "Scalable app structure", descriptionEs: "Estructura de app escalable", order: 15 }
];

export const projects = [
  {
    id: 1,
    title: "FinanceFlow Pro",
    description: "A comprehensive financial management app featuring real-time portfolio tracking, AI-powered investment insights, and seamless banking integration. Built with SwiftUI and modern iOS architecture patterns.",
    descriptionEs: "Una aplicación completa de gestión financiera con seguimiento de cartera en tiempo real, insights de inversión impulsados por IA e integración bancaria fluida. Construida con SwiftUI y patrones de arquitectura iOS modernos.",
    features: [
      "Real-time stock market data",
      "Biometric authentication",
      "AI investment recommendations",
      "Multi-currency support",
      "Interactive charts with animations"
    ],
    featuresEs: [
      "Datos del mercado de valores en tiempo real",
      "Autenticación biométrica",
      "Recomendaciones de inversión con IA",
      "Soporte multidivisa",
      "Gráficos interactivos con animaciones"
    ],
    technologies: ["Swift", "SwiftUI", "Combine", "Core Data", "Firebase", "Charts API"],
    metrics: "1.5M+ downloads, 4.7★ App Store rating",
    metricsEs: "1.5M+ descargas, 4.7★ en App Store",
    image: "https://images.unsplash.com/photo-1762279389002-7b6abd7bd6c6?w=800&q=80"
  },
  {
    id: 2,
    title: "HealthTrack Elite",
    description: "Advanced health and fitness tracking application with Apple Watch integration, personalized workout plans, and comprehensive health metrics. Seamlessly syncs with HealthKit for unified health data.",
    descriptionEs: "Aplicación avanzada de seguimiento de salud y fitness con integración de Apple Watch, planes de entrenamiento personalizados y métricas de salud completas. Se sincroniza perfectamente con HealthKit para datos de salud unificados.",
    features: [
      "Apple Watch companion app",
      "Custom workout builder",
      "Health metrics dashboard",
      "Social challenges & leaderboards",
      "Offline workout tracking"
    ],
    featuresEs: [
      "App complementaria para Apple Watch",
      "Constructor de entrenamientos personalizados",
      "Panel de métricas de salud",
      "Desafíos sociales y tablas de clasificación",
      "Seguimiento de entrenamientos sin conexión"
    ],
    technologies: ["Swift", "HealthKit", "WatchOS", "CloudKit", "Core Motion", "WidgetKit"],
    metrics: "Featured by Apple, 800K+ active users",
    metricsEs: "Destacada por Apple, 800K+ usuarios activos",
    image: "https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?w=800&q=80"
  },
  {
    id: 3,
    title: "ShopSphere",
    description: "Next-generation e-commerce platform delivering personalized shopping experiences with AR product preview, one-tap checkout, and intelligent product recommendations powered by machine learning.",
    descriptionEs: "Plataforma de comercio electrónico de próxima generación que ofrece experiencias de compra personalizadas con vista previa de productos en AR, pago con un toque y recomendaciones inteligentes impulsadas por aprendizaje automático.",
    features: [
      "AR product visualization",
      "Apple Pay integration",
      "Smart search & filters",
      "Push notifications",
      "Wishlist sync across devices"
    ],
    featuresEs: [
      "Visualización de productos en AR",
      "Integración con Apple Pay",
      "Búsqueda inteligente y filtros",
      "Notificaciones push",
      "Sincronización de lista de deseos entre dispositivos"
    ],
    technologies: ["Swift", "ARKit", "StoreKit", "Core ML", "Firebase", "Alamofire"],
    metrics: "50% increase in conversion rate",
    metricsEs: "50% de aumento en tasa de conversión",
    image: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?w=800&q=80"
  },
  {
    id: 4,
    title: "LearnHub Academy",
    description: "Interactive educational platform featuring video courses, quizzes, and progress tracking. Gamification elements keep learners engaged while offline mode ensures learning anywhere, anytime.",
    descriptionEs: "Plataforma educativa interactiva con cursos en video, cuestionarios y seguimiento de progreso. Los elementos de gamificación mantienen a los estudiantes comprometidos mientras el modo sin conexión garantiza aprendizaje en cualquier lugar y momento.",
    features: [
      "Offline content download",
      "Video playback with captions",
      "Interactive quizzes",
      "Progress analytics",
      "Achievement system"
    ],
    featuresEs: [
      "Descarga de contenido sin conexión",
      "Reproducción de video con subtítulos",
      "Cuestionarios interactivos",
      "Analíticas de progreso",
      "Sistema de logros"
    ],
    technologies: ["Swift", "AVFoundation", "Core Data", "Realm", "URLSession", "Charts"],
    metrics: "Used by 300+ schools worldwide",
    metricsEs: "Utilizada por más de 300 escuelas en todo el mundo",
    image: "https://images.unsplash.com/photo-1762326866764-1ef1a008e0ad?w=800&q=80"
  },
  {
    id: 5,
    title: "TravelMate Navigator",
    description: "Smart travel companion app with offline maps, itinerary planning, expense tracking, and real-time flight updates. Beautiful UI with smooth animations makes trip planning delightful.",
    descriptionEs: "Aplicación inteligente de compañero de viaje con mapas sin conexión, planificación de itinerarios, seguimiento de gastos y actualizaciones de vuelos en tiempo real. Una interfaz hermosa con animaciones fluidas hace que planificar viajes sea un placer.",
    features: [
      "Offline map navigation",
      "Trip itinerary planner",
      "Expense tracker with receipts",
      "Flight status notifications",
      "Currency converter"
    ],
    featuresEs: [
      "Navegación con mapas sin conexión",
      "Planificador de itinerarios de viaje",
      "Seguimiento de gastos con recibos",
      "Notificaciones de estado de vuelos",
      "Conversor de divisas"
    ],
    technologies: ["Swift", "MapKit", "Core Location", "PhotoKit", "SwiftUI", "Combine"],
    metrics: "4.8★ rating, 600K downloads",
    metricsEs: "4.8★ de calificación, 600K descargas",
    image: "https://images.unsplash.com/photo-1748716460543-1916e86eebee?w=800&q=80"
  },
  {
    id: 6,
    title: "MindfulSpace",
    description: "Meditation and mindfulness app featuring guided sessions, breathing exercises, and sleep stories. Elegant design with calming animations creates a peaceful user experience.",
    descriptionEs: "Aplicación de meditación y mindfulness con sesiones guiadas, ejercicios de respiración e historias para dormir. Un diseño elegante con animaciones relajantes crea una experiencia de usuario pacífica.",
    features: [
      "Guided meditation sessions",
      "Breathing exercise timers",
      "Sleep stories & sounds",
      "Daily mindfulness reminders",
      "Progress tracking & streaks"
    ],
    featuresEs: [
      "Sesiones de meditación guiadas",
      "Temporizadores de ejercicios de respiración",
      "Historias y sonidos para dormir",
      "Recordatorios diarios de mindfulness",
      "Seguimiento de progreso y rachas"
    ],
    technologies: ["Swift", "AVFoundation", "UserNotifications", "WidgetKit", "SwiftUI", "CloudKit"],
    metrics: "Featured in App Store, 4.9★ rating",
    metricsEs: "Destacada en App Store, 4.9★ de calificación",
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
