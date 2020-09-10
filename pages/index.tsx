import { useRouter, withRouter } from "next/router";
import { Heading, Link, Stack, Flex, Box, SimpleGrid,Text } from "@chakra-ui/core";
import axios from 'axios';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";

const HomeX = ({ posts }) => {
  const { query: { username, password } } = useRouter()
  return (
    <>
      <SimpleGrid columns={[1,null,2,4]} spacing="40px">
        {posts.map((user, index) => (
          <Box shadow="md" borderWidth="1px" p={5}>
            <div key={index}>
            <Heading fontSize="xl">{user.title}</Heading>
              <Text mt={4}>{user.body}</Text>
            </div>
          </Box>

        ))}
      </SimpleGrid>
    </>
  )
}

HomeX.getInitialProps = async (ctx) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const json = await res.data
  return { posts: json }
}

export default HomeX;