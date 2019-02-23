/**
 * This file was automatically generated by Nexus 0.9.17
 * Do not make changes to this file directly
 */

import * as swapi from "./types/backingTypes"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Episode: 5 | 6 | 4
  MoreEpisodes: 5 | 6 | 4 | "OTHER"
}

export interface NexusGenRootTypes {
  Droid: swapi.Droid;
  Human: swapi.Human;
  Query: {};
  Character: swapi.Character;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  Episode: NexusGenEnums['Episode'];
  MoreEpisodes: NexusGenEnums['MoreEpisodes'];
}

export interface NexusGenFieldTypes {
  Droid: { // field return type
    appearsIn: NexusGenEnums['Episode'][]; // [Episode!]!
    friends: NexusGenRootTypes['Character'][]; // [Character!]!
    id: string; // String!
    name: string; // String!
    primaryFunction: string; // String!
  }
  Human: { // field return type
    appearsIn: NexusGenEnums['Episode'][]; // [Episode!]!
    friends: NexusGenRootTypes['Character'][]; // [Character!]!
    homePlanet: string | null; // String
    id: string; // String!
    name: string; // String!
  }
  Query: { // field return type
    droid: NexusGenRootTypes['Droid']; // Droid!
    hero: NexusGenRootTypes['Character']; // Character!
    human: NexusGenRootTypes['Human']; // Human!
  }
  Character: { // field return type
    appearsIn: NexusGenEnums['Episode'][]; // [Episode!]!
    friends: NexusGenRootTypes['Character'][]; // [Character!]!
    id: string; // String!
    name: string; // String!
  }
}

export interface NexusGenArgTypes {
  Droid: {
    appearsIn: { // args
      id: string; // ID!
    }
  }
  Human: {
    appearsIn: { // args
      id: string; // ID!
    }
  }
  Query: {
    droid: { // args
      id: string; // String!
    }
    hero: { // args
      episode?: NexusGenEnums['Episode'] | null; // Episode
    }
    human: { // args
      id: string; // String!
    }
  }
  Character: {
    appearsIn: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Character: "Droid" | "Human"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Droid" | "Human" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "Episode" | "MoreEpisodes";

export type NexusGenInterfaceNames = "Character";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: swapi.ContextType;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}