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
  EnableLoggingMessage,
  EnableLoggingMessageFilterSensitiveLog,
  LoggingStatus,
  LoggingStatusFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryEnableLoggingCommand,
  serializeAws_queryEnableLoggingCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * The input for {@link EnableLoggingCommand}.
 */
export interface EnableLoggingCommandInput extends EnableLoggingMessage {}
/**
 * The output of {@link EnableLoggingCommand}.
 */
export interface EnableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * <p>Starts logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, EnableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, EnableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new EnableLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableLoggingCommandInput} for command's `input` shape.
 * @see {@link EnableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class EnableLoggingCommand extends $Command<
  EnableLoggingCommandInput,
  EnableLoggingCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: EnableLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableLoggingCommandInput, EnableLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnableLoggingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "EnableLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableLoggingMessageFilterSensitiveLog,
      outputFilterSensitiveLog: LoggingStatusFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableLoggingCommandOutput> {
    return deserializeAws_queryEnableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
