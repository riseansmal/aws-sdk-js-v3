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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import {
  ListGlobalTablesInput,
  ListGlobalTablesInputFilterSensitiveLog,
  ListGlobalTablesOutput,
  ListGlobalTablesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListGlobalTablesCommand,
  serializeAws_json1_0ListGlobalTablesCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link ListGlobalTablesCommand}.
 */
export interface ListGlobalTablesCommandInput extends ListGlobalTablesInput {}
/**
 * The output of {@link ListGlobalTablesCommand}.
 */
export interface ListGlobalTablesCommandOutput extends ListGlobalTablesOutput, __MetadataBearer {}

/**
 * <p>Lists all global tables that have a replica in the specified Region.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version
 *                 2017.11.29 (Legacy)</a> of global tables. We recommend using
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListGlobalTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListGlobalTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGlobalTablesCommandInput} for command's `input` shape.
 * @see {@link ListGlobalTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 */
export class ListGlobalTablesCommand extends $Command<
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput,
  DynamoDBClientResolvedConfig
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

  constructor(readonly input: ListGlobalTablesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGlobalTablesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ListGlobalTablesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGlobalTablesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListGlobalTablesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGlobalTablesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListGlobalTablesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGlobalTablesCommandOutput> {
    return deserializeAws_json1_0ListGlobalTablesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
