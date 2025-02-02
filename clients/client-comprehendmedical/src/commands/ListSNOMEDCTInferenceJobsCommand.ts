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
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import {
  ListSNOMEDCTInferenceJobsRequest,
  ListSNOMEDCTInferenceJobsRequestFilterSensitiveLog,
  ListSNOMEDCTInferenceJobsResponse,
  ListSNOMEDCTInferenceJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommand,
  serializeAws_json1_1ListSNOMEDCTInferenceJobsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListSNOMEDCTInferenceJobsCommand}.
 */
export interface ListSNOMEDCTInferenceJobsCommandInput extends ListSNOMEDCTInferenceJobsRequest {}
/**
 * The output of {@link ListSNOMEDCTInferenceJobsCommand}.
 */
export interface ListSNOMEDCTInferenceJobsCommandOutput extends ListSNOMEDCTInferenceJobsResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets a list of InferSNOMEDCT jobs a user has submitted.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListSNOMEDCTInferenceJobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListSNOMEDCTInferenceJobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListSNOMEDCTInferenceJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSNOMEDCTInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListSNOMEDCTInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 */
export class ListSNOMEDCTInferenceJobsCommand extends $Command<
  ListSNOMEDCTInferenceJobsCommandInput,
  ListSNOMEDCTInferenceJobsCommandOutput,
  ComprehendMedicalClientResolvedConfig
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

  constructor(readonly input: ListSNOMEDCTInferenceJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSNOMEDCTInferenceJobsCommandInput, ListSNOMEDCTInferenceJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSNOMEDCTInferenceJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "ListSNOMEDCTInferenceJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSNOMEDCTInferenceJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSNOMEDCTInferenceJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSNOMEDCTInferenceJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSNOMEDCTInferenceJobsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSNOMEDCTInferenceJobsCommandOutput> {
    return deserializeAws_json1_1ListSNOMEDCTInferenceJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
