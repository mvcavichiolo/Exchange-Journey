import bigben from "@/assets/gallery/london-bigben.jpg";
import oxford from "@/assets/gallery/oxford-university.jpg";
import pub from "@/assets/gallery/english-pub.jpg";
import towerBridge from "@/assets/gallery/tower-bridge.jpg";
import countryside from "@/assets/gallery/countryside.jpg";
import museum from "@/assets/gallery/british-museum.jpg";
import camden from "@/assets/gallery/camden-market.jpg";
import stonehenge from "@/assets/gallery/stonehenge.jpg";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  description: string;
  instagramLink?: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  photos: GalleryPhoto[];
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
    photos: [
      { id: "f1", src: pub, title: "Jantar em Família", description: "Uma noite acolhedora com minha host family no pub do bairro." },
      { id: "f2", src: countryside, title: "Passeio no Campo", description: "Fim de semana explorando o interior inglês com a família." },
    ],
  },
  {
    id: "escola",
    title: "Escola",
    description: "Dia a dia na escola britânica",
    icon: "GraduationCap",
    photos: [
      { id: "e1", src: oxford, title: "Campus da Escola", description: "Arquitetura clássica do campus onde estudei durante o intercâmbio." },
      { id: "e2", src: museum, title: "Visita Escolar", description: "Saída pedagógica ao British Museum com a turma." },
    ],
  },
  {
    id: "viagens",
    title: "Viagens",
    description: "Explorando além da cidade",
    icon: "Compass",
    photos: [
      { id: "v1", src: stonehenge, title: "Stonehenge", description: "Visita ao misterioso círculo de pedras milenar em Wiltshire." },
      { id: "v2", src: countryside, title: "Cotswolds", description: "Vilarejos pitorescos no coração da Inglaterra rural." },
      { id: "v3", src: oxford, title: "Oxford", description: "Um dia nos famosos colleges da universidade mais antiga do mundo anglófono." },
    ],
  },
  {
    id: "londres",
    title: "Londres",
    description: "A capital que nunca para",
    icon: "MapPin",
    photos: [
      { id: "l1", src: bigben, title: "Big Ben", description: "O icônico relógio de Westminster ao entardecer." },
      { id: "l2", src: towerBridge, title: "Tower Bridge", description: "A ponte mais famosa de Londres iluminada ao crepúsculo." },
      { id: "l3", src: camden, title: "Camden Market", description: "O mercado mais vibrante e alternativo de Londres." },
      { id: "l4", src: museum, title: "British Museum", description: "Arte e história mundial sob um teto de vidro impressionante." },
    ],
  },
];

export const londonHighlights = [
  { title: "Big Ben & Westminster", description: "O coração político e histórico de Londres, com a icônica torre do relógio.", image: bigben },
  { title: "Tower Bridge", description: "A ponte levadiça vitoriana que é um dos cartões-postais mais fotografados do mundo.", image: towerBridge },
  { title: "Camden Market", description: "Cultura alternativa, street food internacional e energia criativa.", image: camden },
  { title: "British Museum", description: "Milhares de anos de história humana em um único lugar — e a entrada é gratuita.", image: museum },
];
