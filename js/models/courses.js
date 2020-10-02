function getCourses() {
  return [
    {
      category: "yoga",
      title: "Yoga",
      courses: [
        {
          id: "patanjali",
          title: "Patanjali Yoga Sutras In-Depth Study Course",
          dates: ["On Demand"],
          times: [],
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
          photo: `/patanjali.jpg`,
        },
        {
          id: "mother-moon",
          title: "Mother Moon Yoga (live)",
          dates: ["October 14", "October 29"],
          times: ["1pm HST"],
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
          photo: `/moon.jpg`,
        },
      ],
    },
    {
      category: "tantra",
      title: "Tantra",
      courses: [],
    },
    {
      category: "ayurveda",
      title: "Ayurveda",
      courses: [],
    },
    {
      category: "sound-healing",
      title: "Sound Healing",
      courses: [
        {
          id: "mantra-sadhana-1",
          title: "Mantra Sadhana: Introduction to Mantra",
          dates: ["October 10, 2020"],
          times: ["Morning Schedule:  9:00am-12:00PM  HST", "Afternoon Schedule 1:30-4:30PM  HST"],
          description: [
            "This course is an exploration of Nada Yoga, the Yoga of Sound, which is one of the oldest forms of Yoga Sadhana.  Learn the principles underlying spiritual chanting. First you will be introduced to the Sanskrit alphabet and the power of vibration, and experience the effects of sound on our body and being.  This program is a rich experiential immersion into the history, philosophy and science of Mantra.  Nada Yoga has a unique ability to unify our experiences and is one of the key elements used by Yogis and Meditators for thousands of years.",
          ],
          features: {
            title: "This Session Will Cover...",
            items: [
              "What is Mantra? Special Mantra Performance",
              "Intro to the Sanskrit Alphabet",
              "How to Chant “OM”",
              "The History of Nada Yoga and Mantra",
              "Nada Nyasa- building the sound body",
              "Beginning a Mantra Practice",
            ],
          },
          pricing: [
            {
              cost: "$108",
              product: "Live Session",
            },
            {
              cost: "TBD",
              product: "Recordings",
            },
            {
              cost: "TBD",
              product: "Recordings + 1:1 Deep Dive Instruction",
            },
          ],
          photo: `/om.jpg`,
        },
        {
          id: "mantra-sadhana-2",
          title: "Mantra Sadhana: Goddess Mantras - Awakening Shakti",
          dates: ["October 17-18, 2020"],
          times: ["Saturday 1:00-4:30PM  HST", "Sunday 1:00-4:30PM HST"],
          description: [
            "This course is an exploration of Nada Yoga, the Yoga of Sound, which is one of the oldest forms of Yoga Sadhana.  Learn the principles underlying spiritual chanting. First you will be introduced to the Sanskrit alphabet and the power of vibration, and experience the effects of sound on our body and being.  This program is a rich experiential immersion into the history, philosophy and science of Mantra.  Nada Yoga has a unique ability to unify our experiences and is one of the key elements used by Yogis and Meditators for thousands of years.",
          ],
          features: {
            title: "This Session Will Cover...",
            items: [
              "Introduction to the Goddess Traditions of India",
              "Lakshmi",
              "Saraswati",
              "Lakshmi",
              "How to Workshop: The Goddess the Tantric Way",
            ],
          },
          pricing: [
            {
              cost: "$108",
              product: "Live Session",
            },
            {
              cost: "TBD",
              product: "Recordings",
            },
            {
              cost: "TBD",
              product: "Recordings + 1:1 Deep Dive Instruction",
            },
          ],
          photo: `/shakti.jpg`,
        },
      ],
    },
  ];
}
