import bigben from "@/assets/gallery/london-bigben.jpg";
import oxford from "@/assets/gallery/oxford-university.jpg";
import pub from "@/assets/gallery/english-pub.jpg";
import towerBridge from "@/assets/gallery/tower-bridge.jpg";
import countryside from "@/assets/gallery/countryside.jpg";
import museum from "@/assets/gallery/british-museum.jpg";
import camden from "@/assets/gallery/camden-market.jpg";
import stonehenge from "@/assets/gallery/stonehenge.jpg";

// URLs das imagens do Supabase com descrições
const hostFamilyPhotos = [
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0023.jpg", description: "Jantar especial com minha host family" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0024.jpg", description: "Passeio no parque com a família" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0021.jpg", description: "Celebração de aniversário" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0016.jpg", description: "Dia de jogos em família" }
];

const schoolPhotos = [
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250915_101200.jpg", description: "Campus da Coastland College" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250915_102543.jpg", description: "Aula prática no museu" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251015_152118.jpg", description: "Laboratório de ciências" },
  { url: countryside, description: "Atividade ao ar livre" }
];

const travelPhotos = [
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250905_100802.jpg", description: "Vista de Portland, ilha que morei" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250903_194344.jpg", description: "Praia de pedras atrás da minha casa" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250902_192601.jpg", description: "Montanha turística de Portland" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250905_103323.jpg", description: "Arquitetura de Portland" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250928_182824.jpg", description: "Vista da praia de pedras" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250928_184651.jpg", description: "Nascer do sol no caminho da escola" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251006_064548.jpg", description: "Por do sol na praia de pedras" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251006_064603.jpg", description: "Nascer do sol em Portland" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251008_181521.jpg", description: "Fim de tarde" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251117_170119.jpg", description: "Trilha na ilha" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251117_170125.jpg", description: "Mirante" }
];

const foodPhotos = [
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250830_143824.jpg", description: "Jantar com a host family" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250901_184903.jpg", description: "Chicken Wraps" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250904_185556.jpg", description: "Jantar com a host family" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250904_191423.jpg", description: "Sobremesa tradicional inglesa" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250920_193404.jpg", description: "Sanduíche caseiro" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250921_183947.jpg", description: "Lasanha e salada" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250924_190738.jpg", description: "Pizza caseira do meu host dad" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250926_180910.jpg", description: "Carbonara feita pela minha host sister italiana" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251010_184307.jpg", description: "Jantar com a host family" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251019_143727.jpg", description: "Doce tradicional das cafeterias" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251025_182036.jpg", description: "Arroz em forma de gato que meu host dad fez" },
  { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251105_183748.jpg", description: "Chicken and Chips tradicional" }
];

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: Array<{ url: string; description: string }>;
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
  {
    step: 1,
    title: "Inscrição",
    description: "Preenchimento do formulário online e envio dos documentos exigidos pelo programa."
  },
  {
    step: 2,
    title: "Critérios de Participação",
    description: "Estar cursando o 1º ano do ensino médio no ano da inscrição e ter cursado o 9º ano no ano anterior; Ter cursado do 6º ao 9º ano do Ensino Fundamental em uma instituição da rede pública estadual do Paraná; Ter no mínimo 14 e no máximo 17 anos e seis meses de idade na data de embarque; Frequência igual ou superior a 85%; Apresentar médias iguais ou superiores a 7,0."
  },
  {
    step: 3,
    title: "Critérios de Classificação",
    description: "Nota Padronizada obtida na Prova Paraná Mais; Até 3 certificados do Inglês Paraná e do Aluno Monitor."
  },
  {
    step: 4,
    title: "Preparações",
    description: "Reuniões e orientações do programa, preparação do passaporte, visto de estudante, documentos de viagem, autorizações, carta para host family, etc."
  },
  {
    step: 5,
    title: "Embarque",
    description: "Arrumar malas e decidir o que levar, despedida de família e amigos, ansiedade e expectaiva, início da experiência de intercâmbio."
  },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: "familia",
    title: "Host Family",
    description: "Momentos com a família que me acolheu na Inglaterra",
    icon: "Heart",
    albums: [
      {
        id: "f-almoço",
        title: "Host Family",
        description: "Fotos com a família que me acolheu na Inglaterra.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0023.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0023.jpg", description: "Host family! (faltou a host sister italiana)" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0024.jpg", description: "Host mom, host sister e amiga da host mom" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0021.jpg", description: "Eu, host mom e host sister" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/IMG-20251227-WA0016.jpg", description: "Eu e minha host sister brasileira" }
        ],
      },
      {
        id: "f-festa",
        title: "Tradições",
        description: "Tradições que eu e minha host family criamos.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251004_193438.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251004_193438.jpg", description: "Sexta-feira de filmes" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251108_190206.jpg", description: "Assando marshmallows" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251108_190312.jpg", description: "Assando marshmallows" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251108_190704.jpg", description: "Chocolate quente" }
        ],
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
        title: "Coastland College",
        description: "Fotos da escola onde estudei durante o intercâmbio.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250902_155227.jpg",
        photos:
          [
            { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/images%20(2).jpeg", description: "Frente do colégio" },
            { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250901_112532.jpg", description: "Ginásio do colégio" },
            { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250902_155218.jpg", description: "Faixa de pedestre do colégio" },
            { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250902_155227.jpg", description: "Bandeiras do colégio" }
          ],
      },
      {
        id: "e-atividades",
        title: "Atividades Escolares",
        description: "Experimentos, laboratórios ou apenas momentos memoráveis em sala de aula.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250915_101200.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250915_101200.jpg", description: "Atividade com microscópio" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250915_102543.jpg", description: "Vendo células no microscópio" }
        ],
      },
      {
        id: "e-extras",
        title: "Momentos Memoráveis",
        description: "Memórias que guardo com carinho.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251021_144638.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251021_144638.jpg", description: "Eu e meus amigos intercambistas" }
        ],
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
        id: "portland",
        title: "Portland",
        description: "Ilha que morei. Charmosa e cheia de história.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250905_100802.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250905_100802.jpg", description: "Vista de Portland, ilha que morei" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250903_194344.jpg", description: "Praia de pedras atrás da minha casa" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250905_103323.jpg", description: "Montanha turística de Portland" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250928_182824.jpg", description: "Arquitetura de Portland" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250928_184651.jpg", description: "Vista da praia de pedras" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251006_064603.jpg", description: "Nascer do sol no caminho da escola" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251008_181521.jpg", description: "Por do sol na praia de pedras" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251117_170119.jpg", description: "Nascer do sol em Portland" }
        ],
      },
      {
        id: "weymouth",
        title: "Weymouth",
        description: "Cidade onde estudei. Cheia de vida e muitos eventos.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_191230.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_191230.jpg", description: "Anoitecer luminoso em Weymouth" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_190751.jpg", description: "Tarde no centro" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250904_143059.jpg", description: "Porto de Weymouth" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251006_072630.jpg", description: "Vista para o nascer do sol no caminho da escola" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251018_191011.jpg", description: "Noite no centro" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251030_131549.jpg", description: "Artista pintando o porto de Weymouth" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251108_145530.jpg", description: "Lojas diversas no centro" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251118_162831.jpg", description: "Rua comercial decorada para festival" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251216_161454.jpg", description: "Tarde bonita" },
        ],
      },
      {
        id: "dorchester",
        title: "Dorchester",
        description: "Cidade vizinha cheia de atividades para fazer. Muito encantadora.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250913_191131.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250913_191131.jpg", description: "Arco-íris memorável" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_145934.jpg", description: "Arquitetura diferente" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_150623.jpg", description: "Catedral de Dorchester por dentro" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_150855.jpg", description: "Rua principal" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_151052.jpg", description: "Portal para o outro lado?" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_151121.jpg", description: "Igreja antiga" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250927_152153.jpg", description: "Folhas" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251018_141302.jpg", description: "Parque da cidade" },
        ],
      },
      {
        id: "londres",
        title: "Londres",
        description: "A famosa capital de Londres. Experiência única e inesquecível.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251209_120716.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251209_110715.jpg", description: "Cafeteria do Museu de História Natural de Londres" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251209_120716.jpg", description: "Cabine telefônica vermelha" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251219_121420.jpg", description: "London Eye" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251219_124440.jpg", description: "Big Ben" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251219_125627.jpg", description: "Guarda real" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251219_132143.jpg", description: "National Gallery" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251219_170638.jpg", description: "Vista de Londres a noite" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251219_171623.jpg", description: "Tower Bridge" },
        ],
      },
      {
        id: "brighton",
        title: "Brighton",
        description: "Cidade bastante colorida e artística, com uma vibe única.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_141029.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_141159.jpg", description: "Vista para a praia no fim de tarde" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_141029.jpg", description: "Casas diferenciadas coloridas bonitas" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_130706.jpg", description: "Arte de rua" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_122743.jpg", description: "Loja iluminada" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_121846.jpg", description: "Cabine telefônica e gaivota" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251227_161601.jpg", description: "Catedral de Brighton" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_141131.jpg", description: "Prédio Artístico" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251230_131141(0).jpg", description: "Brighton Palace Pier" },
        ],
      },
      {
        id: "bristol",
        title: "Bristol",
        description: "Cidade histórica com catedrais lindas e arquiteturas encantadoras.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_163445.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_163445.jpg", description: "Anoitecer bonito em Bristol" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_154256.jpg", description: "Rua central de Bristol" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_130703.jpg", description: "Rua comum em Bristol" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_124807.jpg", description: "Igreja com arquitetura bonita por dentro" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_124412.jpg", description: "Igreja com arquitetura bonita por fora" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_123455.jpg", description: "Ponte de Bristol" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_122744.jpg", description: "Porto de Bristol" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_122659.jpg", description: "Vista bonita no porto" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_121607.jpg", description: "Catedral classificada como uma das mais bonitas do Reino Unido por dentro" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251231_121128.jpg", description: "Catedral classificada como uma das mais bonitas do Reino Unido por fora" },
        ],
      },
      {
        id: "glastonbury",
        title: "Glastonbury",
        description: "Cidade com vibe medieval, me senti em um conto de fadas.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_111253.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_134330.jpg", description: "Lenda de Excalibur?" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_132204.jpg", description: "Vista bonita de Glastonbury" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_132332(0).jpg", description: "Vista bonita de Glastonbury" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_115856.jpg", description: "Igreja de Glastonbury" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_115400.jpg", description: "Arquitetura comum em Glastonbury" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251011_115153.jpg", description: "Centro de Glastonbury" },
        ],
      },
      {
        id: "bournemouth",
        title: "Bournemouth",
        description: "Cidade animada com diversos festivais e lojas diferentes.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251026_092730.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251030_110619.jpg", description: "Entrada para bosque em Bournemouth" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251030_110415.jpg", description: "Esquilo comendo nozes" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251026_092846.jpg", description: "Esquilo fofo" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251026_092819.jpg", description: "Sol iluminando ponte diferenciada" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251026_092706.jpg", description: "Vista bonita em Bournemouth" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251018_163420%20(1).jpg", description: "Praça principal de Bournemouth" },
        ],
      },
    ],
  },
  {
    id: "culinária",
    title: "Culinária & Cultura",
    description: "Sabores e pratos típicos da Inglaterra",
    icon: "MapPin",
    albums: [
      {
        id: "l-icones",
        title: "Ícones de culinária",
        description: "Culinária da Inglaterra.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20250830_143824.jpg",
        photos: foodPhotos,
      },
      {
        id: "l-cultura",
        title: "Cultura",
        description: "Aspectos culturais e tradições britânicas.",
        cover: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251218_211715.jpg",
        photos: [
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251218_211715.jpg", description: "Ônibus decorado de natal" },
          { url: "https://ryeogbicfxcvtwkrnzel.supabase.co/storage/v1/object/public/Gallery/20251006_072849.jpg", description: "Flor bonita" }
        ],
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
