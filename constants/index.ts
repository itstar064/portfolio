import {
  FaTelegram,
  FaYoutube,
  FaDiscord,
  FaSkype,
  FaGoogle
} from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    image: "https://techstack-generator.vercel.app/js-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "https://techstack-generator.vercel.app/ts-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "Python",
    image: "https://techstack-generator.vercel.app/python-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "https://techstack-generator.vercel.app/django-icon.svg",
    width: 65,
    height: 80,
  },

  {
    skill_name: "React",
    image: "https://techstack-generator.vercel.app/react-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "https://techstack-generator.vercel.app/redux-icon.svg",
    width: 67,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Gatsby",
    image: "https://techstack-generator.vercel.app/gatsby-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 55,
    height: 80,
  },

  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 60,
    height: 70,
  },

] as const;


export const FRONTEND_SKILL = [

  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Storybook",
    image: "https://techstack-generator.vercel.app/storybook-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Sass",
    image: "https://techstack-generator.vercel.app/sass-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 56,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "https://techstack-generator.vercel.app/github-icon.svg",
    width: 80,
    height: 60,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 50,
  },
  {
    skill_name: "Prettier",
    image: "https://techstack-generator.vercel.app/prettier-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "ESLint",
    image: "https://techstack-generator.vercel.app/eslint-icon.svg",
    width: 65,
    height: 80,
  }

] as const;

export const BACKEND_SKILL = [

  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 50,
    height: 55,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "https://techstack-generator.vercel.app/mysql-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 65,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 65,
    height: 80,
  },
  {
    skill_name: "REST API",
    image: "https://techstack-generator.vercel.app/restapi-icon.svg",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "https://techstack-generator.vercel.app/aws-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nginx",
    image: "https://techstack-generator.vercel.app/nginx-icon.svg",
    width: 75,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 60,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Docker",
    image: "https://techstack-generator.vercel.app/docker-icon.svg",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "ADCO 企業ウェブサイト",
    description:
      'ADCO向けのフルスケールWebソリューションを設計・開発。UI/UXデザイン、フロントエンド・バックエンド開発、API統合、シームレスなデプロイメントをカバー。パフォーマンス、スケーラビリティ、セキュリティに重点を置き、スムーズなユーザー体験を提供。',
    image: "/projects/1.png",
    link: "https://brandenforcers.com/",
  },
  {
    title: "子ども向け学習プラットフォーム",
    description:
      'UI/UXデザイン、フルスタック開発、デプロイメントを含む完全なeラーニングプラットフォームを設計・開発。魅力的でインタラクティブなユーザー体験を提供し、シームレスな機能性とスケーラビリティを確保。',
    image: "/projects/5.png",
    link: "https://example.com",
  },
  {
    title: "Discord ボット開発",
    description:
      'シームレスなAPI統合、カスタムコマンド、自動化を備えた強力なDiscordボットを開発。直感的で効率的なユーザー体験のためのフロントエンド・バックエンド開発によるフル機能UIを構築。',
    image: "/projects/6.png",
    link: "https://fullstackdev7dennis.vercel.app",
  },
  {
    title: "カジノベッティングプラットフォーム",
    description:
      'フルスタック開発、シームレスなAPI統合、安全な認証のためのOAuthを備えた安全でスケーラブルなカジノベッティングサイトを開発。スピード、信頼性、魅力的なユーザー体験を重視。',
    image: "/projects/2.png",
    link: "https://example.com",
  },
  {
    title: "専門知識と開発",
    description:
      'スケーラビリティ、パフォーマンス、セキュリティに重点を置いたWebサイトとビジネスアプリケーションの構築経験。フルスタック開発に精通し、フロントエンド・バックエンド両方のクリーンで効率的なコードを記述。シームレスな機能性と信頼性を確保するためのソフトウェア設計、テスト、デバッグに積極的に参加。',
    image: "/projects/3.png",
    link: "https://fullstackdev7dennis.vercel.app",
  },
  {
    title: "SolView プラットフォーム",
    description:
      'ユーザーがSolView Solanaトークンを購入、販売、ステーキングできる分散型プラットフォーム。シームレスな取引のためのReact-TradingViewウィジェットで構築。ステーキング報酬はAPYを使用して計算され、複利間隔に基づく年間収益予測を反映。ユーザーがローンチフェーズ中にトークンを安全に購入できるローンチパッドスマートコントラクトを統合。',
    image: "/projects/4.png",
    link: "https://fullstackdev7dennis.vercel.app",
  }
] as const;

export const TYPED_STRINGS = [
  "デザインと開発を行います",
  "モダンなフロントエンドアプリを開発します",
  "ダイナミックなユーザー体験をデザインします",
  "モーションをデザイン・開発します",
];

export const SOCIALS = [
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "https://t.me/StellaRay777",
  },
  {
    name: "Skype",
    icon: FaSkype,
    link: "https://join.skype.com/invite/x6C2Nf1SDyrp",
  },
  {
    name: "Discord",
    icon: RxGithubLogo,
    link: "https://github.com/CodeByStella",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Telegram",
        icon: FaTelegram,
        link: "https://t.me/+Fa5kTluTaD9jNjk0",
      },
      {
        name: "Discord",
        icon: FaDiscord,
        link: "https://discord.gg/huYgwCPeeP"
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/orgs/community/discussions/155079",
      },
    ],
  },
  // {
  //   title: "Social Media",
  //   data: [
  //     {
  //       name: "Telegram",
  //       icon: FaTelegram,
  //       link: "https://t.me/superdev",
  //     },
  //     {
  //       name: "Discord",
  //       icon: FaDiscord,
  //       link: "https://discord.gg/gnfMx4uY",
  //     },
  //     {
  //       name: "Skype",
  //       icon: FaSkype,
  //       link: "https://join.skype.com/invite/pTDpQyK9lx5a",
  //     },
  //     // {
  //     //   name: "Linkedin",
  //     //   icon: RxLinkedinLogo,
  //     //   link: "https://linkedin.com",
  //     // },
  //   ],
  // },
  // {
  //   title: "About",
  //   data: [
  //     {
  //       name: "Become Sponsor",
  //       icon: null,
  //       link: "https://youtube.com",
  //     },
  //     {
  //       name: "Learning about me",
  //       icon: null,
  //       link: "https://example.com",
  //     },
  //     {
  //       name: "Contact Me",
  //       icon: null,
  //       link: "mailto:hiwebdev0026@gmail.com",
  //     },
  //   ],
  // },
] as const;

export const NAV_LINKS = [
  {
    title: "私について",
    link: "#about-me",
  },
  {
    title: "スキル",
    link: "#skills",
  },
  {
    title: "プロジェクト",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/CodeByStella/Stella-Portfolio",
};
