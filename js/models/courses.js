function getCourses() {
  var imgRoot = getProjectRoot() + "/static/img/courses";

  return [
    {
      category: "yoga",
      courses: [
        {
          id: "patanjali",
          title: "Patanjali Yoga Sutras In-Depth Study Course",
          dates: "On Demand",
          description:
            "The Yoga Sutras of Patanjali were written over 2500 years ago, but its timeless teachings form the foundations of Classical Yoga and outlines the 8 Limbs of Yoga or Ashtanga Yoga (Ashta means 8, anga means part or limb).  In this 8 week series we will study the sutras in depth, and learn why Patanjali was one of the greatest Yoga masters of India.  We will also learn how the Yoga Sutras relate to Tantra and Ayurveda.",
          features: {
            title: "Some Lessons from the Yoga Sutras",
            items: [
              "How to Increase mental focus and memory",
              "How to Develop emotional resilience and increase joy",
              "Deepen and expand your yoga practice by learning Yoga Psychology",
              "Learn the powerful meditation techniques that were  practiced by yogis 2600 years ago",
              "Learn the secret to mastering posture",
            ],
          },
          pricing: [
            {
              cost: "$75",
              product: "Video Access Only",
            },
            {
              cost: "$150",
              product: "With Study Guide and CEC's",
            },
            {
              cost: "$250",
              product: "Vidoes + Study Guide, CEC's, 1 Private Coaching Session",
            },
          ],
          photo: `${imgRoot}/_patanjali.jpg`,
        },
      ],
    },
    {
      category: "tantra",
      courses: [],
    },
    {
      category: "ayurveda",
      courses: [],
    },
    {
      category: "sound-healing",
      courses: [],
    },
  ];
}
