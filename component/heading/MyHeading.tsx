import { Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface MyHeadingProps {
  title: string;
  subTitle?: string;
  align?: string;
  headColor?: string;
  paraColor?: string;
  titleFontSize?: string;
}

const MyHeading: React.FC<MyHeadingProps> = (props) => {
  const {
    title,
    subTitle,
    align = 'center',
    headColor = 'brand.semiblack',
    paraColor = 'brand.darkgrey',
    titleFontSize,
  } = props;
  return (
    <VStack alignItems={align}>
      <Heading color={headColor} fontSize={titleFontSize}>
        {title}
      </Heading>
      <Text color={paraColor}>{subTitle}</Text>
    </VStack>
  );
};

export default MyHeading;
