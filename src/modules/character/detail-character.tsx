import React, { ReactElement } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { useGetCharacterQuery } from 'src/graphql/generated/graphql'
import { colors } from 'src/theme/colors'
import { DescriptionDetail } from 'src/ui/descriptionDetail'
import { HeaderDetail } from 'src/ui/header-detail'
import { Loading } from 'src/ui/loading'

import { useFilterCharacter } from './filter-context'
import { Information } from './ui/information'
import { RenderItem } from './ui/renderItem'

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
const TextStatus = styled(Title)`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.grey[0]};
`
const TextName = styled(Title)`
  max-width: 100%;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: ${colors.greenDark};
`
const TextSpecies = styled(Title)`
  font-size: 13px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${colors.grey[5]};
`
const Subtitle = styled(TextName)`
  padding: 20px 0 9.5px 16px;
  text-align: left;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.grey[5]};
`

const ContainerItemImage = styled.View`
  position: absolute;
  top: 14px;
  left: 33%;
  z-index: 1;
  background: ${colors.grey[4]};
  border-radius: 70px;
  border-width: 5px;
  border-color: ${colors.grey[1]};
  width: 140px;
  height: 140px;
`

const ContainerHeaderImage = styled.View`
  background: ${colors.grey[1]};
`
const ImageItem = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  position: absolute;
`
const DescriptionImage = styled.View`
  align-items: center;
  margin-top: 90px;
  margin-bottom: 20px;
`
const ContainerInfo = styled.View`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: ${colors.grey[2]};
`
const ContainerEpisode = styled(ContainerInfo)`
  border-bottom-width: 0px;
  margin-bottom: 100px;
`

export const DetailCharacter = (): ReactElement => {
  const { idDetail } = useFilterCharacter()
  const { data, loading } = useGetCharacterQuery({
    variables: {
      id: idDetail,
    },
  })
  const result = data?.character

  return (
    <SafeAreaView>
      {loading && <Loading />}

      {!loading && (
        <View>
          <HeaderDetail title={result?.name} />
          <ScrollView>
            <ContainerHeaderImage>
              <Image
                style={{ width: '100%' }}
                source={require('assets/images/headerDetail.png')}
              />

              <ContainerItemImage>
                <ImageItem source={{ uri: result?.image }} />
              </ContainerItemImage>
              <DescriptionDetail
                marginTop={90}
                status={result?.status}
                name={result?.name}
                species={result?.species}
              />
            </ContainerHeaderImage>

            <Subtitle>Informations</Subtitle>

            <ContainerInfo>
              <Information title="Gender" description={result?.gender} />

              <Information title="Origin" description={result?.origin.name} />

              <Information title="Type" description={result?.type} />

              <Information
                title="Location"
                description={result?.location.name}
                isLast={true}
              />
            </ContainerInfo>

            <Subtitle>Episodes</Subtitle>

            <ContainerEpisode>
              {result?.episode.map((item, index) => (
                <RenderItem
                  key={item.id}
                  episode={item.episode}
                  name={item.name}
                  date={item.air_date}
                  isLast={result?.episode.length - 1 === index}
                />
              ))}
            </ContainerEpisode>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  )
}
