import { createSectionStyles } from "./SectiontStyles";
import { FunctionComponent } from 'react';
export interface SectionProps {
  isSecondary: Boolean,
  children: React.ReactNode
}

export const Section:FunctionComponent<SectionProps> = ({isSecondary, children}) => {
  const sectionStyles = createSectionStyles(isSecondary);
  return <div className={sectionStyles}>{children}</div>;
};
