import { gql } from '@apollo/client'

export const InfoField = gql`
  fragment info on Info {
    pages
    next
  }
`

export const CHARACTERS = gql`
  query getCharacters(
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
        species
      }
    }
  }
`
export const CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        id
        name
        episode
        air_date
      }
      created
    }
  }
`
export const LOCATIONS = gql`
  query getLocations(
    $name: String
    $page: Int
    $type: String
    $dimension: String
  ) {
    locations(
      page: $page
      filter: { name: $name, type: $type, dimension: $dimension }
    ) {
      info {
        pages
        next
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`
export const LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`
