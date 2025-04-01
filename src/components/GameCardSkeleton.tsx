import { Card, CardBody, Skeleton, SkeletonText, Flex, Box, HStack } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Image Skeleton - matches GameCard's image container */}
      <Skeleton height="200px" width="100%" />
      
      <CardBody flex={1} display="flex" flexDirection="column" p={3}>
        <Flex direction="column" height="100%">
          {/* Title Skeleton - matches heading */}
          <SkeletonText 
            noOfLines={2} 
            mb={2} 
            spacing="2" 
            skeletonHeight="4" 
            flexShrink={0}
          />
          
          {/* Spacer - matches GameCard layout */}
          <Box flex={1} minHeight="20px" />
          
          {/* Bottom row skeleton - matches icons and score */}
          <HStack justifyContent="space-between" alignItems="center" mt={2}>
            <HStack spacing={2}>
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} boxSize="16px" borderRadius="full" />
              ))}
            </HStack>
            <Skeleton width="30px" height="20px" />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;