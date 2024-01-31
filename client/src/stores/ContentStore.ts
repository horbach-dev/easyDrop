import { makeStore, TStoreType } from '$services/store'

import { TContentStore } from '$types/stores/contentStore'

const defaultState = {
  projects: null,
  airdrop_cases: null,
  video: null,
  faq: null,
  strategy: null,
  about_us: null,
  automation_page: null,
}

const ContentStore: TStoreType<TContentStore> = makeStore(defaultState, 'content')

export default ContentStore
