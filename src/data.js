export const projects = [
  {
    title: "StrainQuest",
    subtitle: "EJS, MongoDB, Express, Node",
    description:
      "StrainQuest is a fun game, that suggets you new and random cannabis strains to discover and try. You can collect these strain, search for the ones you have already tried and add them to your collection. It's a pokedex for weed!",
    image: "./StrainQuest.png",
    link: "https://github.com/Piyush-Bhor/StrainQuest",
  },
  {
    title: "The Cannabis API",
    subtitle: "EJS, MongoDB, Express, Node",
    description:
      "The Cannabis API is a RESTful API that provides comprehensive information about various cannabis strains. It allows you to query and retrieve details such as strain name, type, rating, effects, flavors, and descriptions.",
    image: "./the_cannabis_api.png",
    link: "https://github.com/Piyush-Bhor/The_Cannabis_API",
  },
  {
    title: "Portfolio",
    subtitle: "React and Tailwind",
    description:
      "This is my Portfolio made using React and Tailwind.css. It includes my resume, past projects, published and upcoming zero-days, etc. It is hosted on Github pages. Feel free to checkout my GitHub repo as well to see more of my work.",
    image: "./Portfolio.png",
    link: "https://github.com/Piyush-Bhor/Piyush-Bhor-Portfolio",
  },
  {
    title: "Titanic Survival Prediction",
    subtitle: "Kaggle Competition",
    description:
      "This repository contains code for my participation in the Titanic competition on Kaggle. The objective is to predict passenger survival aboard the Titanic using various features such as age, sex, and ticket class.",
    image: "./kaggle.png",
    link: "https://github.com/Piyush-Bhor/titanic-kaggle",
  },
];

export const research = [
  {
    title: "CatBoost",
    subtitle: "Code Execution via Untrusted Pickle Deserialization.",
    description:
      "The CatBoost library's trace.py module is vulnerable to code execution due to untrusted data deserialization using Python's pickle.load function. Reported on Huntr and published on Medium.",
    image: "./CatBoost.png",
    link: "https://medium.com/@piyushbhor22/code-execution-via-untrusted-pickle-deserialization-in-catboost-93795d335afd",
  },
  {
    title: "Behave",
    subtitle: "Local Code Execution in Python's BDD library Behave.",
    description:
      "Behave's convert_i18n_yaml.py is vulnerable to code execution due to using yaml.load without specifying a loader alongside an older pyYAML version. Reported on Huntr and published on Medium.",
    image: "./Behave.png",
    link: "https://medium.com/@piyushbhor22/code-execution-vulnerability-in-behave-a-deep-dive-b8c7431a71f9",
  },
  
];

export const upcoming_research = [
  {
    title: "Linux Kernel",
    subtitle: "Buffer Overflow",
    description:
      "A buffer overflow vulnerability in one of the IoT libraries of the Linux Kernel (latest version) due to an unsafe C method. The report is being reviewed by The Zero Day Initiative (ZDI), and will be published in August.",
    image: "./Linux.jpg",
    link: "#",
  },
  {
    title: "Hugging Face Transformers",
    subtitle: "Remote Code Execution",
    description:
      "A code execution vulnerability in Hugging Face Transformers due to improper deserialization. The Zero Day Initiative (ZDI) is currently in the process of patching the vulnerability, and the report will be published in July.",
    image: "./HuggingFace.png",
    link: "#",
  },
];

export const skills = [
  "RE: IDA Pro, Ghidra, GDB",
  "C / C++",
  "Assembly (x86 and ARM)",
  "Bash & Powershell",
  "Rust",
  "Python",
];
