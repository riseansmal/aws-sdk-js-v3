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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  ListTasksRequest,
  ListTasksRequestFilterSensitiveLog,
  ListTasksResponse,
  ListTasksResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1ListTasksCommand, serializeAws_json1_1ListTasksCommand } from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListTasksCommand}.
 */
export interface ListTasksCommandInput extends ListTasksRequest {}
/**
 * The output of {@link ListTasksCommand}.
 */
export interface ListTasksCommandOutput extends ListTasksResponse, __MetadataBearer {}

/**
 * <p>Returns a list of tasks. You can filter the results by cluster, task definition
 * 			family, container instance, launch type, what IAM principal started the task, or by the
 * 			desired status of the task.</p>
 *          <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks
 * 			appear in the returned results for at least one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @example To list the tasks in a cluster
 * ```javascript
 * // This example lists all of the tasks in a cluster.
 * const input = {
 *   "cluster": "default"
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskArns": [
 *     "arn:aws:ecs:us-east-1:012345678910:task/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84",
 *     "arn:aws:ecs:us-east-1:012345678910:task/6b809ef6-c67e-4467-921f-ee261c15a0a1"
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list the tasks on a particular container instance
 * ```javascript
 * // This example lists the tasks of a specified container instance. Specifying a ``containerInstance`` value limits  the  results  to  tasks  that belong to that container instance.
 * const input = {
 *   "cluster": "default",
 *   "containerInstance": "f6bbb147-5370-4ace-8c73-c7181ded911f"
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "taskArns": [
 *     "arn:aws:ecs:us-east-1:012345678910:task/0cc43cdb-3bee-4407-9c26-c0e6ea5bee84"
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class ListTasksCommand extends $Command<ListTasksCommandInput, ListTasksCommandOutput, ECSClientResolvedConfig> {
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

  constructor(readonly input: ListTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTasksCommandInput, ListTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTasksCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTasksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTasksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTasksCommandOutput> {
    return deserializeAws_json1_1ListTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
