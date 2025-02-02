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

import {
  GetReplicationRunsRequest,
  GetReplicationRunsRequestFilterSensitiveLog,
  GetReplicationRunsResponse,
  GetReplicationRunsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetReplicationRunsCommand,
  serializeAws_json1_1GetReplicationRunsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * The input for {@link GetReplicationRunsCommand}.
 */
export interface GetReplicationRunsCommandInput extends GetReplicationRunsRequest {}
/**
 * The output of {@link GetReplicationRunsCommand}.
 */
export interface GetReplicationRunsCommandOutput extends GetReplicationRunsResponse, __MetadataBearer {}

/**
 * <p>Describes the replication runs for the specified replication job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetReplicationRunsCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetReplicationRunsCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetReplicationRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReplicationRunsCommandInput} for command's `input` shape.
 * @see {@link GetReplicationRunsCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class GetReplicationRunsCommand extends $Command<
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: GetReplicationRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReplicationRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GetReplicationRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReplicationRunsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReplicationRunsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReplicationRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetReplicationRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReplicationRunsCommandOutput> {
    return deserializeAws_json1_1GetReplicationRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
