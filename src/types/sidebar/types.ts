export type SidebarProviderProps = {
    children?: React.ReactNode;
    expanded: boolean;
    setExpanded: (value: boolean) => void;
};

export interface SidebarProps {
    children: React.ReactNode;
}

export interface SiberItemProps {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    alert?: boolean;
}
