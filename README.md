[<img src="assets/BB_Logo_Wordmark_RGB_HorizontalWhite.jpg" style="display: block; margin: 0 auto; width: clamp(300px, 37.5%, 600px" />](assets/BB_Logo_Wordmark_RGB_HorizontalWhite.jpg)

# Instructions

Build a schedule search results page for the following students using `schedule_response.json`.

Complete the required functionality, and at least one of the optional functionality items.

A backend is **NOT** required for this solution. At Big Blue we use Vue+Typescript for our current frontend applications; feel free to use any frontend tools/frameworks you are comfortable using.

```json
{
  "students": [
    {
      "first_name": "First",
      "last_name": "Kinder",
      "instructor_gender": "Any",
      "id": 40057,
      "level_id": 18
    },
    {
      "first_name": "Second",
      "last_name": "Kinder",
      "instructor_gender": "Any",
      "id": 40831,
      "level_id": 9
    }
  ]
}
```

## Required Functionality

1. As a user, I would like the schedule search results to be provided in an easy to read list, so that I am able to easily see what day/times are available for my kids. _(See Examples)_

1. As a user, I would like to click on a search result item, so that the associated lessons will be added to my cart.

1. As a user, I would like remove lessons from my cart, so that I can my mind about which lessons I want to purchase.

## Optional Functionality

- As a user, I would like to avoid duplicating lessons in my cart, so I am not buying something that I don't need.

- As a user, I would like to see the details of the lessons being offered in a day/time search result prior to adding them to my cart (indicating lessons currently already in the cart), so I have more information about what I'm selecting.

- As a user, I would like the ability to filter the schedule search results based on one or more of the following items, so that I can easily narrow down the results.
  - Day(s) of the week
  - Time Range: Morning 8-12, Afternoon 12-4, Evening 4-9
  - Instructor gender preference from a student _(Only time blocks which include a lesson for both students after the filter is applied should be visible)_

## Example

_NOTE: Minimal styling is sufficient. The following screenshots are not required to be duplicated, these are only provided for context._

[<img src="assets/desktop.png" style="display: block; margin: 2rem auto 0 auto; width: clamp(300px, 75%, 600px" />](assets/desktop.png)

<p style="text-align: center;">Desktop Layout</p>

[<img src="assets/mobile.png" style="display: block; margin: 2rem auto 0 auto; width: clamp(300px, 75%, 600px" />](assets/mobile.png)

<p style="text-align: center;">Mobile Layout</p>

<div style="margin-top: 5rem; text-align:center">
  <img src="assets/vue.svg" style="margin: 0 2rem;" width="75px" />
  <img src="assets/typescript.svg" style="margin: 0 2rem;" width="75px" />
</div>
