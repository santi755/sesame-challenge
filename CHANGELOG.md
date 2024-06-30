# Sesame challenge Changelog

### [0.1.6] - 2024-06-30

#### Added

- Created a draggable generic library as composable
- Implemented drag and drop for candidate groups
- Added mother patterns tests
- Configure vitests to run with inversify
- Added unit tests for CandidateForm component

#### Changed

- Refactor candidate filter to use the new search by name
- Refactor candidate groups to use our draggable generic library

### [0.1.5] - 2024-06-29

#### Added

- Added new icons to the project
- Created the candidate status layout
- Search candidates by name

#### Changed

- Icons types refactored
- Refactored candidate form and implemented the use case to create and update candidates
- Refactored vacancyId usage

### [0.1.4] - 2024-06-28

#### Added

- Added modelValue props to form components
- Added colors from api to the candidate status

#### Change

- Refactor the way to inject the inversify container in the Vue app
- Refactor createCandidate to use DTOs

### [0.1.3] - 2024-06-27

#### Added

- Implemented all the use cases for the project
- Integrated Vue store with the use cases
- Created Create / Update candidate modal

### [0.1.2] - 2024-06-27

#### Added

- Added connection to the API from infrastructure layer
- Added the first use case for the project
- Created the connection between Vue and Core using Composables, Pinia and Inversify

### [0.1.1] - 2024-06-26

#### Added

- Implemented the basic layout for the project
- Added dropdown menu component
- Added vue-router for navigation
- Added inversify for dependency injection
- Created first use case mock for the project

### [0.1.0] - 2024-06-25

#### Added

- Initial release of Sesame challenge
- Added Docker for development purposes
- Created common components for the project (Atomic design)
- Created the basic layout (Template) for the project

#### Changed

#### Fixed

#### Removed
