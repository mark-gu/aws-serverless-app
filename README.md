# AWS Serverless Application Framework

## Installation

Install the [Serverless Framework](https://serverless.com) CLI:

```bash
npm install -g serverless
```

Install project dependencies:

```bash
npm install
```

## Deployment

Obtain an AWS IAM User access key or temporary security credentials, and add it to the `credentials` files on your local machine, which is normally under the `<UserProfile>/.aws/` directory.

```text
[default]
aws_access_key_id = ********
aws_secret_access_key = ********
```

To deploy into the `dev` environment, execute:

```bash
serverless deploy --stage dev
```

To deploy into the `uat` environment, execute:

```bash
serverless deploy --stage uat
```

To test the deployment, open a browser window and navigate to the following URL:

```bash
https://<API Gateway endpoint>/api/health/ping
```
