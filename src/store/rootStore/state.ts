export type RootState = {
  modals: string[]
  currentOpenModal: null | string
}
export const getInitialState = (): RootState => ({
  modals: [],
  currentOpenModal: null,
})

export const state: RootState = getInitialState()
