export interface StackProps {
  children: (zIndex: number) => React.ReactNode;
  value?: number;
}
