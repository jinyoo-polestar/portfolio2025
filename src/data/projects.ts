import { StaticImageData } from "next/image";

import derma42Thumb from "#/img_thumb_derma42.jpg";
import younglimThumb from "#/img_thumb_younglim.jpg";
import apfelThumb from "#/img_thumb_apfel.jpg";
import ooosThumb from "#/img_thumb_ooos.jpg";
import highendtaxThumb from "#/img_thumb_highendtax.jpg";
import widmiceThumb from "#/img_thumb_widmice.jpg";
import adlerThumb from "#/img_thumb_adler.jpg";

type Skill = {
  name: string;
  icon: string;
};

type Built = {
  title: string;
  desc: string;
};

type Project = {
  id: number;
  name: string;
  enName: string;
  url: string;
  mockup: { pc: string; mo: string };
  overview: string;
  period: string;
  role: string[];
  thumbnail: StaticImageData;
  skills: Skill[];
  built: Built[];
  result: string;
  learning: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "더마포티투 쇼핑몰 구축",
    enName: "derma42",
    url: "https://www.derma42.com",
    thumbnail: derma42Thumb,
    mockup: {
      pc: "../../../public/img_pc_derma42.jpg",
      mo: "../../../public/img_mo_derma42.jpg",
    },
    overview:
      "derma42는 피부 케어 중심의 코스메틱 브랜드로 Cafe24 기반 쇼핑몰을 초기 구축한 프로젝트입니다. 전체 페이지 퍼블리싱과 메인·브랜드 페이지 스크롤 인터랙션을 구현했습니다.",
    period: "2025.11 ~ 2025.12",
    role: [
      "프로젝트 초기 환경 세팅 및 퍼블리싱",
      "스크롤 기반 인터랙션 구현",
      "SEO 등록 및 운영 가이드 작성",
      "고객사 커뮤니케이션 및 수정 대응",
    ],
    skills: [
      { name: "Cafe24", icon: "" },
      { name: "jQuery", icon: "" },
      { name: "GSAP", icon: "" },
      { name: "Figma", icon: "" },
    ],
    built: [
      {
        title: "전체 50+개 서브페이지 퍼블리싱",
        desc: "PC/MO 환경에 맞춰 전체 50+개 서브페이지를 반응형으로 퍼블리싱",
      },
      {
        title: "인터랙션 구현",
        desc: "GSAP를 활용한 스크롤 기반 인터랙션을 메인/브랜드 페이지에 적용",
      },
      {
        title: "운영 가이드 작성 및 고객 대응",
        desc: "SEO, 게시판 관리, 이미지 교체 등 운영 가이드 작성 및 고객 요청 반영",
      },
      {
        title: "디자인 시스템 적용",
        desc: "컴포넌트, 색상, 타이포그래피 등 디자인 시스템을 적용해 일관된 UI 구현",
      },
      {
        title: "크로스 브라우징 완료",
        desc: "Chrome, Safari, Edge, 모바일 브라우저 등 다양한 환경에서 레이아웃과 기능 호환성 검증",
      },
    ],
    result: "",
    learning: "",
  },
  {
    id: 2,
    name: "영림 웹사이트 구축",
    enName: "younglim",
    url: "https://www.ylchem.co.kr",
    thumbnail: younglimThumb,
    mockup: {
      pc: "../../../public/img_pc_younglim.jpg",
      mo: "../../../public/img_mo_younglim.jpg",
    },
    overview:
      "영림프라임창호는 프리미엄 창호 브랜드로, 웹사이트 리뉴얼 프로젝트에서 전체 페이지 퍼블리싱과 반응형 UI 구현, 스크롤 인터랙션 설계, 빌더를 활용한 관리자 페이지 제작을 수행했습니다.",
    period: "2025.07 ~ 2025.10",
    role: [
      "PHP · MySQL 기반 웹사이트 퍼블리싱",
      "스크롤 기반 인터랙션 구현",
      "SEO 등록 및 운영 가이드 작성",
      "고객사 커뮤니케이션 및 수정 대응",
    ],
    skills: [
      { name: "PHP", icon: "" },
      { name: "MySQL", icon: "" },
      { name: "GSAP", icon: "" },
      { name: "Figma", icon: "" },
    ],
    built: [
      {
        title: "반응형 퍼블리싱",
        desc: "PC/MO 환경에 맞춘 반응형 퍼블리싱",
      },
      {
        title: "인터랙션 구현",
        desc: "GSAP를 활용한 스크롤 기반 인터랙션을 전체 페이지에 적용",
      },
      {
        title: "빌더 기반 웹사이트/관리자페이지 구축",
        desc: "개발 기간 단축 및 고객사 입장에서 사용하기 쉬운 UI 구현",
      },
      {
        title: "콘텐츠 관리 가능한 관리자페이지 구축",
        desc: "제품 등록/삭제/수정 및 이미지/텍스트 교체가 가능한 관리자페이지 구축",
      },
      {
        title: "운영 가이드 작성 및 고객 대응",
        desc: "이미지 및 텍스트 교체 등 운영 가이드 작성과 고객 요청 반영",
      },
      {
        title: "디자인 시스템 적용",
        desc: "컴포넌트, 색상, 타이포그래피 등 디자인 시스템을 적용해 일관된 UI 구현",
      },
    ],
    result: "",
    learning: "",
  },

  {
    id: 3,
    name: "아펠코스메틱 쇼핑몰 구축",
    enName: "apfel",
    url: "https://www.apfelcosmetics.co.kr",
    thumbnail: apfelThumb,
    mockup: {
      pc: "../../../public/img_pc_apfel.jpg",
      mo: "../../../public/img_mo_apfel.jpg",
    },
    overview:
      "apfel은 프리미엄 스킨케어 브랜드로 Cafe24 기반 쇼핑몰을 초기 구축한 프로젝트입니다. 전체 페이지 퍼블리싱과 메인·브랜드 페이지 스크롤 인터랙션을 구현했습니다.",
    period: "2025.04 ~ 2025.05",
    role: [
      "프로젝트 초기 환경 세팅 및 퍼블리싱",
      "스크롤 기반 인터랙션 구현",
      "SEO 등록 및 운영 가이드 작성",
      "고객사 커뮤니케이션 및 수정 대응",
    ],
    skills: [
      { name: "Cafe24", icon: "" },
      { name: "jQuery", icon: "" },
      { name: "GSAP", icon: "" },
      { name: "Figma", icon: "" },
    ],
    built: [
      {
        title: "전체 50+개 서브페이지 퍼블리싱",
        desc: "기본 템플릿 없는 상태에서 전체 50+개 서브페이지를 반응형으로 퍼블리싱",
      },
      {
        title: "인터랙션 구현",
        desc: "GSAP를 활용한 스크롤 기반 인터랙션을 메인/브랜드 및 서브 페이지에 적용",
      },
      {
        title: "배너/콘텐츠 관리 최적화",
        desc: "카페24 기반 배너 매니저 등을 활용해 이미지와 텍스트를 쉽게 교체할 수 있도록 설정",
      },
      {
        title: "운영 가이드 작성 및 고객 대응",
        desc: "게시판 관리, 이미지 교체 등 운영 가이드 작성 및 고객 요청 사항 반영",
      },
      {
        title: "디자인 시스템 적용",
        desc: "컴포넌트, 색상, 타이포그래피 등 디자인 시스템을 적용해 일관된 UI 구축",
      },
      {
        title: "크로스 브라우징 완료",
        desc: "Chrome, Safari, Edge, 모바일 브라우저 등 다양한 환경에서 호환성 검증",
      },
    ],
    result: "",
    learning: "",
  },
  {
    id: 4,
    name: "오오오에스 웹사이트 리뉴얼",
    enName: "ooos",
    url: "https://www.ooosdesign.com",
    thumbnail: ooosThumb,
    mockup: {
      pc: "../../../public/img_pc_ooos.jpg",
      mo: "../../../public/img_mo_ooos.jpg",
    },
    overview:
      "오오오에스 웹사이트 리뉴얼은 자사 브랜드 아이덴티티 강화를 위해 진행된 프로젝트입니다. Next.js 기반으로 Tailwind CSS를 활용해 전체 페이지 디자인과 인터랙션을 구현했습니다.",
    period: "2025.05 ~ 2025.06",
    role: [
      "Next.js / React 기반 퍼블리싱",
      "Tailwind CSS 활용 반응형 UI 구현",
      "스크롤 기반 인터랙션 구현",
    ],
    skills: [
      { name: "Next.js", icon: "" },
      { name: "React", icon: "" },
      { name: "Tailwind CSS", icon: "" },
      { name: "GSAP", icon: "" },
      { name: "Figma", icon: "" },
    ],
    built: [
      {
        title: "전체 페이지 퍼블리싱",
        desc: "기존 홈페이지 구조를 재정비하고 PC/MO 환경에 맞춰 반응형으로 퍼블리싱",
      },
      {
        title: "디자인 시스템 적용",
        desc: "컴포넌트, 색상, 타이포그래피 등 일관된 디자인 시스템 적용",
      },
      {
        title: "스크롤 기반 인터랙션 구현",
        desc: "메인 및 서브 페이지에 자연스러운 스크롤 애니메이션 적용",
      },
      {
        title: "크로스 브라우징 / 반응형 검증",
        desc: "다양한 브라우저 및 디바이스 환경에서 호환성 검증",
      },
    ],
    result: "",
    learning: "",
  },
  {
    id: 5,
    name: "하이엔드택스 웹사이트 구축",
    enName: "highendtax",
    url: "https://www.highendtax.co.kr",
    thumbnail: highendtaxThumb,
    mockup: {
      pc: "../../../public/img_pc_highend.jpg",
      mo: "../../../public/img_mo_highend.jpg",
    },
    overview:
      "하이엔드택스는 세무 서비스를 지원하는 회사로, 기존 웹사이트를 새롭게 리뉴얼한 프로젝트입니다. Next.js 기반으로 프로젝트 초기 구축과 퍼블리싱을 진행했습니다.",
    period: "2025.03 ~ 2025.04",
    role: [
      "프로젝트 초기 환경 세팅 및 퍼블리싱",
      "Tailwind CSS 활용 반응형 UI 구현",
      "스크롤 기반 인터랙션 구현",
    ],
    skills: [
      { name: "Next.js", icon: "" },
      { name: "React", icon: "" },
      { name: "Tailwind CSS", icon: "" },
      { name: "GSAP", icon: "" },
      { name: "Figma", icon: "" },
    ],
    built: [
      {
        title: "전체 페이지 퍼블리싱",
        desc: "기존 홈페이지 구조를 재정비하고 PC/MO 환경에 맞춰 반응형으로 퍼블리싱",
      },
      {
        title: "스크롤 기반 인터랙션 구현",
        desc: "메인/서브 페이지에서 자연스러운 스크롤 애니메이션과 모션 적용",
      },
      {
        title: "크로스 브라우징 / 반응형 검증",
        desc: "Chrome, Safari, Edge, 모바일 브라우저 등 다양한 환경에서 호환성 검증",
      },
    ],
    result: "",
    learning: "",
  },
  {
    id: 6,
    name: "위드마이스 웹사이트 구축",
    enName: "widmice",
    url: "https://www.widmice.com",
    thumbnail: widmiceThumb,
    mockup: {
      pc: "../../../public/img_pc_widmice.jpg",
      mo: "../../../public/img_mo_widmice.jpg",
    },
    overview:
      "위드마이스는 MICE(기업 행사·컨벤션) 전문 업체로, 다국어(KR·EN) 지원과 사용자 경험 강화를 위해 웹사이트를 구축한 프로젝트입니다. Next.js 기반으로 전체 페이지 퍼블리싱과 스크롤 기반 인터랙션을 구현했습니다.",
    period: "2025.02 ~ 2025.03",
    role: [
      "프로젝트 초기 환경 세팅 및 퍼블리싱",
      "KR/EN 다국어 환경 대응 및 콘텐츠 구조 설계",
      "Tailwind CSS 활용 반응형 UI 구현",
      "스크롤 기반 인터랙션 구현",
    ],
    skills: [
      { name: "Next.js", icon: "" },
      { name: "React", icon: "" },
      { name: "Tailwind CSS", icon: "" },
      { name: "GSAP", icon: "" },
      { name: "Figma", icon: "" },
    ],
    built: [
      {
        title: "전체 페이지 퍼블리싱",
        desc: "기존 홈페이지 구조를 재정비하고 PC/MO 환경에 맞춰 반응형으로 퍼블리싱",
      },
      {
        title: "스크롤 기반 인터랙션 구현",
        desc: "메인 및 서브 페이지에서 자연스러운 스크롤 애니메이션과 모션 적용",
      },
      {
        title: "다국어(KR/EN) 구조 설계",
        desc: "언어별 콘텐츠 분리 및 확장 가능한 다국어 콘텐츠 구조 설계",
      },
      {
        title: "크로스 브라우징 / 반응형 검증",
        desc: "Chrome, Safari, Edge, 모바일 브라우저 등 다양한 환경에서 호환성 검증",
      },
    ],
    result: "",
    learning: "",
  },
  {
    id: 7,
    name: "아들러",
    enName: "adler",
    url: "https://www.adler3d.com",
    thumbnail: adlerThumb,
    mockup: {
      pc: "../../../public/img_pc_adler.jpg",
      mo: "../../../public/img_mo_adler.jpg",
    },
    overview: "",
    period: "2022.06 ~ 2023.08",
    role: ["", "", ""],
    skills: [
      { name: "Next.js", icon: "" },
      { name: "React", icon: "" },
      { name: "MUI", icon: "" },
      { name: "Figma", icon: "" },
      { name: "Jira", icon: "" },
    ],
    built: [
      {
        title: "",
        desc: "",
      },
    ],
    result: "",
    learning: "",
  },
];
