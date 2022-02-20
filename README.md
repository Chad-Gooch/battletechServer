HBS - BattleTech - by: Chad Gooch

made for Eleven Fifty Red Badge final project

This web application is created as a companion to the game Battletech published by Hairbrained Schemes.  It is also a test in data density stored at a database.

Instead of creating a new column in the database for each individual piece of data, it uses variable and fixed length arrays to increase density saving network bandwidth as well as database size. 

The data is saved in 3 tables.

The user table contains the "collection" which is a variable length array that contains the primary keys of the Mech Table.  It also contains 4 Mech arrays.  Each of the mech arrays are 55 values long with a meaning based on its location.
index: 0        primary key from the Mech database.(indicating selected mech)
index: 1-49     primary key from the Wpn database.(indicating equipment at location on mech)
index: 50-54    calculated values based on the equipment in index 1-49(calculated based on values from Wpn database of the primary keys)

The Mech table contains several locations, each location is an array with 4 datapoints.
index: 0        number of items from the Wpn array with a "type" of "ballistic" allowed at that location on the mech.
index: 1        number of items from the Wpn array with a "type" of "energy" allowed at that location on the mech.
index: 2        number of items from the Wpn array with a "type" of "missile" allowed at that location on the mech.
index: 3        number of items from the Wpn array with a "type" of "support" allowed at that location on the mech.

The Controller has 3 primary endpoints.
/user   contains all endpoints that read or write to the User Database.
/mech   contains all endpoints that read or write to the Mech Database.
/wpn    contains all endpoints that read or write to the Wpn Database.