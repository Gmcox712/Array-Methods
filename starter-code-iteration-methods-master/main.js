// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)

const active = users.filter(user => user.isActive === true)
printKata(1, active)

const email = users.map(user => user.email)
printKata(2, email)

const company = users.some(user => user.company === "OVATION")
printKata(3, company)

const age = users.find(user => user.age > 38)
printKata(4, age)

const oldActive = users.filter(user => user.age >= 38).find(user => user.isActive === true)
printKata(5, oldActive)

const balance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6, balance)

const fugiat = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
printKata(7, fugiat)