// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" minH="100vh" p={10}>
        <VStack align="flex-start" spacing={8} w={{ base: "full", md: "50%" }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Elevate Your Business with Our Cloud Solutions
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Discover the power of cloud computing with our scalable, secure, and efficient SaaS solutions designed to drive growth and innovation.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Box w={{ base: "full", md: "50%" }} mt={{ base: 10, md: 0 }} align="center">
          <Image src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3MTMyNjcxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxShadow="xl" />
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" bg="blue.600" color="white" py={10}>
        <Heading as="h2" size="lg" mb={5}>
          Why Choose Us?
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box textAlign="center">
            <FaCloud size="3em" />
            <Text mt={3} fontSize="lg" fontWeight="semibold">
              Reliable Cloud Infrastructure
            </Text>
            <Text mt={2}>Our robust cloud infrastructure ensures high availability and performance.</Text>
          </Box>
          <Box textAlign="center">
            <FaRocket size="3em" />
            <Text mt={3} fontSize="lg" fontWeight="semibold">
              Fast and Scalable
            </Text>
            <Text mt={2}>Scale your operations seamlessly with our rapid deployment capabilities.</Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
