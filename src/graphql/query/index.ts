import { gql } from '@apollo/client'

export const InfoField = gql`
  fragment info on Info {
    pages
    next
  }
`

export const LOCATION_TYPE = gql`
  query getLocationsTYPE($name: String, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
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
