/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComplianceChecker = /* GraphQL */ `
  query GetComplianceChecker($id: ID!) {
    getComplianceChecker(id: $id) {
      id
      humanOrNot
      entity_interaction
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComplianceCheckers = /* GraphQL */ `
  query ListComplianceCheckers(
    $filter: ModelComplianceCheckerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComplianceCheckers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        humanOrNot
        entity_interaction
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComplianceCheckers = /* GraphQL */ `
  query SyncComplianceCheckers(
    $filter: ModelComplianceCheckerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComplianceCheckers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        humanOrNot
        entity_interaction
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStructureChecker = /* GraphQL */ `
  query GetStructureChecker($id: ID!) {
    getStructureChecker(id: $id) {
      id
      input
      output
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStructureCheckers = /* GraphQL */ `
  query ListStructureCheckers(
    $filter: ModelStructureCheckerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStructureCheckers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        input
        output
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStructureCheckers = /* GraphQL */ `
  query SyncStructureCheckers(
    $filter: ModelStructureCheckerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStructureCheckers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        input
        output
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
