import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionText = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Apakah pacarku cantik?</AccordionTrigger>
        <AccordionContent>
          Jelas dong, jelas banget, jelas sekali, jelas betul CANTIKKK.
          CANTIKNYA PAKE BANGETTT.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Apakah pacarku lucu?</AccordionTrigger>
        <AccordionContent>
          Gausa ditanya lagi kali ya, LUCU BANGET KAYA ANAK KECIK YANG MASI BAU
          BEDAK BAYI 🥰.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Apakah pacarku imut?</AccordionTrigger>
        <AccordionContent>YA IMUT</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionText;
