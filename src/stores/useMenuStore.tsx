import create from 'zustand'

interface menu {
    visible: boolean
    setVisible: (visible: boolean) => void
}

export const useMenuStore = create<menu>((set, get) => (
    {
        visible: false,
        setVisible: (visible: boolean) => {
            set({visible})
        },
    }
))
