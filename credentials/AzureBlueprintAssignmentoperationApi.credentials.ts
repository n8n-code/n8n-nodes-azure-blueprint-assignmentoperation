import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureBlueprintAssignmentoperationApi implements ICredentialType {
        name = 'N8nDevAzureBlueprintAssignmentoperationApi';

        displayName = 'Azure Blueprint Assignmentoperation API';

        icon: Icon = { light: 'file:../nodes/AzureBlueprintAssignmentoperation/azure-blueprint-assignmentoperation.png', dark: 'file:../nodes/AzureBlueprintAssignmentoperation/azure-blueprint-assignmentoperation.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Blueprint Assignmentoperation API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
