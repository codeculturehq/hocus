/* eslint-disable */
/**
 * This file was automatically generated by typescript-to-typebox.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run make -j to regenerate this file.
 */

import { Type, Static } from "@sinclair/typebox";

export type HttpsOpencontainersOrgSchemaImageLayout = Static<
  typeof HttpsOpencontainersOrgSchemaImageLayout
>;
export const HttpsOpencontainersOrgSchemaImageLayout = Type.Object(
  {
    imageLayoutVersion: Type.Literal("1.0.0"),
  },
  {
    additionalProperties: Type.Unknown(),
  },
);
