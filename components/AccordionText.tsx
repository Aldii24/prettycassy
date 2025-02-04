import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "item-1",
    question: "Apakah pacarku cantik?",
    answer:
      "Jelas dong, jelas banget, jelas sekali, jelas betul CANTIKKK. CANTIKNYA PAKE BANGETTT.",
  },
  {
    id: "item-2",
    question: "Apakah pacarku lucu?",
    answer:
      "Gausa ditanya lagi kali ya, LUCU BANGET KAYA ANAK KECIK YANG MASI BAU BEDAK BAYI 🥰.",
  },
  {
    id: "item-3",
    question: "Apakah pacarku imut?",
    answer: "YA IMUT",
  },
];

const AccordionText = () => {
  return (
    <Accordion
      className="max-w-[450px] max-h-[800px]"
      type="single"
      collapsible
    >
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionText;
