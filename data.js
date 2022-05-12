const packages = [
  {
    id: 1,
    name: "Docker",
    description:
      "A software platform used for building applications based on containers — small and lightweight execution environments.",
    image:
      "https://www.howtogeek.com/wp-content/uploads/csit/2021/09/993634a1.png?width=1198&trim=1,1&bg-color=000&pad=1,1",
    link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-docker-registry",
  },
  {
    id: 2,
    name: "Apache Maven",
    description:
      "A default package manager used for the Java programming language and the Java runtime environment.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Apache_Feather_Logo.svg/1158px-Apache_Feather_Logo.svg.png",
    link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry",
  },
  {
    id: 3,
    name: "NuGet",
    description:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
    image: "https://www.nuget.org/Content/gallery/img/logo-og-600x600.png",
    link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry",
  },
  {
    id: 4,
    name: "RubyGems",
    description:
      "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    image: "https://miro.medium.com/max/600/1*_iNboVBMYZqRhao6OwNYFg.png",
    link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry",
  },
  {
    id: 5,
    name: "npm",
    description:
      "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    image: "https://miro.medium.com/max/347/1*uJ5NcEBI4ik0x7K74pH1Sg.png",
    link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry",
  },
  {
    id: 6,
    name: "Containers",
    description:
      "A single place for your team to manage Docker images and decide who can see and access your images.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxiqEhSYJeXPcFa4KFooGp6-GngMWZ-k4v2A&usqp=CAU",
    link: "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",
  },
];
const repo = [
  {
    id: 1,
    name: "greys-anatomy-lorem-ipsum-generator",
    description:
      "Test testLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  test test",
    url: `https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat`,
    tags: ["netify", "jamstack", "medical"],
    pinned: true,
    primaryLang: "Java",
    branches: 4,
    favorite: true,
  },
  {
    id: 2,
    name: "how-many-days-until",
    description:
      "Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  test test",
    url: `https://www.nationalgeographic.com/animals/mammalshttps://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp/facts/domestic-cat`,
    tags: ["netify", "jamstack", "medical"],
    pinned: true,
    primaryLang: "Python",
    branches: 3,
    favorite: true,
  },
  {
    id: 3,
    name: "httriri",
    description:
      "Test test test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    url: `https://cdn.theatlantic.com/thumbor/viW9N1IQLbCrJ0HMtPRvXPXShkU=/0x131:2555x1568/976x549/media/img/mt/2017/06/shutterstock_319985324/original.jpg`,
    tags: ["netify", "jamstack", "medical"],
    pinned: true,
    primaryLang: "Javascript",
    branches: 3,
    favorite: false,
  },
  {
    id: 4,
    name: "ambition-fund-website",
    description:
      "Test test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  test",
    url: `https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2`,
    tags: ["netify", "jamstack", "medical"],
    pinned: true,
    primaryLang: "C+",
    branches: 3,
    favorite: false,
  },
  {
    id: 5,
    name: "pet-adoption-project",
    description:
      "Test test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  test",
    url: `https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg?resize=1536,1004`,
    tags: ["netify", "jamstack", "medical"],
    pinned: true,
    primaryLang: "Go",
    branches: 3,
    favorite: false,
  },
];
const projectDataSet = [
  {
    id: 1,
    name: "Gitsub",
    description:
      "Worldlets birth corpus callosum are creatures of the cosmos Rig Veda science? Made in the interiors of collapsing stars descended from astronomers how far away inconspicuous motes of rock and gas colonies colonies. Another world finite but unbounded made in the interiors of collapsing stars muse about from which we spring a mote of dust suspended in a sunbeam? The sky calls to us vanquish the impossible with pretty stories for which there's little good evidence made in the interiors of collapsing stars Sea of Tranquility hearts of the stars?",
    updatedTimeStamp: "05-10-2022",
    isPublic: true,
    link: "https://google.com",
  },
  {
    id: 2,
    name: "Sorting Hat Project Board",
    description:
      "Worldlets birth corpus callosum are creatures of the cosmos Rig Veda science? Made in the interiors of collapsing stars descended from astronomers how far away inconspicuous motes of rock and gas colonies colonies. Another world finite but unbounded made in the interiors of collapsing stars muse about from which we spring a mote of dust suspended in a sunbeam? The sky calls to us vanquish the impossible with pretty stories for which there's little good evidence made in the interiors of collapsing stars Sea of Tranquility hearts of the stars?",
    updatedTimeStamp: "05-10-2022",
    isPublic: true,
    link: "https://google.com",
  },
  {
    id: 3,
    name: "Loops data project",
    description:
      "Globular star cluster cosmos dispassionate extraterrestrial observer light years of brilliant syntheses dream of the mind's eye? A mote of dust suspended in a sunbeam hearts of the stars venture muse about billions upon billions two ghostly white figures in coveralls and helmets are softly dancing. The ash of stellar alchemy vastness is bearable only through love gathered by gravity concept of the number one star stuff harvesting star light kindling the energy hidden in matter.",
    updatedTimeStamp: "05-09-2022",
    isPublic: true,
    link: "https://google.com",
  },
  {
    id: 4,
    name: "Assignment-product-cards",
    description:
      "Hypatia a billion trillion colonies venture white dwarf something incredible is waiting to be known. Finite but unbounded worldlets muse about cosmic ocean worldlets dispassionate extraterrestrial observer. Stirred by starlight star stuff harvesting star light vanquish the impossible a still more glorious dawn awaits the only home we've ever known vanquish the impossible. Extraordinary claims require extraordinary evidence extraordinary claims require extraordinary evidence vastness is bearable only through love extraordinary claims require extraordinary evidence the only home we've ever known extraordinary claims require extraordinary evidence.",
    updatedTimeStamp: "05-08-2022",
    isPublic: true,
    link: "https://google.com",
  },
  {
    id: 5,
    name: "LAB-word-counter",
    description:
      "Hypatia a billion trillion colonies venture white dwarf something incredible is waiting to be known. Finite but unbounded worldlets muse about cosmic ocean worldlets dispassionate extraterrestrial observer. Stirred by starlight star stuff harvesting star light vanquish the impossible a still more glorious dawn awaits the only home we've ever known vanquish the impossible. Extraordinary claims require extraordinary evidence extraordinary claims require extraordinary evidence vastness is bearable only through love extraordinary claims require extraordinary evidence the only home we've ever known extraordinary claims require extraordinary evidence.",
    updatedTimeStamp: "05-08-2022",
    isPublic: true,
    link: "https://google.com",
  },
];

export { projectDataSet, repo, packages };
