## Frontend for ECommerce App

This repository houses all code and configuration files related to the frontend
of my ecommerce application.

### Requirements
- Node.js 18+
- npm
- Git

### Directory Structure
```text
orders/
|   .env
|   .gitignore
|   Dockerfile
|   Jenkinsfile
|   ngix.conf
|   package.json
|   package-lock.json
|   README.md
|
+---k8s
|   \---frontend
|       +---dev
|       |       configmap.yaml
|       |       deployment.yaml
|       |       service.yaml
|       |
|       +---prod
|       |       configmap.yaml
|       |       deployment.yaml
|       |       service.yaml
|       |
|       \---staging
|               configmap.yaml
|               deployment.yaml
|               service.yaml
|
+---src
|   |   App.js
|   \--- index.js
|
+---public
|   \--- index.html
|
\---tests
```
### Instructions to build and run frontend locally:
```bash
# Clone the repo
git clone https://github.com/yourusername/mpcs56550-frontend
cd mpcs56550-frontend

# Install dependencies
npm install

# Run the dev server
npm start
```
App will be available at http://localhost:3000, but note that product and order
services must be running for it to work.

### Testing:
- None at this time.

### GitFlow Overview:
- **Main** - This branch stores the official release history. All commits here are 
tagged with a version number. *Main is a protected branch and requires a pull
request to merge.*
- **Develop** - This branch contains the complete history of the project and serves
as an integration branch for features. *Develop is a protected branch and
requires a pull request to merge.*
- **Feature** - Feature branches are split off of the latest Develop branch to build
new features. Once complete, they are merged back into Develop.
- **Release** - Once a certain amount of features have been completed, a Release
branch is split off Develop. Once this branch is created, no new features are
added, only tidying up existing ones. Once complete, it is merged into Main and
tagged with a version number. It is then also merged into Develop.
- **Hotfix** - These branches exist to quickly patch production releases. They are
the only branches split directly off Main. Once a fix is completed, it is merged
into Main with a new version number and then Develop. (in some cases it might be
merged into a Release branch)

Citation: [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

### Other Notes:
- Zlib Security Issue: The frontend is supported by an nginx image that according
to the Trivy security scan has a critical flag related to the underlying Zlib.
Switching to nginx:alpine3.20 had even more critical flags, and nginx:stable-alpine
had the same Zlib flag, so I just stuck with nginx:alpine.