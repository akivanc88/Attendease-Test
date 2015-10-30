# ProcessAttendees

Technology Used: Node.JS, JavaScript.
Node.js required to run this application

    To run the codes please follow the instruction below



$ cd /path/to/the/source
$ node run.js

OR

run ./process_attendees

Task
1. The program has to run execute when running `./process_attendees`
2. The program has to generate a file called: valid_attendees.json
Select only the valid attendees (all attendees with unique and correct email addresses)
Format the result in a json document of the following format
- array of attendees
  - first_name
  - last_name
  - email
  - phone_number (formatted "(xxx) xxx xxxx", no country code)
3. The program has to generate a file called invalid_attendees.txt
Select only the invalid attendees (all attendees with duplicated or incorrect email addresses)
Format the result in a txt document, each line being an attendee
Last name – First name  – email – phone number (as is)



