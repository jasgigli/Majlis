import { Box, Heading } from "@chakra-ui/react";
import MyAccordion from "./MyAccordion";

const QuestionsAnswersSection = () => {
  return (
    <Box p={8} bg="gray.100" borderRadius="lg" boxShadow="md" textAlign="right">
      <Heading mb={4}> سوالات اور جوابات</Heading>
      <MyAccordion />
    </Box>
  );
};

export default QuestionsAnswersSection;
