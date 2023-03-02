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
  UnassignPrivateIpAddressesRequest,
  UnassignPrivateIpAddressesRequestFilterSensitiveLog,
} from "../models/models_7";
import {
  deserializeAws_ec2UnassignPrivateIpAddressesCommand,
  serializeAws_ec2UnassignPrivateIpAddressesCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link UnassignPrivateIpAddressesCommand}.
 */
export interface UnassignPrivateIpAddressesCommandInput extends UnassignPrivateIpAddressesRequest {}
/**
 * The output of {@link UnassignPrivateIpAddressesCommand}.
 */
export interface UnassignPrivateIpAddressesCommandOutput extends __MetadataBearer {}

/**
 * <p>Unassigns one or more secondary private IP addresses, or IPv4 Prefix Delegation prefixes from a
 *         	network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignPrivateIpAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignPrivateIpAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignPrivateIpAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignPrivateIpAddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignPrivateIpAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @example To unassign a secondary private IP address from a network interface
 * ```javascript
 * // This example unassigns the specified private IP address from the specified network interface.
 * const input = {
 *   "NetworkInterfaceId": "eni-e5aa89a3",
 *   "PrivateIpAddresses": [
 *     "10.0.0.82"
 *   ]
 * };
 * const command = new UnassignPrivateIpAddressesCommand(input);
 * await client.send(command);
 * ```
 *
 */
export class UnassignPrivateIpAddressesCommand extends $Command<
  UnassignPrivateIpAddressesCommandInput,
  UnassignPrivateIpAddressesCommandOutput,
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

  constructor(readonly input: UnassignPrivateIpAddressesCommandInput) {
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
  ): Handler<UnassignPrivateIpAddressesCommandInput, UnassignPrivateIpAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnassignPrivateIpAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UnassignPrivateIpAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnassignPrivateIpAddressesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnassignPrivateIpAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2UnassignPrivateIpAddressesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UnassignPrivateIpAddressesCommandOutput> {
    return deserializeAws_ec2UnassignPrivateIpAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
