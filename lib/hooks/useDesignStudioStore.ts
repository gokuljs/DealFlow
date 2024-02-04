import { create } from 'zustand';

type designStudioValueProps = {
    profileImageUrl?: String;
    themeColor: String;
    displayPersonalName: boolean;
    displayCompanyName: boolean;
};

type designStudioProps = {
    value: designStudioValueProps;
    update: (value: designStudioValueProps) => void;
};

export const useDesignStudio = create<designStudioProps>((set) => ({
    value: {
        profileImageUrl: '',
        themeColor: '#C655CE',
        displayPersonalName: true,
        displayCompanyName: false
    },
    update: (value: designStudioValueProps) => set({ value: value })
}));
