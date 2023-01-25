import learnIcon from "@/assets/fileicon.png";
import strategizeIcon from "@/assets/strategyicon.png";
import designIcon from "@/assets/designicon.png";
import iterateIcon from "@/assets/iterateicon.png";
import handoffIcon from "@/assets/handofficon.png";

const Tabs = [
  {
    icon: `${learnIcon}`,
    title: "Learn",
    description: `“Identifying and defining the problem to be solved is crucial to the success of any
      project. In this phase, I make sure I understand everything about the company/brand,
      its market and competitors, the target users and their requirements, and what the
      real problem to be solved is.”`,
    text: "Market Research",
    text2: "Competition Analysis",
    text3: "User Persona & Story",
  },

  {
    icon: `${strategizeIcon}`,
    title: "Strategize",
    description: `"Design projects must achieve business objectives. In this phase, I generate ideas for potential solutions and evaluate them to select the most feasible and viable ones. Collaboration and co-creation are crucial in this process, and I believe in the value of working together to achieve our goals."`,
    text: "Mood boards",
    text2: "Brainstorming sessions",
    text3: "Journey Maps & Gap Analysis",
  },

  {
    icon: `${designIcon}`,
    title: "Design",
    description: `"Taking a ‘Design Thinking’ approach, I create functional prototypes and wireframes using information and ideas from previous phase. Thus, presenting viable solutions to address the identified objectives."
    `,
    text: "Style Guide/Design System",
    text2: "Wireframes",
    text3: "Prototypes",
  },

  {
    icon: `${iterateIcon}`,
    title: "Test & Iterate",
    description: `“After creating prototypes, I gather feedback from users to identify any issues or areas for improvement. This feedback helps me fine-tune the design and make necessary changes. This is the phase where we make all necessary improvements to ensure smooth handing-off to you, the client.”`,
    text: "User Testing",
    text2: "Design Hand-offs",
    text3: "",
  },

  {
    icon: `${handoffIcon}`,
    title: "Hand-off",
    description: `“This is the phase where all assets and materials are transferred to the client. The hand-off is done properly to ensure smooth development and also allow for easy future changes.”`,
    text: "User Reviews",
    text2: "Design Updates",
    text3: "",
  },
];

export default Tabs;
