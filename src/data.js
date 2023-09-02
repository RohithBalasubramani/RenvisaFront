import im1 from "./Assets/Slider/factory workshop.jpg";
import im2 from "./Assets/Slider/solar farm.jpg";
import im3 from "./Assets/Slider/solar technician 1.jpeg";

import Module from "./Assets/Cat/Module.png";
import Clamps from "./Assets/Cat/Clamps.png";
import Inverter from "./Assets/Cat/Inverter.png";
import ModuleMount from "./Assets/Cat/mounting-structures 1.png";
import DistributionBoards from "./Assets/Cat/Distribution Boards.png";
import DCsolarcables from "./Assets/Cat/DC solar cables.png";
import Cat6Cable from "./Assets/Cat/Cat 6 Cable.png";
import Wire_harness from "./Assets/Cat/Wire_harness.png";
import pipes from "./Assets/Cat/pipes.png";
import InspectionTools from "./Assets/Cat/Inspection Tools.png";
import HealthandSafetyProducts from "./Assets/Cat/Health_and_Safety Products .png";
import fiberopticcable from "./Assets/Cat/fiber optic cable.png";
import CableCrimpingTools from "./Assets/Cat/Cable Crimping Tools.png";

import pd1 from "./Assets/Prod4/PVmod.png";
import pd2 from "./Assets/Prod4/WaterHeater.png";
import pd3 from "./Assets/Prod4/Mount.png";
import pd4 from "./Assets/Prod4/ArmouredCable.png";
import pd5 from "./Assets/Prod4/CableTies.png";

import Of1 from "./Assets/Review/TS1.png";
import Of2 from "./Assets/Review/TS2.png";
import Of3 from "./Assets/Review/TS3.png";

import Us1 from "./Assets/Review/user1.jpg";
import Us2 from "./Assets/Review/user2.jpg";
import Us3 from "./Assets/Review/user3.jpg";

import p1a2 from "./Assets/AssetsAlt/P1A2.jpg";
import p1a3 from "./Assets/AssetsAlt/P1A3.jpg";
import p1a4 from "./Assets/AssetsAlt/P1A4.jpg";

import pArmoura2 from "./Assets/AssetsAlt/PArmourA1.jpg";
import pArmoura3 from "./Assets/AssetsAlt/PArmourA2.jpg";
import pArmoura4 from "./Assets/AssetsAlt/PArmourA3.jpg";

import pMounta2 from "./Assets/AssetsAlt/PMountA1.jpg";
import pMounta3 from "./Assets/AssetsAlt/PMountA2.jpg";
import pMounta4 from "./Assets/AssetsAlt/PMountA3.jpg";

import SlBg from "./Assets/Slider/SliBg1.jpg";
import { green } from "@mui/material/colors";

export const sliderItems = [
  {
    id: 1,
    img: im1,
    title: "Solar Panel",
    desc: "GET FLAT 30% OFF.",
    bg: "0909a0",
  },
  {
    id: 2,
    img: im2,
    title: "Lugs and Glands",
    desc: "Get Solar trackers and more! GET 45% OFF ON SOLAR SECTOR.",
    bg: "09a022",
  },
  {
    id: 3,
    img: im3,
    title: "SCB Fuse",
    desc: "Raspberry Pi and Arduino Modules! GET UPTO 60% OFF ON BULK ORDERS.",
    bg: "860707",
  },
];

export const ReviewData = [
  {
    id: 1,
    imgOf: Of1,
    imgUser: Us1,
    name: "Jessica Parker",
    desc: "GET FLAT 30% OFF.",
    bg: "f5fafd",
  },
  {
    id: 2,
    imgOf: Of2,
    imgUser: Us2,
    name: "Rahul Jain",
    desc: "GET FLAT 30% OFF.",
    bg: "f5fafd",
  },
  {
    id: 3,
    imgOf: Of3,
    imgUser: Us3,
    name: "Naomi Jain",
    desc: "GET FLAT 30% OFF.",
    bg: "f5fafd",
  },
];

export const DropDownData = [
  {
    label: "Menu 1",
    value: "menu1",
    submenus: [
      {
        label: "Submenu 1",
        value: "submenu1",
        submenus: [
          {
            label: "Submenu 1-1",
            value: "submenu1-1",
            submenus: [],
          },
          {
            label: "Submenu 1-2",
            value: "submenu1-2",
            submenus: [],
          },
        ],
      },
      {
        label: "Submenu 2",
        value: "submenu2",
        submenus: [],
      },
    ],
  },
  {
    label: "Menu 2",
    value: "menu2",
    submenus: [],
  },
];

export const menuItems = [
  {
    title: "Home",
  },
  {
    title: "Services",
    submenu: [
      {
        title: "web design",
      },
      {
        title: "web development",
        submenu: [
          {
            title: "Frontend",
          },
          {
            title: "Backend",
            submenu: [
              {
                title: "NodeJS",
              },
              {
                title: "PHP",
              },
            ],
          },
        ],
      },
      {
        title: "SEO",
      },
    ],
  },
  {
    title: "About",
    submenu: [
      {
        title: "Who we are",
      },
      {
        title: "Our values",
      },
    ],
  },
];

export const Products4 = [
  {
    id: 1,
    rname: "ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel",
    img: pd1,
    alt: [pd1, p1a2, p1a3, p1a4],
    refno: "5SV44140RC",
    brand: "ZunSolar",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9000,
    price: 6099,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 2,
    rname: "V-Guard Win Hot 300 LPD Solar Water Heater",
    img: pd2,
    alt: [pd2],
    refno: "5SV44140RC",
    brand: "V-Guard",
    somedata: " 1175 + order placed from here recently",
    oldprice: 57897,
    price: 51693,
    rating: "4.5",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 3,
    rname: "Diamond Aluminium Solar Panel Mounting Structure for 1kW",
    img: pd3,
    alt: [pd3, pMounta2, pMounta3, pMounta4],
    refno: "5SV44140RC",
    brand: "Diamond",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9286,
    price: 7265,
    rating: "4",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 4,
    rname:
      "Finolex 35 Sqmm 4 Core XLPE Armoured Cable with Aluminium Conductor, Length: 100 m",
    img: pd4,
    alt: [pd4, pArmoura2, pArmoura3, pArmoura4],
    alt1: pd4,
    refno: "5SV44140RC",
    brand: "Finolex",
    somedata: " 1175 + order placed from here recently",
    oldprice: 32800,
    price: 25003,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  // {
  //   id: 5,
  //   rname: "Elegant Casa 150x3.6mm White Nylon Teeth Grip Self Locking Cable Ties (Pack of 50)",
  //   img: pd5,
  //   alt:[pd5],
  //   refno: "5SV44140RC",
  //   brand:"Elegant Casa",
  //   somedata: " 1175 + order placed from here recently",
  //   oldprice: 235,
  //   price: 199,
  //   rating: "3.8",
  //   arrimg: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  //   qnty:0
  // },
];

export const Products5 = [
  {
    id: 1,
    rname: "ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel",
    img: pd1,
    alt: [pd1, p1a2, p1a3, p1a4],
    refno: "5SV44140RC",
    brand: "ZunSolar",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9000,
    price: 6099,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 2,
    rname: "V-Guard Win Hot 300 LPD Solar Water Heater",
    img: pd2,
    alt: [pd2],
    refno: "5SV44140RC",
    brand: "V-Guard",
    somedata: " 1175 + order placed from here recently",
    oldprice: 57897,
    price: 51693,
    rating: "4.5",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 3,
    rname: "Diamond Aluminium Solar Panel Mounting Structure for 1kW",
    img: pd3,
    alt: [pd3, pMounta2, pMounta3, pMounta4],
    refno: "5SV44140RC",
    brand: "Diamond",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9286,
    price: 7265,
    rating: "4",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 4,
    rname:
      "Finolex 35 Sqmm 4 Core XLPE Armoured Cable with Aluminium Conductor, Length: 100 m",
    img: pd4,
    alt: [pd4, pArmoura2, pArmoura3, pArmoura4],
    alt1: pd4,
    refno: "5SV44140RC",
    brand: "Finolex",
    somedata: " 1175 + order placed from here recently",
    oldprice: 32800,
    price: 25003,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 5,
    rname:
      "Elegant Casa 150x3.6mm White Nylon Teeth Grip Self Locking Cable Ties (Pack of 50)",
    img: pd5,
    alt: [pd5],
    refno: "5SV44140RC",
    brand: "Elegant Casa",
    somedata: " 1175 + order placed from here recently",
    oldprice: 235,
    price: 199,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 6,
    rname: "ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel",
    img: pd1,
    alt: [pd1, p1a2, p1a3, p1a4],
    refno: "5SV44140RC",
    brand: "ZunSolar",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9000,
    price: 6099,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 7,
    rname: "V-Guard Win Hot 300 LPD Solar Water Heater",
    img: pd2,
    alt: [pd2],
    refno: "5SV44140RC",
    brand: "V-Guard",
    somedata: " 1175 + order placed from here recently",
    oldprice: 57897,
    price: 51693,
    rating: "4.5",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 8,
    rname: "Diamond Aluminium Solar Panel Mounting Structure for 1kW",
    img: pd3,
    alt: [pd3, pMounta2, pMounta3, pMounta4],
    refno: "5SV44140RC",
    brand: "Diamond",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9286,
    price: 7265,
    rating: "4",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 9,
    rname:
      "Finolex 35 Sqmm 4 Core XLPE Armoured Cable with Aluminium Conductor, Length: 100 m",
    img: pd4,
    alt: [pd4, pArmoura2, pArmoura3, pArmoura4],
    alt1: pd4,
    refno: "5SV44140RC",
    brand: "Finolex",
    somedata: " 1175 + order placed from here recently",
    oldprice: 32800,
    price: 25003,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 10,
    rname:
      "Elegant Casa 150x3.6mm White Nylon Teeth Grip Self Locking Cable Ties (Pack of 50)",
    img: pd5,
    alt: [pd5],
    refno: "5SV44140RC",
    brand: "Elegant Casa",
    somedata: " 1175 + order placed from here recently",
    oldprice: 235,
    price: 199,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
  {
    id: 11,
    rname: "ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel",
    img: pd1,
    alt: [pd1, p1a2, p1a3, p1a4],
    refno: "5SV44140RC",
    brand: "ZunSolar",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9000,
    price: 6099,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 12,
    rname: "V-Guard Win Hot 300 LPD Solar Water Heater",
    img: pd2,
    alt: [pd2],
    refno: "5SV44140RC",
    brand: "V-Guard",
    somedata: " 1175 + order placed from here recently",
    oldprice: 57897,
    price: 51693,
    rating: "4.5",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 13,
    rname: "Diamond Aluminium Solar Panel Mounting Structure for 1kW",
    img: pd3,
    alt: [pd3, pMounta2, pMounta3, pMounta4],
    refno: "5SV44140RC",
    brand: "Diamond",
    somedata: " 1175 + order placed from here recently",
    oldprice: 9286,
    price: 7265,
    rating: "4",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 14,
    rname:
      "Finolex 35 Sqmm 4 Core XLPE Armoured Cable with Aluminium Conductor, Length: 100 m",
    img: pd4,
    alt: [pd4, pArmoura2, pArmoura3, pArmoura4],
    alt1: pd4,
    refno: "5SV44140RC",
    brand: "Finolex",
    somedata: " 1175 + order placed from here recently",
    oldprice: 32800,
    price: 25003,
    rating: "4.6",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },

  {
    id: 15,
    rname:
      "Elegant Casa 150x3.6mm White Nylon Teeth Grip Self Locking Cable Ties (Pack of 50)",
    img: pd5,
    alt: [pd5],
    refno: "5SV44140RC",
    brand: "Elegant Casa",
    somedata: " 1175 + order placed from here recently",
    oldprice: 235,
    price: 199,
    rating: "3.8",
    arrimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    qnty: 0,
  },
];

export const CatSub = [
  {
    id: 1,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
    Sub2: "MonoPerc Modules",
    Sub3: "Bifacial Modules",
    Sub4: "Solar Tiles",
    Sub5: "Building Integrated Photo Voltalics",
  },
  {
    id: 2,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
    Sub2: "Rooftop Structures",
    Sub3: "Sheet Roof Structure / RCC Roof Structure",
  },
  {
    id: 3,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
    Sub2: "Adjustable Solar Titl Panel Brackets",
  },

  {
    id: 4,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
  {
    id: 5,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
    Sub2: "MonoPerc Modules",
    Sub3: "Bifacial Modules",
    Sub4: "Solar Tiles",
    Sub5: "Building Integrated Photo Voltalics",
  },
  {
    id: 6,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
    Sub2: "Rooftop Structures",
    Sub3: "Sheet Roof Structure / RCC Roof Structure",
  },
  {
    id: 7,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
    Sub2: "Adjustable Solar Titl Panel Brackets",
  },

  {
    id: 8,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
  {
    id: 9,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
    Sub2: "MonoPerc Modules",
    Sub3: "Bifacial Modules",
    Sub4: "Solar Tiles",
    Sub5: "Building Integrated Photo Voltalics",
  },
  {
    id: 10,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
    Sub2: "Rooftop Structures",
    Sub3: "Sheet Roof Structure / RCC Roof Structure",
  },
  {
    id: 11,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
    Sub2: "Adjustable Solar Titl Panel Brackets",
  },

  {
    id: 12,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
  {
    id: 13,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
    Sub2: "MonoPerc Modules",
    Sub3: "Bifacial Modules",
    Sub4: "Solar Tiles",
    Sub5: "Building Integrated Photo Voltalics",
  },
  {
    id: 14,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
    Sub2: "Rooftop Structures",
    Sub3: "Sheet Roof Structure / RCC Roof Structure",
  },
  {
    id: 15,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
    Sub2: "Adjustable Solar Titl Panel Brackets",
  },

  {
    id: 16,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
  {
    id: 17,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
    Sub2: "MonoPerc Modules",
    Sub3: "Bifacial Modules",
    Sub4: "Solar Tiles",
    Sub5: "Building Integrated Photo Voltalics",
  },
  {
    id: 18,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
    Sub2: "Rooftop Structures",
    Sub3: "Sheet Roof Structure / RCC Roof Structure",
  },
  {
    id: 19,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
    Sub2: "Adjustable Solar Titl Panel Brackets",
  },

  {
    id: 20,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
  {
    id: 21,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
    Sub2: "MonoPerc Modules",
    Sub3: "Bifacial Modules",
    Sub4: "Solar Tiles",
    Sub5: "Building Integrated Photo Voltalics",
  },
  {
    id: 22,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
    Sub2: "Rooftop Structures",
    Sub3: "Sheet Roof Structure / RCC Roof Structure",
  },
  {
    id: 23,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
    Sub2: "Adjustable Solar Titl Panel Brackets",
  },

  {
    id: 24,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
];

export const Cate = [
  {
    id: 1,
    img: Module,
    Cat: "PV Modules",
    Sub1: "Poly Crystalline Modules",
  },
  {
    id: 2,
    img: ModuleMount,
    Cat: "Module Mounting Structure",
    Sub1: "Aluminium Solar Mounting Structure",
  },
  {
    id: 3,
    img: Clamps,
    Cat: "Clamps",
    Sub1: "Module Mounting Clamps",
  },
  {
    id: 4,
    img: Inverter,
    Cat: "Inverters",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },

  // {
  //   id: 1,
  //   img: Module,
  //   Cat: "PV Modules",
  //   Sub1: "Poly Crystalline Modules",
  // },
  // {
  //   id: 2,
  //   img: ModuleMount,
  //   Cat: "Module Mounting Structure",
  //   Sub1: "Aluminium Solar Mounting Structure",
  // },
  // {
  //   id: 3,
  //   img: Clamps,
  //   Cat: "Clamps",
  //   Sub1: "Module Mounting Clamps",
  // },
  // {
  //   id: 4,
  //   img: Inverter,
  //   Cat: "Inverters",
  //   Sub1: "String Inverters",
  //   Sub2: "Cenntral Inverters",
  // },
  {
    id: 5,
    img: DistributionBoards,
    Cat: "Distribution Boards",
    Sub1: "Poly Crystalline Modules",
  },
  {
    id: 6,
    img: DCsolarcables,
    Cat: "DC solar cables",
    Sub1: "Aluminium Solar Mounting Structure",
  },
  {
    id: 7,
    img: Cat6Cable,
    Cat: "Cat 6 Cable",
    Sub1: "Module Mounting Clamps",
  },
  {
    id: 8,
    img: Wire_harness,
    Cat: "Wire harness",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },

  {
    id: 9,
    img: pipes,
    Cat: "pipes",
    Sub1: "Module Mounting Clamps",
  },
  {
    id: 10,
    img: InspectionTools,
    Cat: "Inspection Tools",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
  {
    id: 11,
    img: HealthandSafetyProducts,
    Cat: "Health and Safety Products ",
    Sub1: "Module Mounting Clamps",
  },
  {
    id: 12,
    img: fiberopticcable,
    Cat: "fiber optic cable",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },

  {
    id: 13,
    img: CableCrimpingTools,
    Cat: "Cable Crimping Tools",
    Sub1: "String Inverters",
    Sub2: "Cenntral Inverters",
  },
];

// export const ProductPage = [

//   {
//     id: 1,
//     rname: "ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel",
//     img: pd1,
//     AltImg1:IMG1,
//     AltImg2:IMG2,
//     AltImg3:IMG3,
//     AltImg4:IMG4,
//     Category:"Solar",
//     SubCategory:"PV Module",
//     refno: "5SV44140RC",
//     brand:"ZunSolar",
//     Keyfeatures: ["High-Conversion Solar Cells, Robust Design",
//     "It Can Be Used To Charge A Mobile Phone, Power An LED Bulb & An LED TV For 12 Hr Every Day",
//      "Ideal Product To Power Basic Appliances Of A Household",
//      "It Produces Around 660W Hr (0.66 Units) Electricity Per Day"],

//     Specifications: [
//       {
//          "Brand":  'Christine',
//          "Current at Max Power (Imp)"	:   "19",
//          "Warranty": 	"Performance: 25 Years",
//          "Number of Cells":"36",
//          "Dimensions":"67 x 148 x 3 cm",
//          "Cell Size":"156.75 x 156.75 mm",
//          "Maximum System Voltage":"	1000 V DC",
//          "Fuse Rating":"	15 Amp"
//       },

//   ] ,

//     ProdInfo: " Browse through the extensive list of Solar Panels at Moglix. Shop online for other ZunSolar Solar Panels available at Moglix in the lowest price range. The Carat 24 ZR 165W Polycrystalline Solar PV Module Panel is a top of the line solar panel that is perfect for those who are looking to go green and save money on their energy bill. This panel is made with 156.75x156.75mm solar cells that are encased in a silver anodized aluminum frame. The polycrystalline material ensures that this panel will be durable and long lasting, while still being able to produce a large amount of energy. The ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel is a high-quality and durable solar panel that is ideal for a variety of applications. It features a power output of 165 watts and a 25-year performance warranty, making it a great choice for those who want to invest in a long-term solar solution. Additionally, the short circuit current (isc) of 9.34 amps and voltage at max power (vmp) of 18.20 volts make this solar panel a great option for those who want to maximize their solar output. Finally, the fuse rating of 15 amps makes this panel a safe and reliable option for a variety of applications. The ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel is a top-of-the-line product that offers a number of features that are sure to appeal to anyone in the market for a solar panel. With a maximum system voltage of 1000 V DC, an open circuit voltage of 22.2 V, and a high transmission low iron tempered glass, this solar panel is sure to provide plenty of power for your needs. Additionally, the ZunSolar Carat 24 ZR 165W Polycrystalline Solar PV Module Panel comes with a 25-year warranty, so you can be confident in its quality and durability.",
//     oldprice: 9000,
//     price: 6099,
//     DiscountPercentage:35,
//     rating: "4.6",
//     qnty:0
// },
// ]
