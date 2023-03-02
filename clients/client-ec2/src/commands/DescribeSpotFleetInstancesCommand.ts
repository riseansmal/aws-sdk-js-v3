// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeSpotFleetInstancesRequest,
  DescribeSpotFleetInstancesRequestFilterSensitiveLog,
  DescribeSpotFleetInstancesResponse,
  DescribeSpotFleetInstancesResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeSpotFleetInstancesCommand,
  serializeAws_ec2DescribeSpotFleetInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DescribeSpotFleetInstancesCommand}.
 */
export interface DescribeSpotFleetInstancesCommandInput extends DescribeSpotFleetInstancesRequest {}
/**
 * The output of {@link DescribeSpotFleetInstancesCommand}.
 */
export interface DescribeSpotFleetInstancesCommandOutput extends DescribeSpotFleetInstancesResponse, __MetadataBearer {}

/**
 * <p>Describes the running instances for the specified Spot Fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @example To describe the Spot Instances associated with a Spot fleet
 * ```javascript
 * // This example lists the Spot Instances associated with the specified Spot fleet.
 * const input = {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * };
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ActiveInstances": [
 *     {
 *       "InstanceId": "i-1234567890abcdef0",
 *       "InstanceType": "m3.medium",
 *       "SpotInstanceRequestId": "sir-08b93456"
 *     }
 *   ],
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * ```
 *
 */
export class DescribeSpotFleetInstancesCommand extends $Command<
  DescribeSpotFleetInstancesCommandInput,
  DescribeSpotFleetInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DescribeSpotFleetInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSpotFleetInstancesCommandInput, DescribeSpotFleetInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpotFleetInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotFleetInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotFleetInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotFleetInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotFleetInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotFleetInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotFleetInstancesCommandOutput> {
    return deserializeAws_ec2DescribeSpotFleetInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
