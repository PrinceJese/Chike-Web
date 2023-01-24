import learnIcon from "@/assets/fileicon.svg";
import strategizeIcon from "@/assets/strategyicon.svg";
import designIcon from "@/assets/designicon.svg";
import iterateIcon from "@/assets/iterateicon.svg";
import handoffIcon from "@/assets/handofficon.svg";

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
    description: `"Every design project has to reach the business objective. After understanding the problem statement in the first phase, I try to think of strategies to actualize them. This phase includes generating ideas for potential solutions and further evaluation of these ideas to select the most feasible, desirable, and viable ones. Usually, I work with clients through a process to develop a strategy. Collaboration and co-creation are crucial to this process, and I strongly believe in the value of working together to achieve our goals."`,
    text: "Mood boards",
    text2: "Brainstorming sessions",
    text3: "Journey Maps & Gap Analysis",
  },

  {
    icon: `${designIcon}`,
    title: "Design",
    description: `"In this phase, selected ideas from the previous phase are developed into detailed designs, and prototypes are created to test and refine the design. Using a Design Thinking approach, I generate several potential solutions for the identified objectives. However, instead of presenting rough sketches or incomplete ideas, I present functional and viable solutions that address the problem."`,
    text: "Style Guide/Design System",
    text2: "Wireframes",
    text3: "Prototypes",
  },

  {
    icon: `${iterateIcon}`,
    title: "Test & Iterate",
    description: `"After creating prototypes, I gather feedback from users to identify any issues or areas for improvement. This feedback helps me fine-tune the design and make necessary changes. Once the design is finalized and all necessary approvals have been obtained, the product can be officially released and made available to customers."`,
    text: "User Testing",
    text2: "Design Hand-offs",
    text3: "",
  },

  {
    icon: `${handoffIcon}`,
    title: "Hand-off",
    description: `"My design process is not complete once the product is launched. It is essential to continue reviewing and improving the product to ensure that it meets the needs of users and remains competitive in the market. In this phase, I take feedbacks from customers and users and make iterations if necessary, to improve overall user experience."`,
    text: "User Reviews",
    text2: "Design Updates",
    text3: "",
  },
];

export default Tabs;
