// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeRetentionConfigurationsCommand,
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
} from "../commands/DescribeRetentionConfigurationsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeRetentionConfigurationsCommandInput,
  ...args: any
): Promise<DescribeRetentionConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRetentionConfigurationsCommand(input), ...args);
};
export async function* paginateDescribeRetentionConfigurations(
  config: ConfigServicePaginationConfiguration,
  input: DescribeRetentionConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRetentionConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRetentionConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
