import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const MyAccordion = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton justifyContent="flex-start" textAlign="right">
            <Box as="span" flex="1">
              نماز کیا ہے؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="right">
          نماز اسلامی عبادت کی ایک نمائندہ ہے جو روزانہ پانچ مرتبہ کی جاتی ہے۔
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton justifyContent="flex-start" textAlign="right">
            <Box as="span" flex="1">
              روزہ کیا ہے؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="right">
          روزہ اسلامی عبادت کا ایک روزہ ہے جو رمضان المبارک مہینے میں روزانہ
          روزہ داروں کو رکھنا فرض ہے۔
        </AccordionPanel>
      </AccordionItem>

      {/* Add more questions and answers here */}
      <AccordionItem>
        <h2>
          <AccordionButton justifyContent="flex-start" textAlign="right">
            <Box as="span" flex="1">
              قرآن کیا ہے؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="right">
          قرآن مسلمانوں کی مقدس کتاب ہے، جو اللہ کے زبان سے حضرت محمد ﷺ کے زمانے
          میں نازل ہوئی۔
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton justifyContent="flex-start" textAlign="right">
            <Box as="span" flex="1">
              رسول اللہ صلی اللہ علیہ وآلہ وسلم کیا ہیں؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="right">
          حضرت محمد ﷺ، اللہ کے آخری رسول اور نبی ہیں۔
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton justifyContent="flex-start" textAlign="right">
            <Box as="span" flex="1">
              زکواۃ کیا ہے؟
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign="right">
          زکواۃ ایک اسلامی عبادت ہے جو مالی حقوق کی طور پر اللہ کے لئے خرچ کرنا
          ہے۔
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordion;
