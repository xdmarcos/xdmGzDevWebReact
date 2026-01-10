/**
 * Import Mock Data to Sanity
 * 
 * This script imports all mock data from /app/frontend/src/mock.js into Sanity.io
 * 
 * Prerequisites:
 * 1. Run 'sanity init' to create your project
 * 2. Update sanity.config.js with your project ID
 * 3. Install dependencies: yarn install
 * 
 * Usage:
 * node importMockData.js
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

// Create Sanity client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // You'll need a write token
})

// Mock data to import
const mockData = {
  personalInfo: {
    name: "xdmGzDev",
    title: "Senior iOS Engineer",
    description: "Crafting exceptional mobile experiences with cutting-edge technology. Specializing in iOS native development.",
    aboutContent: "Passionate iOS engineer with extensive experience creating innovative mobile applications that delight users and drive business success. I specialize in building high-performance iOS apps using Swift, SwiftUI, and modern architectural patterns. With a keen eye for design and user experience, I create apps that not only function flawlessly but also provide intuitive and engaging interfaces. I'm committed to clean code, scalable architecture, and delivering pixel-perfect implementations.",
    aboutContentEs: "Ingeniero iOS apasionado con amplia experiencia creando aplicaciones móviles innovadoras que deleitan a los usuarios y impulsan el éxito empresarial. Me especializo en construir aplicaciones iOS de alto rendimiento usando Swift, SwiftUI y patrones arquitectónicos modernos. Con un ojo agudo para el diseño y la experiencia del usuario, creo aplicaciones que no solo funcionan perfectamente, sino que también proporcionan interfaces intuitivas y atractivas. Estoy comprometido con código limpio, arquitectura escalable y entrega de implementaciones perfectas.",
    cloudTags: ["15+ Years", "Swift Expert", "iOS Native", "SwiftUI", "Published Apps", "App Store"],
    highlights: [
      {
        icon: "Code2",
        title: "Clean Code",
        description: "Writing maintainable, testable, and scalable code"
      },
      {
        icon: "Smartphone",
        title: "Native iOS",
        description: "Deep expertise in Swift and iOS frameworks"
      },
      {
        icon: "Layers",
        title: "Architecture",
        description: "MVVM, Clean Architecture, and design patterns"
      },
      {
        icon: "CheckCircle2",
        title: "Code Quality",
        description: "Unit Testing, UI Test, Screenshot testing, Integration Tests and more"
      }
    ]
  },

  contactInfo: {
    title: "Let's Work Together",
    subtitle: "Ready to bring your iOS app idea to life? Let's discuss your project and create something amazing together.",
    services: [
      "iOS app development (Swift/SwiftUI)",
      "App architecture & optimization",
      "UI/UX implementation",
      "App Store optimization",
      "Technical consulting"
    ],
    formEndpoint: "",
    email: "xdmgzdev@gmail.com",
    github: "github.com/xdmgzdev",
    linkedin: "linkedin.com/in/xdmgzdev"
  },

  skills: [
    { name: "Swift", years: "10+", category: "Languages", description: "Core iOS language", order: 1 },
    { name: "SwiftUI", years: "5+", category: "Frameworks", description: "Modern declarative UI", order: 2 },
    { name: "UIKit", years: "10+", category: "Frameworks", description: "Traditional iOS UI framework", order: 3 },
    { name: "Combine", years: "3+", category: "Frameworks", description: "Reactive programming", order: 4 },
    { name: "Core Data", years: "5+", category: "Data", description: "Local data persistence", order: 5 },
    { name: "CloudKit", years: "2+", category: "Cloud", description: "Apple cloud services", order: 6 },
    { name: "Firebase", years: "8+", category: "Backend", description: "Backend as a service", order: 7 },
    { name: "REST APIs", years: "15+", category: "Integration", description: "RESTful services", order: 8 },
    { name: "GraphQL", years: "2+", category: "Integration", description: "Modern API queries", order: 9 },
    { name: "Xcode", years: "15+", category: "Tools", description: "Apple IDE", order: 10 },
    { name: "Git", years: "14+", category: "Tools", description: "Version control", order: 11 },
    { name: "Fastlane", years: "8+", category: "CI/CD", description: "iOS automation", order: 12 },
    { name: "TestFlight", years: "12+", category: "Distribution", description: "Beta testing platform", order: 13 },
    { name: "MVVM", years: "5+", category: "Architecture", description: "Design pattern", order: 14 },
    { name: "Clean Architecture", years: "12+", category: "Architecture", description: "Scalable app structure", order: 15 }
  ],

  projects: [
    {
      title: "FinanceFlow Pro",
      description: "A comprehensive financial management app featuring real-time portfolio tracking, AI-powered investment insights, and seamless banking integration. Built with SwiftUI and modern iOS architecture patterns.",
      imageUrl: "https://images.unsplash.com/photo-1762279389002-7b6abd7bd6c6?w=800&q=80",
      features: [
        "Real-time stock market data",
        "Biometric authentication",
        "AI investment recommendations",
        "Multi-currency support",
        "Interactive charts with animations"
      ],
      technologies: ["Swift", "SwiftUI", "Combine", "Core Data", "Firebase", "Charts API"],
      metrics: "1.5M+ downloads, 4.7★ App Store rating",
      order: 1,
      featured: true
    },
    {
      title: "HealthTrack Elite",
      description: "Advanced health and fitness tracking application with Apple Watch integration, personalized workout plans, and comprehensive health metrics. Seamlessly syncs with HealthKit for unified health data.",
      imageUrl: "https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?w=800&q=80",
      features: [
        "Apple Watch companion app",
        "Custom workout builder",
        "Health metrics dashboard",
        "Social challenges & leaderboards",
        "Offline workout tracking"
      ],
      technologies: ["Swift", "HealthKit", "WatchOS", "CloudKit", "Core Motion", "WidgetKit"],
      metrics: "Featured by Apple, 800K+ active users",
      order: 2,
      featured: true
    },
    {
      title: "ShopSphere",
      description: "Next-generation e-commerce platform delivering personalized shopping experiences with AR product preview, one-tap checkout, and intelligent product recommendations powered by machine learning.",
      imageUrl: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?w=800&q=80",
      features: [
        "AR product visualization",
        "Apple Pay integration",
        "Smart search & filters",
        "Push notifications",
        "Wishlist sync across devices"
      ],
      technologies: ["Swift", "ARKit", "StoreKit", "Core ML", "Firebase", "Alamofire"],
      metrics: "50% increase in conversion rate",
      order: 3,
      featured: true
    },
    {
      title: "LearnHub Academy",
      description: "Interactive educational platform featuring video courses, quizzes, and progress tracking. Gamification elements keep learners engaged while offline mode ensures learning anywhere, anytime.",
      imageUrl: "https://images.unsplash.com/photo-1762326866764-1ef1a008e0ad?w=800&q=80",
      features: [
        "Offline content download",
        "Video playback with captions",
        "Interactive quizzes",
        "Progress analytics",
        "Achievement system"
      ],
      technologies: ["Swift", "AVFoundation", "Core Data", "Realm", "URLSession", "Charts"],
      metrics: "Used by 300+ schools worldwide",
      order: 4,
      featured: true
    },
    {
      title: "TravelMate Navigator",
      description: "Smart travel companion app with offline maps, itinerary planning, expense tracking, and real-time flight updates. Beautiful UI with smooth animations makes trip planning delightful.",
      imageUrl: "https://images.unsplash.com/photo-1748716460543-1916e86eebee?w=800&q=80",
      features: [
        "Offline map navigation",
        "Trip itinerary planner",
        "Expense tracker with receipts",
        "Flight status notifications",
        "Currency converter"
      ],
      technologies: ["Swift", "MapKit", "Core Location", "PhotoKit", "SwiftUI", "Combine"],
      metrics: "4.8★ rating, 600K downloads",
      order: 5,
      featured: true
    },
    {
      title: "MindfulSpace",
      description: "Meditation and mindfulness app featuring guided sessions, breathing exercises, and sleep stories. Elegant design with calming animations creates a peaceful user experience.",
      imageUrl: "https://images.unsplash.com/photo-1759481269661-2eb42cc1d3db?w=800&q=80",
      features: [
        "Guided meditation sessions",
        "Breathing exercise timers",
        "Sleep stories & sounds",
        "Daily mindfulness reminders",
        "Progress tracking & streaks"
      ],
      technologies: ["Swift", "AVFoundation", "UserNotifications", "WidgetKit", "SwiftUI", "CloudKit"],
      metrics: "Featured in App Store, 4.9★ rating",
      order: 6,
      featured: true
    }
  ]
}

async function importData() {
  console.log('🚀 Starting import to Sanity...\n')

  try {
    // 1. Import Personal Info
    console.log('📝 Importing Personal Information...')
    const personalInfoDoc = await client.create({
      _type: 'personalInfo',
      ...mockData.personalInfo
    })
    console.log('✅ Personal Info created:', personalInfoDoc._id)

    // 2. Import Contact Info
    console.log('\n📧 Importing Contact Information...')
    const contactInfoDoc = await client.create({
      _type: 'contactInfo',
      ...mockData.contactInfo
    })
    console.log('✅ Contact Info created:', contactInfoDoc._id)

    // 3. Import Skills
    console.log('\n🎯 Importing Skills...')
    for (const skill of mockData.skills) {
      const skillDoc = await client.create({
        _type: 'skill',
        ...skill
      })
      console.log(`✅ Skill created: ${skill.name}`)
    }

    // 4. Import Projects (Note: Images will be URLs, not uploaded assets)
    console.log('\n💼 Importing Projects...')
    console.log('⚠️  Note: Project images are URLs. Upload actual images in Sanity Studio later.')
    for (const project of mockData.projects) {
      // For now, we'll skip the image and let you upload it in Studio
      const { imageUrl, ...projectData } = project
      const projectDoc = await client.create({
        _type: 'project',
        ...projectData
      })
      console.log(`✅ Project created: ${project.title}`)
      console.log(`   Image URL to upload: ${imageUrl}`)
    }

    console.log('\n\n🎉 Import completed successfully!')
    console.log('\n📋 Summary:')
    console.log('  ✅ 1 Personal Info document')
    console.log('  ✅ 1 Contact Info document')
    console.log(`  ✅ ${mockData.skills.length} Skills`)
    console.log(`  ✅ ${mockData.projects.length} Projects`)
    console.log('\n⚠️  Next Steps:')
    console.log('  1. Upload project images in Sanity Studio')
    console.log('  2. Review and publish all documents')
    console.log('  3. Enable Sanity in frontend: REACT_APP_USE_SANITY=true')

  } catch (error) {
    console.error('\n❌ Import failed:', error.message)
    console.error('\nTroubleshooting:')
    console.error('  1. Make sure SANITY_PROJECT_ID is set correctly')
    console.error('  2. Get a write token from: https://www.sanity.io/manage')
    console.error('  3. Add token to .env: SANITY_WRITE_TOKEN=your_token')
  }
}

// Run the import
importData()
