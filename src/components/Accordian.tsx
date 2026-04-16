import React, { useState } from "react";
import type { AccordionProps } from "./types";
import "./Accordian.css";

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {item.title}
            </div>

            {isOpen && <div className="accordion-content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
