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
      { left: 3435, top: 555 },
      { left: 3435, top: 615 },
      { left: 3030, top: 615 },
      { left: 3030, top: 877 },
      { left: 3045, top: 877 },
    ],
  },
  {
    id: "weg-zur-arena-west",
    label: "Weg zur Arena",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 3395, top: 615 },
      { left: 3395, top: 640 },
            ]
 },
   {
    id: "weg-zum-englischergarten",
    label: "Weg zum Englischergarten",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 3030, top: 889 },
      { left: 3030, top: 1178 },
      { left: 3045, top: 1178 },
            ]
 },
    {
    id: "weg-zur-Chiemsee",
    label: "Weg zum Chiemsee",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 3030, top: 1190 },
      { left: 3030, top: 1780 },
      { left: 3100, top: 1780 },
      { left: 3100, top: 1750 },
            ]
 },
  {
    id: "weg-zum-Glausraum",
    label: "Weg zum Glausraum",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 3019, top: 615 },
      { left: 3019, top: 608 },
      { left: 3010, top: 608 },
            ]
 },
  {
    id: "weg-zum-skyline",
    label: "Weg zum Skyline",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 3018, top: 755 },
      { left: 2475, top: 755 },
      { left: 2475, top: 770 },
            ]
  },

 {
    id: "weg-zur-Zugspitze",
    label: "Weg zur Zugspitze",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
      { left: 2463, top: 755 },
      { left: 2360, top: 755 },
      { left: 2360, top: 700 },
      { left: 2297, top: 700 }, 
      { left: 2297, top: 892 },
      { left: 2312, top: 892 }, 
        ]
 },
  {
    id: "weg-zum-Studio",
    label: "Weg zum Studio",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 2297, top: 901 },
    { left: 2297, top: 1025 },
    { left: 2282, top: 1025 },
      ]
 },
   {
    id: "weg-zur-Alm-ost",
    label: "Weg zur Alm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 2306, top: 985 },
    { left: 2312, top: 985 },
      ]
 },
   {
    id: "weg-zur-Alm-west",
    label: "Weg zur Alm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 2665, top: 767 },
    { left: 2665, top: 994 },
    { left: 2650, top: 994 },
      ]
 },
 {
    id: "weg-zum-Marienplatz",
    label: "Weg zum Marienplatz",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 2720, top: 743 },
    { left: 2720, top: 612 },
    { left: 2714, top: 612 },
      ]
 },
 {
    id: "weg-zum-Olympiaturm",
    label: "Weg zum Olympiaturm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 2720, top: 600 },
    { left: 2720, top: 490 },
    { left: 2775, top: 490 },
    { left: 2775, top: 390 },
    { left: 2760, top: 390 },
      ]
 },
  {
    id: "weg-zum-Olympiaturm-alternative",
    label: "Weg zum Olympiaturm",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 3019, top: 595 },
    { left: 3019, top: 490 },
    { left: 2775, top: 490 },
    
      ]
 },
 {
    id: "weg-zum-Eisbach",
    label: "Weg zum Eisbach",
    color: "#2564ebab",
    strokeWidth: 10,
    strokeDasharray: "18 12",
    points: [
    { left: 2775, top: 380 },
    { left: 2775, top: 315 },
    { left: 2760, top: 315 },
          ]
 },
];
