import { createSectionStyles } from "./SectiontStyles";
import { FunctionComponent} from 'react';

export interface SectionProps {
  isSecondary: Boolean,
  children: React.ReactNode,
  sectionId: string
}

export const Section: FunctionComponent<SectionProps> = ({ isSecondary, children, sectionId }) => {
  const sectionStyles = createSectionStyles(isSecondary);
  return <div className={sectionStyles} id={sectionId}>
    {children}
  </div>;
};
