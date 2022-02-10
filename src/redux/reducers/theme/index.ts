const INITIAL_STATE = 'light'

// eslint-disable-next-line default-param-last
export default function reducer(state: string = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'ADD_THEME':
      return state
    default:
      return state
  }
}
