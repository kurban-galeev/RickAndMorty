import { gql } from '@apollo/client'

export const InfoField = gql`
  fragment info on Info {
    pages
    next
  }
`

export const LOCATION_TYPE = gql`
  query getLocationsTYPE(
    $name: String
    $page: Int
    $status: String
    $gender: String
    $species: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        gender: $gender
        species: $species
      }
    ) {
      info {
        pages
        next
      }
      results {
        name
        image
        id
        status
      }
    }
  }
`
