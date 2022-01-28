# Exercise 1: Normalization

## Questions

### 1. What columns violates 1NF?

- `food_code` and `food_description` violate the rule that all columns must have single value (atomic). Also `dinner_date` seems to be using different formatting types.

- There are duplicate entries that can be removed and replaced by a primary key in `member_id`, `dinner_id` , `venue_code` and `food_code`.

### 2. What entities do you recognize that could be extracted?

Member, dinner, venue and food.

### 3. Name all the tables and columns that would make a 3NF compliant solution.

Tables:

<!-- See dinner_club.sql for table layout -->

- Members: `id`, `name`, `address`.
- Dinners: `id`, `date`, `venue_id`.
- Orders: `id`, `member_id`, `dinner_id`, `food_id` (junction table for orders where member_id + dinner_id can server as an unique order id if only one order is permitted).
- Venues: `id`, `description`.
- Food: `id`, `description`.
