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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreateSipMediaApplicationRequest,
  CreateSipMediaApplicationRequestFilterSensitiveLog,
  CreateSipMediaApplicationResponse,
  CreateSipMediaApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSipMediaApplicationCommand,
  serializeAws_restJson1CreateSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateSipMediaApplicationCommand}.
 */
export interface CreateSipMediaApplicationCommandInput extends CreateSipMediaApplicationRequest {}
/**
 * The output of {@link CreateSipMediaApplicationCommand}.
 */
export interface CreateSipMediaApplicationCommandOutput extends CreateSipMediaApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates a SIP media application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateSipMediaApplicationCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateSipMediaApplicationCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreateSipMediaApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSipMediaApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateSipMediaApplicationCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class CreateSipMediaApplicationCommand extends $Command<
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: CreateSipMediaApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSipMediaApplicationCommandInput, CreateSipMediaApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSipMediaApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreateSipMediaApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSipMediaApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSipMediaApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSipMediaApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSipMediaApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSipMediaApplicationCommandOutput> {
    return deserializeAws_restJson1CreateSipMediaApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
