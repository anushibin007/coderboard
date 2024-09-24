# Coderboard

Coderboard is a SaaS application that induces competitiveness among coders by helping them identify and participate in code contribution across the internet.

## Release changelog

### v2.0.0 - TBD

-   Private Quests

### v1.0.0 - TBD

-   ⚔ Public Quests
    -   ID
    -   Name
    -   Description
    -   Reward
    -   Energy
    -   Active participants count
    -   Status (In progress / Completed)
    -   Quest giver
    -   Visibility (either "public" or "domain.com" where the domain is the organization who should have access to the quest)
-   🤸‍♂️ Adventurers
    -   ID (email)
    -   Verified (for e-mail verification)
    -   Name
    -   Coins
    -   Energy
    -   Quests (a list of quests that the adventurer has participated in)
    -   Roles
        -   Quest giver
        -   Quest taker (default)
-   📊 Leaderboard
    -   Top Adventurers queried by
        -   Year
        -   Quarter
        -   Month
        -   Week
        -   Day

## Backend API spec

The backend exposes the following APIs

### Quests

#### Get all Quests

```
GET /api/v1/quests
```

```json
[
	{
		"id": "Q1",
		"name": "Find Bugs",
		"description": "Perform rigorous testing and find at least 5 bugs in the room-inator project",
		"reward": 200,
		"energy": 3,
		"participants": 20,
		"status": "In progress",
		"questgiver": "Anu Shibin Joseph Raj"
	},
	{
		"id": "Q2",
		"name": "Add Docs",
		"description": "Add documentation for the room-inator project",
		"reward": 100,
		"energy": 1,
		"participants": 5,
		"status": "In progress",
		"questgiver": "Anu Shibin Joseph Raj"
	},
	{
		"id": "Q3",
		"name": "Implement Feature",
		"description": "Implement Issue#21 of the room-inator project",
		"reward": 300,
		"energy": 5,
		"participants": 50,
		"status": "Completed",
		"questgiver": "Anu Shibin Joseph Raj"
	}
]
```

#### Get a Quests by ID

```
GET /api/v1/quests/Q1
```

```json
{
	"id": "Q1",
	"name": "Find Bugs",
	"description": "Perform rigorous testing and find at least 5 bugs in the room-inator project",
	"reward": 200,
	"energy": 3,
	"participants": 20,
	"status": "In progress",
	"questgiver": "Anu Shibin Joseph Raj"
}
```
