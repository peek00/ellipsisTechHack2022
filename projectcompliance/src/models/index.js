// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ComplianceChecker, StructureChecker } = initSchema(schema);

export {
  ComplianceChecker,
  StructureChecker
};