# cowmas vue-2 web repo

# components
- Badges 
  - StatusBadge shows status of cow like `на заводе`
- Headers
  - Header has breadcrumb and user profile description
  - Subheader shows current page title 
- Helpers
  - Bridge to make bridge between pages , this is disable name of component being in breadcrumb lists and make bridge between nested pages
  - Property shows info with type and value of like -> Name - Cow123
  - PropertyWithLine same as Property
- LabelWithInfo * should be refactored in the future

- Lists
  - ListAreas list for user areas in profile
  - GeneralList has general table without any functionality
  - ListComponent table with functionality

# Enabled Vue CLI plugins
* Babel
* Typescript
* PWA
* Router
* eslint
* i18n

# Additional goodies
* Composition API
* Dockerfile
* Axios
* DayJS

## Composition API
Besides primary idea of composition api, to de-couple and organize business logic, this boilerplate is also using it to implement both global and local state managemenet stores.
> Take a look at `src/store` dir for implementation, `UserDetails` and `Counter` components for usage.

## Data layer
HTTP communication is done using Axios as HTTP client of choice, with abstractions in form of singleton API services.

Services are using generics to map response to the appropriate model.

DTOs are utilized to ensure that proper payload will be sent to the API services.
> Take a look at `src/services/api`, `BaseApi` is a generic base class which all other services are inheriting.

> Models are defined in `src/models`, DTOs in `src/dto`.
# Linting
Eslint + Prettier

# Git hooks
* pre-commit - runs `yarn lint`
* pre-push - runs `yarn test:unit`

# Development setup
```shell script
# Install dependencies
yarn

# Create an .env file
cp .env.example .env

# Start local development server with hot-reload
yarn serve
```

# Testing
Both unit and e2e tests are enabled. Jest is used as a testing framework of choice for unit tests, cypress for e2e.
* `yarn lint` - static analysis

# Production build
Utilizing docker multi-stage build to firstly install dependencies and build the app, and then copy them to vanilla nginx image in order to minimze the footprint.
> NGINX configuration file can be found in `.docker/nginx.conf`
## How-to
```shell script
# Firstly, build the image
docker build -t image-name .

# Run the container with port 80 exposed
docker run --rm -p 80:80 image-name
```

# CI
Github actions are used for CI. Workflow is defined in `.github/workflows/test.yml`
Workflow steps:
* Setup environment (checkout, install node)
* Create `.env` file
* Install `npm` dependencies
* Build the app
~~* Run `unit` and `e2e` tests~~