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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  ApplicationVersionDescriptionMessage,
  ApplicationVersionDescriptionMessageFilterSensitiveLog,
  UpdateApplicationVersionMessage,
  UpdateApplicationVersionMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateApplicationVersionCommand,
  serializeAws_queryUpdateApplicationVersionCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link UpdateApplicationVersionCommand}.
 */
export interface UpdateApplicationVersionCommandInput extends UpdateApplicationVersionMessage {}
/**
 * The output of {@link UpdateApplicationVersionCommand}.
 */
export interface UpdateApplicationVersionCommandOutput extends ApplicationVersionDescriptionMessage, __MetadataBearer {}

/**
 * <p>Updates the specified application version to have the specified properties.</p>
 *          <note>
 *             <p>If a property (for example, <code>description</code>) is not provided, the value
 *         remains unchanged. To clear properties, specify an empty string.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateApplicationVersionCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateApplicationVersionCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @example To change an application version's description
 * ```javascript
 * // The following operation updates the description of an application version named 22a0-stage-150819_185942:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "Description": "new description",
 *   "VersionLabel": "22a0-stage-150819_185942"
 * };
 * const command = new UpdateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ApplicationVersion": {
 *     "ApplicationName": "my-app",
 *     "DateCreated": "2015-08-19T18:59:17.646Z",
 *     "DateUpdated": "2015-08-20T22:53:28.871Z",
 *     "Description": "new description",
 *     "SourceBundle": {
 *       "S3Bucket": "elasticbeanstalk-us-west-2-0123456789012",
 *       "S3Key": "my-app/22a0-stage-150819_185942.war"
 *     },
 *     "VersionLabel": "22a0-stage-150819_185942"
 *   }
 * }
 * *\/
 * ```
 *
 */
export class UpdateApplicationVersionCommand extends $Command<
  UpdateApplicationVersionCommandInput,
  UpdateApplicationVersionCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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

  constructor(readonly input: UpdateApplicationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationVersionCommandInput, UpdateApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationVersionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ApplicationVersionDescriptionMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateApplicationVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApplicationVersionCommandOutput> {
    return deserializeAws_queryUpdateApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
