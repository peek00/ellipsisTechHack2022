import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ComplianceCheckerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StructureCheckerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ComplianceChecker {
  readonly id: string;
  readonly humanOrNot?: boolean | null;
  readonly entity_interaction?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ComplianceChecker, ComplianceCheckerMetaData>);
  static copyOf(source: ComplianceChecker, mutator: (draft: MutableModel<ComplianceChecker, ComplianceCheckerMetaData>) => MutableModel<ComplianceChecker, ComplianceCheckerMetaData> | void): ComplianceChecker;
}

export declare class StructureChecker {
  readonly id: string;
  readonly input?: string | null;
  readonly output?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<StructureChecker, StructureCheckerMetaData>);
  static copyOf(source: StructureChecker, mutator: (draft: MutableModel<StructureChecker, StructureCheckerMetaData>) => MutableModel<StructureChecker, StructureCheckerMetaData> | void): StructureChecker;
}