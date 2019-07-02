import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export class Launches extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Launches
