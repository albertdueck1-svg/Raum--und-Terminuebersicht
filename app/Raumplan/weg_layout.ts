import type { WayfindingPath } from "./raumplan_positions";

// Nutzenden-Wege werden als Punktfolge gepflegt und im Raumplan verbunden angezeigt.
export const wayfindingPaths: WayfindingPath[] = [
  {
    id: "weg-zur-arena",
    label: "Weg zur Arena",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1628, top: 475 },
      { left: 1628, top: 550 },
      { left: 1187, top: 550 },
      { left: 1187, top: 855 },
      { left: 1210, top: 855 },
    ],
  },
  {
    id: "weg-zur-arena-west",
    label: "Weg zur Arena",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1582, top: 550 },
      { left: 1582, top: 573 },
            ]
 },
   {
    id: "weg-zum-englischergarten",
    label: "Weg zum Englischergarten",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1187, top: 860 },
      { left: 1187, top: 1160 },
      { left: 1210, top: 1160 },
            ]
 },
    {
    id: "weg-zur-Chiemsee",
    label: "Weg zum Chiemsee",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1187, top: 1170 },
      { left: 1187, top: 1825 },
      { left: 1265, top: 1825 },
      { left: 1265, top: 1770 },
            ]
 },
  {
    id: "weg-zum-Glausraum",
    label: "Weg zum Glausraum",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1187, top: 550 },
      { left: 1187, top: 540 },
      { left: 1165, top: 540 },
            ]
 },
  {
    id: "weg-zum-skyline",
    label: "Weg zum Skyline",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1180, top: 700 },
      { left: 585, top: 700 },
      { left: 585, top: 720 },
            ]
  },

 {
    id: "weg-zur-Zugspitze",
    label: "Weg zur Zugspitze",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 580, top: 700 },
      { left: 460, top: 700 },
      { left: 460, top: 630 },
      { left: 392, top: 630 }, 
      { left: 392, top: 850 },
      { left: 411, top: 850 }, 
        ]
 },
  {
    id: "weg-zum-Studio",
    label: "Weg zum Studio",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 392, top: 860 },
    { left: 392, top: 992 },
    { left: 377, top: 992 },
      ]
 },
   {
    id: "weg-zur-Alm-ost",
    label: "Weg zur Alm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 402, top: 946 },
    { left: 411, top: 946 },
      ]
 },
   {
    id: "weg-zur-Alm-west",
    label: "Weg zur Alm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 788, top: 710 },
    { left: 788, top: 959 },
    { left: 770, top: 959 },
      ]
 },
 {
    id: "weg-zum-Marienplatz",
    label: "Weg zum Marienplatz",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 852, top: 690 },
    { left: 852, top: 555 },
    { left: 845, top: 555 },
      ]
 },
 {
    id: "weg-zum-Olympiaturm",
    label: "Weg zum Olympiaturm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 852, top: 545 },
    { left: 852, top: 410 },
    { left: 905, top: 410 },
    { left: 905, top: 310 },
    { left: 892, top: 310 },
      ]
 },
  {
    id: "weg-zum-Olympiaturm-alternative",
    label: "Weg zum Olympiaturm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 1179, top: 540 },
    { left: 1179, top: 410 },
    { left: 905, top: 410 },
    
      ]
 },
 {
    id: "weg-zum-Eisbach",
    label: "Weg zum Eisbach",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 905, top: 300 },
    { left: 905, top: 230 },
    { left: 892, top: 230 },
          ]
 },
];
