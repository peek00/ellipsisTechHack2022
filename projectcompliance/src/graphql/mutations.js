/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComplianceChecker = /* GraphQL */ `
  mutation CreateComplianceChecker(
    $input: CreateComplianceCheckerInput!
    $condition: ModelComplianceCheckerConditionInput
  ) {
    createComplianceChecker(input: $input, condition: $condition) {
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
export const updateComplianceChecker = /* GraphQL */ `
  mutation UpdateComplianceChecker(
    $input: UpdateComplianceCheckerInput!
    $condition: ModelComplianceCheckerConditionInput
  ) {
    updateComplianceChecker(input: $input, condition: $condition) {
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
export const deleteComplianceChecker = /* GraphQL */ `
  mutation DeleteComplianceChecker(
    $input: DeleteComplianceCheckerInput!
    $condition: ModelComplianceCheckerConditionInput
  ) {
    deleteComplianceChecker(input: $input, condition: $condition) {
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
export const createStructureChecker = /* GraphQL */ `
  mutation CreateStructureChecker(
    $input: CreateStructureCheckerInput!
    $condition: ModelStructureCheckerConditionInput
  ) {
    createStructureChecker(input: $input, condition: $condition) {
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
export const updateStructureChecker = /* GraphQL */ `
  mutation UpdateStructureChecker(
    $input: UpdateStructureCheckerInput!
    $condition: ModelStructureCheckerConditionInput
  ) {
    updateStructureChecker(input: $input, condition: $condition) {
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
export const deleteStructureChecker = /* GraphQL */ `
  mutation DeleteStructureChecker(
    $input: DeleteStructureCheckerInput!
    $condition: ModelStructureCheckerConditionInput
  ) {
    deleteStructureChecker(input: $input, condition: $condition) {
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
