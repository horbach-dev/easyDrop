type TTable = {
  header: any,
  content: any
}

export type TContentStore = {
  table: null | TTable,
  projects: null | any[],
  airdrop_cases: null | any[],
  video: null | {
    link: string,
    image: string,
  },
  strategy: null | string[]
  faq: null | {
    title: string,
    desc: string
  }[],
  about_us: any
  automation_page: any
}
