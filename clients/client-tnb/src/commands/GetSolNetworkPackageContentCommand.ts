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
  GetSolNetworkPackageContentInput,
  GetSolNetworkPackageContentInputFilterSensitiveLog,
  GetSolNetworkPackageContentOutput,
  GetSolNetworkPackageContentOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSolNetworkPackageContentCommand,
  serializeAws_restJson1GetSolNetworkPackageContentCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * The input for {@link GetSolNetworkPackageContentCommand}.
 */
export interface GetSolNetworkPackageContentCommandInput extends GetSolNetworkPackageContentInput {}
/**
 * The output of {@link GetSolNetworkPackageContentCommand}.
 */
export interface GetSolNetworkPackageContentCommandOutput extends GetSolNetworkPackageContentOutput, __MetadataBearer {}

/**
 * <p>Gets the contents of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new GetSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSolNetworkPackageContentCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkPackageContentCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @example Get a network package Content```javascript/* Optional.empty *\/some code here```
 *
 */
export class GetSolNetworkPackageContentCommand extends $Command<
  GetSolNetworkPackageContentCommandInput,
  GetSolNetworkPackageContentCommandOutput,
  TnbClientResolvedConfig
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

  constructor(readonly input: GetSolNetworkPackageContentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSolNetworkPackageContentCommandInput, GetSolNetworkPackageContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSolNetworkPackageContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "GetSolNetworkPackageContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSolNetworkPackageContentInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSolNetworkPackageContentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSolNetworkPackageContentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSolNetworkPackageContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSolNetworkPackageContentCommandOutput> {
    return deserializeAws_restJson1GetSolNetworkPackageContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
