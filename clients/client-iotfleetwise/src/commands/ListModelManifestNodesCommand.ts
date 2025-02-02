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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import {
  ListModelManifestNodesRequest,
  ListModelManifestNodesRequestFilterSensitiveLog,
  ListModelManifestNodesResponse,
  ListModelManifestNodesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListModelManifestNodesCommand,
  serializeAws_json1_0ListModelManifestNodesCommand,
} from "../protocols/Aws_json1_0";

/**
 * The input for {@link ListModelManifestNodesCommand}.
 */
export interface ListModelManifestNodesCommandInput extends ListModelManifestNodesRequest {}
/**
 * The output of {@link ListModelManifestNodesCommand}.
 */
export interface ListModelManifestNodesCommandOutput extends ListModelManifestNodesResponse, __MetadataBearer {}

/**
 * <p> Lists information about nodes specified in a vehicle model (model manifest). </p>
 *         <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListModelManifestNodesCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListModelManifestNodesCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const command = new ListModelManifestNodesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelManifestNodesCommandInput} for command's `input` shape.
 * @see {@link ListModelManifestNodesCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 */
export class ListModelManifestNodesCommand extends $Command<
  ListModelManifestNodesCommandInput,
  ListModelManifestNodesCommandOutput,
  IoTFleetWiseClientResolvedConfig
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

  constructor(readonly input: ListModelManifestNodesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListModelManifestNodesCommandInput, ListModelManifestNodesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelManifestNodesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "ListModelManifestNodesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListModelManifestNodesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListModelManifestNodesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListModelManifestNodesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListModelManifestNodesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelManifestNodesCommandOutput> {
    return deserializeAws_json1_0ListModelManifestNodesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
