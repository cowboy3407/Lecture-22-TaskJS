const eventData = {
    "id": "e526ff35-f1a6-48a4-95f8-5d1c29581b28",
    "categoryId": "201171e2-8a78-4e15-a80e-2837c3c5abca",
    "title": "Small Granite Pizza",
    "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    "location": "New Robertobury",
    "latitude": "17.6991",
    "longitude": "-85.9319",
    "startsAtUtc": "2025-11-17T15:01:51.828486Z",
    "endsAtUtc": "2025-11-19T15:01:51.828505Z",
    "ticketTypes": [
      {
        "ticketTypeId": "c6f66749-15a4-4519-bca1-adfa3e55c386",
        "name": "Basket 1",
        "price": 70,
        "currency": "GEL",
        "quantity": 150
      },
      {
        "ticketTypeId": "bb3093a9-6b4c-4225-8ed6-fa514b860014",
        "name": "Basket 2",
        "price": 140,
        "currency": "GEL",
        "quantity": 300
      },
      {
        "ticketTypeId": "795eabbb-2f4e-42e5-aa35-231f84cce0b1",
        "name": "Basket 3",
        "price": 210,
        "currency": "GEL",
        "quantity": 450
      }
    ],
    "lineUps": [
      {
        "lineUpId": "7a0f89ae-9ed6-4d98-a596-84aefc6cdcf6",
        "name": "Kendrick Lamar",
        "startDate": "2025-11-17T15:01:58.142194Z",
        "endDate": "2025-11-17T17:01:58.142195Z",
        "genre": "Pop",
        "description": "Jazz"
      },
      {
        "lineUpId": "4d0ae57d-1c0d-4f2b-81ea-4bb6444a2f07",
        "name": "Method Man",
        "startDate": "2025-11-17T15:01:58.305345Z",
        "endDate": "2025-11-17T17:01:58.305346Z",
        "genre": "Non Music",
        "description": "World"
      }
    ],
    "participants": [
      {
        "participantId": "7a0f89ae-9ed6-4d98-a596-84aefc6cdcf6",
        "name": "Kendrick Lamar",
        "role": "Singer",
        "mediaUrlCode": "artist/2YZyLoL8N0Wb9xBt1NhZWg",
        "image": {
          "imageId": "41802e06-c836-421a-b690-712cd26b7897",
          "url": "https://picsum.photos/640/480/?image=960"
        }
      },
      {
        "participantId": "4d0ae57d-1c0d-4f2b-81ea-4bb6444a2f07",
        "name": "Method Man",
        "role": "Singer",
        "mediaUrlCode": "album/0Y2ArrqJQ8WuUA5tetAkZi",
        "image": {
          "imageId": "62eaa301-9aba-428f-a23f-f2adc3ef51e5",
          "url": "https://picsum.photos/640/480/?image=873"
        }
      }
    ]
  };
  
function basket1Price() {
    for (let i = 0; i < eventData.ticketTypes.length; i++) {
      if (eventData.ticketTypes[i].name === "Basket 1") {
        return eventData.ticketTypes[i].price;
      }
    }
    return "Ticket not found";
  }
  
  console.log("Price of Basket 1 Ticket:", basket1Price());

function eventStartDate () {
    eventData.startsAtUtc;
}

console.log("Event Starts Date:", eventStartDate());

function newTicket () {
    eventData.ticketTypes.push( {
        "ticketTypeId": "blablablameowmeow",
        "name": "Basket 9",
        "price": 300,
        "currency": "GEL",
        "quantity": 500
    })
}

newTicket();
console.log('New Type Of Ticket', eventData.ticketTypes);

function deleteLastTicket () {
    eventData.ticketTypes.pop();
}

deleteLastTicket();
console.log('Updatet ticket orders', eventData.ticketTypes);

function allTicketList () {
    return eventData.ticketTypes.map(ticket => ticket.name);
}

console.log('Tickets Left',allTicketList());


function expensiveTickets () {
    return eventData.ticketTypes.filter(ticket => ticket.price > 100);
}

console.log('Cost More Than 100GEL',expensiveTickets());

function firstParticipiant () {
 return eventData.participants[0].name;
}

console.log('Firs participiant is:',firstParticipiant());


function secondLineUp () {
    return eventData.lineUps[1].genre;
}

console.log('Genre of second lineup is:', secondLineUp());

