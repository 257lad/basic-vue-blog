<template>
  <div>
    <Hero />
    <div class="her-container">
      <NewsCard   
        v-for="item in news_details" 
        :key="item.id" 
        :news_item="item" 
      />
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import NewsCard from './components/NewsCard.vue';
export default {
  data() {
    return {
      news_details: [
        {
          img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQIC98pBs_C1UmEqt7c3RWOT80IoRh0v3-o9ux8FLb4Uo1JCHWO',
          subtitle: 'Olivia Blive 20 Jan 2024',
          title: 'Conversations with Our Favorite London Studio, Makr & Co.',
          description: "We sat down with London's fast-growing brand and product design studio, Makr & Co. to find out how they've used",
          topics: ['Design', 'Research', 'Interviews']
        },
        {
          "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Marcus Chen • 12 Feb 2026",
          "title": "Mastering CSS Grid: Layouts That Don't Break",
          "description": "A deep dive into building responsive, production-ready web layouts without relying on heavy frameworks or hacky workarounds.",
          "topics": ["Development", "CSS", "Frontend"]
        },
        {
          "img": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Sophia Martinez • 03 Mar 2026",
          "title": "The Psychology of Minimalism in Modern UI Design",
          "description": "How reducing visual clutter can drastically improve user retention, accessibility, and overall product satisfaction.",
          "topics": ["Design", "UI/UX", "Psychology"]
        },
        {
          "img": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Liam Johnson • 18 Mar 2026",
          "title": "Scaling remote culture: Lessons from a hyper-growth startup",
          "description": "We share our playbook on keeping engineering and design teams aligned across fifteen different time zones.",
          "topics": ["Management", "Remote Work", "Culture"]
        },
        {
          "img": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Elena Rostova • 02 Apr 2026",
          "title": "Why Typography is 90% of Your Design Success",
          "description": "An essential guide to pairing typefaces, establishing visual hierarchy, and ensuring readability across all devices.",
          "topics": ["Design", "Typography", "Branding"]
        },
        {
          "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
          "subtitle": "David Kim • 15 Apr 2026",
          "title": "AI in the IDE: How Next-Gen Tools are Changing DevOps",
          "description": "An honest look at how modern code generation tools are impacting deployment speed and code quality standard metrics.",
          "topics": ["AI", "DevOps", "Tech Trend"]
        },
        {
          "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Aisha Rahman • 28 Apr 2026",
          "title": "Demystifying A/B Testing for Product Managers",
          "description": "Stop guessing what your users want. Learn how to design statistical experiments that yield clear, actionable data.",
          "topics": ["Product", "Analytics", "Research"]
        },
        {
          "img": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Alex Mercer • 05 May 2026",
          "title": "Securing Your Web Apps: Top Vulnerabilities in 2026",
          "description": "A practical checklist for developers to safeguard user data against modern cross-site scripting and injection flaws.",
          "topics": ["Security", "Web Dev", "Backend"]
        },
        {
          "img": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Chloe Dubois • 10 May 2026",
          "title": "Designing for the Next Billion Users: Digital Accessibility",
          "description": "Exploring web contrast, screen readers, and localized performance optimization for inclusive global digital experiences.",
          "topics": ["Accessibility", "UI/UX", "Inclusivity"]
        },
        {
          "img": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Olivia Blive • 22 May 2026",
          "title": "Back to the Drawing Board: Finding Creative Inspiration Offline",
          "description": "Why stepping away from the screen and returning to physical sketchbooks might just save you from creative burnout.",
          "topics": ["Creativity", "Mental Health", "Design"]
        }
      ]
    }
  },
  components: {
    Hero,
    NewsCard
  }
}
</script>
<style scoped>
.her-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  padding: 60px;

}
</style>