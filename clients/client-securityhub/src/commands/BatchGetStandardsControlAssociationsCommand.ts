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
  BatchGetStandardsControlAssociationsRequest,
  BatchGetStandardsControlAssociationsRequestFilterSensitiveLog,
  BatchGetStandardsControlAssociationsResponse,
  BatchGetStandardsControlAssociationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1BatchGetStandardsControlAssociationsCommand,
  serializeAws_restJson1BatchGetStandardsControlAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * The input for {@link BatchGetStandardsControlAssociationsCommand}.
 */
export interface BatchGetStandardsControlAssociationsCommandInput extends BatchGetStandardsControlAssociationsRequest {}
/**
 * The output of {@link BatchGetStandardsControlAssociationsCommand}.
 */
export interface BatchGetStandardsControlAssociationsCommandOutput
  extends BatchGetStandardsControlAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetStandardsControlAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetStandardsControlAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchGetStandardsControlAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetStandardsControlAssociationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetStandardsControlAssociationsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 */
export class BatchGetStandardsControlAssociationsCommand extends $Command<
  BatchGetStandardsControlAssociationsCommandInput,
  BatchGetStandardsControlAssociationsCommandOutput,
  SecurityHubClientResolvedConfig
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

  constructor(readonly input: BatchGetStandardsControlAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetStandardsControlAssociationsCommandInput, BatchGetStandardsControlAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetStandardsControlAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchGetStandardsControlAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetStandardsControlAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetStandardsControlAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchGetStandardsControlAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchGetStandardsControlAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetStandardsControlAssociationsCommandOutput> {
    return deserializeAws_restJson1BatchGetStandardsControlAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
