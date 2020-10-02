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
          description: [
            "The Yoga Sutras of Patanjali were written over 2500 years ago, but its timeless teachings form the foundations of Classical Yoga and outlines the 8 Limbs of Yoga or Ashtanga Yoga (Ashta means 8, anga means part or limb).  In this 8 week series we will study the sutras in depth, and learn why Patanjali was one of the greatest Yoga masters of India.  We will also learn how the Yoga Sutras relate to Tantra and Ayurveda.",
          ],
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
        {
          id: "mother-moon",
          title: "Mother Moon Yoga (live)",
          dates: "October 14 and 29, 1pm HST",
          description: [
            "Mother Moon Yoga is a re-remembering, a re-birthing, a re-aligning with the original mystical essence of yoga. Yoga as we know it in the West has become very masculinized with an emphasis on strength and physical performance. But at its origin, yoga was and is a sacred communion with The Goddess, The Mother. Yoga at its heart is simply prayer. It is breath. It is gentle organic dance. Original yoga is a hymn your body sings in response to the sacred rhythms of life, of Mother Earth, and of our sweet Mother Moon.",
            "There is nothing quite like Mother Moon Yoga. It brings together not only the sacred lineages of multiple forms of yoga, but also the astrological wisdom of the Moon, the gifts of full body anointing, the ancient vibrations of the hymns and mantras of our ancestors, all coming together to be integrated in the sacred practice of deep soul writing.",
            "Together, these mystical practices awaken the living presence of the Feminine Divine within waiting for expression in and through and as you.",
          ],
          pricing: [
            {
              cost: "$18",
              product: "Per Session",
            },
            {
              cost: "$144",
              product: "Entire Series",
            },
          ],
          infoLink: "https://janetconner.com/product/mother-moon-yoga/",
          photo: `${imgRoot}/_moon.jpg`,
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
