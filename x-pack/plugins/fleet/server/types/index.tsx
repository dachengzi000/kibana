/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { LegacyScopedClusterClient } from 'src/core/server';

export {
  // Object types
  Agent,
  AgentMetadata,
  AgentSOAttributes,
  AgentStatus,
  AgentType,
  NewAgentEvent,
  AgentEvent,
  AgentEventSOAttributes,
  AgentAction,
  AgentPolicyAction,
  AgentPolicyActionV7_9,
  BaseAgentActionSOAttributes,
  AgentActionSOAttributes,
  AgentPolicyActionSOAttributes,
  PackagePolicy,
  PackagePolicyInput,
  PackagePolicyInputStream,
  NewPackagePolicy,
  UpdatePackagePolicy,
  PackagePolicySOAttributes,
  FullAgentPolicyInput,
  FullAgentPolicy,
  AgentPolicy,
  AgentPolicySOAttributes,
  NewAgentPolicy,
  AgentPolicyStatus,
  DataStream,
  Output,
  NewOutput,
  OutputSOAttributes,
  OutputType,
  EnrollmentAPIKey,
  EnrollmentAPIKeySOAttributes,
  Installation,
  EpmPackageInstallStatus,
  InstallationStatus,
  PackageInfo,
  ArchivePackage,
  RegistryVarsEntry,
  RegistryDataStream,
  RegistryElasticsearch,
  AssetReference,
  EsAssetReference,
  KibanaAssetReference,
  ElasticsearchAssetType,
  RegistryPackage,
  InstallablePackage,
  AssetType,
  Installable,
  KibanaAssetType,
  KibanaSavedObjectType,
  AssetParts,
  AssetsGroupedByServiceByType,
  CategoryId,
  CategorySummaryList,
  IndexTemplate,
  RegistrySearchResults,
  RegistrySearchResult,
  DefaultPackages,
  TemplateRef,
  IndexTemplateMappings,
  Settings,
  SettingsSOAttributes,
  InstallType,
  InstallSource,
  // Agent Request types
  PostAgentEnrollRequest,
  PostAgentCheckinRequest,
  DataType,
  dataTypes,
  // Fleet Server types
  FleetServerEnrollmentAPIKey,
} from '../../common';

export type CallESAsCurrentUser = LegacyScopedClusterClient['callAsCurrentUser'];

export type AgentPolicyUpdateHandler = (
  action: 'created' | 'updated' | 'deleted',
  agentPolicyId: string
) => Promise<void>;

export * from './models';
export * from './rest_spec';
