export type Publication = {
  id: 'aoeb' | 'kalm' | 'lmeb';
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description: string;
  figureCaption: string;
  image: { src: string; alt: string; width: number; height: number; source: string };
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    id: 'aoeb',
    title: 'AOEB: Benchmarking Agent-Oriented Multimodal Embeddings',
    authors: ['Xin Zhang', 'Jiaxin Xu', 'Mengjia Zhou', 'Xinping Zhao', 'Yinghui Li', 'Di Yin', 'Xing Sun', 'Meishan Zhang', 'Baotian Hu', 'Wenjie Li', 'Min Zhang'],
    venue: 'ICML 2026', year: 2026,
    description: 'Evaluating multimodal embeddings against the retrieval needs of LLM agents, including code, tools, reasoning, and memory.',
    figureCaption: 'Agent-oriented embedding evaluation',
    image: { src: '/images/research/aoeb.webp', alt: 'AOEB overview from the paper: retrieval capabilities and multimodal tasks for LLM agents.', width: 1200, height: 828, source: 'https://proceedings.mlr.press/v306/zhang26hf.html' },
    links: [
      { label: 'Paper', url: 'https://proceedings.mlr.press/v306/zhang26hf.html' },
      { label: 'Code', url: 'https://github.com/vec-ai/aoeb' },
      { label: 'Conference', url: 'https://icml.cc/virtual/2026/poster/61847' },
    ],
  },
  {
    id: 'kalm',
    title: 'KaLM-Reranker-V1: Fast but Not Late Interaction for Compressed Document Reranking',
    authors: ['Xinping Zhao', 'Jiaxin Xu', 'Ziqi Dai', 'Xin Zhang', 'Huiyao Chen', 'Shouzheng Huang', 'Xianhao Xiong', 'Danyu Tang', 'Xinshuo Hu', 'Guohong Fu', 'Meishan Zhang', 'Baotian Hu'],
    venue: 'Preprint', year: 2026,
    description: 'An efficient reranker that separates offline passage encoding from online query processing while retaining expressive cross-attention.',
    figureCaption: 'KaLM-Reranker-V1 model architecture',
    image: { src: '/images/research/kalm-architecture.webp', alt: 'KaLM-Reranker-V1 model architecture: the encoder produces compressed document representations, and the decoder uses cross-attention to score their relevance to a query.', width: 1200, height: 232, source: 'https://arxiv.org/html/2606.22807v1#S3.F2' },
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2606.22807' },
      { label: 'Models', url: 'https://huggingface.co/collections/KaLM-Embedding/lychee-kalm-reranker-and-jev' },
      { label: 'Nano model', url: 'https://huggingface.co/KaLM-Embedding/KaLM-Reranker-V1-Nano' },
    ],
  },
  {
    id: 'lmeb',
    title: 'LMEB: Long-horizon Memory Embedding Benchmark',
    authors: ['Xinping Zhao', 'Xinshuo Hu', 'Jiaxin Xu', 'Danyu Tang', 'Xin Zhang', 'Mengjia Zhou', 'Yan Zhong', 'Yao Zhou', 'Zifei Shan', 'Meishan Zhang', 'Baotian Hu', 'Min Zhang'],
    venue: 'Preprint', year: 2026,
    description: 'A benchmark for long-horizon memory retrieval: 22 datasets and 193 retrieval tasks spanning episodic, dialogue, semantic, and procedural memory.',
    figureCaption: 'Long-horizon memory retrieval in LMEB',
    image: { src: '/images/research/lmeb.webp', alt: 'LMEB benchmark overview from the authors, with episodic, dialogue, semantic, and procedural memory.', width: 1200, height: 660, source: 'https://github.com/KaLM-Embedding/LMEB' },
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2603.12572' },
      { label: 'Code', url: 'https://github.com/KaLM-Embedding/LMEB' },
      { label: 'Project', url: 'https://kalm-embedding.github.io/LMEB.github.io/' },
    ],
  },
];
