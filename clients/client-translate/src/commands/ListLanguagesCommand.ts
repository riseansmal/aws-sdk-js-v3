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
  ListLanguagesRequest,
  ListLanguagesRequestFilterSensitiveLog,
  ListLanguagesResponse,
  ListLanguagesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListLanguagesCommand,
  serializeAws_json1_1ListLanguagesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * The input for {@link ListLanguagesCommand}.
 */
export interface ListLanguagesCommandInput extends ListLanguagesRequest {}
/**
 * The output of {@link ListLanguagesCommand}.
 */
export interface ListLanguagesCommandOutput extends ListLanguagesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListLanguagesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListLanguagesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ListLanguagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLanguagesCommandInput} for command's `input` shape.
 * @see {@link ListLanguagesCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 */
export class ListLanguagesCommand extends $Command<
  ListLanguagesCommandInput,
  ListLanguagesCommandOutput,
  TranslateClientResolvedConfig
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

  constructor(readonly input: ListLanguagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLanguagesCommandInput, ListLanguagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLanguagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListLanguagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLanguagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLanguagesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLanguagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListLanguagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLanguagesCommandOutput> {
    return deserializeAws_json1_1ListLanguagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
