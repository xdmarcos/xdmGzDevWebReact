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
  { name: "Swift", level: 98, category: "Languages" },
  { name: "SwiftUI", level: 95, category: "Frameworks" },
  { name: "UIKit", level: 92, category: "Frameworks" },
  { name: "Combine", level: 88, category: "Frameworks" },
  { name: "Core Data", level: 90, category: "Data" },
  { name: "CloudKit", level: 85, category: "Cloud" },
  { name: "Firebase", level: 87, category: "Backend" },
  { name: "REST APIs", level: 94, category: "Integration" },
  { name: "GraphQL", level: 82, category: "Integration" },
  { name: "Xcode", level: 96, category: "Tools" },
  { name: "Git", level: 93, category: "Tools" },
  { name: "Fastlane", level: 86, category: "CI/CD" },
  { name: "TestFlight", level: 90, category: "Distribution" },
  { name: "MVVM", level: 94, category: "Architecture" },
  { name: "Clean Architecture", level: 91, category: "Architecture" }
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
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
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
    }
    // Spanish translations will be added later
  }
};
