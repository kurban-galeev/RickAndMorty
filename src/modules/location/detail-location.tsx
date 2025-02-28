import React, { ReactElement } from 'react'
import { FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { noop } from 'lodash'
import styled from 'styled-components/native'

import { useGetLocationQuery } from 'src/graphql/generated/graphql'
import { colors } from 'src/theme/colors'
import { DescriptionDetail } from 'src/ui/descriptionDetail'
import { HeaderDetail } from 'src/ui/header-detail'
import { ItemImageAndTitle } from 'src/ui/item-image-and-title'
import { Loading } from 'src/ui/loading'

import { useFilterLocation } from './filter-context'

const Title = styled.Text`
  max-width: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${colors.greenDark};
`
const TextName = styled(Title)`
  max-width: 100%;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: ${colors.greenDark};
`

const Subtitle = styled(TextName)`
  padding: 20px 0 9.5px 16px;
  text-align: left;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.grey[5]};
`

const ContainerHeaderImage = styled.View`
  background: ${colors.grey[1]};
`
const ContainerEpisode = styled.View`
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 15px;
`

export const DetailLocation = (): ReactElement => {
  const { idLocation } = useFilterLocation()
  const { data, loading } = useGetLocationQuery({
    variables: {
      id: idLocation,
    },
  })
  const result = data?.location

  return (
    <SafeAreaView>
      {loading && <Loading />}

      {!loading && (
        <View style={{ marginBottom: 400 }}>
          <HeaderDetail title={result?.name} />

          <ContainerHeaderImage>
            <DescriptionDetail
              marginTop={20}
              status={result?.type}
              name={result?.name}
              species={result?.dimension}
            />
          </ContainerHeaderImage>

          <Subtitle>Residents</Subtitle>

          <FlatList
            data={result?.residents}
            numColumns={2}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <ContainerEpisode>
                <ItemImageAndTitle
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  id={item.id}
                />
              </ContainerEpisode>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  )
}
