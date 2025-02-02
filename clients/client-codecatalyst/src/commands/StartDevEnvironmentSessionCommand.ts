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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  StartDevEnvironmentSessionRequest,
  StartDevEnvironmentSessionRequestFilterSensitiveLog,
  StartDevEnvironmentSessionResponse,
  StartDevEnvironmentSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartDevEnvironmentSessionCommand,
  serializeAws_restJson1StartDevEnvironmentSessionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link StartDevEnvironmentSessionCommand}.
 */
export interface StartDevEnvironmentSessionCommandInput extends StartDevEnvironmentSessionRequest {}
/**
 * The output of {@link StartDevEnvironmentSessionCommand}.
 */
export interface StartDevEnvironmentSessionCommandOutput extends StartDevEnvironmentSessionResponse, __MetadataBearer {}

/**
 * <p>Starts a session for a specified Dev Environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, StartDevEnvironmentSessionCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, StartDevEnvironmentSessionCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new StartDevEnvironmentSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDevEnvironmentSessionCommandInput} for command's `input` shape.
 * @see {@link StartDevEnvironmentSessionCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class StartDevEnvironmentSessionCommand extends $Command<
  StartDevEnvironmentSessionCommandInput,
  StartDevEnvironmentSessionCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: StartDevEnvironmentSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDevEnvironmentSessionCommandInput, StartDevEnvironmentSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDevEnvironmentSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "StartDevEnvironmentSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDevEnvironmentSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDevEnvironmentSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDevEnvironmentSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDevEnvironmentSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDevEnvironmentSessionCommandOutput> {
    return deserializeAws_restJson1StartDevEnvironmentSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
