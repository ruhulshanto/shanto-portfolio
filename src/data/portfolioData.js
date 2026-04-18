export const projects = [
    {
        id: 1,
        title: "Cine-Tube – Movie Streaming Platform",
        description: "A modern full-stack movie platform that allows users to explore, search, and view detailed information about movies with a responsive and dynamic user interface.",
        features: [
            "Developed dynamic movie browsing with search and filtering functionality.",
            "Integrated REST APIs to fetch and display real-time movie data.",
            "Built responsive and optimized UI using Next.js and Tailwind CSS."
        ],
        tech: ["Next.js", "Typescript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
        liveDemo: "https://cine-tube-client.vercel.app/",
        clientRepo: "https://github.com/ruhulshanto/cine-tube-client",
        serverRepo: "https://github.com/ruhulshanto/cine-tube-server"
    },
    {
        id: 2,
        title: "SkillBridge – Online Tutoring Platform",
        description: "An enterprise-grade full-stack online tutoring platform that connects students with expert tutors through a secure booking system and role-based access control.",
        features: [
            "Built secure authentication system using Better Auth with role-based access.",
            "Developed tutor profiles with subjects and availability scheduling.",
            "Created admin dashboard for managing users and platform data."
        ],
        tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
        liveDemo: "https://skill-bridge-client-ruddy.vercel.app/",
        clientRepo: "https://github.com/ruhulshanto/skill-bridge-client",
        serverRepo: "https://github.com/ruhulshanto/skill-bridge-server"
    },
    {
        id: 3,
        title: "Zap-Shift – Courier Service Platform",
        description: "A comprehensive full-stack courier service platform that enables users to book parcels, track deliveries in real time, and manage payments seamlessly.",
        features: [
            "Built real-time parcel tracking system with live delivery status updates.",
            "Developed admin panel for user management and platform analytics.",
            "Created rider dashboard with deliveries and earnings tracking."
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Tailwind CSS"],
        liveDemo: "https://zap-shift-client-3b673.web.app",
        clientRepo: "https://github.com/ruhulshanto/zap-shift-client",
        serverRepo: "https://github.com/ruhulshanto/zap-shift-server"
    },
    {
        id: 4,
        title: "Career-Flow – Career Readiness Platform",
        description: "A full-stack web application designed to bridge the gap between academic learning and career readiness with personalized career guidance.",
        features: [
            "Developed personalized career roadmaps with step-by-step guidance.",
            "Built interactive skill assessment modules with progress tracking.",
            "Created admin dashboard for managing users and learning resources."
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "JWT"],
        liveDemo: "https://career-flow-97fcb.web.app",
        clientRepo: "https://github.com/ruhulshanto/career-flow-client",
        serverRepo: "https://github.com/ruhulshanto/career-flow-server"
    }
];

export const skills = {
    frontend: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "React.js", "Next.js"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "PostgreSQL", "Prisma ORM"],
    tools: ["Firebase", "Git/GitHub", "Vercel", "REST APIs", "JWT Authentication"],
    payment: ["Stripe"]
};
