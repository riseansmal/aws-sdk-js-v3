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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { PutMaintenanceStartTimeInput, PutMaintenanceStartTimeOutput } from "../models/models_0";
import {
  deserializeAws_json1_0PutMaintenanceStartTimeCommand,
  serializeAws_json1_0PutMaintenanceStartTimeCommand,
} from "../protocols/Aws_json1_0";

export interface PutMaintenanceStartTimeCommandInput extends PutMaintenanceStartTimeInput {}
export interface PutMaintenanceStartTimeCommandOutput extends PutMaintenanceStartTimeOutput, __MetadataBearer {}

/**
 * <p>Set the maintenance start time for a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutMaintenanceStartTimeCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutMaintenanceStartTimeCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new PutMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link PutMaintenanceStartTimeCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class PutMaintenanceStartTimeCommand extends $Command<
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
  BackupGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMaintenanceStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMaintenanceStartTimeCommandInput, PutMaintenanceStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "PutMaintenanceStartTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMaintenanceStartTimeInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutMaintenanceStartTimeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMaintenanceStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0PutMaintenanceStartTimeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMaintenanceStartTimeCommandOutput> {
    return deserializeAws_json1_0PutMaintenanceStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}