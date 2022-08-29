### Migration Instructions (Using Typeorm)

- `$ typeorm migration:create ./src/main/migrations/test`: This will create a new migration in the migrations folder (with a specified path).

### Environments
    - Local : Developers local machine. Upstream systems(EAI/SAP) development resource will be consumed.
    - Development: First integration in the cloud servers.
    - Staging: Pre-prod - equivalent to UAT in PETRONAS. User Acceptance Test (UAT) should be done on Staging environment & the environment owner should be the Test Manager or Test Lead. The Test Manager or Test lead should be the approver for Staging stage’s Pre-Deployment Approval. Deployment to Staging will not happen without the Pre-Deployment Approval from Test Manager or Test Lead.
    - Production : Self explanatory
### Resolving environment variables - 
- All the environments specific configurations of the application must come from AWS SSM parameters from dev,test and prod.
- For local development, the developer needs to create a file named ${self:service}.env.local under project root and mention the configurations there and run the project with --stage local(npm start). Alternatively, if they want to simulate the apps behavior in the dev environment, they can use --stage dev.
- Keeping in mind that the unit tests will be run in the CI server, unit tests should be written on dev configuration(--stage dev).

