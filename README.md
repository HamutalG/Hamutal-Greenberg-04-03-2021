# Shopping Organizer Web Application

#### React.js - Redux

A web application that was created in order to organize various products bought online.  
The user has the ability to add a product, along with its details (online store, quantity, price and ETA).
The user also has the option to view the added products grouped by store, as well as an option to mark the product as "received" (and view the received items separately).

The project is a frontend application using:

- React.js
  - create-react-app
  - Redux
  - Hooks
  - React Router
  - and more...

#### Extras

- The homepage displays the 'bought items' list as 2 individual tabs:
  - The first tab is the Items List:
    - The items are displayed according to their estimated delivery date.
    - The items are displayed with all their added details:
      - Product name
      - Online store name that the item was purchased from
      - Quantity
      - Price
      - Estimated delivery date
      - The user has the option to mark each individual item as a "received item"
    - The user has the option to select a different currency in order to view the prices of each of the items in real-time conversion (sets updated conversion rate every 10 minutes).
    - There is a counter displaying the total amount of products bought.
  - The second tab is the Stores List, displaying the bought items grouped by stores.
    - Each store displays the name of the store and the total products bought from that store.
    - There is an option to view a list of the bought items by their names.
  - From the homepage, the user is able to add items by clicking the 'Add Item' button:
    - In order to add an item, all fields must be filled in and there is no option to add a negative quantity or price.
    - The price is in USD and is displayed as a float amount limited to 2 decimal places.
  - The homepage displays a button that routes the user to a separate page in order to view the "received items" list.
    - There is an option to delete each individual received item.

#### Installation:

This project requires a source code editor, I used [Visual Studio Code](https://code.visualstudio.com/), to run the following:

- [React.js](https://reactjs.org/):

  > "A JavaScript library for building user interfaces"

- Be sure to install the node_modules:

```sh
npm install
```

- In order to run the application (I ran it on "localhost: 3000", a default port):

```sh
npm start
```

#### Enjoy!
