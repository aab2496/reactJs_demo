import { createState } from "@hookstate/core"

export const initial = {
    frontId: {},
    backId: {},
    loading: false
}

const store = createState(initial)

export default store