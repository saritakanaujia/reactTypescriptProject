export interface AccordianItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordianItem[];
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
}
