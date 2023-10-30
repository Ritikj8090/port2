import { create } from 'zustand'

const Store = create((set) => ({
  ProjectId: null,
  FetchProjectId: async (id) => {
    set({ProjectId: id})
    //console.log(id)
  }
}))

export default Store