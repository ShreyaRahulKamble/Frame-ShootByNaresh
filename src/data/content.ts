import { ServicePackage, Testimonial, FAQItem, ProcessStep, WhyChooseUsItem, WhyContentMattersItem } from '../types';

export const BUSINESS_INFO = {
  name: "Frame & Shoot Interiors by Naresh",
  founder: "Naresh Budamol",
  tagline: "Framing Spaces. Shooting Stories. Growing Brands.",
  headline: "We Don't Just Shoot Interiors. We Create Content That Brings You More Clients.",
  subheading: "Professional content creation, cinematic reels & photography for Interior Designers, Architects, Furniture Brands, Modular Kitchen Manufacturers, and Showrooms.",
  phone: "+91 9004129974",
  whatsappNumber: "919004129974",
  email: "theinteriorandexteriortrends23@gmail.com",
  locations: ["Mumbai", "Hyderabad"],
  instagram: "@frameandshoot.interiors",
  stats: {
    experienceYears: 8,
    contentCreationYears: 2,
    projectsCompleted: "150+",
    clientsRetained: "98%",
    totalReelsShot: "450+"
  }
};

export const FOUNDER_INFO = {
  name: "Naresh Budamol",
  title: "Founder & Creative Director",
  tagline: "Bridging the Gap Between Craftsmanship & Visual Storytelling",
<<<<<<< HEAD
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Professional founder headshot
=======
  image: "/assets/Founder.jpg", // Professional founder headshot
>>>>>>> 3aa7791 (Final Web)
  bio: [
    "With over 8 years of deep-rooted experience in the furniture manufacturing industry, modular furniture design, raw materials, and precision woodworking machinery (including hands-on industry experience with the world-renowned Felder Group), Naresh brings a rare, technical understanding to interior content creation.",
    "Unlike generic photographers, Naresh understands the craftsmanship behind a seamless modular kitchen hinge, the texture of premium veneer finish, lighting accents on luxury wardrobe channels, and the architectural symmetry required to make a space feel grand.",
    "He founded Frame & Shoot Interiors to give Interior Designers, Architects, and Showroom Owners high-converting, aesthetic content that speaks the language of premium homeowners and high-ticket clients."
  ],
  highlights: [
    "8+ Years Furniture & Manufacturing Experience",
    "Ex-Felder Group Machinery Knowledge",
    "Deep Understanding of Architectural Materials",
    "Specialized in High-Converting Instagram Reels"
  ]
};

export const TRUST_BAR_ITEMS = [
  { icon: "Award", text: "8+ Years Industry Experience" },
  { icon: "Video", text: "2+ Years Content Creation" },
  { icon: "MapPin", text: "Mumbai & Hyderabad" },
  { icon: "Film", text: "Professional Reels" },
  { icon: "Camera", text: "Walkthrough Videos" },
  { icon: "Image", text: "4K Architectural Photos" },
  { icon: "TrendingUp", text: "Brand & Lead Growth" },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    title: "8+ Years Industry Experience",
    description: "Deep technical background in furniture manufacturing, modular joinery, and interior finishes.",
    iconName: "Briefcase",
    highlight: "Technical Know-how"
  },
  {
    title: "Business & Client Understanding",
    description: "We don't just capture pretty angles; we frame details that trigger client enquiries and highlight your project value.",
    iconName: "Target",
    highlight: "Conversion Focused"
  },
  {
    title: "Premium Cinematic Content",
    description: "Shot with 4K full-frame cinema cameras, ultra-wide architectural lenses, gimbal stabilization, and interior lighting setup.",
    iconName: "Film",
    highlight: "4K Cinema Quality"
  },
  {
    title: "Instagram Growth Strategy",
    description: "Reels formatted specifically for high viral potential, trending audio sync, and strong calls-to-action.",
    iconName: "Instagram",
    highlight: "Viral Reach"
  },
  {
    title: "Professional Post-Editing",
    description: "Color grading matched to your brand aesthetic, seamless transitions, background noise cleanup, and sound design.",
    iconName: "Sliders",
    highlight: "Studio Color Grade"
  },
  {
    title: "Architectural Storytelling",
    description: "Narrative voiceovers, founder walkthroughs, and client reaction captures that build emotional connection.",
    iconName: "Sparkles",
    highlight: "Emotional Impact"
  },
  {
    title: "Brand Building Focus",
    description: "Positioning you as the go-to luxury interior designer or showroom in Mumbai and Hyderabad.",
    iconName: "Building2",
    highlight: "Authority Positioning"
  },
  {
    title: "High-Quality Lead Generation",
    description: "Content specifically structured with hook-value-CTA frameworks to attract serious home renovators.",
    iconName: "TrendingUp",
    highlight: "Qualified Inquiries"
  },
  {
    title: "Reliable & On-Time Service",
    description: "Punctual site visits in Mumbai & Hyderabad with guaranteed content delivery timelines.",
    iconName: "Clock",
    highlight: "Zero Delay Guarantee"
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "small-site",
    name: "Small Site",
    subtitle: "Ideal for 1BHK / 2BHK Apartments, Compact Kitchens, or Single Room Renovations",
    price: 3000,
    originalPrice: 4500,
    bestFor: "Individual Interior Designers & Compact Project Walkthroughs",
    turnaround: "48 - 72 Hours Delivery",
    features: [
      "Professional Instagram Reel Videos (2 Short Reels)",
      "1 Full Site Walkthrough Video (Horizontal / Vertical)",
      "10-12 High Quality Edited Photos",
      "Client / Designer Project Story Recording",
      "Color Grading & Trend Sound Sync",
      "Instagram Ready Content Format (9:16)",
      "Facebook Ready Content Format",
      "YouTube Ready Content Format"
    ]
  },
  {
    id: "large-site",
    name: "Large Site",
    subtitle: "Ideal for 3BHK / 4BHK Luxury Villas, Large Showrooms, Modular Kitchen Experience Centers & Commercial Spaces",
    price: 5000,
    originalPrice: 7500,
    popular: true,
    badge: "MOST POPULAR",
    bestFor: "Luxury Homes, Showrooms & High-End Interior Firms",
    turnaround: "48 - 72 Hours Delivery",
    features: [
      "3 High-Engagement Instagram Reel Videos",
      "1 Cinematic 4K Full Site Walkthrough Video",
      "18-20 High Quality Architectural & Close-Up Photos",
      "Client Testimonial Video Shoot & Editing",
      "Founder / Lead Designer On-Camera Intro & Walkthrough",
      "Professional Studio Color Grading & Audio Cleaning",
      "Instagram, Facebook & YouTube Ready Content Formats",
      "High-Resolution Original Files for Portfolio & Website"
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "Nav Design Solutions", tag: "Luxury Interior Studio", location: "Mumbai" },
  { name: "SOVI", tag: "Architectural & Interior Design", location: "Hyderabad" },
  { name: "Tirumala Furniture Mall", tag: "Mega Furniture Showroom", location: "Hyderabad" }
];

export const WHY_CONTENT_MATTERS: WhyContentMattersItem[] = [
  {
    title: "Increase Instant Trust",
    description: "Homeowners want to see actual finished sites before investing lakhs. Real site videos eliminate doubt.",
    stat: "4.8x",
    statLabel: "Higher Conversion Rate",
    iconName: "ShieldCheck"
  },
  {
    title: "Generate Qualified Enquiries",
    description: "Direct prospective clients from Instagram DMs and WhatsApp with pre-qualified visual project tours.",
    stat: "+320%",
    statLabel: "More Direct Inquiries",
    iconName: "MessageCircle"
  },
  {
    title: "Exponential Instagram Growth",
    description: "Short cinematic reels trigger Instagram algorithms, reaching local homeowners in Mumbai & Hyderabad.",
    stat: "10x",
    statLabel: "Organic Reel Reach",
    iconName: "TrendingUp"
  },
  {
    title: "Attract Premium Clients",
    description: "High-end cinematic visuals naturally filter out bargain hunters and attract clients looking for quality.",
    stat: "₹15L+",
    statLabel: "Avg Project Value Boost",
    iconName: "Crown"
  },
  {
    title: "Build Industry Authority",
    description: "Position your brand as a premier design studio or showroom that leads in aesthetics and professionalism.",
    stat: "#1",
    statLabel: "Brand Preference",
    iconName: "Award"
  },
  {
    title: "Accelerate Sales Closing",
    description: "Send video walkthrough links during sales meetings to close client deals 2x faster without endless site visits.",
    stat: "50%",
    statLabel: "Faster Closing Time",
    iconName: "CheckCircle2"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Book Consultation",
    description: "Reach out via call or WhatsApp. We discuss your project location (Mumbai/Hyderabad), scope, and goal.",
    iconName: "PhoneCall",
    detail: "Quick 10-minute discovery call"
  },
  {
    step: 2,
    title: "Schedule Site Visit",
    description: "We pick the best lighting window and coordinate with your site manager or client for smooth entry.",
    iconName: "Calendar",
    detail: "Pre-shoot checklist provided"
  },
  {
    step: 3,
    title: "Professional Shoot",
    description: "Naresh personally visits the site with cinema cameras, gimbal, audio gear, and lighting.",
    iconName: "Camera",
    detail: "Detail & wide shots captured"
  },
  {
    step: 4,
    title: "Editing & Color Grading",
    description: "Our editing suite crafts engaging reels, syncs trending audio, adds subtitles, and color grades to perfection.",
    iconName: "Video",
    detail: "Tailored for IG, FB, and YouTube"
  },
  {
    step: 5,
    title: "Ready-to-Post Content",
    description: "Receive your high-res photos and video files via Google Drive link within 48-72 hours.",
    iconName: "Download",
    detail: "Captions & hashtag guides included"
  },
  {
    step: 6,
    title: "Business Growth",
    description: "Post the content, trigger algorithm reach, receive client DMs, and turn views into signed contracts.",
    iconName: "Rocket",
    detail: "Continuous lead influx"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ar. Rajesh Verma",
    role: "Principal Architect",
    company: "Nav Design Solutions",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    quote: "Naresh's background in furniture and modular hardware makes a huge difference. He knows exactly which joinery details and lighting channels to highlight. The Reel he shot generated 4 direct client meetings within a week!",
    rating: 5,
    projectType: "3BHK Luxury Duplex Walkthrough"
  },
  {
    id: "t2",
    name: "Sneha Reddy",
    role: "Founder & Lead Designer",
    company: "SOVI Interiors",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    quote: "Working with Frame & Shoot was effortless. They handled everything from lighting setup to video editing. Our Instagram follower count grew by 2,500+ and our inbox is constantly filled with quality enquiries in Hyderabad.",
    rating: 5,
    projectType: "Modular Kitchen & Villa Interior"
  },
  {
    id: "t3",
    name: "Vikram Agarwal",
    role: "Managing Director",
    company: "Tirumala Furniture Mall",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote: "Showroom content needs a different touch than homes. Naresh captured our premium sofa collections and dining displays with grand cinematic motion. Highly recommended for any furniture manufacturer or showroom owner!",
    rating: 5,
    projectType: "10,000 sq ft Furniture Showroom Shoot"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why should interior designers invest in professional video content?",
    answer: "Photos show what a space looks like, but video shows how a space feels and functions. 82% of premium home buyers search Instagram and YouTube before hiring a designer. Cinematic walkthroughs build instant emotional trust and justify your design fee."
  },
  {
    question: "Which cities do you currently serve?",
    answer: "We are actively based in Mumbai and Hyderabad. We conduct site visits across all major localities in both metropolitan regions with zero delay."
  },
  {
    question: "How long does a typical site shoot take?",
    answer: "A Small Site (1-2BHK / compact kitchen) takes approximately 2 to 3 hours. A Large Site (3-4BHK villa / showroom) takes 4 to 6 hours to capture all wide angles, close-up details, lighting setups, and client testimonial shots."
  },
  {
    question: "How soon will I receive the final edited content?",
    answer: "You will receive all ready-to-post Instagram Reels, site walkthrough videos, and high-resolution color-graded photos within 48 to 72 hours via Google Drive."
  },
  {
    question: "Do I need to prepare the site before the shoot?",
    answer: "Yes, we provide a simple pre-shoot checklist. Ensure all deep cleaning is done, soft furnishings styled, staging props placed, and all lighting fixtures in working condition before our arrival."
  },
  {
    question: "Can you manage our Instagram account posting as well?",
    answer: "Yes! In addition to per-site shoot packages, we offer monthly retainers that include content planning, caption writing, Instagram posting schedule, and reel strategy guidance."
  },
  {
    question: "Do you provide branding advice during the shoot?",
    answer: "Absolutely. Founder Naresh Budamol personally guides lead designers on how to speak naturally on camera, present project highlights, and include strong call-to-actions that convert viewers into paying clients."
  }
];
