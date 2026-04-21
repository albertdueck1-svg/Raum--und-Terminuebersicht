import type { WayfindingPath } from "./raumplan_positions";

// Nutzenden-Wege werden als Punktfolge gepflegt und im Raumplan verbunden angezeigt.
export const wayfindingPaths: WayfindingPath[] = [
  {
    id: "weg-zur-arena",
    label: "Weg zur Arena",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1521, top: 560 },
      { left: 1521, top: 650 },
      { left: 1150, top: 650 },
      { left: 1150, top: 900 },
      { left: 1165, top: 900 },
    ],
  },
  {
    id: "weg-zur-arena-west",
    label: "Weg zur Arena",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1490, top: 650 },
      { left: 1490, top: 670 },
            ]
 },
   {
    id: "weg-zum-englischergarten",
    label: "Weg zum Englischergarten",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1150, top: 900 },
      { left: 1150, top: 1170 },
      { left: 1165, top: 1170 },
            ]
 },
    {
    id: "weg-zur-Chiemsee",
    label: "Weg zum Chiemsee",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1150, top: 900 },
      { left: 1150, top: 1720 },
      { left: 1200, top: 1720 },
      { left: 1200, top: 1705 },
            ]
 },
  {
    id: "weg-zum-Glausraum",
    label: "Weg zum Glausraum",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1150, top: 650 },
      { left: 1150, top: 630 },
      { left: 1130, top: 630 },
            ]
 },
  {
    id: "weg-zum-skyline",
    label: "Weg zum Skyline",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1150, top: 775 },
      { left: 615, top: 775 },
      { left: 615, top: 790 },
            ]
  },

 {
    id: "weg-zur-Zugspitze",
    label: "Weg zur Zugspitze",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 1150, top: 775 },
      { left: 510, top: 775 },
      { left: 510, top: 710 },
      { left: 450, top: 710 }, 
      { left: 450, top: 900 },
      { left: 465, top: 900 }, 
        ]
 },
  {
    id: "weg-zum-Studio",
    label: "Weg zum Studio",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 450, top: 900 },
    { left: 450, top: 1030 },
    { left: 435, top: 1030 },
      ]
 },
   {
    id: "weg-zur-Alm-ost",
    label: "Weg zur Alm",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 450, top: 990 },
    { left: 465, top: 990 },
      ]
 },
   {
    id: "weg-zur-Alm-west",
    label: "Weg zur Alm",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 785, top: 775 },
    { left: 785, top: 1000 },
    { left: 775, top: 1000 },
      ]
 },
 {
    id: "weg-zum-Marienplatz",
    label: "Weg zum Marienplatz",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 850, top: 775 },
    { left: 850, top: 660 },
    { left: 845, top: 660 },
      ]
 },
 {
    id: "weg-zum-Olympiaturm",
    label: "Weg zum Olympiaturm",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 850, top: 660 },
    { left: 850, top: 515 },
    { left: 895, top: 515 },
    { left: 895, top: 440 },
    { left: 885, top: 440 },
      ]
 },
  {
    id: "weg-zum-Olympiaturm-alternative",
    label: "Weg zum Olympiaturm",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 1140, top: 630 },
    { left: 1140, top: 515 },
    { left: 895, top: 515 },
    
      ]
 },
 {
    id: "weg-zum-Eisbach",
    label: "Weg zum Eisbach",
    color: "#2563eb",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 895, top: 440 },
    { left: 895, top: 375 },
    { left: 885, top: 375 },
          ]
 },
];
