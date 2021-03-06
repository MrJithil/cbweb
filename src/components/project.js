/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Box, Flex, P } from "bricks"
import PlainLink from "./link"
import NonStretchedImage from "./nonStretchedImage"
import Title from './title'

export default ({ title, image, description, link, reverse = false }) => (
  <Flex
    flexWrap="wrap"
    py={[1, 3]}
    flexDirection={
      reverse ? "row-reverse" : "row"
    }
  >
    <Box width={[1, '43%']}>
      <PlainLink to={link}>
        <NonStretchedImage alt={title} fluid={image} />
      </PlainLink>
    </Box>
    <Box width={[0, '14%']} />
    <Flex
      flexDirection="column"
      width={[1, '43%']}
      order={[0, 1]}
      mt={[1, 0]}
      justifyContent="center"
    >
      <PlainLink to={link}>
        <Title>{title}</Title>
      </PlainLink>

      <Box mt={[1, 2]}>
        <P>{description}</P>
      </Box>
    </Flex>
  </Flex>
)
