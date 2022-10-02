import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    Tabs,
    TabList,
    Tab,
    Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import nyanCat from './assets/nyan-cat.gif';

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                     <Image
                       src={nyanCat}
                       width={'150px'}
                       alt='mew'
                       objectFit='cover'
                     />
                </Box>


                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                    <Tabs variant='line' colorScheme='purple'>
                                        <TabList>
                                            <Tab as={Link} to="/">
                                                Home
                                            </Tab>
                                            <Tab as={Link} to="/secret">
                                                Secret
                                            </Tab>
                                        </TabList>
                                    </Tabs>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}