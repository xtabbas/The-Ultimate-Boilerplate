export default function toggle (state = false, action) {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return !state
    default:
      return state
  }
}
