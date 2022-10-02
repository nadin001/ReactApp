import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react';
import cat2 from './assets/cat2.webp';
import Projects from './Projects';

function Home() {
    return (
        <Container maxW={'5xl'} py={12} className='content'>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'purple.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        p={2}
                        alignSelf={'flex-start'}
                        >
                        About me
                    </Text>
                    <Heading fontFamily={'Work Sans'}>
                        Hi, my name is Nadia
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'} fontFamily={'Work Sans'}>
                        I study at MTUCI at the faculty of Information Technology.
                        I dream of becoming a programmer in the future, so be sure to check out my other projects :D
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={cat2}
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
            <Projects />
        </Container>
    );
}

export default Home;
