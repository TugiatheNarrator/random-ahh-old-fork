import { SITE_URL } from '@/data/metadata'
import KronosLayout from '@/layouts/kronos'
import { ROUTES } from '@/utils/routes'
import { BoxProps, Stack, StackProps, useSlotRecipe } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

/**
 * @name IslandOperationsPage
 *
 * @description
 * Renders the final design page for 67, part of the Brainrot project.
 *
 * @author Giuseppe Del Campo
 */
const IslandOperationsPage = () => {
  const styles = useSlotRecipe({ key: 'islandOperationsPage' })({}) as Record<string, BoxProps & StackProps>

  const title = '67 | Syndrome Main Computer'
  const description = `Explore the final iteration of Brainrot, the core autonomous unit of the Brainrot project. Engineered for destruction of all future Generations.`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${SITE_URL}${ROUTES.ISLAND_OPERATIONS}`,
          images: [
            {
              url: '/images/seo/67.png',
              alt: title,
              width: 1239,
              height: 630,
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Stack {...styles.container}>
        <KronosLayout />
      </Stack>
    </>
  )
}

export default IslandOperationsPage
