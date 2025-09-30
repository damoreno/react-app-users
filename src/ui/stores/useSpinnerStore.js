import {create} from 'zustand'

const useSpinnerStore = create((set) => ({  
    showSpinner: false,
    showSpinnerLogin: false,
    startSpinner: () => set({showSpinner: true}),
    stopSpinner: () => set({showSpinner: false}),
    
    startSpinnerLogin: () => set({showSpinnerLogin: true}),
    stopSpinnerLogin: () => set({showSpinnerLogin: false})

}))

export default useSpinnerStore;