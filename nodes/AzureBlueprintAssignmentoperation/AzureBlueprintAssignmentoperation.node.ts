import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureBlueprintAssignmentoperation implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Blueprint Assignmentoperation',
                name: 'N8nDevAzureBlueprintAssignmentoperation',
                icon: { light: 'file:./azure-blueprint-assignmentoperation.png', dark: 'file:./azure-blueprint-assignmentoperation.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Blueprints Client manages blueprint definitions, assignments, artifacts, and operations.',
                defaults: { name: 'Azure Blueprint Assignmentoperation' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureBlueprintAssignmentoperationApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
