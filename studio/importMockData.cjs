/**
 * Complete Bilingual Import Script for Sanity.io
 * 
 * This script imports ALL mock data including English and Spanish translations.
 * 
 * SETUP:
 * 1. Create a .env file in /studio folder with:
 *    SANITY_PROJECT_ID=your-project-id
 *    SANITY_WRITE_TOKEN=your-write-token
 * 
 * 2. Or set environment variables directly:
 *    export SANITY_PROJECT_ID="your-project-id"
 *    export SANITY_WRITE_TOKEN="your-write-token"
 * 
 * USAGE:
 *    cd studio
 *    node importMockData.cjs
 */

const { createClient } = require('@sanity/client')

// Try to load .env file if it exists
try {
  require('dotenv').config()
} catch (e) {
  // dotenv not installed, will use environment variables
}

// Validate required environment variables
const projectId = process.env.SANITY_PROJECT_ID
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId || projectId === 'YOUR_PROJECT_ID') {
  console.error('❌ Error: SANITY_PROJECT_ID is not set')
  console.error('   Set it in .env file or as environment variable')
  process.exit(1)
}

if (!token) {
  console.error('❌ Error: SANITY_WRITE_TOKEN is not set')
  console.error('   Get a token from: https://www.sanity.io/manage → Your Project → API → Tokens')
  console.error('   Set it in .env file or as environment variable')
  process.exit(1)
}

// Create Sanity client
const client = createClient({
  projectId: projectId,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: token,
})

// ============================================================================
// COMPLETE BILINGUAL MOCK DATA
// ============================================================================

const personalInfo = {
  _type: 'personalInfo',
  name: "xdmGzDev",
  
  // Professional Title
  title: "Senior iOS Engineer",
  titleEs: "Ingeniero Senior de iOS",
  
  // Hero Description
  description: "Crafting exceptional mobile experiences with cutting-edge technology. Specializing in iOS native development.",
  descriptionEs: "Creando experiencias móviles excepcionales con tecnología de vanguardia. Especializado en desarrollo nativo de iOS.",
  
  // About Me Content
  aboutContent: "Passionate iOS engineer with extensive experience creating innovative mobile applications that delight users and drive business success. I specialize in building high-performance iOS apps using Swift, SwiftUI, and modern architectural patterns. With a keen eye for design and user experience, I create apps that not only function flawlessly but also provide intuitive and engaging interfaces. I'm committed to clean code, scalable architecture, and delivering pixel-perfect implementations.",
  aboutContentEs: "Ingeniero iOS apasionado con amplia experiencia creando aplicaciones móviles innovadoras que deleitan a los usuarios y impulsan el éxito empresarial. Me especializo en construir aplicaciones iOS de alto rendimiento usando Swift, SwiftUI y patrones arquitectónicos modernos. Con un ojo agudo para el diseño y la experiencia del usuario, creo aplicaciones que no solo funcionan perfectamente, sino que también proporcionan interfaces intuitivas y atractivas. Estoy comprometido con código limpio, arquitectura escalable y entrega de implementaciones perfectas.",
  
  // Cloud Tags (badges)
  cloudTags: ["15+ Years", "Swift Expert", "iOS Native", "SwiftUI", "Published Apps", "App Store"],
  cloudTagsEs: ["15+ Años", "Experto en Swift", "iOS Nativo", "SwiftUI", "Apps Publicadas", "App Store"],
  
  // Highlights (About section cards)
  highlights: [
    {
      _key: 'highlight1',
      icon: "Code2",
      title: "Clean Code",
      titleEs: "Código Limpio",
      description: "Writing maintainable, testable, and scalable code",
      descriptionEs: "Escribiendo código mantenible, testeable y escalable"
    },
    {
      _key: 'highlight2',
      icon: "Smartphone",
      title: "Native iOS",
      titleEs: "iOS Nativo",
      description: "Deep expertise in Swift and iOS frameworks",
      descriptionEs: "Experiencia profunda en Swift y frameworks de iOS"
    },
    {
      _key: 'highlight3',
      icon: "Layers",
      title: "Architecture",
      titleEs: "Arquitectura",
      description: "MVVM, Clean Architecture, and design patterns",
      descriptionEs: "MVVM, Arquitectura Limpia y patrones de diseño"
    },
    {
      _key: 'highlight4',
      icon: "CheckCircle2",
      title: "Code Quality",
      titleEs: "Calidad de Código",
      description: "Unit Testing, UI Test, Screenshot testing, Integration Tests and more",
      descriptionEs: "Pruebas Unitarias, Pruebas de UI, Pruebas de Captura, Pruebas de Integración y más"
    }
  ]
}

const projectsSection = {
  _type: 'projectsSection',
  
  // Section Title
  title: "Featured Projects",
  titleEs: "Proyectos Destacados",
  
  // Section Subtitle
  subtitle: "Showcasing my expertise in iOS development through innovative mobile applications",
  subtitleEs: "Mostrando mi experiencia en desarrollo iOS a través de aplicaciones móviles innovadoras",
  
  // Labels for project modal
  featuresLabel: "Key Features",
  featuresLabelEs: "Características Clave",
  technologiesLabel: "Technologies",
  technologiesLabelEs: "Tecnologías",
  viewButtonLabel: "View on App Store",
  viewButtonLabelEs: "Ver en App Store"
}

const contactInfo = {
  _type: 'contactInfo',
  
  // Section Title
  title: "Let's Work Together",
  titleEs: "Trabajemos Juntos",
  
  // Section Subtitle
  subtitle: "Ready to bring your iOS app idea to life? Let's discuss your project and create something amazing together.",
  subtitleEs: "¿Listo para dar vida a tu idea de app iOS? Hablemos sobre tu proyecto y creemos algo increíble juntos.",
  
  // Services List
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
  
  // Form endpoint - Web3Forms API
  formEndpoint: "https://api.web3forms.com/submit",
  
  // Contact links
  email: "xdmgzdev@gmail.com",
  github: "github.com/xdmgzdev",
  linkedin: "linkedin.com/in/xdmgzdev"
}

const skills = [
  { 
    _type: 'skill',
    name: "Swift", 
    years: "10+", 
    category: "Languages", 
    description: "Core iOS language", 
    descriptionEs: "Lenguaje principal de iOS", 
    order: 1 
  },
  { 
    _type: 'skill',
    name: "SwiftUI", 
    years: "5+", 
    category: "Frameworks", 
    description: "Modern declarative UI", 
    descriptionEs: "UI declarativa moderna", 
    order: 2 
  },
  { 
    _type: 'skill',
    name: "UIKit", 
    years: "10+", 
    category: "Frameworks", 
    description: "Traditional iOS UI framework", 
    descriptionEs: "Framework UI tradicional de iOS", 
    order: 3 
  },
  { 
    _type: 'skill',
    name: "Combine", 
    years: "3+", 
    category: "Frameworks", 
    description: "Reactive programming", 
    descriptionEs: "Programación reactiva", 
    order: 4 
  },
  { 
    _type: 'skill',
    name: "Core Data", 
    years: "5+", 
    category: "Data", 
    description: "Local data persistence", 
    descriptionEs: "Persistencia de datos local", 
    order: 5 
  },
  { 
    _type: 'skill',
    name: "CloudKit", 
    years: "2+", 
    category: "Cloud", 
    description: "Apple cloud services", 
    descriptionEs: "Servicios en la nube de Apple", 
    order: 6 
  },
  { 
    _type: 'skill',
    name: "Firebase", 
    years: "8+", 
    category: "Backend", 
    description: "Backend as a service", 
    descriptionEs: "Backend como servicio", 
    order: 7 
  },
  { 
    _type: 'skill',
    name: "REST APIs", 
    years: "15+", 
    category: "Integration", 
    description: "RESTful services", 
    descriptionEs: "Servicios RESTful", 
    order: 8 
  },
  { 
    _type: 'skill',
    name: "GraphQL", 
    years: "2+", 
    category: "Integration", 
    description: "Modern API queries", 
    descriptionEs: "Consultas API modernas", 
    order: 9 
  },
  { 
    _type: 'skill',
    name: "Xcode", 
    years: "15+", 
    category: "Tools", 
    description: "Apple IDE", 
    descriptionEs: "IDE de Apple", 
    order: 10 
  },
  { 
    _type: 'skill',
    name: "Git", 
    years: "14+", 
    category: "Tools", 
    description: "Version control", 
    descriptionEs: "Control de versiones", 
    order: 11 
  },
  { 
    _type: 'skill',
    name: "Fastlane", 
    years: "8+", 
    category: "CI/CD", 
    description: "iOS automation", 
    descriptionEs: "Automatización iOS", 
    order: 12 
  },
  { 
    _type: 'skill',
    name: "TestFlight", 
    years: "12+", 
    category: "Distribution", 
    description: "Beta testing platform", 
    descriptionEs: "Plataforma de pruebas beta", 
    order: 13 
  },
  { 
    _type: 'skill',
    name: "MVVM", 
    years: "5+", 
    category: "Architecture", 
    description: "Design pattern", 
    descriptionEs: "Patrón de diseño", 
    order: 14 
  },
  { 
    _type: 'skill',
    name: "Clean Architecture", 
    years: "12+", 
    category: "Architecture", 
    description: "Scalable app structure", 
    descriptionEs: "Estructura de app escalable", 
    order: 15 
  }
]

const projects = [
  {
    _type: 'project',
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
    projectUrl: "https://apps.apple.com/co/app/financeflow-pro",
    order: 1,
    featured: true
  },
  {
    _type: 'project',
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
    projectUrl: "https://apps.apple.com/co/app/healthtrack-elite",
    order: 2,
    featured: true
  },
  {
    _type: 'project',
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
    projectUrl: "https://apps.apple.com/co/app/shopsphere",
    order: 3,
    featured: true
  },
  {
    _type: 'project',
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
    projectUrl: "https://apps.apple.com/co/app/learnhub-academy",
    order: 4,
    featured: true
  },
  {
    _type: 'project',
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
    projectUrl: "https://apps.apple.com/co/app/travelmate-navigator",
    order: 5,
    featured: true
  },
  {
    _type: 'project',
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
    projectUrl: "https://apps.apple.com/co/app/mindfulspace",
    order: 6,
    featured: true
  }
]

// ============================================================================
// IMPORT FUNCTIONS
// ============================================================================

async function deleteExistingData() {
  console.log('🗑️  Cleaning up existing data...\n')
  
  try {
    // Delete existing documents of each type
    const types = ['personalInfo', 'contactInfo', 'skill', 'project']
    
    for (const type of types) {
      const docs = await client.fetch(`*[_type == "${type}"]._id`)
      if (docs.length > 0) {
        for (const id of docs) {
          await client.delete(id)
        }
        console.log(`   Deleted ${docs.length} ${type} document(s)`)
      }
    }
    console.log('')
  } catch (error) {
    console.log('   No existing data to clean up\n')
  }
}

async function importData() {
  console.log('╔════════════════════════════════════════════════════════════╗')
  console.log('║     SANITY.IO BILINGUAL DATA IMPORT                        ║')
  console.log('║     xdmGzDev Portfolio - English & Spanish                 ║')
  console.log('╚════════════════════════════════════════════════════════════╝\n')
  
  console.log(`📌 Project ID: ${projectId}`)
  console.log(`📌 Dataset: production\n`)

  try {
    // Optional: Clean up existing data first
    await deleteExistingData()

    // 1. Import Personal Info
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📝 PERSONAL INFORMATION')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    const personalInfoDoc = await client.create(personalInfo)
    console.log(`   ✅ Name: ${personalInfo.name}`)
    console.log(`   ✅ Title (EN): ${personalInfo.title}`)
    console.log(`   ✅ Title (ES): ${personalInfo.titleEs}`)
    console.log(`   ✅ Description (EN): ${personalInfo.description.substring(0, 50)}...`)
    console.log(`   ✅ Description (ES): ${personalInfo.descriptionEs.substring(0, 50)}...`)
    console.log(`   ✅ About Content (EN/ES): ✓`)
    console.log(`   ✅ Cloud Tags (EN): ${personalInfo.cloudTags.length} tags`)
    console.log(`   ✅ Cloud Tags (ES): ${personalInfo.cloudTagsEs.length} tags`)
    console.log(`   ✅ Highlights: ${personalInfo.highlights.length} items (bilingual)`)
    console.log(`   📌 Document ID: ${personalInfoDoc._id}\n`)

    // 2. Import Contact Info
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📧 CONTACT INFORMATION')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    const contactInfoDoc = await client.create(contactInfo)
    console.log(`   ✅ Title (EN): ${contactInfo.title}`)
    console.log(`   ✅ Title (ES): ${contactInfo.titleEs}`)
    console.log(`   ✅ Subtitle (EN/ES): ✓`)
    console.log(`   ✅ Services (EN): ${contactInfo.services.length} services`)
    console.log(`   ✅ Services (ES): ${contactInfo.servicesEs.length} services`)
    console.log(`   ✅ Email: ${contactInfo.email}`)
    console.log(`   ✅ GitHub: ${contactInfo.github}`)
    console.log(`   ✅ LinkedIn: ${contactInfo.linkedin}`)
    console.log(`   📌 Document ID: ${contactInfoDoc._id}\n`)

    // 3. Import Skills
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('🎯 SKILLS (15 items with bilingual descriptions)')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    for (const skill of skills) {
      const skillDoc = await client.create(skill)
      console.log(`   ✅ ${skill.name.padEnd(20)} | ${skill.years.padEnd(4)} | ${skill.category.padEnd(12)} | EN: ${skill.description.substring(0, 20)}... | ES: ${skill.descriptionEs.substring(0, 20)}...`)
    }
    console.log('')

    // 4. Import Projects
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('💼 PROJECTS (6 items with bilingual content)')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('⚠️  Note: Images need to be uploaded manually in Sanity Studio\n')
    
    for (const project of projects) {
      const projectDoc = await client.create(project)
      console.log(`   ✅ ${project.title}`)
      console.log(`      Description (EN): ${project.description.substring(0, 50)}...`)
      console.log(`      Description (ES): ${project.descriptionEs.substring(0, 50)}...`)
      console.log(`      Features: ${project.features.length} EN / ${project.featuresEs.length} ES`)
      console.log(`      Metrics (EN): ${project.metrics}`)
      console.log(`      Metrics (ES): ${project.metricsEs}`)
      console.log(`      Technologies: ${project.technologies.join(', ')}`)
      console.log('')
    }

    // Summary
    console.log('╔════════════════════════════════════════════════════════════╗')
    console.log('║     🎉 IMPORT COMPLETED SUCCESSFULLY!                      ║')
    console.log('╚════════════════════════════════════════════════════════════╝\n')
    
    console.log('📊 SUMMARY:')
    console.log('   ✅ 1 Personal Information (fully bilingual)')
    console.log('   ✅ 1 Contact Information (fully bilingual)')
    console.log(`   ✅ ${skills.length} Skills (with bilingual descriptions)`)
    console.log(`   ✅ ${projects.length} Projects (fully bilingual)\n`)
    
    console.log('📋 NEXT STEPS:')
    console.log('   1. Go to Sanity Studio (https://your-studio.sanity.studio)')
    console.log('   2. Upload images for each project')
    console.log('   3. Review and Publish all documents')
    console.log('   4. Update frontend/.env.local:')
    console.log(`      REACT_APP_SANITY_PROJECT_ID=${projectId}`)
    console.log('      REACT_APP_USE_SANITY=true')
    console.log('   5. Add your domain to Sanity CORS settings\n')

  } catch (error) {
    console.error('\n❌ IMPORT FAILED!')
    console.error('   Error:', error.message)
    
    if (error.message.includes('permission')) {
      console.error('\n💡 Tip: Make sure your token has "Editor" permissions')
    }
    if (error.message.includes('project')) {
      console.error('\n💡 Tip: Check that your SANITY_PROJECT_ID is correct')
    }
    
    if (error.response) {
      console.error('   Response:', error.response.body)
    }
    process.exit(1)
  }
}

// Run the import
importData()
