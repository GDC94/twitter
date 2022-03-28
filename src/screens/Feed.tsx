import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Icon from '@chakra-ui/icon'
import { Image } from '@chakra-ui/image'
import { Box, Divider, Stack, StackDivider, Text } from '@chakra-ui/layout'
import { CircularProgress } from '@chakra-ui/progress'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton'
import { Textarea } from '@chakra-ui/textarea'
import React, { useState } from 'react'
import { BsImage, BsPlus, BsStar } from 'react-icons/bs'
import profile from '../images/profile.png'
import { AiOutlineCalendar, AiOutlineGif, AiOutlineSmile } from 'react-icons/ai'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { AnimatePresence, motion } from 'framer-motion'
import { serializeStyles } from '@emotion/serialize'

const FeedScreen: React.FC = () => {
    const progressColor = useColorModeValue('primary.100', 'whiteAlpha.300')

    const [count, setCount] = useState<number>(1)
    const tweets = React.useMemo(
        () => new Array(count).fill(true).map((_, index) => index),
        [count]
    )
    return (
        <Stack direction="row" divider={<StackDivider />} spacing={0}>
            <Stack
                divider={<StackDivider />}
                spacing={0}
                width="100%"
                maxWidth={600}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingX={4}
                    paddingY={2}
                >
                    <Text fontWeight="bold" fontSize="xl">
                        Inicio
                    </Text>
                    <Icon color="primary.500" as={BsStar} />
                </Stack>
                <Stack direction="row" paddingX={3.5} paddingY={2} spacing={3}>
                    <Image
                        src={profile}
                        borderRadius="full"
                        boxSize="55px"
                        objectFit="cover"
                    />
                    <Stack divider={<StackDivider />} width="100%">
                        <Textarea
                            fontWeight="500"
                            fontSize="lg"
                            variant="unstyled"
                        ></Textarea>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction="row" color="primary.500">
                                <Icon as={BsImage} height={6} width={6} />
                                <Icon as={AiOutlineGif} height={6} width={6} />
                                <Icon
                                    as={RiBarChartHorizontalLine}
                                    height={6}
                                    width={6}
                                />
                                <Icon
                                    as={AiOutlineSmile}
                                    height={6}
                                    width={6}
                                />
                                <Icon
                                    as={AiOutlineCalendar}
                                    height={6}
                                    width={6}
                                />
                            </Stack>
                            <Stack direction="row" spacing={3}>
                                <Stack
                                    direction="row"
                                    divider={<StackDivider />}
                                    alignItems="center"
                                >
                                    <CircularProgress
                                        color="primary.500"
                                        trackColor={progressColor}
                                        value={30}
                                        size={6}
                                    ></CircularProgress>
                                    <Box
                                        cursor="pointer"
                                        as="button"
                                        alignItems="center"
                                        borderColor="primary.500"
                                        borderRadius="50%"
                                        borderWidth={1}
                                        display="flex"
                                        height={8}
                                        justifyContent="center"
                                        position="relative"
                                        width={8}
                                    >
                                        <Icon
                                            as={BsPlus}
                                            color="primary.500"
                                            height={6}
                                            position="absolute"
                                            width={6}
                                        />
                                    </Box>
                                </Stack>
                                <Button
                                    onClick={() =>
                                        setCount((count) => count + 1)
                                    }
                                    colorScheme="primary"
                                    size="lg"
                                >
                                    Twittear
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Divider borderTopWidth={6} borderBottomWidth={6} />

                <Stack
                    divider={<StackDivider />}
                    flex={1}
                    minWidth={600}
                    overflowY="auto"
                    spacing={0}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    <Stack
                        paddingY={12}
                        spacing={6}
                        maxHeight="100vh"
                        overflowY="auto"
                    >
                        <AnimatePresence>
                        {tweets.map((index) => (
                            <Stack
                                key={index}
                                direction="row"
                                onClick={() => setCount(count => count - 1)}
                                padding={4}
                                layoutId={String(index)}
                                spacing={4}
                                width="100%"
                                as={motion.div}
                                exit={{scale: 0}}
                                initial={{scale: 0}}
                                animate={{scale:1}}
                            >
                                <SkeletonCircle
                                    minHeight={12}
                                    height={12}
                                    minWidth={12}
                                    width={12}
                                />
                                <Stack spacing={4} width="100%">
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-end"
                                    >
                                        <Skeleton height={6} width="120px" />
                                        <Skeleton height={3} width="80px" />
                                    </Stack>
                                    <SkeletonText height={36} noOfLines={6} />
                                </Stack>
                            </Stack>
                        ))}
                        </AnimatePresence>
                    </Stack>
                </Stack>
            </Stack>
            <Text maxWidth={350} width="100%">
                {''}
            </Text>
        </Stack>
    )
}

export default FeedScreen
