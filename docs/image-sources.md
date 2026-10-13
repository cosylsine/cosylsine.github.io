# Image sources

## Profile image

The owner supplied the profile image on 2026-10-12 and requested its use on the homepage. `public/images/profile.webp` preserves the full image and aspect ratio, resized to 480 × 584 pixels and encoded as WebP at quality 85 (30,298 bytes). Embedded source metadata is omitted. It is presented as the owner's chosen profile image, without claiming it depicts Jiaxin Xu. Its explicit dimensions reserve layout space before loading.

## Research figures

Prepared on 2026-10-11 from the original publications and their authors' repositories, at the request of Jiaxin Xu, a coauthor of the three papers. These are real research figures; no figure content, labels, colors, or results were redrawn or generated. All display assets preserve the original aspect ratio and were resized to 1200 pixels wide and encoded as WebP at quality 88.

| Local asset | Dimensions | Bytes | Source figure |
| --- | --- | ---: | --- |
| `public/images/research/aoeb.webp` | 1200 × 828 | 83,756 | AOEB, Figure 1: agent capabilities, corresponding retrieval tasks, and benchmark positioning |
| `public/images/research/lmeb.webp` | 1200 × 660 | 89,772 | LMEB, Figure 1: overview of four memory categories, 22 datasets, and 193 retrieval tasks |
| `public/images/research/kalm-architecture.webp` | 1200 × 232 | 35,752 | KaLM-Reranker-V1, Figure 2: encoder-decoder model architecture with compressed document representations and cross-attention |

## AOEB

- Paper: [AOEB: Benchmarking Agent-Oriented Multimodal Embeddings](https://proceedings.mlr.press/v306/zhang26hf.html).
- Original [published PDF](https://raw.githubusercontent.com/mlresearch/v306/main/assets/zhang26hf/zhang26hf.pdf).
- Extraction: first PDF page, rectangle `(306.5, 186, 542, 348.5)` in PDF points, rendered at 6× with PyMuPDF. The crop contains Figure 1 only, without the caption or surrounding paragraphs.
- Attribution: Xin Zhang, Jiaxin Xu, and coauthors, ICML 2026 / PMLR 306.
- Rights evidence: the publication's first page states copyright 2026 by the authors. [PMLR](https://proceedings.mlr.press/) states that authors retain copyright. No additional figure-specific open license was identified; this record does not invent one.

## KaLM-Reranker-V1

- Paper: [KaLM-Reranker-V1](https://arxiv.org/abs/2606.22807), version 1.
- Displayed architecture source: [Figure 2 original JPEG](https://arxiv.org/html/2606.22807v1/figure/framework.jpg).
- Attribution: Xinping Zhao, Jiaxin Xu, and coauthors, 2026.
- Processing: resize and encode only, with no crop or rearrangement. At the owner's request on 2026-10-13, Figure 2 replaces the BEIR experiment chart. The complete architecture figure and its wide aspect ratio (about 5.17:1) are preserved with `object-fit: contain`.
- Rights evidence: the [arXiv HTML](https://arxiv.org/html/2606.22807v1) labels this version with the arXiv perpetual, non-exclusive license. This grants rights to arXiv and is not a general open reuse license. The model's Apache-2.0 designation is not assumed to license paper figures. The asset is included for the coauthor's own requested research portfolio.

## LMEB

- Paper: [LMEB: Long-horizon Memory Embedding Benchmark](https://arxiv.org/abs/2603.12572).
- Repository: [KaLM-Embedding/LMEB](https://github.com/KaLM-Embedding/LMEB).
- Exact downloaded source: [`figures/fram.jpg`](https://raw.githubusercontent.com/KaLM-Embedding/LMEB/main/figures/fram.jpg), linked by the repository README. The same overview appears as Figure 1 in the paper.
- Attribution: Xinping Zhao, Xinshuo Hu, Jiaxin Xu, and coauthors, 2026.
- Processing: resize and encode only; the complete figure is retained.
- License evidence: the source repository contains an [Apache License 2.0](https://github.com/KaLM-Embedding/LMEB/blob/main/LICENSE). A verbatim copy is retained at `public/images/research/LICENSE-LMEB.txt`. No separate license override for this repository figure was found. This repository-source evidence is distinct from the paper's arXiv distribution license.

## Maintenance

The local downloaded originals and PDF page renders are in ignored `artifacts/source-assets/`. They are not part of the deployed site. Publication records link to the original papers; each thumbnail has descriptive alternative text and opens the full-size figure. On small screens, the Figure link preserves the same access. Source attribution and original figure numbers are retained here. The three displayed WebP files total 209,280 bytes (approximately 204 KiB) and load lazily. The BEIR experiment chart is no longer included in the deployed assets.
