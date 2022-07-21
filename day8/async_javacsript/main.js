const contacts = [
  { name: "Jacques", number: "1234567890" },
  { name: "Michelle", number: "8974561287" },
];

function printContacts() {
  let html = "<ul>";
  for (let contact of contacts) {
    html += "<li>" + contact.name + "</li>";
  }
  html += "</ul>";
  document.body.innerHTML = html;
}

function addContact(contact) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        contacts.push(contact);
        resolve();
      } else {
        reject(new Error("something went wrong"));
      }
    }, 2000);
  });
}

printContacts();
const newContact = {
  name: "Mitchell",
  number: "7893524984231",
};

async function init() {
  try {
    await addContact(newContact);
    printContacts();
  } catch (err) {
    console.log(err);
  }
}

init();

// const promise = addContact(newContact);

// promise.then(() => {
//   console.log("printed")
//   printContacts();
// }).catch((err) => {
//   console.log(err)
// }).finally(() => {
//   console.log("finally")
// })
