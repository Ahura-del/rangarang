
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { MdChevronLeft } from "react-icons/md";
import QandAData from "../../public/Data/QandA.json";
import type{ QandA } from "@/types/qanda";
import { FC } from "react";


const QandA:FC = () => {
  return (
    <section className="py-4">
      <div className="px-2 lg:max-w-4xl xl:max-w-6xl mx-auto overflow-hidden">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-semibold text-red-400 text-right mb-5 md:mb-4">
            سوالات متداول
          </h2>
          <Button variant="link" className="p-0 text-sm">
            لیست سوالات
            <MdChevronLeft />
          </Button>
        </div>
        <div>
          <Accordion type="single" collapsible dir="rtl">
            {QandAData.map((q:QandA) => (
              <AccordionItem value={`item-${q.id}`} key={q.id}>
                <AccordionTrigger>{q.quastion}</AccordionTrigger>
                <AccordionContent>{q.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QandA;
