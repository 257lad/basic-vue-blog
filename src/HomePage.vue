<template>
  <div>
    <div class="her-container">
      <NewsCard v-for="item in news_details" :key="item.id" :news_item="item" />
    </div>
  </div>
</template>

<script>
import NewsCard from './components/NewsCard.vue';
export default {
  data() {
    return {
      news_details: [
        {
          "id": "post_001",
          "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Marcus Chen • 12 Feb 2026",
          "title": "Mastering CSS Grid: Layouts That Don't Break",
          "description": "A deep dive into building responsive, production-ready web layouts without relying on heavy frameworks or hacky workarounds.",
          "body": "## Why CSS Grid Changes Everything\n\nFor years, web developers relied on floats, absolute positioning, and eventually Flexbox to bend HTML into complex layouts. While Flexbox is incredible for one-dimensional layouts, **CSS Grid** is the reigning champion for two-dimensional control...",
          "topics": ["Development", "CSS", "Frontend"],
          "comments": [
            {
              "id": "c101",
              "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
              "name": "Sarah Jenkins",
              "date": "13 Feb 2026",
              "text": "The minmax auto-fit trick completely solved an issue I was having on tablet screens. Thanks for this!"
            },
            {
              "id": "c102",
              "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
              "name": "David Foster",
              "date": "14 Feb 2026",
              "text": "Do you still recommend using Flexbox for inner navigation items, or should we go full Grid for everything?"
            }
          ]
        },
        {
          "id": "post_002",
          "img": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Sophia Martinez • 03 Mar 2026",
          "title": "The Psychology of Minimalism in Modern UI Design",
          "description": "How reducing visual clutter can drastically improve user retention, accessibility, and overall product satisfaction.",
          "body": "## Less is More: The Cognitive Load Factor\n\nEvery button, line, icon, and color gradient on a screen forces the user's brain to process information...",
          "topics": ["Design", "UI/UX", "Psychology"],
          "comments": [
            {
              "id": "c201",
              "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
              "name": "Elena Rostova",
              "date": "04 Mar 2026",
              "text": "Hick's Law is so underrated. Clients always want to pack everything onto the homepage, but metrics prove it doesn't work."
            }
          ]
        },
        {
          "id": "post_003",
          "img": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Liam Johnson • 18 Mar 2026",
          "title": "Scaling remote culture: Lessons from a hyper-growth startup",
          "description": "We share our playbook on keeping engineering and design teams aligned across fifteen different time zones.",
          "body": "## The Asynchronous Revolution\n\nWhen our startup grew from 15 to 150 people in less than a year, our calendar-centric workflow completely collapsed...",
          "topics": ["Management", "Remote Work", "Culture"],
          "comments": [
            {
              "id": "c301",
              "avatar": "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&q=80",
              "name": "Alex Mercer",
              "date": "19 Mar 2026",
              "text": "The Loom video approach changed our daily standups entirely. Great advice on radical transparency."
            }
          ]
        },
        {
          "id": "post_004",
          "img": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Elena Rostova • 02 Apr 2026",
          "title": "Why Typography is 90% of Your Design Success",
          "description": "An essential guide to pairing typefaces, establishing visual hierarchy, and ensuring readability across all devices.",
          "body": "## Good Type is Invisible\n\nWhen typography is done well, the user consumes the message effortlessly. When it is done poorly, the interface feels cheap, messy...",
          "topics": ["Design", "Typography", "Branding"],
          "comments": [
            {
              "id": "c401",
              "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
              "name": "Chloe Dubois",
              "date": "02 Apr 2026",
              "text": "The Major Third scale rule makes UI layout math so much easier. Bookmarking this."
            }
          ]
        },
        {
          "id": "post_005",
          "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
          "subtitle": "David Kim • 15 Apr 2026",
          "title": "AI in the IDE: How Next-Gen Tools are Changing DevOps",
          "description": "An honest look at how modern code generation tools are impacting deployment speed and code quality standard metrics.",
          "body": "## Beyond Simple Autocomplete\n\nWe have moved far past basic syntax completion. Modern AI integrations into the IDE are actively scanning architectures...",
          "topics": ["AI", "DevOps", "Tech Trend"],
          "comments": [
            {
              "id": "c501",
              "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
              "name": "Marcus Chen",
              "date": "16 Apr 2026",
              "text": "'Acting more like code editors' is the perfect description of development today. Spot on."
            }
          ]
        },
        {
          "id": "post_006",
          "img": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Aisha Rahman • 28 Apr 2026",
          "title": "Demystifying A/B Testing for Product Managers",
          "description": "Stop guessing what your users want. Learn how to design statistical experiments that yield clear, actionable data.",
          "body": "## The Pitfall of Vanity Metrics\n\nMany product managers celebrate a '10% increase in clicks' without realizing their sample size was statically irrelevant...",
          "topics": ["Product", "Analytics", "Research"],
          "comments": [
            {
              "id": "c601",
              "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
              "name": "Sophia Martinez",
              "date": "29 Apr 2026",
              "text": "Peeking at data early is my worst habit. Thanks for the reality check on the p-value template!"
            }
          ]
        },
        {
          "id": "post_007",
          "img": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Alex Mercer • 05 May 2026",
          "title": "Securing Your Web Apps: Top Vulnerabilities in 2026",
          "description": "A practical checklist for developers to safeguard user data against modern cross-site scripting and injection flaws.",
          "body": "## The New Landscape of Cyber Security\n\nAs framework tech matures, basic vulnerabilities like SQL injection are becoming rarer. However, the rise of complex APIs...",
          "topics": ["Security", "Web Dev", "Backend"],
          "comments": []
        },
        {
          "id": "post_008",
          "img": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Chloe Dubois • 10 May 2026",
          "title": "Designing for the Next Billion Users: Digital Accessibility",
          "description": "Exploring web contrast, screen readers, and localized performance optimization for inclusive global digital experiences.",
          "body": "## Accessibility is Not a Feature\n\nBuilding an accessible application isn't an item you check off on a project board before launch; it is a fundamental pillar...",
          "topics": ["Accessibility", "UI/UX", "Inclusivity"],
          "comments": [
            {
              "id": "c801",
              "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
              "name": "Liam Johnson",
              "date": "11 May 2026",
              "text": "The keyboard navigation test is highly eye-opening. Everyone should try it on their own apps."
            }
          ]
        },
        {
          "id": "post_010",
          "img": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
          "subtitle": "Olivia Blive • 22 May 2026",
          "title": "Back to the Drawing Board: Finding Creative Inspiration Offline",
          "description": "Why stepping away from the screen and returning to physical sketchbooks might just save you from creative burnout.",
          "body": "## The Digital Fatigue Loop\n\nWhen we seek design inspiration on sites like Dribbble or Pinterest, we inevitably get stuck in an echo chamber of identical templates...",
          "topics": ["Creativity", "Mental Health", "Design"],
          "comments": [
            {
              "id": "c1001",
              "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
              "name": "Jordan Smith",
              "date": "23 May 2026",
              "text": "No Ctrl+Z is honestly terrifying, but it forces you to embrace imperfections. Beautifully written."
            }
          ]
        }
      ]

    }
  },
  components: {
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