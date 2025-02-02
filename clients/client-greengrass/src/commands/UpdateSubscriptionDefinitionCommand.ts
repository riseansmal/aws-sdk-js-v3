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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  UpdateSubscriptionDefinitionRequest,
  UpdateSubscriptionDefinitionRequestFilterSensitiveLog,
  UpdateSubscriptionDefinitionResponse,
  UpdateSubscriptionDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSubscriptionDefinitionCommand,
  serializeAws_restJson1UpdateSubscriptionDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link UpdateSubscriptionDefinitionCommand}.
 */
export interface UpdateSubscriptionDefinitionCommandInput extends UpdateSubscriptionDefinitionRequest {}
/**
 * The output of {@link UpdateSubscriptionDefinitionCommand}.
 */
export interface UpdateSubscriptionDefinitionCommandOutput
  extends UpdateSubscriptionDefinitionResponse,
    __MetadataBearer {}

/**
 * Updates a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class UpdateSubscriptionDefinitionCommand extends $Command<
  UpdateSubscriptionDefinitionCommandInput,
  UpdateSubscriptionDefinitionCommandOutput,
  GreengrassClientResolvedConfig
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

  constructor(readonly input: UpdateSubscriptionDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSubscriptionDefinitionCommandInput, UpdateSubscriptionDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSubscriptionDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "UpdateSubscriptionDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSubscriptionDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateSubscriptionDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSubscriptionDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSubscriptionDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSubscriptionDefinitionCommandOutput> {
    return deserializeAws_restJson1UpdateSubscriptionDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
