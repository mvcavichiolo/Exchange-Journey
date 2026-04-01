import bigben from "@/assets/gallery/london-bigben.jpg";
import oxford from "@/assets/gallery/oxford-university.jpg";
import pub from "@/assets/gallery/english-pub.jpg";
import towerBridge from "@/assets/gallery/tower-bridge.jpg";
import countryside from "@/assets/gallery/countryside.jpg";
import museum from "@/assets/gallery/british-museum.jpg";
import camden from "@/assets/gallery/camden-market.jpg";
import stonehenge from "@/assets/gallery/stonehenge.jpg";

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: string[];
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  albums: Album[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: "Inscrição", description: "Preenchimento do formulário online e envio dos documentos acadêmicos exigidos pelo programa." },
  { step: 2, title: "Prova de Seleção", description: "Prova de conhecimentos gerais e língua inglesa para classificação dos candidatos." },
  { step: 3, title: "Entrevista", description: "Entrevista presencial ou online para avaliar motivação e perfil do candidato." },
  { step: 4, title: "Documentação", description: "Preparação do passaporte, visto de estudante e documentos de viagem." },
  { step: 5, title: "Embarque", description: "Viagem para a Inglaterra e início da experiência de intercâmbio." },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: "familia",
    title: "Família Hospedeira",
    description: "Momentos com a família que me acolheu na Inglaterra",
    icon: "Heart",
    albums: [
      {
        id: "f-jantar",
        title: "Jantar em Família",
        description: "Noites acolhedoras com minha host family, compartilhando refeições e histórias no pub do bairro.",
        cover: pub,
        photos: [pub, countryside, camden],
      },
      {
        id: "f-passeio",
        title: "Passeio no Campo",
        description: "Fins de semana explorando o interior inglês com a família hospedeira.",
        cover: countryside,
        photos: [countryside, pub, stonehenge],
      },
    ],
  },
  {
    id: "escola",
    title: "Escola",
    description: "Dia a dia na escola britânica",
    icon: "GraduationCap",
    albums: [
      {
        id: "e-campus",
        title: "Campus da Escola",
        description: "A arquitetura clássica do campus onde estudei durante o intercâmbio. Cada corredor contava uma história centenária.",
        cover: oxford,
        photos: [oxford, museum, countryside],
      },
      {
        id: "e-atividades",
        title: "Atividades Escolares",
        description: "Saídas pedagógicas, eventos e a rotina acadêmica britânica.",
        cover: museum,
        photos: [museum, oxford, bigben],
      },
    ],
  },
  {
    id: "viagens",
    title: "Viagens",
    description: "Explorando além da cidade",
    icon: "Compass",
    albums: [
      {
        id: "v-stonehenge",
        title: "Stonehenge",
        description: "Visita ao misterioso círculo de pedras milenar em Wiltshire. Uma experiência única e surreal.",
        cover: stonehenge,
        photos: [stonehenge, countryside, oxford],
      },
      {
        id: "v-cotswolds",
        title: "Cotswolds & Oxford",
        description: "Vilarejos pitorescos e os famosos colleges da universidade mais antiga do mundo anglófono.",
        cover: oxford,
        photos: [oxford, countryside, stonehenge, pub],
      },
    ],
  },
  {
    id: "londres",
    title: "Londres",
    description: "A capital que nunca para",
    icon: "MapPin",
    albums: [
      {
        id: "l-icones",
        title: "Ícones de Londres",
        description: "Big Ben, Tower Bridge e os cartões-postais mais fotografados da capital britânica.",
        cover: bigben,
        photos: [bigben, towerBridge, camden, museum],
      },
      {
        id: "l-cultura",
        title: "Cultura & Mercados",
        description: "Camden Market, British Museum e a energia criativa que pulsa em cada esquina.",
        cover: camden,
        photos: [camden, museum, bigben, towerBridge],
      },
    ],
  },
];

export const londonHighlights = [
  { title: "Big Ben & Westminster", description: "O coração político e histórico de Londres, com a icônica torre do relógio.", image: bigben },
  { title: "Tower Bridge", description: "A ponte levadiça vitoriana que é um dos cartões-postais mais fotografados do mundo.", image: towerBridge },
  { title: "Camden Market", description: "Cultura alternativa, street food internacional e energia criativa.", image: camden },
  { title: "British Museum", description: "Milhares de anos de história humana em um único lugar — e a entrada é gratuita.", image: museum },
];
