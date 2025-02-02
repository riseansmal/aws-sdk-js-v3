// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRPUBLICClient,
  input: DescribeImagesCommandInput,
  ...args: any
): Promise<DescribeImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImagesCommand(input), ...args);
};
export async function* paginateDescribeImages(
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECRPUBLICClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECRPUBLIC | ECRPUBLICClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
