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
  DescribeEngagementRequest,
  DescribeEngagementRequestFilterSensitiveLog,
  DescribeEngagementResult,
  DescribeEngagementResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeEngagementCommand,
  serializeAws_json1_1DescribeEngagementCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link DescribeEngagementCommand}.
 */
export interface DescribeEngagementCommandInput extends DescribeEngagementRequest {}
/**
 * The output of {@link DescribeEngagementCommand}.
 */
export interface DescribeEngagementCommandOutput extends DescribeEngagementResult, __MetadataBearer {}

/**
 * <p>Incident Manager uses engagements to engage contacts and escalation plans during an incident.
 *          Use this command to describe the engagement that occurred during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribeEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribeEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DescribeEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngagementCommandInput} for command's `input` shape.
 * @see {@link DescribeEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @example To describe the details of an engagement
 * ```javascript
 * // The following describe-engagement example lists the details of an engagement to a contact or escalation plan. The subject and content are sent to the contact channels.
 * const input = {
 *   "EngagementId": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/example_escalation/69e40ce1-8dbb-4d57-8962-5fbe7fc53356"
 * };
 * const command = new DescribeEngagementCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/example_escalation",
 *   "Content": "Testing engagements",
 *   "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/example_escalation/69e40ce1-8dbb-4d57-8962-5fbe7fc53356",
 *   "PublicContent": "Testing engagements",
 *   "PublicSubject": "test",
 *   "Sender": "tester",
 *   "StartTime": "2021-05-18T18:25:41.151000+00:00",
 *   "Subject": "test"
 * }
 * *\/
 * ```
 *
 */
export class DescribeEngagementCommand extends $Command<
  DescribeEngagementCommandInput,
  DescribeEngagementCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: DescribeEngagementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEngagementCommandInput, DescribeEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEngagementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "DescribeEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEngagementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeEngagementResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeEngagementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEngagementCommandOutput> {
    return deserializeAws_json1_1DescribeEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
