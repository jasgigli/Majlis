// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Avatar,
//   IconButton,
//   Image,
//   Button,
// } from "@chakra-ui/react";
// import { BsThreeDotsVertical } from "react-icons/bs";

// import { BiLike, BiChat, BiShare } from "react-icons/bi";

// const OrganizationMemberCard = ({ name, role, description, imageSrc }) => {
//   return (
//     <Box
//       maxW="md"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="md"
//     >
//       <Flex spacing="4" alignItems="center" p={4}>
//         <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
//           <Avatar name={name} src={imageSrc} />

//           <Box>
//             <Heading size="sm">{name}</Heading>
//             <Text>{role}</Text>
//           </Box>
//         </Flex>
//         <IconButton
//           variant="ghost"
//           colorScheme="gray"
//           aria-label="See menu"
//           icon={<BsThreeDotsVertical />}
//         />
//       </Flex>
//       <Box p={4}>
//         <Text>{description}</Text>
//       </Box>
//       <Image objectFit="cover" src={imageSrc} alt={name} />
//       <Flex justify="space-between" flexWrap="wrap" p={4}>
//         <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
//           Like
//         </Button>
//         <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
//           Comment
//         </Button>
//         <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
//           Share
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default OrganizationMemberCard;
